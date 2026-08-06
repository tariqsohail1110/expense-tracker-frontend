import React from 'react';
import { Logo, Button, ThemeButton } from '../index.js';
import { Menu, User } from 'lucide-react';
import { Link } from 'react-router-dom';

function Header({ onMenuClick }) {
    return (
        <header className='lg:hidden flex items-center px-4 h-16 bg-white border-b dark:bg-zinc-700 dark:border-zinc-600 duration-500 relative z-30'>
            <Button
                bgColor='bg-transparent'
                textColor='text-zinc-900'
                className='dark:text-white !p-2 hover:bg-gray-100 dark:hover:bg-zinc-600 rounded-lg transition-colors absolute left-4 border border-gray-200 dark:border-zinc-600'
                onClick={onMenuClick}
                aria-label="Open navigation menu"
            >
                <Menu size={24} />
            </Button>

            <div className='flex items-center justify-center gap-2 w-full px-12'>
                <Logo />
                <h1 className='font-bold text-lg dark:text-white font-sans'>Vault Finance</h1>
            </div>

            <div className='absolute right-4 flex items-center gap-1'>
                <ThemeButton className="text-zinc-900 dark:text-white p-2 hover:bg-gray-100 dark:hover:bg-zinc-600 rounded-lg transition-colors" />
                <Link
                    to="/app/myaccount"
                    className="text-zinc-900 dark:text-white p-2 hover:bg-gray-100 dark:hover:bg-zinc-600 rounded-lg transition-colors"
                    aria-label="Account Settings"
                >
                    <User size={20} />
                </Link>
            </div>
        </header>
    );
}

export default Header;