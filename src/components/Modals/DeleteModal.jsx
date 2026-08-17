import React, { useRef } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { Button } from '../index.js';

function DeleteModal({ title = '', isOpen = true, onClose }) {
    if (!isOpen) return null;

    const modalRef = useRef();

    const closeModal = (e) => {
        if (modalRef.current === e.target) {
            onClose();
        }
    };

    return createPortal(
        <div ref={modalRef} onClick={closeModal} className='fixed inset-0 z-[100] bg-black/40       backdrop-blur-sm text-zinc-900 dark:text-white flex justify-center items-center p-4'>
            <div className='rounded-lg shadow-xl text-zinc-900 bg-white p-6 dark:bg-zinc-700 dark:text-white duration-500 w-full max-w-xl space-y-4'>
                <div className='flex justify-between items-center pb-2 border-b dark:border-zinc-600'>
                    <h1 className='font-bold text-lg font-sans'>
                        Delete {title}
                    </h1>
                    <Button
                        onClick={onClose}
                        className='!p-0 bg-transparent hover:bg-transparent'
                    >
                        <X size={20} className='text-zinc-900 dark:text-white duration-500' />
                    </Button>
                </div>
                <p className='text-lg text-zinc-900 dark:text-white font-semibold text-center font-sans'>This action cannot be undone</p>
                <Button
                    onClick={() => onClose(false)}
                    bgColor='bg-red-700'
                    textColor='text-white'
                    className='w-full font-bold duration-200 hover:duration-200 hover:bg-red-500 flex gap-1 justify-center items-center !mt-6'
                >
                    Delete
                </Button>
            </div>
        </div>,
        document.body
    );
}

export default DeleteModal;