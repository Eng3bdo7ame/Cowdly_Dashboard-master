import { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import Table from '@/components/Table';
import AddClients from './forms/AddClients';

const ClientTable = () => {
    const [modalType, setModalType] = useState(null);
    const [tableData, setTableData] = useState([]);
    const [tableHeaders, setTableHeaders] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = Cookies.get('token'); // استرجاع التوكن من الكوكيز
                if (!token) {
                    console.error('No token found in cookies');
                    return;
                }

                const response = await axios.get('https://dashboard.cowdly.com/api/clients/', {
                    headers: {
                        'Authorization': `Bearer ${token}`, // تأكد من استخدام التوكن بشكل صحيح
                    },
                });

                const data = response.data;

                if (data.length > 0) {
                    // تعيين رؤوس الجدول استنادًا إلى مفاتيح أول عنصر في البيانات
                    const headers = Object.keys(data[0]);
                    setTableHeaders(headers);

                    // تعيين بيانات الجدول
                    const formattedData = data.map(item =>
                        headers.map(header => item[header] || 'N/A')
                    );
                    setTableData(formattedData);
                } else {
                    // إذا كانت البيانات فارغة
                    setTableHeaders([]);
                    setTableData([]);
                }
            } catch (error) {
                console.error('Error fetching data:', error.response?.data || error.message);
            }
        };

        fetchData();
    }, []);

    const openCreate = (type) => {
        setModalType(type);
    };

    return (
        <div>
            <Table tableHeader={tableHeaders} tableData={tableData} openCreate={openCreate} formType="client" />
            {modalType === "client" && <AddClients closeModal={() => setModalType(null)} modal={modalType === "client"} />}
        </div>
    );
};

export default ClientTable;
