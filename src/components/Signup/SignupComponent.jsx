import { useNavigate } from "react-router-dom";
import { Input, Button } from "../index.js"

function SignUpComponent() {
    const navigate = useNavigate();
    return (
        <>
            <div className="bg-white shadow-lg rounded-lg w-5/6 md:w-full max-w-xl p-5 duration-500 dark:bg-zinc-700">
                <div className="border-b border-gray-600 pb-4">
                    <h1 className="text-center font-sans text-4xl font-semibold duration-500 dark:text-white">Vault Finance</h1>
                    <p className="text-center font-sans text-xs duration-500 dark:text-white">Your personal expense manager</p>
                    <h2 className="text-center font-mono text-xl uppercase mt-6 duration-500 dark:text-white">Signup</h2>
                </div>
                <div>
                    <div className="md:flex md:gap-2 my-4">

                        <Input
                            label='first name'
                            type='text'
                            placeholder='John'
                            className='border-2 focus:border-black duration-500 dark:bg-zinc-700 dark:border-zinc-600 dark:focus:bg-zinc-700 dark:text-white dark:focus:border-zinc-800 mb-4 md:mb-0' />

                        <Input
                            label='last name'
                            type='text'
                            placeholder='Doe'
                            className='border-2 focus:border-black duration-500 dark:bg-zinc-700 dark:border-zinc-600 dark:focus:bg-zinc-700 dark:text-white dark:focus:border-zinc-800 md:m-0' />
                    </div>

                    <Input
                        label='email'
                        type='email'
                        placeholder='johnd@mail.com'
                        className='border-2 focus:border-black duration-500 dark:bg-zinc-700 dark:border-zinc-600 dark:focus:bg-zinc-700 dark:text-white dark:focus:border-zinc-800 mb-4' />

                    <Input
                        label='password'
                        type='password'
                        placeholder='123456'
                        className=' border-2 focus:border-black duration-500 dark:bg-zinc-700 dark:border-zinc-600 dark:focus:bg-zinc-700 dark:text-white dark:focus:border-zinc-800 mb-4' />

                    <Input
                        label='confirm password'
                        type='password'
                        placeholder='123456'
                        className=' border-2 focus:border-black duration-500 dark:bg-zinc-700 dark:border-zinc-600 dark:focus:bg-zinc-700 dark:text-white dark:focus:border-zinc-800' />
                </div>
                <div className="flex items-center justify-center w-full">
                    <div className="w-4/6">
                        <Button
                            bgColor="bg-slate-900"
                            textColor="text-white"
                            className="mt-4 w-full hover:bg-slate-700 duration-200 text-sm font-bold 
                        dark:bg-lime-600 dark:hover:bg-lime-500 dark:text-zinc-900"
                        >
                            Signup
                        </Button>
                        <Button
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
            </div>
        </>
    );
}

export default SignUpComponent