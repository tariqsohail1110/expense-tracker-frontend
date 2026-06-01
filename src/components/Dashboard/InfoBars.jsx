import React from 'react'

function InfoBars() {
    return (
        <>  
            <div className='rounded-lg border shadow-lg text-zinc-900 bg-white p-6'>
                <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-body">Flowbite</span>
                    <span className="text-sm font-medium text-body">45%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-black h-2 rounded-full w-[45%]"></div>
            </div>
            </div>
        </>
    )
}

export default InfoBars
