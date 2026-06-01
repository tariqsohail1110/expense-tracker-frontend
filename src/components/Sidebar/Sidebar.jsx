import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Logo } from '../index.js';

function Sidebar() {
    return (
        <>
            <aside className='w-64 h-screen overflow-y-auto px-4 py-6 flex flex-col gap-4 border-r'>
                <div className='h-full flex flex-col'>
                    <div className='border-b pb-6'>
                        {/* <Link> */}
                            <Logo/> 
                            <h1 className='mx-auto font-bold text-lg mt-2'>Vault Finance</h1>
                        {/* </Link> */}
                    </div>
                    <div className='block'>
                        <ul className='mt-10'>
                            <li className='flex gap-3 py-auto mt-1 font-medium text-sm text-zinc-700 hover:bg-gray-100 rounded-lg p-2 duration-200 hover:duration-200'>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-5 h-5"
                                    >
                                    <rect x="3" y="3" width="7" height="7" rx="1" />
                                    <rect x="14" y="3" width="7" height="7" rx="1" />
                                    <rect x="3" y="14" width="7" height="7" rx="1" />
                                    <rect x="14" y="14" width="7" height="7" rx="1" />
                                </svg>
                                Dashboard
                            </li>
                            <li className='flex gap-3 py-auto mt-1 font-medium text-sm text-zinc-700 hover:bg-gray-100 rounded-lg p-2 duration-200 hover:duration-200'>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-5 h-5"
                                    >
                                    <path d="M3 17l6-6 4 4 8-8" />
                                    <path d="M15 7h6v6" />
                                </svg>
                                Transactions
                            </li>
                            <li className='flex gap-3 py-auto mt-1 font-medium text-sm text-zinc-700 hover:bg-gray-100 rounded-lg p-2 duration-200 hover:duration-200'>
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-5 h-5"
                                    >
                                    <path d="M12 2v20" />
                                    <path d="M17 6.5c0-2-2-3.5-5-3.5s-5 1.5-5 4 2 3 5 4 5 1 5 4-2 4-5 4-5-1.5-5-3.5" />
                                </svg>
                                Budgets
                            </li>
                            <li className='flex gap-3 py-auto mt-1 font-medium text-sm text-zinc-700 hover:bg-gray-100 rounded-lg p-2 duration-200 hover:duration-200'>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-5 h-5"
                                    >
                                    <path d="M6 20V10" />
                                    <path d="M12 20V4" />
                                    <path d="M18 20V14" />
                                </svg>
                                Analytics
                            </li>
                            <li className='flex gap-3 py-auto mt-1 font-medium text-sm text-zinc-700 hover:bg-gray-100 rounded-lg p-2 duration-200 hover:duration-200'>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-5 h-5"
                                    >
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                    <circle cx="10" cy="7" r="4" />
                                    <path d="M20 21v-2a4 4 0 0 0-3-3.87" />
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                </svg>
                                Admin
                            </li>
                        </ul>
                    </div>
                    <div className='mt-auto border-b pb-2'>
                        <Button className='w-full bg-slate-900 hover:bg-slate-800 duration-200 hover:duration-200'> + New Entry</Button>
                    </div>
                    <div className='block'>
                        <ul className='mt-10'>
                            <li className='flex gap-3 py-auto mt-1 font-medium text-sm text-zinc-700 hover:bg-gray-100 rounded-lg p-2 duration-200 hover:duration-200'>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-5 h-5"
                                    >
                                    <path d="M20 21a8 8 0 0 0-16 0" />
                                    <circle cx="12" cy="8" r="4" />
                                </svg>
                                Account
                            </li>
                            <li className='flex gap-3 py-auto mt-1 font-medium text-sm text-zinc-700 hover:bg-gray-100 rounded-lg p-2 duration-200 hover:duration-200'>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-5 h-5"
                                    >
                                    <path d="M10 17H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                                    <path d="M15 16l5-4-5-4" />
                                    <path d="M20 12H9" />
                                </svg>
                                Sign Out
                            </li>
                        </ul>
                    </div>
                </div>
            </aside>
        </>
    )
}

export default Sidebar;