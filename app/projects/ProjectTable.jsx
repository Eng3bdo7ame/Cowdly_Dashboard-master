import { useState } from 'react';
import Table from '@/components/Table';
import AddProductForm from './forms/AddProjects'; // استيراد النموذج المناسب

const ProductTable = () => {
    const [modalType, setModalType] = useState(null);

    const tableHeaders = ["Product", "Product ID", "Price", "Quantity", "Sale", "Stock", "Start date", "Action"];
    const tableData = [
        ["Dog Food, Chicken & Chicken Liver Recipe...", "#7712309", "$1,452.500", "1,638", "20", "Out of stock", "$28,672.36"],
        ["Cat Food, Tuna & Salmon...", "#7712310", "$852.200", "987", "15", "In stock", "$12,342.50"],
    ];

    const openCreate = (type) => {
        setModalType(type);
    };

    return (
        <div>
            <Table tableHeader={tableHeaders} tableData={tableData} openCreate={openCreate} formType="product" />
            {modalType === "product" && <AddProductForm closeModal={() => setModalType(null)} modal={modalType === "product"} />}
        </div>
    );
};

export default ProductTable;
