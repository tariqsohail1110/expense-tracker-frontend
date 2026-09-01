import React, { useState } from 'react';
import { Input, Button, UpdateModal } from '../index.js';
import { useForm } from 'react-hook-form';
import { nameRegex } from '../../common/constants.js';

function UpdateName() {
    const [ payload, setPayload ] = useState({});

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm()

    const onSubmit = async(data) => {
        try {
            if (!nameRegex.test(data.firstname)) {
            setError('firstname', {message: 'Letters only, no numbers or symbols'});
            return;
            }
            if (!nameRegex.test(data.lastname)) {
                setError('lastname', {message: 'Letters only, no numbers or symbols'});
                return;
            }
            setPayload(data);
        } catch (error) {
            console.log(error.message);
        }
    }

    const [showModal, setShowModal] = useState(false);
    return (
        <form onSubmit={handleSubmit(onSubmit)} className='rounded-lg shadow-lg text-zinc-900 bg-white p-6 mt-6 duration-500
        dark:bg-zinc-700'>
            <h1 className='text-3xl font-bold text-zinc-900 duration-500 dark:text-white'>
                Update Name
            </h1>
            <p className='text-sm mt-1 duration-500 dark:text-white'>
                Enter your first and last name below to update your profile.
            </p>
            <div className='md:w-2/4 lg:w-1/4'>
                <Input
                {...register('firstname', { required: {value: true, message: 'First Name is required'}, maxLength: { value: 20, message: 'First Name cannot be more than 20 letters' }})}
                type='text' placeholder='Enter first name'
                className='mt-4 border-2 focus:border-black duration-500
                    dark:bg-zinc-700 dark:border-zinc-600 dark:focus:bg-zinc-700 
                    dark:text-white dark:focus:border-zinc-800'
                />
                {errors.firstname && <p className='text-red-500 text-xs mt-1 ml-1'>{errors.firstname.message}</p>}

                <Input
                {...register('lastname', { required: {value: true, message: 'Last Name is required'}, maxLength: { value: 20, message: 'Last Name Name cannot be more than 20 letters' }})}
                type='text' placeholder='Enter last name'
                className='mt-4 border-2 focus:border-black duration-500
                    dark:bg-zinc-700 dark:border-zinc-600 dark:focus:bg-zinc-700 
                    dark:text-white dark:focus:border-zinc-800'
                />
                {errors.lastname && <p className='text-red-500 text-xs mt-1 ml-1'>{errors.lastname.message}</p>}

            </div>
            <Button onClick={() => setShowModal(true)}
            type='submit' bgColor='bg-slate-900' textColor='text-white'
                className='text-sm mt-4 hover:bg-slate-700 duration-200 font-bold 
                dark:bg-lime-600 dark:hover:bg-lime-500 dark:text-zinc-900'
            >
                Update Changes
            </Button>
            {showModal && <UpdateModal title='name' onClose={() => setShowModal(false)} url={'/api/v1/users/me'}  data={payload}/>}
        </form>
    );
}

export default UpdateName