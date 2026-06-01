import React from 'react'

function Header() {
    return (
        <>
        <header className="h-[50px] font-sans border-b">
            <div className='grid gap-4 sm:grid-cols-12 mt-4'>
                <div className=''>
                    <ul className='flex gap-10 items-center font-sans font-bold text-md ml-10'>
                        <li className='font-medium text-zinc-700 text-sm hover:text-gray-500 duration-200'>Home</li>
                        <li className='font-medium text-zinc-700 text-sm hover:text-gray-500 duration-200'>Transactions</li>
                        <li className='font-medium text-zinc-700 text-sm hover:text-gray-500 duration-200'>Budget</li>
                    </ul>
                </div>
            </div>
        </header>
        </>
    )
}

export default Header
