import React, { useState } from 'react';
import { Input, Button, UpdateModal } from '../index.js';
import { useForm } from 'react-hook-form';
import { passwordRegex } from '../../common/constants.js';
import { Eye, EyeOff } from 'lucide-react';

function UpdatePassword() {
    const [ showPassword, setShowPassword ] = useState(false);
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

    const togglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
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
                <div className='relative'>
                    <Input 
                    {...register('password', { required: {value: true, message: 'Password is Required'}, minLength: { value: 8, message: 'Password must be more than 7 letters' }})}
                    type={ showPassword ? 'text' : 'password'} placeholder='Enter your new password'
                    className='mt-4 border-2 focus:border-black duration-500
                    dark:bg-zinc-700 dark:border-zinc-600 dark:focus:bg-zinc-700 
                    dark:text-white dark:focus:border-zinc-800'
                    />
                    <Button
                        type="button"
                        bgColor="bg-transparent"
                        textColor="text-gray-300"
                        onClick={togglePasswordVisibility}
                        aria-label={showPassword ? "Hide password" : "Show password"}
                        className="!p-0 dark:text-gray-500 absolute right-3 top-[44px] -translate-y-4"
                        >
                        {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </Button>
                    {errors.password && <p className='text-red-500 text-xs mt-1 ml-1'>{errors.password.message}</p>}
                </div>

                <div className='relative'>
                    <Input
                    {...register('confirmpass', { required: {value: true, message: 'Password is Required'}, minLength: { value: 8, message: 'Password must of more than 7 letters' }})}
                    type={ showPassword ? 'text' : 'password'} placeholder='Confirm Password'
                    className='mt-4 border-2 focus:border-black duration-500
                    dark:bg-zinc-700 dark:border-zinc-600 dark:focus:bg-zinc-700 
                    dark:text-white dark:focus:border-zinc-800'
                    />
                    <Button
                        type="button"
                        bgColor="bg-transparent"
                        textColor="text-gray-300"
                        onClick={togglePasswordVisibility}
                        aria-label={showPassword ? "Hide password" : "Show password"}
                        className="!p-0 dark:text-gray-500 absolute right-3 top-[44px] -translate-y-4"
                        >
                        {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </Button>
                    {errors.confirmpass && <p className='text-red-500 text-xs mt-1 ml-1'>{errors.confirmpass.message}</p>}
                </div>

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