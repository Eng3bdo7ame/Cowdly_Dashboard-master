import { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import Table from '@/components/Table';
import AddClients from './forms/AddClients';

const ClientTable = () => {
    const [modalType, setModalType] = useState(null);
    const [tableData, setTableData] = useState([]);
    const [tableHeaders, setTableHeaders] = useState([]);

    const fetchData = useCallback(async () => {
        try {
            const token = Cookies.get('token'); // Retrieve token from cookies
            if (!token) {
                console.error('No token found in cookies');
                return;
            }

            const response = await axios.get('https://dashboard.cowdly.com/api/clients/', {
                headers: {
                    'Authorization': `Token ${token}`, // Include token in the request header
                },
            });

            const data = response.data;

            if (data.length > 0) {
                // Set table headers based on keys of the first item
                const headers = Object.keys(data[0]);
                setTableHeaders(headers);

                // Format table data
                const formattedData = data.map(item =>
                    headers.map(header => item[header] || 'N/A')
                );
                setTableData(formattedData);
            } else {
                // If data is empty
                setTableHeaders([]);
                setTableData([]);
            }
        } catch (error) {
            console.error('Error fetching data:', error.response?.data || error.message);
        }
    }, []);

    useEffect(() => {
        fetchData(); // Fetch data on component mount
    }, [fetchData]);

    const openCreate = (type) => {
        setModalType(type);
    };

    const handleClientAdded = () => {
        fetchData(); // Refresh the data after a new client is added
    };

    return (
        <div>
            <Table tableHeader={[...tableHeaders, 'Action']} tableData={tableData} openCreate={openCreate} formType="client" />
            {modalType === "client" && <AddClients closeModal={() => setModalType(null)} modal={modalType === "client"} onClientAdded={handleClientAdded} />}
        </div>
    );
};

export default ClientTable;
