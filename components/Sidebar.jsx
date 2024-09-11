"use client"
import React, { useState } from 'react'
import { IoMdHome } from "react-icons/io";
import { SlBasket } from "react-icons/sl";
import { LuLayers } from "react-icons/lu";
import { FaBox } from "react-icons/fa";
import { FiFilePlus } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { FaTasks } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { MdOutlinePhotoLibrary } from "react-icons/md";
import { AiOutlinePieChart } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { MdHelpOutline } from "react-icons/md";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { FiFacebook } from "react-icons/fi";
import { CiTwitter } from "react-icons/ci";
import { FiLinkedin } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaOutdent } from "react-icons/fa";
import Link from 'next/link';
export default function Sidebar() {
    const SectionKind = [
        {
            name: "Main Home",
            section: [
                {
                    title: "Dashboard",
                    link: "/dashboard",
                    icon: "icon-grid"
                },
            ]
        },
        {
            name: "All page",
            section: [
                {
                    title: "Ecommerce",
                    link: "/ecommerce",
                    icon: "/images/menu-icon/ecommerce.svg",

                },
                {
                    title: "Category",
                    link: "/category",
                    icon: "/images/menu-icon/category.svg",
                },
                {
                    title: "Attributes",
                    link: "/attributes",
                    icon: "/images/menu-icon/category.svg",
                },
                {
                    title: "Order",
                    link: "/attributes",
                    icon: "/images/menu-icon/category.svg",
                },
                {
                    title: "User",
                    link: "/attributes",
                    icon: "/images/menu-icon/category.svg",
                },
                {
                    title: "Roles",
                    link: "/attributes",
                    icon: "/images/menu-icon/category.svg",
                },
                {
                    title: "Gallery",
                    link: "/attributes",
                    icon: "/images/menu-icon/category.svg",
                },
                {
                    title: "Report",
                    link: "/attributes",
                    icon: "/images/menu-icon/category.svg",
                },

            ]
        },

        {
            name: "Setting",
            section: [
                {
                    title: "Location",
                    link: "/location",
                    icon: "/images/menu-icon/Location.svg",

                },
                {
                    title: "Setting",
                    link: "/setting",
                    icon: "/images/menu-icon/Setting.svg",
                },
                {
                    title: "Pages",
                    link: "/sages",
                    icon: "/images/menu-icon/Pages.svg",
                },
            ]
        },

        {
            name: "Components",
            section: [
                {
                    title: "Components",
                    link: "/components",
                    icon: "/images/menu-icon/Components.svg",
                }
            ]
        },
        {
            name: "Support",
            section: [
                {
                    title: "Help center",
                    link: "/help-center",
                    icon: "/images/menu-icon/Help.svg",
                },
                {
                    title: "FAQs",
                    link: "/faqs",
                    icon: "/images/menu-icon/FAQs.svg",
                },
                {
                    title: "Privacy policy",
                    link: "/privacy-policy",
                    icon: "/images/menu-icon/Privacy.svg",
                },
            ]
        },
    ];



    return (

        <div className={`wrapper transition-all duration-300`} id="wrapper">
            <div className="" id="page">
                <div className="layout-wrap">
                    <div className="section-menu-left">
                        <div className="box-logo">
                            <a href="index.html" id="site-logo-inner">
                                <img
                                    className=""
                                    id="logo_header"
                                    alt=""
                                    src="images/logo/logo.png"
                                    data-light="images/logo/logo.png"
                                    data-dark="images/logo/logo-dark.png"
                                />
                            </a>

                        </div>
                        <div class="section-menu-left-wrap">
                            <div class="center">
                                <div class="center-item">
                                    <div class="center-heading">Main Home</div>
                                    <ul class="menu-list">
                                        <li class="menu-item    active">
                                            <Link href="/" class="menu-item-button">
                                                <div class="icon">

                                                    <IoMdHome className='text-[red]' />

                                                </div>
                                                <div class="text">Dashboard</div>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div class="center-item">
                                    <div class="center-heading">All page</div>
                                    <ul class="menu-list">
                                        <li class="menu-item   ">
                                            <Link href="clients" class="menu-item-button">
                                                <div class="icon">
                                                    <SlBasket className='text-[red]' />
                                                </div>
                                                <div class="text">Clients</div>
                                            </Link>

                                        </li>
                                        <li class="menu-item   ">
                                            <Link href="projects" class="menu-item-button">
                                                <div class="icon"><LuLayers /></div>
                                                <div class="text">Projects</div>
                                            </Link>

                                        </li>
                                        <li class="menu-item   ">
                                            <Link href="versions" class="menu-item-button">
                                                <div class="icon"><FaBox /></div>
                                                <div class="text">Versions</div>
                                            </Link>

                                        </li>
                                        <li class="menu-item   ">
                                            <Link href="/stages" class="menu-item-button">
                                                <div class="icon"><FiFilePlus /></div>
                                                <div class="text">Stages</div>
                                            </Link>

                                        </li>
                                        <li class="menu-item   ">
                                            <Link href="/taskes" class="menu-item-button">
                                                <div class="icon"><FaTasks /></div>
                                                <div class="text">Tasks</div>
                                            </Link>

                                        </li>
                                        <li class="menu-item   ">
                                            <Link href="/management" class="menu-item-button">
                                                <div class="icon"><MdOutlinePhotoLibrary /></div>
                                                <div class="text">management</div>
                                            </Link>
                                        </li>
                                        <li class="menu-item">
                                            <a href="report.html" class="">
                                                <div class="icon"><AiOutlinePieChart /></div>
                                                <div class="text">Finance</div>
                                            </a>
                                        </li>

                                        <li class="menu-item">
                                            <a href="report.html" class="">
                                                <div class="icon"><AiOutlinePieChart /></div>
                                                <div class="text">Human resources</div>
                                            </a>
                                        </li>

                                        <li class="menu-item">
                                            <a href="report.html" class="">
                                                <div class="icon"><AiOutlinePieChart /></div>
                                                <div class="text">Sections</div>
                                            </a>
                                        </li>


                                        <li class="menu-item">
                                            <a href="report.html" class="">
                                                <div class="icon"><AiOutlinePieChart /></div>
                                                <div class="text">teams</div>
                                            </a>
                                        </li>


                                        <li class="menu-item">
                                            <a href="report.html" class="">
                                                <div class="icon"><AiOutlinePieChart /></div>
                                                <div class="text">Absence
                                                </div>
                                            </a>
                                        </li>

                                        <li class="menu-item">
                                            <a href="report.html" class="">
                                                <div class="icon"><AiOutlinePieChart /></div>
                                                <div class="text">Evaluate and follow up</div>
                                            </a>
                                        </li>

                                        <li class="menu-item">
                                            <a href="report.html" class="">
                                                <div class="icon"><AiOutlinePieChart /></div>
                                                <div class="text">Public relations
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="center-item">
                                    <div class="center-heading">Setting</div>
                                    <ul class="menu-list">
                                        <li class="menu-item   ">
                                            <a href="javascript:void(0);" class="menu-item-button">
                                                <div class="icon"><CiLocationOn /></div>
                                                <div class="text">Location</div>
                                            </a>

                                        </li>
                                        <li class="menu-item">
                                            <a href="setting.html" class="">
                                                <div class="icon"><IoSettingsOutline /></div>
                                                <div class="text">Setting</div>
                                            </a>
                                        </li>
                                        <li class="menu-item   ">
                                            <a href="javascript:void(0);" class="menu-item-button">
                                                <div class="icon"><FaRegEdit /></div>
                                                <div class="text">Pages</div>
                                            </a>

                                        </li>
                                    </ul>
                                </div>
                                <div class="center-item">
                                    <div class="center-heading">Components</div>
                                    <ul class="menu-list">
                                        <li class="menu-item">
                                            <a href="components.html" class="">
                                                <div class="icon"><FaDatabase /></div>
                                                <div class="text">Components</div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="center-item">
                                    <div class="center-heading">Support</div>
                                    <ul class="menu-list">
                                        <li class="menu-item">
                                            <a href="#" class="">
                                                <div class="icon"><MdHelpOutline /></div>
                                                <div class="text">Help center</div>
                                            </a>
                                        </li>
                                        <li class="menu-item">
                                            <a href="#" class="">
                                                <div class="icon">
                                                    <TfiHeadphoneAlt />
                                                </div>
                                                <div class="text">FAQs</div>
                                            </a>
                                        </li>
                                        <li class="menu-item">
                                            <a href="#" class="">
                                                <div class="icon">
                                                    <svg
                                                        width="20"
                                                        height="20"
                                                        viewBox="0 0 20 20"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <g clipPath="url(#clip0_604_18468)">
                                                            <path
                                                                d="M4.71875 7V1H15.5561L18.9991 4.44801V19H4.71875C4.71875 19 4.71875 16.2 4.71875 13.5"
                                                                stroke="#111111"
                                                                stroke-width="1.2"
                                                                stroke-miterlimit="10"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round" />
                                                            <path
                                                                d="M19.0015 4.44801H15.5586V1L19.0015 4.44801Z"
                                                                stroke="#111111"
                                                                stroke-width="1.2"
                                                                stroke-miterlimit="10"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round" />
                                                            <path
                                                                d="M7.53469 14.5507C9.89243 14.5507 11.8037 12.6366 11.8037 10.2754C11.8037 7.91415 9.89243 6 7.53469 6C5.17695 6 3.26562 7.91415 3.26562 10.2754C3.26562 12.6366 5.17695 14.5507 7.53469 14.5507Z"
                                                                stroke="#111111"
                                                                stroke-width="1.2"
                                                                stroke-miterlimit="10"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round" />
                                                            <path
                                                                d="M5.41029 13.9852L2.90967 16.4895C2.47263 16.9272 1.76451 16.9272 1.3275 16.4895C0.890833 16.0522 0.890833 15.3427 1.3275 14.9054L3.82812 12.4011M6.14799 10.2051L7.11794 11.175L8.91794 9.375"
                                                                stroke="#111111"
                                                                stroke-width="1.2"
                                                                stroke-miterlimit="10"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_604_18468">
                                                                <rect width="20" height="20" fill="white" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </div>
                                                <div class="text">Privacy policy</div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="center-item">
                                    <div class="center-heading">Connect us</div>
                                    <ul class="wg-social">
                                        <li>
                                            <a href="#"><FiFacebook /></a>
                                        </li>
                                        <li class="active">
                                            <a href="#"><CiTwitter /></a>
                                        </li>
                                        <li>
                                            <a href="#"><FiLinkedin /></a>
                                        </li>
                                        <li>
                                            <a href="#"><FaInstagram /></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="bot text-center">
                                <div class="wrap">
                                    <div class="mb-20">
                                        <img src="images/menu-left/img-bot.png" alt="" />
                                    </div>
                                    <div class="mb-20">
                                        <h6>Hi, how can we help?</h6>
                                        <div class="text">
                                            Contact us if you have any assistance, we will contact you
                                            as soon as possible
                                        </div>
                                    </div>
                                    <a href="#" class="tf-button w-full">Contact</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
