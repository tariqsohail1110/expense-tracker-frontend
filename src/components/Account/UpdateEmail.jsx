import React from 'react';
import { Input, Button } from '../index.js'

function UpdateEmail() {
    return (
        <div className='rounded-lg shadow-lg text-zinc-900 bg-white p-6 mt-6 duration-500
        dark:bg-zinc-700'>
            <h1 className='text-3xl font-bold text-zinc-900 duration-500 dark:text-white'>
                Update Email
            </h1>
            <p className='text-sm mt-1 duration-500 dark:text-white'>
                Enter your new email address below to update your account.
            </p>
            <div className='lg:w-1/4'>
                <Input type='email' placeholder='New email'
                    className='mt-4 border-2 focus:border-black duration-500
                    dark:bg-zinc-700 dark:border-zinc-600 dark:focus:bg-zinc-700 
                    dark:text-white dark:focus:border-zinc-800'
                />
            </div>
            <Button bgColor='bg-slate-900' textColor='text-white'
                className='text-sm mt-4 hover:bg-slate-700 duration-200 font-bold 
                dark:bg-lime-500 dark:hover:bg-lime-300 dark:text-zinc-900'
            >
                Update Changes
            </Button>
        </div>
    );
}

export default UpdateEmail