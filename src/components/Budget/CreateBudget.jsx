import React, { useState } from 'react';
import { Button, CreateBudgetModal } from '../index.js';

function CreateBudget() {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className='rounded-lg shadow-lg text-zinc-900 bg-white p-6 duration-500 dark:bg-zinc-700'>
            <div className="">
                <h1 className="font-sans text-md lg:text-xl text-center font-bold text-body duration-500 dark:text-white mb-6">You haven't initlialized your budget yet, kindly initialize it first</h1>
                <div className='flex items-center justify-center'>
                    <div className='w-1/6'>
                        <Button 
                        onClick={() => setShowModal(true)}
                        bgColor='bg-slate-900'
                        textColor='text-white'
                        className='w-full font-bold hover:bg-slate-800 duration-200 hover:duration-200
                        dark:bg-lime-600 dark:hover:bg-lime-500 dark:text-zinc-900'
                        >
                            Create Budget
                        </Button>
                    </div>
                </div>
            </div>
            {showModal && <CreateBudgetModal onClose={() => setShowModal(false)}/>}
        </div>
    )
}

export default CreateBudget