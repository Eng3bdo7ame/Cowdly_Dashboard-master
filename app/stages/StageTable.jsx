import { useState } from 'react';
import Table from '@/components/Table';
import AddStagesForm from './forms/AddStages'; // استيراد النموذج المناسب

const StageTable = () => {
    const [modalType, setModalType] = useState(null);

    const tableHeaders = ["Stage", "Product ID", "Price", "Quantity", "Sale", "Stock", "Start date", "Action"];
    const tableData = [
        ["Dog Food, Chicken & Chicken Liver Recipe...", "#7712309", "$1,452.500", "1,638", "20", "Out of stock", "$28,672.36"],
        ["Cat Food, Tuna & Salmon...", "#7712310", "$852.200", "987", "15", "In stock", "$12,342.50"],
    ];

    const openCreate = (type) => {
        setModalType(type);
    };

    return (
        <div>
            <Table tableHeader={tableHeaders} tableData={tableData} openCreate={openCreate} formType="stage" />
            {modalType === "stage" && <AddStagesForm closeModal={() => setModalType(null)} modal={modalType === "stage"} />}
        </div>
    );
};

export default StageTable;
