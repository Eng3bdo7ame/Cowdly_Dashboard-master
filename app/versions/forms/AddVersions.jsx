'use client';
import { useState, useCallback } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { X } from "@phosphor-icons/react";
import FormFieldset from "../../../components/form/FormFieldset";
import FormTextArea from "../../../components/form/FormTextArea";
import FormSelect from "../../../components/form/FormSelect";
import axios from 'axios';
import Cookies from "js-cookie";

const AddVersions = ({ closeModal, role, modal }) => {
    const [formData, setFormData] = useState({
        name: "",
        budget: "",
        start_date: new Date(),
        duration: "",
        end_date: new Date(),
        project: "",
    });

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const handleChangeStartDate = (date) => {
        if (date && date > endDate) {
            setEndDate(date); // Update end date if it's earlier than the start date
        }
        setStartDate(date);
        setFormData(prevData => ({ ...prevData, start_date: date }));
    };

    const handleChangeEndDate = (date) => {
        if (date && date < startDate) {
            setStartDate(date); // Update start date if it's later than the end date
        }
        setEndDate(date);
        setFormData(prevData => ({ ...prevData, end_date: date }));
    };

    const handleChange = useCallback((e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const token = Cookies.get("token");
        if (!token) {
            console.error("No token found");
            return;
        }

        try {
            await axios.post('https://dashboard.cowdly.com/api/project_versions/', formData, {
                headers: {
                    'Authorization': `token ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            closeModal(); 
        } catch (error) {
            console.error('Error submitting form:', error.response ? error.response.data : error.message);
        }
    };

    const handleBackgroundClick = useCallback((e) => {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    }, [closeModal]);

    return (
        <div
            onClick={handleBackgroundClick}
            id="createStudent"
            className={`createStudent overflow-y-auto overflow-x-hidden duration-200 ease-linear
                shadow-2xl shadow-slate-500 
                backdrop-blur-sm backdrop-saturate-[180%]
                dark:shadow-white/[0.10] dark:backdrop-blur-sm dark:backdrop-saturate-[180%] 
                fixed top-0 left-0 z-50 justify-center items-center
                w-full h-full ${modal ? "visible" : "invisible"}`}
        >
            <div
                style={{
                    boxShadow: "black 19px 0px 45px -12px",
                }}
                className={`rounded-l-[15px] p-4 w-full max-w-[55rem] pb-10 bg-white
                    dark:bg-gray-800 rounded-r-lg duration-200 ease-linear
                    ${modal ? "fixed right-0" : "absolute -left-full"}
                    h-screen overflow-auto`}
                dir="rtl"
            >
                <div className="relative p-4 bg-white dark:bg-gray-800 sm:p-5">
                    <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600 shadow-md shadow-gray-300/10">
                        <button
                            type="button"
                            onClick={closeModal}
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            <X size={18} weight="bold" />
                            <span className="sr-only">Close modal</span>
                        </button>
                        <h2>Add Versions</h2>
                    </div>
                    <div className="main-content-wrap mt-5">
                        <form className="form-add-product text-left" onSubmit={handleSubmit}>
                            {/* Form content */}
                            <FormFieldset
                                label="Version Name"
                                type={"text"}
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder={"Enter Version Name"}
                            />
                            <FormFieldset
                                label="Version Cost"
                                type={"text"}
                                name="budget"
                                value={formData.budget}
                                onChange={handleChange}
                                placeholder={"Enter Version Cost"}
                            />

                            <FormSelect label="Project Team" name="project"
                                value={formData.project}
                                onChange={handleChange}
                                placeholder={"Select Project Team"}
                            />

                            <div className="date-group">
                                <div className="gap-5">
                                    <div className="flex gap-4 items-center">
                                        <label className="body-title mb-10">
                                            Start Date <span className="tf-color-1">*</span>
                                            <DatePicker
                                                selected={startDate}
                                                onChange={handleChangeStartDate}
                                                minDate={new Date()}
                                                className="inputDate"
                                            />
                                        </label>

                                        <label className="body-title mb-10">
                                            End Date <span className="tf-color-1">*</span>
                                            <DatePicker
                                                selected={endDate}
                                                onChange={handleChangeEndDate}
                                                minDate={startDate}
                                                className="inputDate"
                                            />
                                        </label>

                                        <FormFieldset
                                            label="Duration Days"
                                            type={"text"}
                                            name="duration"
                                            value={formData.duration}
                                            onChange={handleChange}
                                            placeholder={"Enter Duration"}
                                        />
                                    </div>
                                </div>

                            </div>

                            <FormTextArea
                                label="Project Description"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                placeholder={"Enter Project Description"}
                            />

                            <button className="tf-button style-1 w208" type="submit">
                                <i className="icon-plus"></i>Add New
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddVersions;
