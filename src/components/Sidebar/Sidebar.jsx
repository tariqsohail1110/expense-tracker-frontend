import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { Button, Logo, ThemeButton, CreateExpenseModal } from '../index.js';
import { Plus, X, ChevronLeft, User } from 'lucide-react';

function Sidebar({ isOpen, onClose }) {
    const [showModal, setShowModal] = useState(false);
    const username = localStorage.getItem('username') || 'Muhammad Tariq';
    const [isCollapsed, setIsCollapsed] = useState(() => {
        const saved = localStorage.getItem('sidebar_collapsed');
        return saved ? JSON.parse(saved) : false;
    });

    const toggleCollapse = () => {
        setIsCollapsed(prev => {
            const next = !prev;
            localStorage.setItem('sidebar_collapsed', JSON.stringify(next));
            return next;
        });
    };

    const navItems = [
        {
            to: 'dashboard',
            label: 'Dashboard',
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5 flex-shrink-0"
                >
                    <rect x="3" y="3" width="7" height="7" rx="1" />
                    <rect x="14" y="3" width="7" height="7" rx="1" />
                    <rect x="3" y="14" width="7" height="7" rx="1" />
                    <rect x="14" y="14" width="7" height="7" rx="1" />
                </svg>
            )
        },
        {
            to: 'transactions',
            label: 'Transactions',
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5 flex-shrink-0"
                >
                    <path d="M3 17l6-6 4 4 8-8" />
                    <path d="M15 7h6v6" />
                </svg>
            )
        },
        {
            to: 'budget',
            label: 'Budget',
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5 flex-shrink-0"
                >
                    <path d="M12 2v20" />
                    <path d="M17 6.5c0-2-2-3.5-5-3.5s-5 1.5-5 4 2 3 5 4 5 1 5 4-2 4-5 4-5-1.5-5-3.5" />
                </svg>
            )
        },
        {
            to: 'admin',
            label: 'Admin',
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5 flex-shrink-0"
                >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="10" cy="7" r="4" />
                    <path d="M20 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
            )
        }
    ];

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
                fixed inset-y-0 left-0 z-50 bg-white dark:bg-zinc-700 shadow-xl lg:shadow-none
                flex flex-col gap-4 border-r transition-all duration-300 ease-in-out transform dark:border-none py-6
                ${isOpen ? 'translate-x-0' : '-translate-x-full'}
                lg:translate-x-0 lg:static lg:h-screen lg:overflow-y-auto lg:overflow-x-hidden lg:flex lg:flex-col lg:border-r lg:dark:bg-zinc-700 lg:dark:border-none
                ${isCollapsed ? 'w-64 lg:w-20 px-3' : 'w-64 px-4'}
            `}>
                <div className='h-full flex flex-col justify-between'>
                    <div>
                        {/* Header container */}
                        <div className='border-b pb-4 dark:border-zinc-600 relative'>
                            {/* Desktop header with logo and collapse toggle */}
                            <div className={`hidden lg:flex items-center ${isCollapsed ? 'flex-col gap-3 justify-center' : 'justify-between'}`}>
                                <div className="flex items-center gap-3 overflow-hidden">
                                    <div className="flex-shrink-0">
                                        <Logo />
                                    </div>
                                    {!isCollapsed && (
                                        <h1 className='font-bold text-lg whitespace-nowrap transition-opacity duration-300 dark:text-white font-sans'>
                                            Vault Finance
                                        </h1>
                                    )}
                                </div>
                                <button
                                    onClick={toggleCollapse}
                                    className="p-1.5 rounded-lg text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-600 transition-colors focus:outline-none"
                                    title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
                                    aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
                                >
                                    <ChevronLeft size={20} className={`transform transition-transform duration-300 ${isCollapsed ? 'rotate-180' : ''}`} />
                                </button>
                            </div>

                            {/* Mobile and tablet header with username instead of logo */}
                            <div className="flex lg:hidden justify-between items-center">
                                <div className="flex items-center gap-3 overflow-hidden pr-2">
                                    <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-lime-600/20 text-emerald-800 dark:text-lime-400 flex items-center justify-center font-bold text-sm flex-shrink-0 border border-emerald-300 dark:border-lime-500/40">
                                        <User size={18} />
                                    </div>
                                    <div className="flex flex-col min-w-0">
                                        <span className="text-[10px] uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-semibold">Signed in as</span>
                                        <span className="font-bold text-sm text-zinc-900 dark:text-white truncate">
                                            {username}
                                        </span>
                                    </div>
                                </div>
                                <button 
                                    className="p-1.5 rounded-lg text-zinc-500 hover:text-zinc-700 hover:bg-gray-100 dark:text-zinc-400 dark:hover:text-zinc-200 dark:hover:bg-zinc-600 transition-colors flex-shrink-0"
                                    onClick={onClose}
                                    aria-label="Close sidebar"
                                >
                                    <X size={20} />
                                </button>
                            </div>
                        </div>

                        {/* Navigation menu */}
                        <ul className='mt-5 flex flex-col gap-1'>
                            {navItems.map((item) => (
                                <li key={item.to}>
                                    <NavLink
                                        to={item.to}
                                        title={isCollapsed ? item.label : undefined}
                                        className={({ isActive }) =>
                                            `flex items-center font-medium text-sm rounded-lg py-3 px-3 duration-200 ${
                                                isCollapsed ? 'lg:justify-center' : 'gap-3 justify-start'
                                            } ${
                                                isActive
                                                    ? 'text-emerald-800 bg-emerald-300 !font-extrabold dark:bg-lime-600 dark:text-zinc-900'
                                                    : 'text-zinc-700 hover:bg-gray-100 bg-transparent dark:text-white dark:hover:bg-zinc-600'
                                            }`
                                        }
                                    >
                                        {item.icon}
                                        <span className={`whitespace-nowrap transition-all duration-300 ${isCollapsed ? 'lg:hidden' : 'block'}`}>
                                            {item.label}
                                        </span>
                                    </NavLink>
                                </li>
                            ))}
                            <li className='mt-1 lg:hidden'>
                                <NavLink
                                    className='flex gap-3 items-center justify-start font-medium text-sm text-zinc-700 hover:bg-gray-100 rounded-lg py-3 px-3 duration-200 dark:text-white dark:hover:bg-zinc-600 w-full'
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
                                        className="w-5 h-5 flex-shrink-0"
                                    >
                                        <path d="M10 17H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                                        <path d="M15 16l5-4-5-4" />
                                        <path d="M20 12H9" />
                                    </svg>
                                    <span>Sign Out</span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    <div>
                        {/* New Entry Button */}
                        <div className='hidden lg:block border-b pb-4 pt-2 dark:border-zinc-600 mb-2'>
                            <Button
                                onClick={() => setShowModal(true)}
                                bgColor='bg-slate-900'
                                textColor='text-white'
                                title={isCollapsed ? "New Entry" : undefined}
                                className={`w-full font-bold hover:bg-slate-800 duration-200 text-medium dark:bg-lime-600 dark:hover:bg-lime-500 dark:text-zinc-900 flex items-center justify-center ${
                                    isCollapsed ? 'p-2.5 rounded-lg' : 'gap-2 px-4 py-2.5'
                                }`}
                            >
                                <Plus size={20} className="flex-shrink-0" />
                                {!isCollapsed && <span className="whitespace-nowrap">New Entry</span>}
                            </Button>
                        </div>

                        {/* Bottom Actions */}
                        <div className='hidden lg:block mb-3'>
                            <ul className='flex flex-col gap-1'>
                                <li>
                                    <NavLink
                                        className={({ isActive }) =>
                                            `flex items-center font-medium text-sm text-zinc-700 hover:bg-gray-100 rounded-lg py-3 px-3 duration-200 dark:text-white dark:hover:bg-zinc-600 w-full ${
                                                isCollapsed ? 'lg:justify-center' : 'gap-3 justify-start'
                                            } ${isActive ? 'bg-gray-100 dark:bg-zinc-600' : ''}`
                                        }
                                        to={'/app/myaccount'}
                                        title={isCollapsed ? "Account Settings" : undefined}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="w-5 h-5 flex-shrink-0"
                                        >
                                            <path d="M20 21a8 8 0 0 0-16 0" />
                                            <circle cx="12" cy="8" r="4" />
                                        </svg>
                                        {!isCollapsed && <span className="whitespace-nowrap">Account Settings</span>}
                                    </NavLink>
                                </li>
                                <li>
                                    <div title={isCollapsed ? "Switch Theme" : undefined}>
                                        <ThemeButton
                                            className={`flex items-center font-medium text-sm text-zinc-700 hover:bg-gray-100 rounded-lg py-3 px-3 duration-200 dark:text-white dark:hover:bg-zinc-600 w-full ${
                                                isCollapsed ? 'lg:justify-center' : 'gap-3 justify-start'
                                            }`}
                                        >
                                            {!isCollapsed && <span className="whitespace-nowrap">Switch Theme</span>}
                                        </ThemeButton>
                                    </div>
                                </li>
                                <li>
                                    <NavLink
                                        className={`flex items-center font-medium text-sm text-zinc-700 hover:bg-gray-100 rounded-lg py-3 px-3 duration-200 dark:text-white dark:hover:bg-zinc-600 w-full ${
                                            isCollapsed ? 'lg:justify-center' : 'gap-3 justify-start'
                                        }`}
                                        to={'/'}
                                        title={isCollapsed ? "Sign Out" : undefined}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="w-5 h-5 flex-shrink-0"
                                        >
                                            <path d="M10 17H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                                            <path d="M15 14l5-4-5-4" />
                                            <path d="M20 10H9" />
                                        </svg>
                                        {!isCollapsed && <span className="whitespace-nowrap">Sign Out</span>}
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {showModal && <CreateExpenseModal onClose={() => setShowModal(false)}/>}
            </aside>
        </>
    );
}

export default Sidebar;
