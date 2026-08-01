import React from 'react';
import { Input, Button } from '../index.js'

function UpdateName() {
    return (
        <div className='rounded-lg border shadow-lg text-zinc-900 bg-white p-6 mt-5'>
            <h1 className='text-3xl font-bold text-zinc-900'>
                Update Name
            </h1>
            <p className='text-sm mt-1'>
                Enter your first and last name below to update your profile.
            </p>
            <div className='w-1/4'>
                <Input type='text' placeholder='Enter first name'
                className='mt-4 border-2 focus:border-black'
            />
                <Input type='text' placeholder='Enter last name'
                className='mt-4 border-2 focus:border-black'
            />
            </div>
            <Button bgColor='bg-slate-900' textColor='text-white'
                className='text-sm mt-4 hover:bg-slate-700 duration-200'
            >
                Update Changes
            </Button>
        </div>
    );
}

export default UpdateName