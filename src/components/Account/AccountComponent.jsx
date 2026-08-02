import React from 'react';
import { UpdatePassword, Container, UpdateEmail, UpdateName, DeleteAccount } from '../index.js';

function AccountComponent() {
    return (
        <>
            <Container>
                <div>
                    <h1 className='text-3xl font-bold text-zinc-900 duration-500 dark:text-white'>Account Settings</h1>
                    <p className='text-sm mt-1 duration-500 dark:text-white'>Manage your personal profile, update your details, and configure security options.</p>
                </div>
                <div className='my-6'>
                    <UpdatePassword/>
                    <UpdateEmail/>
                    <UpdateName/>
                    <DeleteAccount/>
                </div>
            </Container>
        </>
    );
}

export default AccountComponent