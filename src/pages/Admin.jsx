import { Container, AdminInfo, Users } from '../components';
import { convertNumbers, convert, calculateTotalUsers, calculateActiveUsers } from '../common/functions.js';
import { useEffect, useState } from 'react';
import api from '../config/axios.config.js';

function Admin() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [allTransactions, setAllTransactions] = useState(0);

    const fetchData = () => {
        Promise.allSettled([
            api.get('/api/v1/admin/users'),
            api.get('/api/v1/admin/expenses/alltransactions')
            ])
            .then(([respose, allTransactions]) => {
                if (respose.status === 'fulfilled') {
                    setData(respose.value.data.data);
                }
                if(allTransactions.status === 'fulfilled') {
                    setAllTransactions(allTransactions.value.data);
                }
            })
            .catch(error => console.log(error.message))
            .finally( () => setLoading(false));
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (loading) {
        return (
            <Container>
                <div className='animate-pulse'>
                    <div className='h-8 bg-gray-300 dark:bg-zinc-700 rounded w-64 mb-2'></div>
                    <div className='h-4 bg-gray-300 dark:bg-zinc-700 rounded w-72 lg:w-96 mb-6'></div>
                    <div className='lg:grid lg:grid-cols-3 lg:gap-4 mt-6'>
                        <div className='h-24 bg-gray-300 dark:bg-zinc-700 rounded mb-4'></div>
                        <div className='h-24 bg-gray-300 dark:bg-zinc-700 rounded mb-4'></div>
                        <div className='h-24 bg-gray-300 dark:bg-zinc-700 rounded mb-4'></div>
                    </div>
                    <div className='bg-white rounded-lg shadow-lg p-6 my-6 font-sans duration-500 dark:bg-zinc-700'>
                <div className='animate-pulse'>
                    {/* Search bar + Download button row */}
                    <div className='md:flex md:items-center md:gap-4 mb-4'>
                        <div className='relative md:w-4/6 lg:w-5/6 mb-4 md:m-0'>
                            <div className='h-10 bg-gray-200 dark:bg-zinc-600 rounded-lg w-full'></div>
                        </div>
                        <div className='md:flex-1'>
                            <div className='h-10 bg-gray-200 dark:bg-zinc-600 rounded-lg w-full'></div>
                        </div>
                    </div>
                    {/* Table skeleton */}
                    <div className='overflow-x-auto rounded-md'>
                        {/* Table header */}
                        <div className='h-10 bg-emerald-200 dark:bg-lime-300 rounded-t-md mb-px flex items-center gap-4 px-6'>
                            {[...Array(7)].map((_, i) => (
                                <div key={i} className='h-3 bg-emerald-300 dark:bg-lime-500 rounded flex-1'></div>
                            ))}
                        </div>
                        {/* Table rows */}
                        {[...Array(5)].map((_, i) => (
                            <div key={i} className='h-14 bg-gray-50 dark:bg-zinc-700 border-b border-gray-200 dark:border-zinc-600 flex items-center gap-4 px-6'>
                                {[...Array(7)].map((_, j) => (
                                    <div key={j} className='h-3 bg-gray-200 dark:bg-zinc-600 rounded flex-1'></div>
                                ))}
                            </div>
                        ))}
                    </div>
                    {/* Pagination skeleton */}
                    <div className='flex justify-between items-center mt-4'>
                        <div className='h-8 bg-gray-200 dark:bg-zinc-600 rounded w-32'></div>
                        <div className='flex items-center gap-2'>
                            <div className='h-8 w-8 bg-gray-200 dark:bg-zinc-600 rounded'></div>
                            <div className='h-8 w-8 bg-gray-200 dark:bg-zinc-600 rounded'></div>
                            <div className='h-8 w-16 bg-gray-200 dark:bg-zinc-600 rounded'></div>
                            <div className='h-8 w-8 bg-gray-200 dark:bg-zinc-600 rounded'></div>
                            <div className='h-8 w-8 bg-gray-200 dark:bg-zinc-600 rounded'></div>
                        </div>
                    </div>
                </div>
            </div>
                </div>
            </Container>
        )
    }

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
                        <AdminInfo text={'Total Transactions'} number={convert(allTransactions)}/>
                    </div>
                </div>
                <div>
                    <Users data={data} onSuccess={fetchData}/>
                </div>
            </Container>
    )
}

export default Admin
