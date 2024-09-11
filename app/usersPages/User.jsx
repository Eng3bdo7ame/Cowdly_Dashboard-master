"use client"
import React, {  useState, useCallback } from 'react';
  import UserTable from './UserTable';
 import PreviewUser from './PrevieUser';
import AddUser from './AddUser';
 const User = ({ role }) => {
    const [openCreate, setOpenCreate] = useState(false);
    const [openPreview, setOpenPreview] = useState(false);

    const toggleOpenPreviewModal = useCallback(() => {
        setOpenPreview(prev => !prev);
    }, []);
    const toggleOpenCreateModal = useCallback(() => {
        setOpenCreate(prev => !prev);
    }, []);

  
  
    return (
        <div className='pt-[100px] xl:w-[78%] lg:w-[68%] md:w-[95%] float-end  '>
                 <UserTable openPreview={toggleOpenPreviewModal} openCreate={toggleOpenCreateModal} />
                <AddUser closeModal={toggleOpenCreateModal} modal={openCreate} role={role} />
                {openPreview && (
                    <PreviewUser closeModal={() => setOpenPreview(false)} />
                )}
         </div>
    );
};

export default React.memo(User);
