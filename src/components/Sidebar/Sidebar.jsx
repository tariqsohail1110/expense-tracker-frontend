import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from '../index.js';

function Sidebar() {
    return (
        <>
            <aside className='w-64 h-screen overflow-y-auto px-4 py-6 flex flex-col gap-4 border-r'>
                <div className='h-full flex flex-col'>
                    <div className='border-b pb-6'>
                        <h1 className='mx-auto font-bold text-lg'>Vault Finance</h1>
                    </div>
                    <div className='block'>
                        <ul className='mt-10'>
                            <li className='mt-1 font-medium text-sm text-zinc-700 hover:bg-gray-100 rounded-lg p-2 duration-200'>Dashboard</li>
                            <li className='mt-1 font-medium text-sm text-zinc-700 hover:bg-gray-100 rounded-lg p-2 duration-200'>Transactions</li>
                            <li className='mt-1 font-medium text-sm text-zinc-700 hover:bg-gray-100 rounded-lg p-2 duration-200'>Budgets</li>
                            <li className='mt-1 font-medium text-sm text-zinc-700 hover:bg-gray-100 rounded-lg p-2 duration-200'>Analytics</li>
                            <li className='mt-1 font-medium text-sm text-zinc-700 hover:bg-gray-100 rounded-lg p-2 duration-200'>Admin</li>
                        </ul>
                    </div>
                    <div className='mt-auto border-b pb-2'>
                        <Button className='w-full bg-slate-900 hover:bg-slate-800 hover:duration-200'> + New Entry</Button>
                    </div>
                    <div className='block'>
                        <ul className='mt-10'>
                            <li className='mt-1 font-medium text-sm text-zinc-700 hover:bg-gray-100 rounded-lg p-2 duration-200'>Account</li>
                            <li className='mt-1 font-medium text-sm text-zinc-700 hover:bg-gray-100 rounded-lg p-2 duration-200'>Sign Out</li>
                        </ul>
                    </div>
                </div>
            </aside>
        </>
    )
}

export default Sidebar;