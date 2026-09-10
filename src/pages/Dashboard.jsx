import { useEffect, useState } from 'react';
import { Container, Info, Button, InfoBars, DonutChart, ExpenseList, SimpleBarChart, CreateExpenseModal } from '../components';
import { convert, calculatePercentage, welcomeMessage } from '../common/functions.js';
import { Plus } from 'lucide-react';
import api from '../config/axios.config.js';

function Dashboard() {

    const [username, setUsername] = useState('user');
    const [totalBalance, setTotalbalance] = useState(0);
    const [spendings, setSpendings] = useState([]);
    const [remainingBudget, setRemainingBudget] = useState(0);
    const [loading, setLoading] = useState(true);
    const [totalSpending, setTotalSpending] = useState(0);
    const [showModal, setShowModal] = useState(false);

    const fetchData = () => {
        Promise.allSettled([
            api.get('/api/v1/users/me'),
            api.get('/api/v1/budget/me'),
            api.get('/api/v1/expenses/user/me')
        ])
        .then(([userRes, budgetRes, expensesRes]) => {
            if (userRes.status === 'fulfilled') {
                setUsername(userRes.value.data.data.firstname + " " + userRes.value.data.data.lastname);
            }
            if (budgetRes.status === 'fulfilled') {
                setTotalbalance(budgetRes.value.data.data.totalBudget);
                setRemainingBudget(budgetRes.value.data.data.remainingBudget);
                setTotalSpending(budgetRes.value.data.data.totalBudget - budgetRes.value.data.data.remainingBudget);
            }
            if (expensesRes.status === 'fulfilled') {
                setSpendings(expensesRes.value.data.data);
            }
        })
        .finally(() => setLoading(false));
    };

    useEffect(() => {
        fetchData();
        window.addEventListener('expense:created', fetchData);
        return () => window.removeEventListener('expense:created', fetchData);
    }, []);


    if (loading) {
        return (
            <Container>
                <div className='animate-pulse'>
                    <div className='h-8 bg-gray-300 dark:bg-zinc-700 rounded w-64 mb-2'></div>
                    <div className='h-4 bg-gray-300 dark:bg-zinc-700 rounded w-96 mb-6'></div>
                    <div className='lg:grid lg:grid-cols-3 lg:gap-4 mt-6'>
                        <div className='h-24 bg-gray-300 dark:bg-zinc-700 rounded mb-4'></div>
                        <div className='h-24 bg-gray-300 dark:bg-zinc-700 rounded mb-4'></div>
                        <div className='h-24 bg-gray-300 dark:bg-zinc-700 rounded mb-4'></div>
                    </div>
                    <div className='h-16 bg-gray-300 dark:bg-zinc-700 rounded mb-6'></div>
                    <div className='h-64 bg-gray-300 dark:bg-zinc-700 rounded mb-6'></div>
                    <div className='lg:grid lg:grid-cols-2 lg:gap-4'>
                        <div className='h-48 bg-gray-300 dark:bg-zinc-700 rounded mb-4'></div>
                        <div className='h-48 bg-gray-300 dark:bg-zinc-700 rounded mb-4'></div>
                    </div>
                </div>
            </Container>
        );
    }

    return (
        <>
            <Container>
                <div className='lg:grid lg:grid-cols-2 lg:gap-4'>
                    <div className='lg:cols-span-10'>
                        <h1 className='text-center lg:text-left text-3xl font-bold text-zinc-900 dark:text-white duration-500'>Dashboard Overview</h1>
                        <p className='text-sm mt-1 dark:text-white duration-500 text-center lg:text-left'>{welcomeMessage(totalSpending, totalBalance, username)}</p>
                    </div>
                    <div className='mt-6 lg:cols-span-2 xl:w-64 lg:ml-auto lg:mt-auto pb-2'>
                            <Button
                            onClick={() => setShowModal(true)}
                            bgColor='bg-slate-900'
                            textColor='text-white'
                            className='w-full font-bold hover:bg-slate-800 duration-200 hover:duration-200
                            dark:bg-lime-600 dark:hover:bg-lime-500 dark:text-zinc-900 flex gap-1 justify-center items-center'> <Plus size={20}/> New Entry</Button>
                    </div>
                </div>
                <div className='lg:grid lg:grid-cols-3 lg:gap-4 mt-6'>
                    <div className='lg:cols-span-4 lg:m-0'>
                        <Info text='TOTAL BALANCE' amount={convert(totalBalance)}/>
                    </div>
                    <div className='lg:cols-span-4'>
                        <Info text='MONTHLY SPENDING' amount={convert(totalSpending)}/>
                    </div>
                    <div className='lg:cols-span-4'>
                        <Info text='REMAINING BALANCE' amount={convert(remainingBudget)}/>
                    </div>
                </div>
                <div className='mt-6'>
                    {/* dynamic spendings indicator */}
                    <InfoBars text='Budget Usage' per={calculatePercentage(totalSpending, totalBalance)} spent={convert(totalSpending)}/>
                </div>
                <div>
                    <SimpleBarChart data={spendings}/>
                </div>
                <div className='lg:grid lg:grid-cols-2 lg:gap-4 mt-6 mb-6'>
                    <ExpenseList data={spendings}/>
                    <DonutChart data={spendings} totalBudget={totalBalance} />
                </div>
                {showModal && <CreateExpenseModal onClose={() => setShowModal(false)} onSuccess={fetchData}/>}
            </Container>
        </>
    )
}

export default Dashboard
