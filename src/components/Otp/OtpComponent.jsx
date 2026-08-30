import { useNavigate, useLocation } from "react-router-dom";
import { Input, Button } from "../index.js";
import { useForm } from "react-hook-form";
import { numberRegex } from "../../common/constants.js";
import api from "../../config/axios.config.js";

function OtpComponent() {
    const navigate = useNavigate();
    const location = useLocation();
    const email = location.state?.email;
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
        if (!numberRegex.test(data.code)) {
            setError('code', {message: 'Numbers only'});
            return;
        }
        try {
            await delay(1);
            const response = await api.post('/api/v1/auth/verify', { email: email, code: data.code})
            localStorage.setItem('accessToken', response.data.data.accessToken);
            localStorage.setItem('refreshToken', response.data.data.accessToken);
            navigate('/app/dashboard', {replace: true})
        } catch (error) {
            if (error.response) {
                setError('code', {message: error.message})
            }
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-lg rounded-lg w-5/6 md:w-full max-w-xl p-5 duration-500 dark:bg-zinc-700">
                <div className="border-b border-gray-600 pb-4">
                    <h1 className="text-center font-sans text-4xl font-semibold duration-500 dark:text-white">Vault Finance</h1>
                    <p className="text-center font-sans text-xs duration-500 dark:text-white">Your personal expense manager</p>
                    <h2 className="text-center font-mono text-xl uppercase mt-6 duration-500 dark:text-white">Verify Otp</h2>
                </div>
                <div className="my-4">
                    <Input
                    {...register('code', {required: {value: true, message: 'OTP is required'}, minLength: {value: 6, message: 'OTP must be of 6 digits'}})}
                    type='text' placeholder='000000' className= ' border-2 focus:border-black mt-4 text-center font-bold text-4xl duration-500 dark:bg-zinc-700 dark:border-zinc-600 dark:focus:bg-zinc-700 dark:text-white dark:focus:border-zinc-800'/>
                    {errors.code && <p className="text-red-500 text-center text-xs mt-1 ml-1">{errors.code.message}</p>}
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
                            {isSubmitting? 'Verifying...' : 'Verify'}
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

export default OtpComponent