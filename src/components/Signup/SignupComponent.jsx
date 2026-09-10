import { useNavigate } from "react-router-dom";
import { Input, Button } from "../index.js";
import { useForm } from 'react-hook-form';
import { passwordRegex, nameRegex } from "../../common/constants.js";
import api from "../../config/axios.config.js";
import { useState } from "react";
import { Eye, EyeOff } from 'lucide-react';
import { delay } from "../../common/functions.js";

function SignUpComponent() {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },
    } = useForm()

    const onSubmit = async (data) => {
        await delay(1)
        if (!nameRegex.test(data.firstname)) {
            setError('firstname', {message: 'Letters only, no numbers or symbols'});
            return;
        }
        if (!nameRegex.test(data.lastname)) {
            setError('lastname', {message: 'Letters only, no numbers or symbols'});
            return;
        }
        if (!data.email.includes('@')) {
            setError('email', {message: 'Email is invalid'}); 
            return;
        }
        if (!passwordRegex.test(data.password)) {
            setError('password', {message: 'Must include uppercase, lowercase, number & special character'});
            return;
        }
        if (data.confirmPass !== data.password) {
            setError('confirmPass', {message: 'Passwords do not match'});
            return;
        }
        await delay(1);
        try {
            await api.post('/api/v1/auth/register', data);
            navigate('/', {replace: true});
        } catch (error) {
            setError('confirmPass', { message: error.message })
        }
    }

    const togglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const handleGoogleAuth = () => {
        window.location.href = `${import.meta.env.VITE_API_URL}/api/v1/auth/google`;
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-lg rounded-lg w-5/6 md:w-full max-w-xl p-5 duration-500 dark:bg-zinc-700">
                <div className="border-b dark:border-gray-600 pb-4">
                    <h1 className="text-center font-sans text-4xl font-semibold duration-500 dark:text-white">Vault Finance</h1>
                    <p className="text-center font-sans text-xs duration-500 dark:text-white">Your personal expense manager</p>
                    <h2 className="text-center font-mono text-xl uppercase mt-6 duration-500 dark:text-white">Signup</h2>
                </div>
                <div>
                    <div className="md:flex md:gap-2 my-4">
                        <div className="w-full mb-4 md:mb-0">
                            <Input
                                {...register('firstname', { required: {value: true, message: 'First Name is required'}, maxLength: {
                                    value: 20, message: 'First Name cannot be more than 20 letters'
                                }})}
                                label='first name'
                                type='text'
                                placeholder='John'
                                className='border-2 focus:border-black duration-500 dark:bg-zinc-700 dark:border-zinc-600 dark:focus:bg-zinc-700 dark:text-white dark:focus:border-zinc-800' />
                            {errors.firstname && <p className='text-red-500 text-xs mt-1 ml-1'>{errors.firstname.message}</p>}
                        </div>

                        <div className="w-full">
                            <Input
                                {...register('lastname', { required: {value: true, message: 'Last Name is required'}, maxLength: {
                                    value: 20, message: 'Last Name Name cannot be more than 20 letters'
                                }})}
                                label='last name'
                                type='text'
                                placeholder='Doe'
                                className='border-2 focus:border-black duration-500 dark:bg-zinc-700 dark:border-zinc-600 dark:focus:bg-zinc-700 dark:text-white dark:focus:border-zinc-800' />
                            {errors.lastname && <p className='text-red-500 text-xs mt-1 ml-1'>{errors.lastname.message}</p>}
                        </div>
                    </div>

                    <div className="mb-4">
                        <Input
                            {...register('email', { required: {value: true, message: 'Email is required'}, maxLength: {
                                    value: 50, message: 'Email cannot be more than 50 letters'
                                }})}
                            label='email'
                            type='email'
                            placeholder='johnd@mail.com'
                            className='border-2 focus:border-black duration-500 dark:bg-zinc-700 dark:border-zinc-600 dark:focus:bg-zinc-700 dark:text-white dark:focus:border-zinc-800' />
                        {errors.email && <p className='text-red-500 text-xs mt-1 ml-1'>{errors.email.message}</p>}
                    </div>

                    <div className="mb-4 relative">
                        <Input
                            {...register('password', { required: {value: true, message: 'Password is Required'}, minLength: {
                                value: 8, message: 'Password must be more than 7 letters'
                            }})}
                            label='password'
                            type={showPassword ? 'text' : 'password'}
                            placeholder='Password_123'
                            className='pr-10 border-2 focus:border-black duration-500 dark:bg-zinc-700 dark:border-zinc-600 dark:focus:bg-zinc-700 dark:text-white dark:focus:border-zinc-800' />
                            <Button
                                type="button"
                                bgColor="bg-transparent"
                                textColor="text-gray-300"
                                onClick={togglePasswordVisibility}
                                aria-label={showPassword ? "Hide password" : "Show password"}
                                className="!p-0 dark:text-gray-500 absolute right-3 top-[44px] -translate-y-1/2"
                                >
                                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                            </Button>
                            {errors.password && <p className='text-red-500 text-xs mt-1 ml-1'>{errors.password.message}</p>}
                    </div>

                    <div className="mb-2 relative">
                        <Input
                            {...register('confirmPass', { required: {value: true, message: 'Password is Required'}, minLength: {
                                value: 8, message: 'Password must of more than 7 letters'
                            }})}
                            label='confirm password'
                            type={ showPassword ? 'text' : 'password'}
                            placeholder='Password_123'
                            className='pr-10 border-2 focus:border-black duration-500 dark:bg-zinc-700 dark:border-zinc-600 dark:focus:bg-zinc-700 dark:text-white dark:focus:border-zinc-800' />
                            <Button
                                type="button"
                                bgColor="bg-transparent"
                                textColor="text-gray-300"
                                onClick={togglePasswordVisibility}
                                aria-label={showPassword ? "Hide password" : "Show password"}
                                className="!p-0 dark:text-gray-500 absolute right-3 top-[44px] -translate-y-1/2"
                                >
                                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                            </Button>
                        {errors.confirmPass && <p className='text-red-500 text-xs mt-1 ml-1'>{errors.confirmPass.message}</p>}
                    </div>
                </div>
                <div className="flex items-center justify-center w-full">
                    <div className="w-4/6">
                        <Button
                            disabled={isSubmitting}
                            type="submit"
                            bgColor="bg-slate-900"
                            textColor="text-white"
                            className="mt-4 w-full hover:bg-slate-700 duration-200 text-sm font-bold 
                        dark:bg-lime-600 dark:hover:bg-lime-500 dark:text-zinc-900"
                        >
                            {isSubmitting? 'Signing up....' : 'Signup'}
                        </Button>
                        <Button
                            type="button"
                            onClick={handleGoogleAuth}
                            bgColor="bg-slate-900"
                            textColor="text-white"
                            className="mt-4 w-full hover:bg-slate-700 duration-200 text-sm font-bold 
                        dark:bg-lime-600 dark:hover:bg-lime-500 dark:text-zinc-900"
                        >
                            Continue with Google
                        </Button>
                        <p className="text-xs md:text-sm mt-4 text-center duration-500 dark:text-white">Already a user?
                            <span>
                                <Button
                                    onClick={() => navigate('/')}
                                    bgColor="bg-none" textColor="text-emerald-500"
                                    className="!py-0 !px-1 font-bold duration-500 dark:text-lime-600 dark:hover:text-lime-500"
                                >
                                    Login
                                </Button>
                            </span>
                        </p>
                    </div>
                </div>
            </form>
        </>
    );
}

export default SignUpComponent