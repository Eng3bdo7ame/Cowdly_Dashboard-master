"use client"
import React from 'react'
import { CiSearch } from "react-icons/ci";
import { FaRegMoon } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { FiMaximize } from "react-icons/fi";
import { CiGrid41 } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { FaIndent } from "react-icons/fa";
import { useState } from 'react';



export default function Header() {
    const [isDropdownOpenMessage, setIsDropdownOpenMessage] = useState(false);
    const [isDropdownOpenNotification, setIsDropdownOpenNotification] = useState(false);

    const toggleDropdownMessage = () => {
        setIsDropdownOpenMessage(!isDropdownOpenMessage);
    };

    const toggleDropdownNotification = () => {
        setIsDropdownOpenNotification(!isDropdownOpenNotification);
    };
    return (

        <div className="flex">
            <div className={`header-dashboard transition-all duration-300`}>
                <div className="wrap">
                    <div className="header-left">
                        <form className="form-search flex-grow">
                            <fieldset className="name">
                                <input
                                    type="text"
                                    placeholder="Search here..."
                                    className="show-search"
                                    name="name"
                                    tabIndex="2"
                                    aria-required="true"
                                    required
                                />
                            </fieldset>
                            <div className="button-submit">
                                <button type="submit">
                                    <CiSearch />
                                </button>
                            </div>
                            <div className="box-content-search" id="box-content-search">
                                <ul class="mb-24">
                                    <li class="mb-14">
                                        <div class="body-title">Top selling product</div>
                                    </li>
                                    <li class="mb-14">
                                        <div class="divider"></div>
                                    </li>
                                    <li>
                                        <ul>
                                            <li class="product-item gap14 mb-10">
                                                <div class="image no-bg">
                                                    <img src="images/products/17.png" alt="" />
                                                </div>
                                                <div
                                                    class="flex items-center justify-between gap20 flex-grow">
                                                    <div class="name">
                                                        <a href="product-list.html" class="body-text"
                                                        >Dog Food Rachael Ray Nutrish®</a
                                                        >
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="mb-10">
                                                <div class="divider"></div>
                                            </li>
                                            <li class="product-item gap14 mb-10">
                                                <div class="image no-bg">
                                                    <img src="images/products/18.png" alt="" />
                                                </div>
                                                <div
                                                    class="flex items-center justify-between gap20 flex-grow">
                                                    <div class="name">
                                                        <a href="product-list.html" class="body-text"
                                                        >Natural Dog Food Healthy Dog Food</a
                                                        >
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="mb-10">
                                                <div class="divider"></div>
                                            </li>
                                            <li class="product-item gap14">
                                                <div class="image no-bg">
                                                    <img src="images/products/19.png" alt="" />
                                                </div>
                                                <div
                                                    class="flex items-center justify-between gap20 flex-grow">
                                                    <div class="name">
                                                        <a href="product-list.html" class="body-text"
                                                        >Freshpet Healthy Dog Food and Cat</a
                                                        >
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                                <ul class="">
                                    <li class="mb-14">
                                        <div class="body-title">Order product</div>
                                    </li>
                                    <li class="mb-14">
                                        <div class="divider"></div>
                                    </li>
                                    <li>
                                        <ul>
                                            <li class="product-item gap14 mb-10">
                                                <div class="image no-bg">
                                                    <img src="images/products/20.png" alt="" />
                                                </div>
                                                <div
                                                    class="flex items-center justify-between gap20 flex-grow">
                                                    <div class="name">
                                                        <a href="product-list.html" class="body-text"
                                                        >Sojos Crunchy Natural Grain Free...</a
                                                        >
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="mb-10">
                                                <div class="divider"></div>
                                            </li>
                                            <li class="product-item gap14 mb-10">
                                                <div class="image no-bg">
                                                    <img src="images/products/21.png" alt="" />
                                                </div>
                                                <div
                                                    class="flex items-center justify-between gap20 flex-grow">
                                                    <div class="name">
                                                        <a href="product-list.html" class="body-text"
                                                        >Kristin Watson</a
                                                        >
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="mb-10">
                                                <div class="divider"></div>
                                            </li>
                                            <li class="product-item gap14 mb-10">
                                                <div class="image no-bg">
                                                    <img src="images/products/22.png" alt="" />
                                                </div>
                                                <div
                                                    class="flex items-center justify-between gap20 flex-grow">
                                                    <div class="name">
                                                        <a href="product-list.html" class="body-text"
                                                        >Mega Pumpkin Bone</a
                                                        >
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="mb-10">
                                                <div class="divider"></div>
                                            </li>
                                            <li class="product-item gap14">
                                                <div class="image no-bg">
                                                    <img src="images/products/23.png" alt="" />
                                                </div>
                                                <div
                                                    class="flex items-center justify-between gap20 flex-grow">
                                                    <div class="name">
                                                        <a href="product-list.html" class="body-text"
                                                        >Mega Pumpkin Bone</a
                                                        >
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </form>
                    </div>
                    <div class="header-grid">
                        <div
                            class="flex items-center justify-center w-[36px] h-[36px] rounded-full bg-[rgba(203,213,225,0.3)] flex-shrink-0">
                            <select class="image-select no-text">
                                <option data-thumbnail="images/country/1.png">ENG</option>
                                <option data-thumbnail="images/country/9.png">VIE</option>
                            </select>
                        </div>
                        <div
                            class="flex items-center justify-center w-[36px] h-[36px] rounded-full bg-[rgba(203,213,225,0.3)] button-dark-light">
                            <FaRegMoon />
                        </div>
                        <div class="popup-wrap noti type-header">
                            <div class="dropdown">
                                <button
                                    class="btn btn-secondary dropdown-toggle"
                                    type="button"
                                    id="dropdownMenuButton1"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                    onClick={toggleDropdownMessage}
                                >
                                    <span
                                        class="flex items-center justify-center w-[36px] h-[36px] rounded-full bg-[rgba(203,213,225,0.3)]">
                                        <span class="text-tiny">1</span>
                                        <FaRegBell />
                                    </span>
                                </button>
                                <ul
                                    className={`dropdown-menu-end has-content show  ${isDropdownOpenMessage ? 'dropdown-menu ' : 'hidden'}`}
                                    aria-labelledby="dropdownMenuButton1">
                                    <li>
                                        <h6>Message</h6>
                                    </li>
                                    <li>
                                        <div class="noti-item w-full wg-user active">
                                            <div class="image">
                                                <img src="images/avatar/user-11.png" alt="" />
                                            </div>
                                            <div class="flex-grow">
                                                <div class="flex items-center justify-between">
                                                    <a href="#" class="body-title"
                                                    >Cameron Williamson</a
                                                    >
                                                    <div class="time">10:13 PM</div>
                                                </div>
                                                <div class="text-tiny">Hello?</div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="noti-item w-full wg-user active">
                                            <div class="image">
                                                <img src="images/avatar/user-12.png" alt="" />
                                            </div>
                                            <div class="flex-grow">
                                                <div class="flex items-center justify-between">
                                                    <a href="#" class="body-title">Ralph Edwards</a>
                                                    <div class="time">10:13 PM</div>
                                                </div>
                                                <div class="text-tiny">
                                                    Are you there? interested i this...
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="noti-item w-full wg-user active">
                                            <div class="image">
                                                <img src="images/avatar/user-13.png" alt="" />
                                            </div>
                                            <div class="flex-grow">
                                                <div class="flex items-center justify-between">
                                                    <a href="#" class="body-title">Eleanor Pena</a>
                                                    <div class="time">10:13 PM</div>
                                                </div>
                                                <div class="text-tiny">
                                                    Interested in this loads?
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="noti-item w-full wg-user active">
                                            <div class="image">
                                                <img src="images/avatar/user-11.png" alt="" />
                                            </div>
                                            <div class="flex-grow">
                                                <div class="flex items-center justify-between">
                                                    <a href="#" class="body-title">Jane Cooper</a>
                                                    <div class="time">10:13 PM</div>
                                                </div>
                                                <div class="text-tiny">
                                                    Okay...Do we have a deal?
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <a href="#" class="tf-button w-full">View all</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="popup-wrap message type-header">
                            <div class="dropdown">
                                <button
                                    class="btn btn-secondary dropdown-toggle"
                                    type="button"
                                    id="dropdownMenuButton2"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                    onClick={toggleDropdownNotification}
                                >
                                    <span
                                        class="flex items-center justify-center w-[36px] h-[36px] rounded-full bg-[rgba(203,213,225,0.3)]">
                                        <span class="text-tiny">1</span>
                                        <FaRegMessage />
                                    </span>
                                </button>
                                <ul
                                    className={`dropdown-menu-end has-content show  ${isDropdownOpenNotification ? 'dropdown-menu block' : 'hidden'}`}
                                    aria-labelledby="dropdownMenuButton2">
                                    <li>
                                        <h6>Notifications</h6>
                                    </li>
                                    <li>
                                        <div class="message-item item-1">
                                            <div class="image">
                                                <i class="icon-noti-1"></i>
                                            </div>
                                            <div>
                                                <div class="body-title-2">Discount available</div>
                                                <div class="text-tiny">
                                                    Morbi sapien massa, ultricies at rhoncus at,
                                                    ullamcorper nec diam
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="message-item item-2">
                                            <div class="image">
                                                <i class="icon-noti-2"></i>
                                            </div>
                                            <div>
                                                <div class="body-title-2">
                                                    Account has been verified
                                                </div>
                                                <div class="text-tiny">
                                                    Mauris libero ex, iaculis vitae rhoncus et
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="message-item item-3">
                                            <div class="image">
                                                <i class="icon-noti-3"></i>
                                            </div>
                                            <div>
                                                <div class="body-title-2">
                                                    Order shipped successfully
                                                </div>
                                                <div class="text-tiny">
                                                    Integer aliquam eros nec sollicitudin
                                                    sollicitudin
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="message-item item-4">
                                            <div class="image">
                                                <i class="icon-noti-4"></i>
                                            </div>
                                            <div>
                                                <div class="body-title-2">
                                                    Order pending: <span>ID 305830</span>
                                                </div>
                                                <div class="text-tiny">
                                                    Ultricies at rhoncus at ullamcorper
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <a href="#" class="tf-button w-full">View all</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div
                            class="flex items-center justify-center w-[36px] h-[36px] rounded-full bg-[rgba(203,213,225,0.3)] button-zoom-maximize">
                            <div class="">
                                <FiMaximize />
                            </div>
                        </div>
                        <div class="popup-wrap apps type-header">
                            <div class="dropdown">
                                <button
                                    class="btn btn-secondary dropdown-toggle"
                                    type="button"
                                    id="dropdownMenuButton4"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    <span
                                        class="flex items-center justify-center w-[36px] h-[36px] rounded-full bg-[rgba(203,213,225,0.3)]">
                                        <CiGrid41 />
                                    </span>
                                </button>
                                <ul
                                    class="dropdown-menu dropdown-menu-end has-content"
                                    aria-labelledby="dropdownMenuButton4">
                                    <li>
                                        <h6>Related apps</h6>
                                    </li>
                                    <li>
                                        <ul class="list-apps">
                                            <li class="item">
                                                <div class="image">
                                                    <img src="images/apps/item-1.png" alt="" />
                                                </div>
                                                <a href="#">
                                                    <div class="text-tiny">Photoshop</div>
                                                </a>
                                            </li>
                                            <li class="item">
                                                <div class="image">
                                                    <img src="images/apps/item-2.png" alt="" />
                                                </div>
                                                <a href="#">
                                                    <div class="text-tiny">illustrator</div>
                                                </a>
                                            </li>
                                            <li class="item">
                                                <div class="image">
                                                    <img src="images/apps/item-3.png" alt="" />
                                                </div>
                                                <a href="#">
                                                    <div class="text-tiny">Sheets</div>
                                                </a>
                                            </li>
                                            <li class="item">
                                                <div class="image">
                                                    <img src="images/apps/item-4.png" alt="" />
                                                </div>
                                                <a href="#">
                                                    <div class="text-tiny">Gmail</div>
                                                </a>
                                            </li>
                                            <li class="item">
                                                <div class="image">
                                                    <img src="images/apps/item-5.png" alt="" />
                                                </div>
                                                <a href="#">
                                                    <div class="text-tiny">Messenger</div>
                                                </a>
                                            </li>
                                            <li class="item">
                                                <div class="image">
                                                    <img src="images/apps/item-6.png" alt="" />
                                                </div>
                                                <a href="#">
                                                    <div class="text-tiny">Youtube</div>
                                                </a>
                                            </li>
                                            <li class="item">
                                                <div class="image">
                                                    <img src="images/apps/item-7.png" alt="" />
                                                </div>
                                                <a href="#">
                                                    <div class="text-tiny">Flaticon</div>
                                                </a>
                                            </li>
                                            <li class="item">
                                                <div class="image">
                                                    <img src="images/apps/item-8.png" alt="" />
                                                </div>
                                                <a href="#">
                                                    <div class="text-tiny">Instagram</div>
                                                </a>
                                            </li>
                                            <li class="item">
                                                <div class="image">
                                                    <img src="images/apps/item-9.png" alt="" />
                                                </div>
                                                <a href="#">
                                                    <div class="text-tiny">PDF</div>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#" class="tf-button w-full">View all app</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="popup-wrap user type-header">
                            <div class="dropdown">
                                <button
                                    class="btn btn-secondary dropdown-toggle"
                                    type="button"
                                    id="dropdownMenuButton3"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    <span class="header-user wg-user">
                                        <span class="image">
                                            <img src="https://scontent.fcai20-3.fna.fbcdn.net/v/t39.30808-1/355864430_1702052500240435_6242330857789251298_n.jpg?stp=dst-jpg_s200x200&_nc_cat=100&ccb=1-7&_nc_sid=50d2ac&_nc_eui2=AeHOmenX6mqKBmDNzIcWtOFaZSxGhZJ8n1hlLEaFknyfWDQ--IWHYzA_urtgJqSTn-4B-ge-R6gT-4zZ3Y6lCoiV&_nc_ohc=LTpl_mrTh5YQ7kNvgEwMa3z&_nc_ht=scontent.fcai20-3.fna&oh=00_AYDkI0cEQRYXL_HLhk1w_ZvvoFTAfmm0cJbuht6gJzFlIA&oe=66CD5097" alt="" />
                                        </span>
                                        <span class="flex flex-column">
                                            <span class="body-title mb-2">Kristin Watson</span>
                                            <span class="text-tiny">Admin</span>
                                        </span>
                                    </span>
                                </button>
                                <ul
                                    class="dropdown-menu dropdown-menu-end has-content"
                                    aria-labelledby="dropdownMenuButton3">
                                    <li>
                                        <a href="#" class="user-item">
                                            <div class="icon">
                                                <i class="icon-user"></i>
                                            </div>
                                            <div class="body-title-2">Account</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="user-item">
                                            <div class="icon">
                                                <i class="icon-mail"></i>
                                            </div>
                                            <div class="body-title-2">Inbox</div>
                                            <div class="number">27</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="user-item">
                                            <div class="icon">
                                                <i class="icon-file-text"></i>
                                            </div>
                                            <div class="body-title-2">Taskboard</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="setting.html" class="user-item">
                                            <div class="icon">
                                                <IoSettingsOutline />
                                            </div>
                                            <div class="body-title-2">Setting</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="user-item">
                                            <div class="icon">
                                                <i class="icon-headphones"></i>
                                            </div>
                                            <div class="body-title-2">Support</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="login.html" class="user-item">
                                            <div class="icon">
                                                <i class="icon-log-out"></i>
                                            </div>
                                            <div class="body-title-2">Log out</div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div >


    )
}
