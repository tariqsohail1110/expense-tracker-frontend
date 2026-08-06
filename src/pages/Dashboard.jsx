import React from 'react';
import { Container, Info, Button, InfoBars, DonutChart, ExpenseList, SimpleBarChart } from '../components';
import { convert, calculateTotalSpendings, calculatePercentage, welcomeMessage } from '../common/functions.js';
import data from '../common/data.json';
import { Plus } from 'lucide-react';

function Dashboard() {
    const username = 'Muhammad Tariq';
    const totalBalance = 60000;
    const mockData = data;
    return (
        <>
            <Container>
                <div className='lg:grid lg:grid-cols-2 lg:gap-4'>
                    <div className='lg:cols-span-10'>
                        <h1 className='text-center lg:text-left text-3xl font-bold text-zinc-900 dark:text-white duration-500'>Dashboard Overview</h1>
                        <p className='text-sm mt-1 dark:text-white duration-500 text-center lg:text-left'>{welcomeMessage(calculateTotalSpendings(mockData), totalBalance, username)}</p>
                    </div>
                    <div className='mt-6 lg:cols-span-2 xl:w-64 lg:ml-auto lg:mt-auto pb-2'>
                            <Button
                            bgColor='bg-slate-900'
                            textColor='text-white'
                            className='w-full font-bold hover:bg-slate-800 duration-200 hover:duration-200
                            dark:bg-lime-500 dark:hover:bg-lime-400 dark:text-zinc-900 flex gap-1 justify-center items-center'> <Plus size={20}/> New Entry</Button>
                    </div>
                </div>
                <div className='lg:grid lg:grid-cols-3 lg:gap-4 mt-6'>
                    <div className='lg:cols-span-4 lg:m-0'>
                        <Info text='TOTAL BALANCE' amount={convert(totalBalance)}/>
                    </div>
                    <div className='lg:cols-span-4'>
                        <Info text='MONTHLY SPENDING' amount={convert(calculateTotalSpendings(mockData))}/>
                    </div>
                    <div className='lg:cols-span-4'>
                        <Info text='REMAINING BALANCE' amount={convert(totalBalance - calculateTotalSpendings(mockData))}/>
                    </div>
                </div>
                <div className='mt-6'>
                    {/* dynamic spendings indicator */}
                    <InfoBars text='Budget Usage' per={calculatePercentage(calculateTotalSpendings(mockData), totalBalance)} spent={convert(calculateTotalSpendings(mockData))}/>
                </div>
                <div>
                    <SimpleBarChart/>
                </div>
                <div className='lg:grid lg:grid-cols-2 lg:gap-4 mt-6 mb-6'>
                    <ExpenseList/>
                    <DonutChart data={mockData} totalBudget={totalBalance} />
                </div>
            </Container>
        </>
    )
}

export default Dashboard
