import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <>
        <header className="h-[65px] font-sans border-b">
            <div className='grid gap-4 sm:grid-cols-12 mt-5'>
                <div className=''>
                    <ul className='flex gap-10 items-center font-sans font-bold text-md ml-10'>
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
