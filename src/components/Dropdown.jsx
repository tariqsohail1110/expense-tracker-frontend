import React, { useState, useId } from 'react'

function Dropdown({label, categories, className = '', containerClassName = '', ...props}, ref) {
    const id = useId();
    const [selectedCat, setSelectedCat] = useState(categories[0] || '');

    const handleChange = (e) => {
        setSelectedCat(e.target.value);
    };

    return (
        <div className={`w-full font-sans text-sm ${containerClassName}`}>
            {label && (
                <label htmlFor={id} className='inline-block mb-1 font-medium capitalize text-zinc-700 dark:text-zinc-200'>
                    {label}
                </label>
            )}
            <select 
                id={id}
                ref={ref}
                className={`border-2 h-10 w-full px-2 rounded-lg focus:border-black duration-500 dark:bg-zinc-700 dark:border-zinc-600 dark:focus:bg-zinc-700 dark:text-white dark:focus:border-zinc-800 ${className}`} 
                {...props}
                value={selectedCat} 
                onChange={handleChange}
            >
                {categories.map((cat, index) => {
                    return <option key={cat || index} className='text-xs' value={cat}
                    >{cat}</option>
                })}
            </select>
        </div>
    )
}

export default React.forwardRef(Dropdown);