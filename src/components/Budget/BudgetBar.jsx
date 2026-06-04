import React from 'react'
import { Button } from '../index.js'

function BudgetBar({text, per, budget=0, spent=0, rem=0, rem_days=0}) {
    const getProgressByPer = (percentage) => {
            const parsed_per = parseInt(percentage);
            if (parsed_per >= 75) return 'bg-red-500';
            else if (parsed_per >= 30) return 'bg-yellow-500';
            else return 'bg-emerald-500';
    }
    return (
        <>
        <div className='rounded-lg border shadow-lg text-zinc-900 bg-white p-6'>
            <div className="flex justify-between mb-2">
                <h1 className="font-mono text-sm font-medium text-body">{text}</h1>
                <div className='grid grid-cols-2 gap-2'>
                    <div >
                        <Button 
                            textColor='text-emerald-500' 
                            bgColor='bg-emerald-100' 
                            rounded='!rounded-3xl' 
                            className='w-full border-2 border-emerald-500 hover:bg-emerald-500 hover:text-white duration-200 text-xs'
                        >
                            Edit
                        </Button>
                    </div>
                    <div>
                        <Button 
                            textColor='text-red-500' 
                            bgColor='bg-red-100' 
                            rounded='!rounded-3xl' 
                            className='w-full border-2 border-red-500 hover:bg-red-500 hover:text-white duration-200 text-xs'
                        >
                            Delete
                        </Button>
                    </div>
                </div>
            </div>
            <div className='my-2'>
                <span className='text-3xl font-bold text-zinc-900'>{budget}</span>
            </div>
            <div>
                <span className='font-mono text-sm font-medium text-body'>{`Remianing Days: ${rem_days}`}</span>
            </div>
            <div className='my-2 flex justify-between'>
                <span className='font-mono text-sm font-medium text-body'>{`Spent ${spent}`}</span>
                <span className="font-mono text-sm font-medium text-body">{per}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
                <div className={`${getProgressByPer(per)} h-2 rounded-full`} style={{width: `${per}%`}}>
                </div>
            </div>
            <div className='grid grid-cols-3 gap-4 mt-5 mb-2'>
                <div className='cols-span-2 bg-gray-100 rounded-lg text-zinc-900 px-4 pt-3'>
                    <h1 className='font-mono text-sm font-medium text-body'>Total Budget</h1>
                    <h1 className='text-lg font-bold my-2'>{budget}</h1>
                </div>
                <div className='cols-span-2 bg-gray-100 rounded-lg text-zinc-900 px-4 pt-3'>
                    <h1 className='font-mono text-sm font-medium text-body'>Spent</h1>
                    <h1 className='text-lg font-bold my-2'>{spent}</h1>
                </div>
                <div className='cols-span-2 bg-gray-100 rounded-lg text-zinc-900 px-4 pt-3'>
                    <h1 className='font-mono text-sm font-medium text-body'>Remaining</h1>
                    <h1 className='text-lg font-bold my-2'>{rem}</h1>
                </div>
            </div>
        </div>
        </>
    )
}

export default BudgetBar
