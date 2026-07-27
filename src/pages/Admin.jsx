import React from 'react';
import { Container, AdminInfo, Users } from '../components';
import { convertNumbers, convert } from '../common/functions.js';

function Admin() {
    return (
        <Container>
                <div>
                    <h1 className='text-3xl font-bold text-zinc-900'>System Overview</h1>
                    <p className='text-sm mt-1'>Platform-wide performance and user management dashboard.</p>
                </div>
                <div className='grid grid-cols-3 gap-4 mt-6'>
                    <div className='cols-span-4'>
                        <AdminInfo text={'Total Users'} number={convertNumbers(12000)}/>
                    </div>
                    <div className='cols-span-4'>
                        <AdminInfo text={'Active Users'} number={convertNumbers(10000)}/>
                    </div>
                    <div className='cols-span-4'>
                        <AdminInfo text={'Total Transactions'} number={convert(120000)}/>
                    </div>
                </div>
                <div>
                    <Users/>
                </div>
            </Container>
    )
}

export default Admin
