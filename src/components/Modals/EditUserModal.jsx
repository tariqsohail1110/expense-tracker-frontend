import React, { useRef } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { Button, Input, Dropdown } from '../index.js';

function EditUserModal({ isOpen = true, onClose }) {
    if (!isOpen) return null;

    const modalRef = useRef();

    const closeModal = (e) => {
        if(modalRef.current === e.target) {
            onClose();
        }
    }

    const cats = ['Active', 'Inactive'];

    return createPortal(
        <div ref={modalRef} onClick={closeModal} className='fixed inset-0 z-[100] bg-black/40       backdrop-blur-sm text-zinc-900 dark:text-white flex justify-center items-center p-4'>
            <div className='rounded-lg shadow-xl text-zinc-900 bg-white p-6 dark:bg-zinc-700 dark:text-white duration-500 w-full max-w-xl space-y-4'>
                <div className='flex justify-between items-center pb-2 border-b dark:border-zinc-600'>
                    <h1 className='font-bold text-lg font-sans'>
                        Edit User
                    </h1>
                    <Button 
                        onClick={onClose}
                        className='!p-0 bg-transparent hover:bg-transparent'
                    >
                        <X size={20} className='text-zinc-900 dark:text-white duration-500' />
                    </Button>
                </div>
                
                <div className='md:flex md:gap-2'>
                    <Input 
                        label='first name' 
                        type='text' 
                        placeholder='John' 
                        className='border-2 focus:border-black duration-500 dark:bg-zinc-700 dark:border-zinc-600 dark:focus:bg-zinc-700 dark:text-white dark:focus:border-zinc-800 mb-4 md:mb-0' 
                    />
                    
                    <Input 
                        label='last name' 
                        type='text' 
                        placeholder='Doe' 
                        className='border-2 focus:border-black duration-500 dark:bg-zinc-700 dark:border-zinc-600 dark:focus:bg-zinc-700 dark:text-white dark:focus:border-zinc-800' 
                    />
                </div>

                <Input 
                    label='email' 
                    type='email' 
                    placeholder='johnd@mail.com' 
                    className='border-2 focus:border-black duration-500 dark:bg-zinc-700 dark:border-zinc-600 dark:focus:bg-zinc-700 dark:text-white dark:focus:border-zinc-800' 
                />
                
                <Dropdown 
                    label='status' 
                    categories={cats} 
                />
                
                <Button
                    onClick={() => onClose(false)}
                    bgColor='bg-slate-900'
                    textColor='text-white'
                    className='w-full font-bold hover:bg-slate-800 duration-200 hover:duration-200 dark:bg-lime-600 dark:hover:bg-lime-500 dark:text-zinc-900 flex gap-1 justify-center items-center !mt-6'
                >
                    Update
                </Button>
            </div>
        </div>,
        document.body
    );
}

export default EditUserModal;