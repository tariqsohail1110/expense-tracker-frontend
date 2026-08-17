import React, { useState } from 'react';
import { Input, Button, UpdateModal } from '../index.js'

function UpdateName() {

    const [showModal, setShowModal] = useState(false);
    return (
        <div className='rounded-lg shadow-lg text-zinc-900 bg-white p-6 mt-6 duration-500
        dark:bg-zinc-700'>
            <h1 className='text-3xl font-bold text-zinc-900 duration-500 dark:text-white'>
                Update Name
            </h1>
            <p className='text-sm mt-1 duration-500 dark:text-white'>
                Enter your first and last name below to update your profile.
            </p>
            <div className='md:w-2/4 lg:w-1/4'>
                <Input type='text' placeholder='Enter first name'
                className='mt-4 border-2 focus:border-black duration-500
                    dark:bg-zinc-700 dark:border-zinc-600 dark:focus:bg-zinc-700 
                    dark:text-white dark:focus:border-zinc-800'
            />
                <Input type='text' placeholder='Enter last name'
                className='mt-4 border-2 focus:border-black duration-500
                    dark:bg-zinc-700 dark:border-zinc-600 dark:focus:bg-zinc-700 
                    dark:text-white dark:focus:border-zinc-800'
            />
            </div>
            <Button onClick={() => setShowModal(true)} bgColor='bg-slate-900' textColor='text-white'
                className='text-sm mt-4 hover:bg-slate-700 duration-200 font-bold 
                dark:bg-lime-600 dark:hover:bg-lime-500 dark:text-zinc-900'
            >
                Update Changes
            </Button>
            {showModal && <UpdateModal title='name' onClose={() => setShowModal(false)}/>}
        </div>
    );
}

export default UpdateName