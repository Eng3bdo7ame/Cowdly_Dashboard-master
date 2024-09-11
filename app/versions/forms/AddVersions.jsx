'use client';
import { useState, useCallback } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { X } from "@phosphor-icons/react";
import FormFieldset from "../../../components/form/FormFieldset";
import FormTextArea from "../../../components/form/FormTextArea";
import FormSelect from "../../../components/form/FormSelect";


const AddVersions = ({ closeModal, role, modal }) => {
    const [formData, setFormData] = useState({
        ClientName: "",
        phoneNumber: "",
        address: "",
        email: "",
    });

    const today = new Date(); // Current date
    const [startDate, setStartDate] = useState(today);
    const [endDate, setEndDate] = useState(today);

    const handleChangeStartDate = (date) => {
        if (date && date > endDate) {
            setEndDate(date); // Update end date if it's earlier than the start date
        }
        setStartDate(date);
    };

    const handleChangeEndDate = (date) => {
        if (date && date < startDate) {
            setStartDate(date); // Update start date if it's later than the end date
        }
        setEndDate(date);
    };

    const calculateDateDifference = (start, end) => {
        if (!start || !end) return { months: 0, days: 0 };

        const startDate = new Date(start);
        const endDate = new Date(end);

        const yearsDifference = endDate.getFullYear() - startDate.getFullYear();
        const monthsDifference = endDate.getMonth() - startDate.getMonth();
        const daysDifference = endDate.getDate() - startDate.getDate();

        const totalMonths = yearsDifference * 12 + monthsDifference;
        const totalDays = daysDifference + (monthsDifference * 30); // Approximate days calculation

        return { months: totalMonths, days: totalDays };
    };

    const { months, days } = calculateDateDifference(startDate, endDate);

    const handleChange = useCallback((e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    }, []);

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
                        <form className="form-add-product text-left">
                            {/* Form content */}
                            <FormFieldset
                                label="Version Name"
                                type={"text"}
                                name="versionName"
                                onChange={handleChange}
                                placeholder={"Enter Version Name"}
                            />
                            <FormFieldset
                                label="Version Cost"
                                type={"text"}
                                name="versionCost"
                                onChange={handleChange}
                                placeholder={"Enter Version Cost"}
                            />

                            <FormSelect label="Project Team " name="projectManager"
                                // value={formData.ClientName} 
                                onChange={handleChange} placeholder={"Enter Project Manager"} />

                            <FormSelect label="Project " name="projectManager"
                                // value={formData.ClientName} 
                                onChange={handleChange} placeholder={"Enter Project Manager"} />

                            <div className="date-group">
                                <div className="gap-5">
                                    <div className="flex gap-4 items-center">
                                        <label className="body-title mb-10">
                                            Start Date <span className="tf-color-1">*</span>
                                            <DatePicker
                                                selected={startDate}
                                                onChange={handleChangeStartDate}
                                                minDate={today}
                                                className="inputDate"
                                            />
                                        </label>

                                        <FormFieldset
                                            label="Duration  Days"
                                            type={"text"}
                                            name="Duration"
                                            onChange={handleChange}
                                            placeholder={"Enter Duration"}
                                        />
                                    </div>
                                </div>

                            </div>

                            <FormTextArea
                                label="Project Description"
                                name="Description"
                                onChange={handleChange}
                                placeholder={"Enter Project Description"}
                            />

                            <button className="tf-button style-1 w208" href="">
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
