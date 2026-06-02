import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <>
            <header className="h-[65px] font-sans border-b px-6">
                <div className='grid gap-4 grid-cols-2 mt-5'>
                    <div className='cols-span-6'>
                        <ul className='flex gap-10 items-center font-sans font-bold text-md'>
                            <li>
                                <NavLink
                                to='/dashboard'
                                className={({isActive}) => 
                                `font-medium text-sm hover:text-gray-500 duration-200
                                ${isActive ? 'text-black font-extrabold' :  'text-zinc-700 font-medium' }`}>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to='/transactions'
                                className={({isActive}) => 
                                `font-medium text-sm hover:text-gray-500 duration-200
                                ${isActive ? 'text-black font-extrabold' :  'text-zinc-700 font-medium' }`}>
                                    Transactions
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to='/budget'
                                className={({isActive}) => 
                                `font-medium text-sm hover:text-gray-500 duration-200
                                ${isActive ? 'text-black font-extrabold' :  'text-zinc-700 font-medium' }`}>
                                    Budget
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
