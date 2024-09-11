 'use client';
import Table from "@/components/Table";
import React from "react";
 
 
 
const UserTable = ({ openCreate, openPreview }) => {
    const headers = [
        { key: 'name', label: 'Hotel Name' },
        { key: 'phone', label: 'Phone Number' },
        { key: 'email', label: 'Hotel Email' },
        { key: 'city', label: 'City' }
    ];

    const data = [
        { id: 1, name: 'Hotel California', phone: '+1 234 567 890', email: 'info@hotelcalifornia.com', city: 'Los Angeles' },
     ];

    return (
        <div>
            <Table />
        </div>
    );
};

export default React.memo(UserTable);

