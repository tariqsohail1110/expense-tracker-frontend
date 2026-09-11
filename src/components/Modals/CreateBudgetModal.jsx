import { useRef } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { Button, Input } from '../index.js';
import { useForm } from 'react-hook-form';
import { numberRegex } from '../../common/constants.js';
import api from '../../config/axios.config.js';

function CreateBudgetModal({ isOpen = true, onClose, onSuccess }) {
    if (!isOpen) return null;
    const modalRef = useRef();
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },
    } = useForm();

    const closeModal = (e) => {
        if(modalRef.current === e.target) {
            onClose();
        }
    };

    const onSubmit = async (data) => {
        if (!numberRegex.test(data.budget)) {
            setError('budget', { message: 'Numbers only' });
            return;
        }
        try {
            await api.post('/api/v1/budget/', {
                totalBudget: Number(data.budget)
            });
            onSuccess?.();
            onClose();
        }catch(error) {
            setError('budget', { message: error.message })
        }
    }

    return createPortal(
        <div ref={modalRef} onClick={closeModal} className='fixed inset-0 z-[100] bg-black/40       backdrop-blur-sm text-zinc-900 dark:text-white flex justify-center items-center p-4'>
            <form onSubmit={handleSubmit(onSubmit)} className='rounded-lg shadow-xl text-zinc-900 bg-white p-6 dark:bg-zinc-700 dark:text-white duration-500 w-full max-w-xl space-y-4'>
                <div className='flex justify-between items-center pb-2 border-b dark:border-zinc-600'>
                    <h1 className='font-bold text-lg font-sans'>
                        Create Budget
                    </h1>
                    <Button 
                        onClick={onClose}
                        className='!p-0 bg-transparent hover:bg-transparent'
                    >
                        <X size={20} className='text-zinc-900 dark:text-white duration-500' />
                    </Button>
                </div>
                
                <Input
                    {...register('budget', { required: { value: true, message: 'Budget os required' }})}
                    label='amount' 
                    type='number' 
                    placeholder='50000' 
                    className='border-2 focus:border-black duration-500 dark:bg-zinc-700 dark:border-zinc-600 dark:focus:bg-zinc-700 dark:text-white dark:focus:border-zinc-800' 
                />
                {errors.budget && <p className="text-red-500 text-center text-xs mt-1 ml-1">{errors.budget.message}</p>}
                
                <Button
                    disabled={isSubmitting}
                    type='submit'
                    bgColor='bg-slate-900'
                    textColor='text-white'
                    className='w-full font-bold hover:bg-slate-800 duration-200 hover:duration-200 dark:bg-lime-600 dark:hover:bg-lime-500 dark:text-zinc-900 flex gap-1 justify-center items-center !mt-6'
                >
                    {isSubmitting? 'Creating...' : 'Create'}
                </Button>
            </form>
        </div>,
        document.body
    );
}

export default CreateBudgetModal;