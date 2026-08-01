import React from 'react';
import { Input, Button } from '../index.js'

function UpdatePassword() {
    return (
        <div className='rounded-lg border shadow-lg text-zinc-900 bg-white p-6'>
            <h1 className='text-3xl font-bold text-zinc-900'>
                Update Password
            </h1>
            <p className='text-sm mt-1'>
                Enter and confirm your new password below to update your credentials.
            </p>
            <div className='w-1/4'>
                <Input type='text' placeholder='Enter your new password'
                    className='mt-4 border-2 focus:border-black'
                />
                <Input type='text' placeholder='Confirm Password'
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

export default UpdatePassword