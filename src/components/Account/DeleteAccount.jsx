import React from 'react';
import { Button } from '../index.js';
import { TriangleAlert } from 'lucide-react';

function DeleteAccount() {
    return (
        <div className='rounded-lg border shadow-lg text-zinc-900 bg-white p-6 mt-5'>
            <h1 className='text-3xl font-bold text-zinc-900'>
                Delete Account
                <span className='text-red-500 inline-block ml-2'><TriangleAlert size={20}/></span>
            </h1>
            <p className='text-sm mt-1'>
                Permanently delete your account and all associated data. This action cannot be undone.
            </p>
            <Button bgColor='bg-red-700' textColor='text-white'
                className='text-sm mt-4 hover:bg-red-500 duration-200'
            >
                Delete My Account
            </Button>
        </div>
    );
}

export default DeleteAccount