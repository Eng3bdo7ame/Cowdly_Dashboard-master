
import { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { FiEye } from "react-icons/fi";
import { FiEdit3, FiTrash2 } from 'react-icons/fi';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

export default function Table({ openCreate, tableHeader = [], tableData = [], formType }) {
    const dropdownRefs = useRef({});
    const [selectedHotelId, setSelectedHotelId] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");

    const itemsPerPage = 10;
    const totalPages = 10;

    const currentSet = useMemo(() => {
        if (totalPages <= 6) {
            return Array.from({ length: totalPages }, (_, i) => i + 1);
        }
        const startPage = Math.floor((currentPage - 1) / 6) * 6 + 1;
        return Array.from({ length: 6 }, (_, i) => startPage + i).filter(page => page <= totalPages);
    }, [currentPage, totalPages]);

    const handleClickOutside = useCallback((event) => {
        if (selectedHotelId !== null) {
            const dropdown = dropdownRefs.current[selectedHotelId];
            if (dropdown && !dropdown.contains(event.target) && !event.target.classList.contains("view-button")) {
                setSelectedHotelId(null);
            }
        }
    }, [selectedHotelId]);

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, [handleClickOutside]);

    const toggleEditDropdown = useCallback((hotelId) => {
        setSelectedHotelId((prevHotelId) => (prevHotelId === hotelId ? null : hotelId));
    }, []);

    const handleSearchChange = useCallback((event) => {
        setSearchTerm(event.target.value);
    }, []);

    const paginate = useCallback((pageNumber) => {
        setCurrentPage(pageNumber);
    }, []);



    return (
        <div id="wrapper">
            <div id="page">
                <div className="layout-wrap">
                    <div className="main-content">
                        <div className="main-content-inner">
                            <div className="main-content-wrap">
                                <div className="wg-box">
                                    <div className="flex items-center justify-between gap10 flex-wrap">
                                        <div className="wg-filter flex-grow">
                                            <form className="form-search">
                                                <fieldset className="name">
                                                    <input type="text" placeholder="Search here..." name="name" />
                                                </fieldset>
                                                <div className="button-submit">
                                                    <button type="submit"><i className="icon-search"></i></button>
                                                </div>
                                            </form>
                                        </div>
                                        <button onClick={() => openCreate(formType)} className="tf-button style-1 w208">
                                            Add New
                                        </button>
                                    </div>
                                    <div className="wg-table table-product-list">
                                        <ul className="  flex justify-between  mb-14">
                                            {tableHeader.length > 0 ? (
                                                tableHeader.map((header, index) => (
                                                    <li key={index}>
                                                        <div className="body-title">{header}</div>
                                                    </li>
                                                ))
                                            ) : (
                                                <li>
                                                    <div className="body-title">No headers available</div>
                                                </li>
                                            )}
                                        </ul>
                                        <ul className="flex flex-column p-0">
                                            {tableData.length > 0 ? (
                                                tableData.map((data, index) => (
                                                    <li className="product-item gap14" key={index}>
                                                        <div className="flex items-center justify-between gap20 flex-grow">
                                                            {data.map((item, i) => (
                                                                <div key={i} className="body-text">{item}</div>
                                                            ))}
                                                            <div className="list-icon-function">
                                                                <div className="item eye"><FiEye /></div>
                                                                <div className="item edit"><FiEdit3 /></div>
                                                                <div className="item trash"><FiTrash2 /></div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                ))
                                            ) : (
                                                <li>
                                                    <div className="body-text">No data available</div>
                                                </li>
                                            )}
                                        </ul>
                                    </div>
                                    <div className="divider"></div>
                                    <div className="flex items-center justify-between flex-wrap gap10">
                                        <div className="text-tiny">Showing 10 entries</div>
                                        <ul className="wg-pagination">
                                            <li><a href="#"><FaAngleLeft /></a></li>
                                            <li><a href="#">1</a></li>
                                            <li className="active"><a href="#">2</a></li>
                                            <li><a href="#">3</a></li>
                                            <li><a href="#"><FaAngleRight /></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bottom-page">
                            <div className="body-text">Copyright © 2024 Remos. Design with</div>
                            <i className="icon-heart"></i>
                            <div className="body-text">by <a href="https://themeforest.net/user/themesflat/portfolio">Themesflat</a> All rights reserved.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
