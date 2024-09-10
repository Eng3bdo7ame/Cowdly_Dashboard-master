"use client";
import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { MdArrowForwardIos } from "react-icons/md";
// import AreaChartSpline from '@/ApexCharts/AreaChartSpline'
import Dashboard from './dashboard/page';

export default function Home() {
    return (
        <main className='overflow-hidden'>
            <Dashboard />
        </main>
    );
}
