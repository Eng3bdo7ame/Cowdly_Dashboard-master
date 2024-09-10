'use client';
import React, { useState, useEffect, memo } from 'react';
import Table from '@/components/Table';
import gsap from 'gsap';
import dynamic from 'next/dynamic'; // Lazy loading dynamic import
// import AreaChartSpline from '@/ApexCharts/AreaChartSpline'
import AreaChartCard from '@/ApexCharts/AreaChartCard';
import AddClients from './forms/AddClients';


// Lazy load Dashboard and AddClients
// const AddClients = dynamic(() => import('./AddClients'), { ssr: false });

// Memoized Card component

const ClientPage = ({ role }) => {
    const [openCreate, setOpenCreate] = useState(false);

    const toggleOpenCreateModal = () => {
        setOpenCreate(!openCreate);
    };

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".greeting",
                { opacity: 0, y: -50 },
                { opacity: 1, y: 0, duration: 1 }
            );
            gsap.fromTo(".card1",
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 1, stagger: 0.2 }
            );
        });
        return () => ctx.revert(); // Cleanup GSAP animations on unmount
    }, []);

    return (
        <div className='pt-[100px] xl:w-[78%] lg:w-[68%] md:w-[95%] float-end  '>
            <div className=' relative right-10'>
                <div class="tf-section-4 mb-30">
                    <AreaChartCard
                        prices={[10, 20, 30, 40, 50]}
                        dates={[11, 32, 45, 32, 34, 52, 41]}
                        color="#22C55E"
                    />
                    <AreaChartCard
                        prices={[10, 20, 30, 40, 50]}
                        dates={[11, 32, 45, 32, 34, 52, 41]}
                        color="#FF5200" />
                    <AreaChartCard
                        prices={[10, 20, 30, 40, 50]}
                        dates={[11, 32, 45, 32, 34, 52, 41]}
                        color="#95989D" />
                    <AreaChartCard
                        prices={[10, 20, 30, 40, 50]}
                        dates={[11, 32, 45, 32, 34, 52, 41]}
                        color="#2275fc" />
                </div>
                <div class="flex items-center flex-wrap justify-between gap20 mb-27">
                    <h3>Client List </h3>
                </div>
                <Table openCreate={toggleOpenCreateModal} />
                <AddClients
                    closeModal={toggleOpenCreateModal}
                    modal={openCreate}
                    role={role}
                />
            </div>
        </div>
    );
}

export default ClientPage;
