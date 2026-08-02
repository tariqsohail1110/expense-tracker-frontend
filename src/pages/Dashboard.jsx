import React from 'react';
import { Container, Info, Button, InfoBars, DonutChart, ExpenseList, SimpleBarChart } from '../components';
import { convert, calculateTotalSpendings, calculatePercentage, welcomeMessage } from '../common/functions.js';
import data from '../common/data.json';

function Dashboard() {
    const username = 'Muhammad Tariq';
    const totalBalance = 60000;
    const mockData = data;
    return (
        <>
            <Container>
                <div className='grid grid-cols-2 gap-4'>
                    <div className='cols-span-10'>
                        <h1 className='text-3xl font-bold text-zinc-900 dark:text-white duration-500'>Dashboard Overview</h1>
                        <p className='text-sm mt-1 dark:text-white duration-500'>{welcomeMessage(calculateTotalSpendings(mockData), totalBalance, username)}</p>
                    </div>
                    <div className='cols-span-2 w-64 ml-auto mt-auto pb-2'>
                            <Button
                            bgColor='bg-slate-900'
                            textColor='text-white'
                            className='w-full font-bold hover:bg-slate-800 duration-200 hover:duration-200
                            dark:bg-lime-500 dark:hover:bg-lime-400 dark:text-zinc-900'> + New Entry</Button>
                    </div>
                </div>
                <div className='grid grid-cols-3 gap-4 mt-6'>
                    <div className=''>
                        <Info text='TOTAL BALANCE' amount={convert(totalBalance)}/>
                    </div>
                    <div className=''>
                        <Info text='MONTHLY SPENDING' amount={convert(calculateTotalSpendings(mockData))}/>
                    </div>
                    <div className=''>
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
                <div className='grid grid-cols-2 gap-4 mt-6 mb-6'>
                    <ExpenseList/>
                    <DonutChart data={mockData} totalBudget={totalBalance} />
                </div>
            </Container>
        </>
    )
}

export default Dashboard
