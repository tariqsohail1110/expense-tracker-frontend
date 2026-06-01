import React from 'react'

function Info({text, amount}) {
    return (
        <>
            <div className='rounded-lg border shadow-lg text-zinc-900 bg-white p-6'>
                <h1 className='font-mono text-xs'>{text}</h1>
                <h1 className='text-3xl font-sans font-bold mt-4'>{amount}</h1>
            </div>
        </>
    )
}

export default Info
