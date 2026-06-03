import React from 'react'

function AnalyticsInfo({text='dummy', amount='0', categories='none'}) {
    return (
        <>
            <div className='grid grid-cols-2 gap-4 rounded-lg border shadow-lg text-zinc-900 bg-white p-6'>
                <div className='cols-span-6'>
                    <h1 className='font-mono text-xs'>{text}</h1>
                    <h1 className='text-3xl font-sans font-bold mt-4'>{amount}</h1>
                </div>
                <div className='cols-span-6 ml-auto my-auto'>
                    <h1 className='font-mono text-xs'>{categories}</h1>
                </div>
            </div>
        </>
    )
}

export default AnalyticsInfo
