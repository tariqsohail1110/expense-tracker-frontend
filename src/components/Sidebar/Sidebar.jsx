import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { Button, Logo, ThemeButton, CreateExpenseModal } from '../index.js';
import { Plus, X } from 'lucide-react';

function Sidebar({ isOpen, onClose }) {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            {/* Backdrop overlay for mobile */}
            <div 
                className={`fixed inset-0 z-40 bg-black/50 lg:hidden transition-opacity duration-300 ${
                    isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}
                onClick={onClose}
            />

            <aside className={`
                fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-zinc-700 shadow-xl lg:shadow-none
                flex flex-col gap-4 border-r duration-300 ease-in-out transform dark:border-none px-4 py-6
                ${isOpen ? 'translate-x-0' : '-translate-x-full'}
                lg:translate-x-0 lg:static lg:h-screen lg:w-64 lg:overflow-y-auto lg:flex lg:flex-col lg:border-r lg:duration-500 lg:dark:bg-zinc-700 lg:dark:border-none
            `}>
                <div className='h-full flex flex-col'>
                    <div className='lg:border-b lg:pb-6 duration-500 lg:dark:border-zinc-600 flex justify-end lg:block relative'>
                        <div className="hidden lg:block">
                            <Logo/> 
                            <h1 className='font-bold text-lg mt-2 duration-500 dark:text-white font-sans'>Vault Finance</h1>
                        </div>
                        {/* Close button for mobile */}
                        <button 
                            className="lg:hidden p-1.5 rounded-lg text-zinc-500 hover:text-zinc-700 hover:bg-gray-100 dark:text-zinc-400 dark:hover:text-zinc-200 dark:hover:bg-zinc-600 transition-colors"
                            onClick={onClose}
                            aria-label="Close sidebar"
                        >
                            <X size={20} />
                        </button>
                    </div>
                    <div className='block'>
                        <ul className='mt-5'>
                            <li className='mt-3 lg:mt-1'>
                                <NavLink 
                                to='dashboard'
                                className={({isActive}) =>
                                `flex gap-1 lg:gap-3 items-center justify-center lg:justify-start font-medium text-sm rounded-lg py-3 px-4 lg:p-2 duration-200
                                ${isActive ? 'text-emerald-800 bg-emerald-300 !font-extrabold dark:bg-lime-500 dark:text-zinc-900' : 'text-zinc-700 hover:bg-gray-100 bg-transparent dark:text-white dark:hover:bg-zinc-600'}`}>
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
                                </NavLink>
                            </li>
                            <li className='mt-3 lg:mt-1'>
                                <NavLink 
                                to='transactions'
                                className={({isActive}) =>
                                `flex gap-1 lg:gap-3 items-center justify-center lg:justify-start font-medium text-sm rounded-lg py-3 px-4 lg:p-2 duration-200 
                                ${isActive ? 'text-emerald-800 bg-emerald-300 !font-extrabold dark:bg-lime-500 dark:text-zinc-900' : 'text-zinc-700 hover:bg-gray-100 bg-transparent dark:text-white dark:hover:bg-zinc-600'}`}>
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
                                </NavLink>
                            </li>
                            <li className='mt-3 lg:mt-1'>
                                <NavLink 
                                to='budget'
                                className={({isActive}) =>
                                `flex gap-1 lg:gap-3 items-center justify-center lg:justify-start font-medium text-sm rounded-lg py-3 px-4 lg:p-2 duration-200 
                                ${isActive ? 'text-emerald-800 bg-emerald-300 !font-extrabold dark:bg-lime-500 dark:text-zinc-900' : 'text-zinc-700 hover:bg-gray-100 bg-transparent dark:text-white dark:hover:bg-zinc-600'}`}>
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
                                    Budget
                                </NavLink>
                            </li>
                            <li className='mt-3 lg:mt-1'>
                                <NavLink 
                                to='admin'
                                className={({isActive}) =>
                                `flex gap-1 lg:gap-3 items-center justify-center lg:justify-start font-medium text-sm rounded-lg py-3 px-4 lg:p-2 duration-200 
                                ${isActive ? 'text-emerald-800 bg-emerald-300 !font-extrabold dark:bg-lime-500 dark:text-zinc-900' : 'text-zinc-700 hover:bg-gray-100 bg-transparent dark:text-white dark:hover:bg-zinc-600'}`}>
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
                                </NavLink>
                            </li>
                            <li className='mt-3 lg:hidden'>
                                <NavLink
                                    className='flex gap-1 lg:gap-3 items-center justify-center font-medium text-sm text-zinc-700 hover:bg-gray-100 rounded-lg py-3 px-4 duration-200 hover:duration-200 dark:text-white dark:hover:bg-zinc-600 w-full'
                                    to={'/'}
                                >
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
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className='hidden lg:block mt-auto border-b pb-2 duration-500 dark:border-zinc-600'>
                        <Button
                            onClick={() => setShowModal(true)}
                            bgColor='bg-slate-900'
                            textColor='text-white'
                            className='w-full font-bold hover:bg-slate-800 duration-200 hover:duration-200 text-medium
                            dark:bg-lime-500 dark:hover:bg-lime-400 dark:text-zinc-900 flex gap-1 justify-center items-center'> 
                                <Plus size={20}/> New Entry
                        </Button>
                    </div>
                    <div className='hidden lg:block mt-auto lg:mt-0 mb-3'>
                        <ul className='mt-10'>
                            <li className='mt-3 lg:mt-1'>
                                <NavLink
                                    className='flex gap-3 items-center justify-center lg:justify-start font-medium text-sm text-zinc-700 hover:bg-gray-100 rounded-lg py-3 px-4 lg:p-2 duration-200 hover:duration-200 dark:text-white dark:hover:bg-zinc-600 w-full'
                                    to={'/app/myaccount'}
                                >
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
                                    Account Settings
                                </NavLink>
                            </li>
                            <li className='flex gap-3 justify-center lg:justify-start py-auto mt-3 lg:mt-1 font-medium text-sm text-zinc-700 hover:bg-gray-100 rounded-lg py-3 px-4 lg:p-2 duration-200 hover:duration-200 dark:text-white dark:hover:bg-zinc-600 w-full'>
                                <ThemeButton children={'Switch Theme'}/>
                            </li>
                            <li className='mt-3 lg:mt-1'>
                                <NavLink
                                    className='flex gap-3 items-center justify-center lg:justify-start font-medium text-sm text-zinc-700 hover:bg-gray-100 rounded-lg py-3 px-4 lg:p-2 duration-200 hover:duration-200 dark:text-white dark:hover:bg-zinc-600 w-full'
                                    to={'/'}
                                >
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
                                        <path d="M15 14l5-4-5-4" />
                                        <path d="M20 10H9" />
                                    </svg>
                                    Sign Out
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                {showModal && <CreateExpenseModal onClose={() => setShowModal(false)}/>}
            </aside>
        </>
    )
}

export default Sidebar;