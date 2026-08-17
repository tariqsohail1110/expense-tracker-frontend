import React, { useState } from 'react';
import { Button, DeleteModal } from '../index.js';
import { TriangleAlert } from 'lucide-react';

function DeleteAccount() {

    const [showModal, setShowModal] = useState(false);
    
    return (
        <div className='rounded-lg shadow-lg text-zinc-900 bg-white p-6 mt-6 duration-500
        dark:bg-zinc-700'>
            <h1 className='text-3xl font-bold text-zinc-900 duration-500 dark:text-white'>
                Delete Account
                <span className='text-red-500 inline-block ml-2'><TriangleAlert size={20}/></span>
            </h1>
            <p className='text-sm mt-1 duration-500 dark:text-white'>
                Permanently delete your account and all associated data. This action cannot be undone.
            </p>
            <Button onClick={() => setShowModal(true)} bgColor='bg-red-700' textColor='text-white'
                className='text-sm mt-4 hover:bg-red-500 duration-200 font-bold'
            >
                Delete My Account
            </Button>
            {showModal && <DeleteModal title='Account' onClose={() => setShowModal(false)}/>}
        </div>
    );
}

export default DeleteAccount