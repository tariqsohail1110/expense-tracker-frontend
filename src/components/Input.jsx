import React, { useId } from 'react'

function Input ({
    label,
    type = 'text',
    placeholder = '',
    className = '',
    containerClassName = '',
    ...props }, ref){
        const id = useId();
        return (
            <div className={`w-full font-sans text-sm ${containerClassName}`}>
                {label && (
                    <label htmlFor={id} className='inline-block mb-1 font-medium capitalize text-zinc-700 dark:text-zinc-200'>
                        {label}    
                    </label>
                )}
                <input
                    type={type}
                    className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full font-sans ${className}`}
                    placeholder={placeholder}
                    ref={ref}
                    {...props}
                    id={id}
                />
            </div>
        );
    };

export default React.forwardRef(Input);