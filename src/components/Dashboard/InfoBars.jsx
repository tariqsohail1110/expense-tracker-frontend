import React from 'react'

function InfoBars({text, per, spent='0'}) {
    const getProgressByPer = (percentage) => {
        const parsed_per = parseInt(percentage);
        if (parsed_per >= 75) return 'bg-red-500';
        else if (parsed_per >= 30) return 'bg-yellow-500';
        else return 'bg-emerald-500';
    }
    return (
        <>  
            <div className='rounded-lg border shadow-lg text-zinc-900 bg-white p-6'>
                <div className="flex justify-between mb-2">
                    <span className="font-mono text-sm font-medium text-body">{text}</span>
                    <span className="font-mono text-sm font-medium text-body">{per}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className={`${getProgressByPer(per)} h-2 rounded-full`} style={{width: `${per}%`}}>
                    </div>
                </div>
                <div className='mt-2'>
                    <span className='font-mono text-sm font-medium text-body'>{`Spent ${spent}`}</span>
                </div>
            </div>
        </>
    )
}

export default InfoBars
