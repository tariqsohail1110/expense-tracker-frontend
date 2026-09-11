import { useRef } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { Button, Input, Dropdown } from '../index.js';
import { useForm } from 'react-hook-form';
import api from '../../config/axios.config.js';
import { nameRegex } from '../../common/constants.js';

function EditUserModal({ isOpen = true, onClose, onSuccess, url, id }) {
    if (!isOpen) return null;
    const cats = ['Active', 'Inactive'];
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
    }
    
    const onSubmit = async(data) => {
        const payload = Object.fromEntries(
            Object.entries(data)
            .filter(([_, value]) => value !== '' && value !== null && value !== undefined));

        if(payload.firstname) {
            if (!nameRegex.test(payload.firstname)) {
                setError('firstname', {message: 'Letters only, no numbers or symbols'});
                return;
            }
        }
        if(payload.lastname) {
            if (!nameRegex.test(payload.lastname)) {
                setError('firstname', {message: 'Letters only, no numbers or symbols'});
                return;
            }
        }
        if(payload.email) {
            if (!payload.email.includes('@')) {
                setError('email', {message: 'Email is invalid'}); 
                return;
            }
        }
        if(payload.is_active) {
            payload.is_active === 'Active'? payload.is_active = true : payload.is_active = false;
        }
        
        try {
            await api.patch(`${url}/${id}`, payload);
            onSuccess?.();
            onClose();
        } catch(error) {
            setError('is_active', { message: error.message });
        }

    }

    return createPortal(
        <div ref={modalRef} onClick={closeModal} className='fixed inset-0 z-[100] bg-black/40       backdrop-blur-sm text-zinc-900 dark:text-white flex justify-center items-center p-4'>
            <form onSubmit={handleSubmit(onSubmit)} className='rounded-lg shadow-xl text-zinc-900 bg-white p-6 dark:bg-zinc-700 dark:text-white duration-500 w-full max-w-xl space-y-4'>
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
                        {...register('firstname', {required: false, maxLength: { value: 50, message: 'First name cannot be more than 50 letters'}})}
                        label='first name' 
                        type='text' 
                        placeholder='John' 
                        className='border-2 focus:border-black duration-500 dark:bg-zinc-700 dark:border-zinc-600 dark:focus:bg-zinc-700 dark:text-white dark:focus:border-zinc-800 mb-4 md:mb-0' 
                    />
                    <Input
                        {...register('lastname', {required: false, maxLength: { value: 50, message: 'Last name cannot be more than 50 letters'}})}
                        label='last name' 
                        type='text' 
                        placeholder='Doe' 
                        className='border-2 focus:border-black duration-500 dark:bg-zinc-700 dark:border-zinc-600 dark:focus:bg-zinc-700 dark:text-white dark:focus:border-zinc-800' 
                    />
                </div>
                {errors.firstname && <p className="text-red-500 text-xs mt-1 ml-1">{errors.firstname.message}</p>}
                {errors.lastname && <p className="text-red-500 text-xs mt-1 ml-1">{errors.lastname.message}</p>}

                <Input 
                    {...register('email', {required: false, maxLength: { value: 50, message: 'Email cannot be more than 50 letters'}})}
                    label='email' 
                    type='email' 
                    placeholder='johnd@mail.com' 
                    className='border-2 focus:border-black duration-500 dark:bg-zinc-700 dark:border-zinc-600 dark:focus:bg-zinc-700 dark:text-white dark:focus:border-zinc-800' 
                />
                {errors.email && <p className="text-red-500 text-xs mt-1 ml-1">{errors.email.message}</p>}
                
                <Dropdown
                    {...register('is_active')}
                    label='status' 
                    categories={cats} 
                />
                
                <Button
                    disabled={isSubmitting}
                    type='submit'
                    bgColor='bg-slate-900'
                    textColor='text-white'
                    className='w-full font-bold hover:bg-slate-800 duration-200 hover:duration-200 dark:bg-lime-600 dark:hover:bg-lime-500 dark:text-zinc-900 flex gap-1 justify-center items-center !mt-6'
                >
                    {isSubmitting? 'Updating...' : 'Update'}
                </Button>
            </form>
        </div>,
        document.body
    );
}

export default EditUserModal;