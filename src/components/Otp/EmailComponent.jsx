import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import { Input, Button } from "../index.js";
import api from '../../config/axios.config.js';
import { delay } from '../../common/functions.js';

function EmailComponent() {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },
    } = useForm();

    const onSubmit = async (data) => {
        if(!data.email.includes('@')) {
            setError('email', {message: 'Email is invalid'}); 
            return;
        }
        await delay(1);
        try {
            const response = await api.post('/api/v1/auth/forget', { email: data.email });
            navigate('/verifyforreset', {replace: true, state: { email: data.email }});
            alert(response.data.data.message)
        }catch(error) {
            setError('email', { message: error.message})
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-lg rounded-lg w-5/6 md:w-full max-w-xl p-5 duration-500 dark:bg-zinc-700">
                <div className="border-b dark:border-gray-600 pb-4">
                    <h1 className="text-center font-sans text-4xl font-semibold duration-500 dark:text-white">Vault Finance</h1>
                    <p className="text-center font-sans text-xs duration-500 dark:text-white">Your personal expense manager</p>
                    <h2 className="text-center font-mono text-xl uppercase mt-6 duration-500 dark:text-white">Forgot Password?</h2>
                </div>
                <div className="my-4">
                    <Input
                    {...register('email', {required: {value: true, message: 'Email is required'}, maxLength: { value: 50, message: 'Email cannot be more than 50 letters' }})}
                    type='email' placeholder='johnd@mail.com' className= ' border-2 focus:border-black mt-4 duration-500 dark:bg-zinc-700 dark:border-zinc-600 dark:focus:bg-zinc-700 dark:text-white dark:focus:border-zinc-800'/>
                    {errors.email && <p className="text-red-500 text-center text-xs mt-1 ml-1">{errors.email.message}</p>}
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
                            {isSubmitting? 'Sending...' : 'Send OTP'}
                        </Button>
                        <p className="text-xs md:text-sm mt-4 text-center">
                            <span>
                                <Button
                                onClick={() => navigate('/')}
                                bgColor="bg-none" textColor="text-emerald-500"
                                className="!py-0 !px-1 font-bold duration-500 dark:text-lime-600 dark:hover:text-lime-500"
                                >
                                    Go Back
                                </Button>
                            </span>
                        </p>
                    </div>
                </div>
            </form>
        </>
    );
}

export default EmailComponent