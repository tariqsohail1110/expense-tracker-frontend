import React from 'react'

function Logo({ width = '100px' }) {
    return (
        <svg
            viewBox='0 0 24 24'
            fill='none'
            stroke='white'
            strokeWidth='2.2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='w-8 h-8 bg-black p-1 rounded-lg'
        >
            <rect x="2" y="5" width="20" height="14" rx="2"/>
            <line x1="2" y1="10" x2="22" y2="10"/>
        </svg>
    )
}

export default Logo