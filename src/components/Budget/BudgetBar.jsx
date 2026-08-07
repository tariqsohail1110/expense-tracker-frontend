import React from 'react'
import { Button } from '../index.js';
import { Edit, Trash } from 'lucide-react';

function BudgetBar({text, per, budget=0, spent=0, rem=0, rem_days=0}) {
    const getProgressByPer = (percentage) => {
            const parsed_per = parseInt(percentage);
            if (parsed_per >= 75) return 'bg-red-500';
            else if (parsed_per >= 30) return 'bg-yellow-500';
            else return 'bg-emerald-500';
    }
    return (
        <>
        <div className='rounded-lg shadow-lg text-zinc-900 bg-white p-6 duration-500 dark:bg-zinc-700'>
            <div className="flex justify-between mb-2">
                <h1 className="font-mono text-sm font-medium text-body duration-500 dark:text-white">{text}</h1>
                <div className='grid grid-cols-2 gap-4'>
                    <div >
                        <Button 
                            textColor='text-emerald-500' 
                            bgColor='' 
                            rounded='' 
                            className='w-full !p-0 hover:text-emerald-800 duration-200 dark:text-lime-500 dark:hover:text-lime-300'
                        >
                            <Edit/>
                        </Button>
                    </div>
                    <div>
                        <Button 
                            textColor='text-red-500' 
                            bgColor='' 
                            rounded='!rounded-3xl' 
                            className='w-full !p-0 hover:text-red-800 duration-200 dark:hover:text-red-300'
                        >
                            <Trash/>
                        </Button>
                    </div>
                </div>
            </div>
            <div className='my-2'>
                <span className='text-3xl font-bold text-zinc-900 duration-500 dark:text-white'>{budget}</span>
            </div>
            <div>
                <span className='font-mono text-sm font-medium text-body duration-500 dark:text-white'>{`Remianing Days: ${rem_days}`}</span>
            </div>
            <div className='my-2 text-right'>
                {/* <span className='font-mono text-sm font-medium text-body'>{`Spent ${spent}`}</span> */}
                <span className="font-mono text-sm font-medium text-body duration-500 dark:text-white">{per}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
                <div className={`${getProgressByPer(per)} h-2 rounded-full`} style={{width: `${per}%`}}>
                </div>
            </div>
            <div className='md:grid md:grid-cols-2 md:gap-4 mt-5 mb-2'>
                {/* <div className='cols-span-2 bg-gray-100 rounded-lg text-zinc-900 px-4 pt-3'>
                    <h1 className='font-mono text-sm font-medium text-body'>Total Budget</h1>
                    <h1 className='text-lg font-bold my-2'>{budget}</h1>
                </div> */}
                <div className='md:cols-span-2 bg-gray-100 rounded-lg text-zinc-900 px-4 pt-3
                duration-500 dark:text-white dark:bg-zinc-500 pb-1 md:pb-0'>
                    <h1 className='font-mono text-sm font-medium text-body'>Spent</h1>
                    <h1 className='text-lg font-bold my-2'>{spent}</h1>
                </div>
                <div className='md:cols-span-2 bg-gray-100 rounded-lg text-zinc-900 px-4 pt-3
                duration-500 dark:text-white dark:bg-zinc-500 pb-1 md:pb-0 mt-5 md:m-0'>
                    <h1 className='font-mono text-sm font-medium text-body'>Remaining</h1>
                    <h1 className='text-lg font-bold my-2'>{rem}</h1>
                </div>
            </div>
        </div>
        </>
    )
}

export default BudgetBar
