import { Container, AdminInfo, Users } from '../components';
import { convertNumbers, convert, calculateTotalUsers, calculateActiveUsers } from '../common/functions.js';
import users from '../common/users.json';

function Admin() {
    const data = users;

    return (
        <Container>
                <div>
                    <h1 className='text-center lg:text-left text-3xl font-bold text-zinc-900 duration-500 dark:text-white'>System Overview</h1>
                    <p className='text-center lg:text-left text-sm mt-1 duration-500 dark:text-white'>Platform-wide performance and user management dashboard.</p>
                </div>
                <div className='lg:grid lg:grid-cols-3 lg:gap-4 lg:mt-6'>
                    <div className='lg:cols-span-4'>
                        <AdminInfo text={'Total Users'} number={convertNumbers(calculateTotalUsers(data))}/>
                    </div>
                    <div className='lg:cols-span-4'>
                        <AdminInfo text={'Active Users'} number={convertNumbers(calculateActiveUsers(data))}/>
                    </div>
                    <div className='lg:cols-span-4'>
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
