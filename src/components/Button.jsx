import React from 'react'

function Button({
    children, 
    type = 'button',
    bgColor = 'bg-blue-600',
    textColor = 'text-white',
    rounded = 'rounded-lg',
    className = '',
    ...props
}) {
    return (
        <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${rounded} ${className}`} {...props}>
            {children}
        </button>
    )
}

export default Button