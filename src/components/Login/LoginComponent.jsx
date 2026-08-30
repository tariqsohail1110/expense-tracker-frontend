import { replace, useNavigate } from "react-router-dom";
import { Input, Button } from "../index.js";
import { useForm } from "react-hook-form";
import { passwordRegex } from "../../common/constants.js";
import api from "../../config/axios.config.js";

function LoginComponent() {
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },
    } = useForm()

    const delay = (d) =>{
        return new Promise((res, rej) => {
            setTimeout(() => {
                res()
            }, d * 1000)
        })
    }

    const onSubmit = async (data) => {
        if (!data.email.includes('@')) {
            setError('email', {message: 'Email is invalid'}); 
            return;
        }
        if (!passwordRegex.test(data.password)) {
            setError('password', {message: 'Must include uppercase, lowercase, number & special character'});
            return;
        }
        await delay(1);
        try {
            const response = await api.post('/api/v1/auth/login', { email: data.email, password: data.password });
            navigate('/otp', {replace: true, state: { email: data.email }});
            alert(response.data.data);
        } catch (error) {
            setError('password', { message: error.message})
        }
    }

    const navigate = useNavigate();
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-lg rounded-lg w-5/6 md:w-full max-w-xl p-5 duration-500 dark:bg-zinc-700">
                <div className="border-b border-gray-600 pb-4">
                    <h1 className="text-center font-sans text-4xl font-semibold duration-500 dark:text-white">Vault Finance</h1>
                    <p className="text-center font-sans text-xs duration-500 dark:text-white">Your personal expense manager</p>
                    <h2 className="text-center font-mono text-xl uppercase mt-6 duration-500 dark:text-white">Login</h2>
                </div>
                <div className="my-4">
                    <div className="mb-4">
                        <Input 
                        {...register('email', {required: {value: true, message: 'Email is required'}, maxLength: {
                            value: 50, message: 'Email cannot be more than 50 letters'
                        }})}
                        label='email'
                        type='email' 
                        placeholder='johnd@mail.com' 
                        className= 'border-2 focus:border-black duration-500 dark:bg-zinc-700 dark:border-zinc-600 dark:focus:bg-zinc-700 dark:text-white dark:focus:border-zinc-800'/>
                        {errors.email && <p className="text-red-500 text-xs mt-1 ml-1">{errors.email.message}</p>}
                    </div>

                <Input
                    {...register('password', {required: {value: true, message: 'Password is required'}, minLength: {value: 8, message: 'Password must be more than 7 letters'}})}
                    label='password'
                    type='password' 
                    placeholder='Password_123' 
                    className= ' border-2 focus:border-black duration-500 dark:bg-zinc-700 dark:border-zinc-600 dark:focus:bg-zinc-700 dark:text-white dark:focus:border-zinc-800'/>
                    {errors.password && <p className="text-red-500 text-xs mt-1 ml-1">{errors.password.message}</p>}
                </div>
                <div>
                    <p className="text-xs md:text-sm mt-4 text-center"> 
                        <span>
                            <Button bgColor="bg-none" textColor="text-emerald-500"
                            className="!py-0 !px-1 font-bold duration-500 dark:text-lime-600 dark:hover:text-lime-500"
                            >
                                Forgot Password?
                            </Button>
                        </span>
                    </p>
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
                            {isSubmitting? 'Logging in...' : 'Login'}
                        </Button>
                        <Button 
                        bgColor="bg-slate-900"
                        textColor="text-white"
                        className="mt-4 w-full hover:bg-slate-700 duration-200 text-sm font-bold 
                        dark:bg-lime-600 dark:hover:bg-lime-500 dark:text-zinc-900"
                        >
                            Continue with Google
                        </Button>
                        <p className="text-xs md:text-sm mt-4 text-center duration-500 dark:text-white">Don't have an account?
                            <span>
                                <Button
                                onClick={() => navigate('signup')}
                                bgColor="bg-none" textColor="text-emerald-500"
                                className="!py-0 !px-1 font-bold duration-500 dark:text-lime-600 dark:hover:text-lime-500"
                                >
                                    Signup
                                </Button>
                            </span>
                        </p>
                    </div>
                </div>
            </form>
        </>
    );
}

export default LoginComponent