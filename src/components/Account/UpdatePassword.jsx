import React, { useState } from 'react';
import { Input, Button, UpdateModal } from '../index.js';
import { useForm } from 'react-hook-form';
import { passwordRegex } from '../../common/constants.js';

function UpdatePassword() {
    const [ payload, setPayload ] = useState({});
    
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm()

    const onSubmit = async(data) => {
        try {
            if (!passwordRegex.test(data.password)) {
                setError('password', {message: 'Must include uppercase, lowercase, number & special character'});
                return;
            }
            if (data.confirmpass !== data.password) {
                setError('confirmpass', {message: 'Passwords do not match'});
                return;
            }
            setPayload(data);
        } catch (error) {
            console.log(error.message);
        }
    }

    const [showModal, setShowModal] = useState(false);
    return (
        <form onSubmit={handleSubmit(onSubmit)} className='rounded-lg shadow-lg text-zinc-900 bg-white p-6 duration-500
        dark:bg-zinc-700'>
            <h1 className='text-3xl font-bold text-zinc-900 duration-500 dark:text-white'>
                Update Password
            </h1>
            <p className='text-sm mt-1 duration-500 dark:text-white'>
                Enter and confirm your new password below to update your credentials.
            </p>
            <div className='md:w-2/4 lg:w-1/4'>
                <Input 
                {...register('password', { required: {value: true, message: 'Password is Required'}, minLength: { value: 8, message: 'Password must be more than 7 letters' }})}
                type='text' placeholder='Enter your new password'
                    className='mt-4 border-2 focus:border-black duration-500
                    dark:bg-zinc-700 dark:border-zinc-600 dark:focus:bg-zinc-700 
                    dark:text-white dark:focus:border-zinc-800'
                />
                {errors.password && <p className='text-red-500 text-xs mt-1 ml-1'>{errors.password.message}</p>}

                <Input
                {...register('confirmpass', { required: {value: true, message: 'Password is Required'}, minLength: { value: 8, message: 'Password must of more than 7 letters' }})}
                type='text' placeholder='Confirm Password'
                    className='mt-4 border-2 focus:border-black duration-500
                    dark:bg-zinc-700 dark:border-zinc-600 dark:focus:bg-zinc-700 
                    dark:text-white dark:focus:border-zinc-800'
                />
                {errors.confirmpass && <p className='text-red-500 text-xs mt-1 ml-1'>{errors.confirmpass.message}</p>}

            </div>
            <Button onClick={() => setShowModal(true)}
            type='submit' bgColor='bg-slate-900' textColor='text-white'
                className='text-sm mt-4 hover:bg-slate-700 duration-200 font-bold 
                dark:bg-lime-600 dark:hover:bg-lime-500 dark:text-zinc-900'
            >
                Update Changes
            </Button>
            {showModal && <UpdateModal title='password' onClose={() => setShowModal(false)} url={'/api/v1/users/me'} data={payload}/>}
        </form>
    );
}

export default UpdatePassword