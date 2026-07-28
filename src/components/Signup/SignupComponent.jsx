import { useNavigate } from "react-router-dom";
import { Input, Button } from "../index.js"

function SignUpComponent() {
    const navigate = useNavigate();
    return (
        <>
            <div className="bg-white rounded-lg w-full max-w-xl p-5">
                <div>
                    <h1 className="text-center font-sans text-4xl font-semibold">Vault Finance</h1>
                    <h2 className="text-center font-mono text-xl uppercase mt-6">Signup</h2>
                </div>
                <div className="">
                    <Input type='text' placeholder='Enter your name' className= 'border-2 focus:border-black mt-6'/>
                </div>
                <div className="">
                    <Input type='email' placeholder='Enter your email' className= 'border-2 focus:border-black mt-6'/>
                </div>
                <div className="">
                    <Input type='password' placeholder='Enter your password' className= ' border-2 focus:border-black mt-4'/>
                </div>
                <div className="">
                    <Input type='password' placeholder='Confirm password' className= ' border-2 focus:border-black mt-4'/>
                </div>
                <div className="flex items-center justify-center w-full">
                    <div className="w-4/6">
                        <Button 
                        bgColor="bg-slate-900"
                        textColor="text-white"
                        className="mt-4 w-full hover:bg-slate-700 duration-200 text-sm"
                        >
                            Signup
                        </Button>
                        <Button 
                        bgColor="bg-slate-900"
                        textColor="text-white"
                        className="mt-4 w-full hover:bg-slate-700 duration-200 text-sm"
                        >
                            Signup with Google
                        </Button>
                        <p className="text-sm mt-4 text-center">Already a user?
                            <span>
                                <Button
                                onClick={() => navigate('/')}
                                bgColor="bg-none" textColor="text-indigo-500"
                                className="!py-0 !px-1"
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