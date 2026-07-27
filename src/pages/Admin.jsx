import { Container, AdminInfo, Users } from '../components';
import { convertNumbers, convert, calculateTotalUsers, calculateActiveUsers } from '../common/functions.js';
import users from '../common/users.json';

function Admin() {
    const data = users;

    return (
        <Container>
                <div>
                    <h1 className='text-3xl font-bold text-zinc-900'>System Overview</h1>
                    <p className='text-sm mt-1'>Platform-wide performance and user management dashboard.</p>
                </div>
                <div className='grid grid-cols-3 gap-4 mt-6'>
                    <div className='cols-span-4'>
                        <AdminInfo text={'Total Users'} number={convertNumbers(calculateTotalUsers(data))}/>
                    </div>
                    <div className='cols-span-4'>
                        <AdminInfo text={'Active Users'} number={convertNumbers(calculateActiveUsers(data))}/>
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
