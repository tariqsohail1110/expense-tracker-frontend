import { useRef } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { Button, Input, Dropdown } from '../index.js';
import { useForm } from 'react-hook-form';
import { numberRegex } from '../../common/constants.js';
import api from '../../config/axios.config.js';

function EditExpenseModal({ isOpen = true, onClose, url, id }) {
    if (!isOpen) return null;
    const cats = ['Food', 'Transport', 'Shopping', 'Health', 'Entertainment', 'Bills', 'Others'];
    const modalRef = useRef();
        const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm();

    const closeModal = (e) => {
        if(modalRef.current === e.target) {
            onClose();
        }
    }

    const onSubmit = async (data) => {
        const payload = Object.fromEntries(
            Object.entries(data)
            .filter(([_, value]) => value !== '' && value !== null && value !== undefined && !Number.isNaN(value))
        );
        if(payload.title) {
            if (numberRegex.test(data.title)) {
                setError('title', { message: 'Title cannot be a number'})
            }
        }
        if (payload.amount) {
            if (!numberRegex.test(data.amount)) {
                setError('amount', { message: 'Numbers only'})
            }
        }
        try{
            await api.patch(`${url}/${id}`, payload);
            onClose();
            window.location.reload();
        }
        catch(error) {
            setError('date', { message: error.message});
        }
    };

    return createPortal(
        <div ref={modalRef} onClick={closeModal} className='fixed inset-0 z-[100] bg-black/40       backdrop-blur-sm text-zinc-900 dark:text-white flex justify-center items-center p-4'>
            <form onSubmit={handleSubmit(onSubmit)} className='rounded-lg shadow-xl text-zinc-900 bg-white p-6 dark:bg-zinc-700 dark:text-white duration-500 w-full max-w-xl space-y-4'>
                <div className='flex justify-between items-center pb-2 border-b dark:border-zinc-600'>
                    <h1 className='font-bold text-lg font-sans'>
                        Edit Expense
                    </h1>
                    <Button 
                        onClick={onClose}
                        className='!p-0 bg-transparent hover:bg-transparent'
                    >
                        <X size={20} className='text-zinc-900 dark:text-white duration-500' />
                    </Button>
                </div>
                
                <Input
                    {...register('title', { required: false, maxLength: {
                        value: 100, message: 'Title cannot be more than 100 letters'
                    }})}
                    label='title' 
                    type='text' 
                    placeholder='Grocery' 
                    className='border-2 focus:border-black duration-500 dark:bg-zinc-700 dark:border-zinc-600 dark:focus:bg-zinc-700 dark:text-white dark:focus:border-zinc-800' 
                />
                {errors.title && <p className="text-red-500 text-xs mt-1 ml-1">{errors.title.message}</p>}
                
                <Input
                    {...register('amount', { valueAsNumber: true, required: false})}
                    label='amount spent' 
                    type='number' 
                    placeholder='1500' 
                    className='border-2 focus:border-black duration-500 dark:bg-zinc-700 dark:border-zinc-600 dark:focus:bg-zinc-700 dark:text-white dark:focus:border-zinc-800' 
                />
                {errors.amount && <p className="text-red-500 text-xs mt-1 ml-1">{errors.amount.message}</p>}
                
                <Dropdown
                    {...register('category')}
                    label='category' 
                    categories={cats} 
                />
                
                <Input
                    {...register('date', { required: false })}
                    label='date' 
                    type='date' 
                    placeholder='Date' 
                    className='border-2 focus:border-black duration-500 dark:bg-zinc-700 dark:border-zinc-600 dark:focus:bg-zinc-700 dark:text-white dark:focus:border-zinc-800' 
                />
                {errors.date && <p className="text-red-500 text-xs mt-1 ml-1">{errors.date.message}</p>}
                
                <Button
                    type='submit'
                    bgColor='bg-slate-900'
                    textColor='text-white'
                    className='w-full font-bold hover:bg-slate-800 duration-200 hover:duration-200 dark:bg-lime-600 dark:hover:bg-lime-500 dark:text-zinc-900 flex gap-1 justify-center items-center !mt-6'
                >
                    Update
                </Button>
            </form>
        </div>,
        document.body
    );
}

export default EditExpenseModal;