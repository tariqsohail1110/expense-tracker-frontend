import { useNavigate } from "react-router-dom";
import { Input, Button } from "../index.js"

function OtpComponent() {
    const navigate = useNavigate();
    return (
        <>
            <div className="bg-white rounded-lg w-full max-w-xl p-5">
                <div>
                    <h1 className="text-center font-sans text-4xl font-semibold">Vault Finance</h1>
                    <p className="text-center font-sans text-xs">Your personal expense manager</p>
                    <h2 className="text-center font-mono text-xl uppercase mt-6">Verify Otp</h2>
                </div>
                <div className="">
                    <Input type='text' placeholder='000000' className= ' border-2 focus:border-black mt-4 text-center font-bold text-4xl'/>
                </div>
                <div className="flex items-center justify-center w-full">
                    <div className="w-4/6">
                        <Button 
                        onClick={() => navigate('/app/dashboard')}
                        bgColor="bg-slate-900"
                        textColor="text-white"
                        className="mt-4 w-full hover:bg-slate-700 duration-200 text-sm"
                        >
                            Verify
                        </Button>
                        <p className="text-sm mt-4 text-center">
                            <span>
                                <Button
                                onClick={() => navigate('/')}
                                bgColor="bg-none" textColor="text-emerald-500"
                                className="!py-0 !px-1 font-bold"
                                >
                                    Go Back
                                </Button>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OtpComponent