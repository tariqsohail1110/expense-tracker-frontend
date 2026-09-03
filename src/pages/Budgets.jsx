import { Container, InfoBars, BudgetBar, CreateBudget } from '../components';
import { convert, calculateTotalSpendings, calculatePercentage } from '../common/functions';
import data from '../common/data.json';
import api from '../config/axios.config';
import { useState, useEffect } from 'react';

const mockData = data;
function Budgets() {
    const [totalBudget, setTotalBudget] = useState(0);
    const [data, setData] = useState([]);
    const [ remainingBudget, setRemainingBudget] = useState(0);
    const [loading, setLoading] = useState(true);
    // const []

    function getRemainingDays() {
        const today = new Date();
        const totalDays = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
        const remainingDays = totalDays - today.getDate();
        return remainingDays;
    }

    function getToday() {
        const date = new Date();
        const dateString = date;
        const newDate = new Date(dateString);
        const options = {
            weekday: 'long', 
            day: 'numeric', 
            month: 'long', 
            year: 'numeric'
        }
        const formattedDate = date.toLocaleDateString('en-GB', options);
        return formattedDate
    }

    useEffect( () => {
        Promise.allSettled([
            api.get('/api/v1/budget/me'),
            api.get('/api/v1/expenses/user/me')
        ])
        .then(([budgetRes, expensesRes]) => {
            if (budgetRes.status === 'fulfilled') {
                setTotalBudget(budgetRes.value.data.data.totalBudget);
                setRemainingBudget(budgetRes.value.data.data.remainingBudget);
            }
            if (expensesRes.status === 'fulfilled') {
                setData(expensesRes.value.data.data);
            }
        })
        .finally(() => setLoading(false));

    }, [])

    const calculateTotalAmount = (cat) => {
        const array = ((data.filter(category => category.category === cat)).map((i) => Number(i.amount))).reduce((acc, curr) => {
            return acc + curr;
        }, 0);
        return array;
    };
    
    if (loading) {
        return (
            <Container>
                <div className='animate-pulse'>
                    <div className='h-8 bg-gray-300 dark:bg-zinc-700 rounded w-64 mb-2'></div>
                    <div className='h-4 bg-gray-300 dark:bg-zinc-700 rounded w-96 mb-6'></div>
                    <div className='h-24 bg-gray-300 dark:bg-zinc-700 rounded mb-6'></div>
                    <div className='h-8 bg-gray-300 dark:bg-zinc-700 rounded w-48 mb-4'></div>
                    <div className='lg:grid lg:grid-cols-2 lg:gap-4'>
                        <div className='h-16 bg-gray-300 dark:bg-zinc-700 rounded mb-4'></div>
                        <div className='h-16 bg-gray-300 dark:bg-zinc-700 rounded mb-4'></div>
                        <div className='h-16 bg-gray-300 dark:bg-zinc-700 rounded mb-4'></div>
                        <div className='h-16 bg-gray-300 dark:bg-zinc-700 rounded mb-4'></div>
                        <div className='h-16 bg-gray-300 dark:bg-zinc-700 rounded mb-4'></div>
                        <div className='h-16 bg-gray-300 dark:bg-zinc-700 rounded mb-4'></div>
                    </div>
                </div>
            </Container>
        );
    }

    if (totalBudget > 0 || totalBudget === !undefined || totalBudget === !null) {
        return (
            <>  
                <Container>
                    <div>
                        <h1 className='text-center lg:text-left text-3xl font-bold text-zinc-900 duration-500 dark:text-white'>Budget Management</h1>
                        <p className='text-center lg:text-left text-sm mt-1 duration-500 dark:text-white'>Optimize your capital allocation and monitor spend.</p>
                    </div>
                    <div className='mt-6'>
                        <BudgetBar text='Monthly Budget' budget={convert(totalBudget)} per={calculatePercentage(calculateTotalSpendings(data), totalBudget)} spent={convert(calculateTotalSpendings(data))} rem={convert(remainingBudget)} date={getToday()} rem_days={getRemainingDays()}/>
                    </div>
                    <div>
                        <h1 className='text-center lg:text-left text-3xl font-bold text-zinc-900 lg:my-5 mt-5 duration-500 dark:text-white'>Category Overview</h1>
                    </div>
                    <div className='lg:grid lg:grid-cols-2 lg:gap-4 pb-7'>
                        <div>
                            <InfoBars text={'Food'} per={calculatePercentage(calculateTotalAmount('Food'), totalBudget)} spent={convert(calculateTotalAmount('Food'))}/>
                        </div>
                        <div>
                            <InfoBars text={'Bills'} per={calculatePercentage(calculateTotalAmount('Bills'), totalBudget)} spent={convert(calculateTotalAmount('Bills'))}/>
                        </div>
                        <div>
                            <InfoBars text={'Shopping'} per={calculatePercentage(calculateTotalAmount('Shopping'), totalBudget)} spent={convert(calculateTotalAmount('Shopping'))}/>
                        </div>
                        <div>
                            <InfoBars text={'Health'} per={calculatePercentage(calculateTotalAmount('Health'), totalBudget)} spent={convert(calculateTotalAmount('Health'))}/>
                        </div>
                        <div>
                            <InfoBars text={'Transport'} per={calculatePercentage(calculateTotalAmount('Transport'), totalBudget)} spent={convert(calculateTotalAmount('Transport'))}/>
                        </div>
                        <div>
                            <InfoBars text={'Entertainment'} per={calculatePercentage(calculateTotalAmount('Entertainment'), totalBudget)} spent={convert(calculateTotalAmount('Entertainment'))}/>
                        </div>
                    </div>
                </Container>
            </>
        )
    }
    else {
        return (
            <>
                <Container>
                    <div>
                        <h1 className='text-center lg:text-left text-3xl font-bold text-zinc-900 duration-500 dark:text-white'>Budget Management</h1>
                        <p className='text-center lg:text-left text-sm mt-1 duration-500 dark:text-white'>Optimize your capital allocation and monitor spend.</p>
                    </div>
                    <div className='mt-6'>
                        <CreateBudget/>
                    </div>
                </Container>
            </>
        );
    }
}

export default Budgets
