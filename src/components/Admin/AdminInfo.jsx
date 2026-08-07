import React from 'react'

function AdminInfo({text, number}) {
    return (
        <>
            <div className='rounded-lg shadow-lg text-zinc-900 bg-white p-6 duration-500 dark:bg-zinc-700 mt-6 lg:m-0'>
                <h1 className='font-mono text-xs duration-500 dark:text-white'>{text}</h1>
                <h1 className='text-3xl font-sans font-bold mt-4 duration-500 dark:text-white'>{number}</h1>
            </div>
        </>
    )
}

export default AdminInfo
