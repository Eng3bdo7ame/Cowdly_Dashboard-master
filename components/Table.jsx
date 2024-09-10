import { useState, useRef, useEffect, useCallback, useMemo } from 'react';
// import { CaretLeft, CaretRight, Eye, Plus, MagnifyingGlass } from '@phosphor-icons/react';
import Image from 'next/image';
import { FiEye } from "react-icons/fi";
import { FiEdit3, FiTrash2 } from 'react-icons/fi';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import Link from 'next/link';

export default function Table({ openCreate }) {
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
            <div id="page" class="">
                <div class="layout-wrap">

                    <div class="main-content">
                        <div class="main-content-inner">
                            <div class="main-content-wrap">


                                <div class="wg-box">

                                    <div class="flex items-center justify-between gap10 flex-wrap">
                                        <div class="wg-filter flex-grow">

                                            <form class="form-search">
                                                <fieldset class="name">
                                                    <input type="text" placeholder="Search here..." class="" name="name" tabindex="2" value="" aria-required="true" required="" />
                                                </fieldset>
                                                <div class="button-submit">
                                                    <button class="" type="submit"><i class="icon-search"></i></button>
                                                </div>
                                            </form>
                                        </div>
                                        <button
                                            onClick={openCreate}
                                            class="tf-button style-1 w208"
                                        >
                                            Add New
                                        </button>
                                    </div>
                                    <div class="wg-table table-product-list">
                                        <ul class="table-title flex gap20 mb-14">
                                            <li>
                                                <div class="body-title">Product</div>
                                            </li>
                                            <li>
                                                <div class="body-title">Product ID</div>
                                            </li>
                                            <li>
                                                <div class="body-title">Price</div>
                                            </li>
                                            <li>
                                                <div class="body-title">Quantity</div>
                                            </li>
                                            <li>
                                                <div class="body-title">Sale</div>
                                            </li>
                                            <li>
                                                <div class="body-title">Stock</div>
                                            </li>
                                            <li>
                                                <div class="body-title">Start date</div>
                                            </li>
                                            <li>
                                                <div class="body-title">Action</div>
                                            </li>
                                        </ul>
                                        <ul class="flex flex-column">
                                            <li class="product-item gap14">
                                                <div class="flex items-center justify-between gap20 flex-grow">
                                                    <div class="name">
                                                        <a href="product-list.html" class="body-title-2">Dog Food, Chicken & Chicken Liver Recipe...</a>
                                                    </div>
                                                    <div class="body-text">#7712309</div>
                                                    <div class="body-text">$1,452.500</div>
                                                    <div class="body-text">1,638</div>
                                                    <div class="body-text">20</div>
                                                    <div>
                                                        <div class="block-not-available">Out of stock</div>
                                                    </div>
                                                    <div class="body-text">$28,672.36</div>
                                                    <div class="list-icon-function">
                                                        <div class="item eye">
                                                            <FiEye />
                                                        </div>
                                                        <div class="item edit">
                                                            <FiEdit3 />
                                                        </div>
                                                        <div class="item trash">
                                                            <FiTrash2 />
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="product-item gap14">

                                                <div class="flex items-center justify-between gap20 flex-grow">
                                                    <div class="name">
                                                        <a href="product-list.html" class="body-title-2">Grain Free Dry Dog Food | Rachael Ray® Nutrish®</a>
                                                    </div>
                                                    <div class="body-text">#7712309</div>
                                                    <div class="body-text">$1,452.500</div>
                                                    <div class="body-text">1,638</div>
                                                    <div class="body-text">20</div>
                                                    <div>
                                                        <div class="block-not-available">Out of stock</div>
                                                    </div>
                                                    <div class="body-text">$28,672.36</div>
                                                    <div class="list-icon-function">
                                                        <div class="item eye">
                                                            <FiEye />
                                                        </div>
                                                        <div class="item edit">
                                                            <FiEdit3 />
                                                        </div>
                                                        <div class="item trash">
                                                            <FiTrash2 />
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="product-item gap14">

                                                <div class="flex items-center justify-between gap20 flex-grow">
                                                    <div class="name">
                                                        <a href="product-list.html" class="body-title-2">Weruva Pumpkin Patch Up! Pumpkin With Ginger...</a>
                                                    </div>
                                                    <div class="body-text">#7712309</div>
                                                    <div class="body-text">$1,452.500</div>
                                                    <div class="body-text">1,638</div>
                                                    <div class="body-text">20</div>
                                                    <div>
                                                        <div class="block-not-available">Out of stock</div>
                                                    </div>
                                                    <div class="body-text">$28,672.36</div>
                                                    <div class="list-icon-function">
                                                        <div class="item eye">
                                                            <FiEye />
                                                        </div>
                                                        <div class="item edit">
                                                            <FiEdit3 />
                                                        </div>
                                                        <div class="item trash">
                                                            <FiTrash2 />
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="product-item gap14">

                                                <div class="flex items-center justify-between gap20 flex-grow">
                                                    <div class="name">
                                                        <a href="product-list.html" class="body-title-2">Milk-Bone Mini's Flavor Snacks Dog Treats, 15 Ounce </a>
                                                    </div>
                                                    <div class="body-text">#7712309</div>
                                                    <div class="body-text">$1,452.500</div>
                                                    <div class="body-text">1,638</div>
                                                    <div class="body-text">20</div>
                                                    <div>
                                                        <div class="block-not-available">Out of stock</div>
                                                    </div>
                                                    <div class="body-text">$28,672.36</div>
                                                    <div class="list-icon-function">
                                                        <div class="item eye">
                                                            <FiEye />
                                                        </div>
                                                        <div class="item edit">
                                                            <FiEdit3 />
                                                        </div>
                                                        <div class="item trash">
                                                            <FiTrash2 />
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="product-item gap14">

                                                <div class="flex items-center justify-between gap20 flex-grow">
                                                    <div class="name">
                                                        <a href="product-list.html" class="body-title-2">Milk-Bone Mini's Flavor Snacks Dog Treats, 15 Ounce </a>
                                                    </div>
                                                    <div class="body-text">#7712309</div>
                                                    <div class="body-text">$1,452.500</div>
                                                    <div class="body-text">1,638</div>
                                                    <div class="body-text">20</div>
                                                    <div>
                                                        <div class="block-not-available">Out of stock</div>
                                                    </div>
                                                    <div class="body-text">$28,672.36</div>
                                                    <div class="list-icon-function">
                                                        <div class="item eye">
                                                            <FiEye />
                                                        </div>
                                                        <div class="item edit">
                                                            <FiEdit3 />
                                                        </div>
                                                        <div class="item trash">
                                                            <FiTrash2 />
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="product-item gap14">

                                                <div class="flex items-center justify-between gap20 flex-grow">
                                                    <div class="name">
                                                        <a href="product-list.html" class="body-title-2">Weruva Pumpkin Patch Up! Dog & Cat Food...</a>
                                                    </div>
                                                    <div class="body-text">#7712309</div>
                                                    <div class="body-text">$1,452.500</div>
                                                    <div class="body-text">1,638</div>
                                                    <div class="body-text">20</div>
                                                    <div>
                                                        <div class="block-not-available">Out of stock</div>
                                                    </div>
                                                    <div class="body-text">$28,672.36</div>
                                                    <div class="list-icon-function">
                                                        <div class="item eye">
                                                            <FiEye />
                                                        </div>
                                                        <div class="item edit">
                                                            <FiEdit3 />
                                                        </div>
                                                        <div class="item trash">
                                                            <FiTrash2 />
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="product-item gap14">

                                                <div class="flex items-center justify-between gap20 flex-grow">
                                                    <div class="name">
                                                        <a href="product-list.html" class="body-title-2">Kristin Watson</a>
                                                    </div>
                                                    <div class="body-text">#7712309</div>
                                                    <div class="body-text">$1,452.500</div>
                                                    <div class="body-text">1,638</div>
                                                    <div class="body-text">20</div>
                                                    <div>
                                                        <div class="block-not-available">Out of stock</div>
                                                    </div>
                                                    <div class="body-text">$28,672.36</div>
                                                    <div class="list-icon-function">
                                                        <div class="item eye">
                                                            <FiEye />
                                                        </div>
                                                        <div class="item edit">
                                                            <FiEdit3 />
                                                        </div>
                                                        <div class="item trash">
                                                            <FiTrash2 />
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="product-item gap14">

                                                <div class="flex items-center justify-between gap20 flex-grow">
                                                    <div class="name">
                                                        <a href="product-list.html" class="body-title-2">Kristin Watson</a>
                                                    </div>
                                                    <div class="body-text">#7712309</div>
                                                    <div class="body-text">$1,452.500</div>
                                                    <div class="body-text">1,638</div>
                                                    <div class="body-text">20</div>
                                                    <div>
                                                        <div class="block-not-available">Out of stock</div>
                                                    </div>
                                                    <div class="body-text">$28,672.36</div>
                                                    <div class="list-icon-function">
                                                        <div class="item eye">
                                                            <FiEye />
                                                        </div>
                                                        <div class="item edit">
                                                            <FiEdit3 />
                                                        </div>
                                                        <div class="item trash">
                                                            <FiTrash2 />
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="product-item gap14">

                                                <div class="flex items-center justify-between gap20 flex-grow">
                                                    <div class="name">
                                                        <a href="product-list.html" class="body-title-2">Kristin Watson</a>
                                                    </div>
                                                    <div class="body-text">#7712309</div>
                                                    <div class="body-text">$1,452.500</div>
                                                    <div class="body-text">1,638</div>
                                                    <div class="body-text">20</div>
                                                    <div>
                                                        <div class="block-not-available">Out of stock</div>
                                                    </div>
                                                    <div class="body-text">$28,672.36</div>
                                                    <div class="list-icon-function">
                                                        <div class="item eye">
                                                            <FiEye />
                                                        </div>
                                                        <div class="item edit">
                                                            <FiEdit3 />
                                                        </div>
                                                        <div class="item trash">
                                                            <FiTrash2 />
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="product-item gap14">

                                                <div class="flex items-center justify-between gap20 flex-grow">
                                                    <div class="name">
                                                        <a href="product-list.html" class="body-title-2">Kristin Watson</a>
                                                    </div>
                                                    <div class="body-text">#7712309</div>
                                                    <div class="body-text">$1,452.500</div>
                                                    <div class="body-text">1,638</div>
                                                    <div class="body-text">20</div>
                                                    <div>
                                                        <div class="block-not-available">Out of stock</div>
                                                    </div>
                                                    <div class="body-text">$28,672.36</div>
                                                    <div class="list-icon-function">
                                                        <div class="item eye">
                                                            <FiEye />
                                                        </div>
                                                        <div class="item edit">
                                                            <FiEdit3 />
                                                        </div>
                                                        <div class="item trash">
                                                            <FiTrash2 />
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="divider"></div>
                                    <div class="flex items-center justify-between flex-wrap gap10">
                                        <div class="text-tiny">Showing 10 entries</div>
                                        <ul class="wg-pagination">
                                            <li>
                                                <a href="#"><FaAngleLeft /></a>
                                            </li>
                                            <li>
                                                <a href="#">1</a>
                                            </li>
                                            <li class="active">
                                                <a href="#">2</a>
                                            </li>
                                            <li>
                                                <a href="#">3</a>
                                            </li>
                                            <li>
                                                <a href="#"><FaAngleRight /></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="bottom-page">
                            <div class="body-text">Copyright © 2024 Remos. Design with</div>
                            <i class="icon-heart"></i>
                            <div class="body-text">by <a href="https://themeforest.net/user/themesflat/portfolio">Themesflat</a> All rights reserved.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
