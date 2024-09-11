'use client';

import Table from '@/components/Table';
import AddVersions from './forms/AddVersions';
import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const VersionTable = () => {
    const [modalType, setModalType] = useState(null);
    const [tableData, setTableData] = useState([]);
    const tableHeaders = ["ID", "Name", "Budget", "Start Date", "Duration", "End Date", "Project", "Action"];
    const token = Cookies.get('token');

    const fetchData = useCallback(async () => {
        try {
            const response = await axios.get('https://dashboard.cowdly.com/api/project_versions/', {
                headers: {
                    'Authorization': `token ${token}`
                }
            });
            const data = response.data;

             const mappedData = data.map((item) => [
                item.id,
                item.name,
                item.budget,
                item.start_date,
                item.duration,
                item.end_date,
                item.project,
            ]);

            setTableData(mappedData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }, [token]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const openCreate = (type) => {
        setModalType(type);
    };

    return (
        <div>
            <Table tableHeader={tableHeaders} tableData={tableData} openCreate={openCreate} formType="version" />
            {modalType === "version" && <AddVersions closeModal={() => setModalType(null)} modal={modalType === "version"} />}
        </div>
    );
};

export default VersionTable;
