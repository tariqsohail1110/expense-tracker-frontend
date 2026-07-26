import React from 'react'
import { Container, Info, Button, InfoBars, DonutChart, ExpenseList, SimpleBarChart } from '../components'

function Dashboard() {
    const username = 'Muhammad Tariq';
    return (
        <>
            <Container>
                <div className='grid grid-cols-2 gap-4'>
                    <div className='cols-span-10'>
                        <h1 className='text-3xl font-bold text-zinc-900'>Dashboard Overview</h1>
                        <p className='text-sm mt-1'>{`Welcome back ${username}, your finances are looking healthy this month`}</p>
                    </div>
                    <div className='cols-span-2 w-64 ml-auto mt-auto pb-2'>
                            <Button
                            bgColor='bg-slate-900'
                            textColor='text-white'
                            className='w-full hover:bg-slate-800 duration-200 hover:duration-200'> + New Entry</Button>
                    </div>
                </div>
                <div className='grid grid-cols-3 gap-4 mt-6'>
                    <div className=''>
                        <Info text='TOTAL BALANCE' amount='42,000'/>
                    </div>
                    <div className=''>
                        <Info text='MONTHLY SPENDING' amount='38,000'/>
                    </div>
                    <div className=''>
                        <Info text='REMAINING BALANCE' amount='4,000'/>
                    </div>
                </div>
                <div className='mt-6'>
                    {/* dynamic spendings indicator */}
                    <InfoBars text='Budget Usage' per='90' spent='38,000'/>
                </div>
                <div>
                    <SimpleBarChart/>
                </div>
                <div className='grid grid-cols-2 gap-4 mt-6 mb-6'>
                    <ExpenseList/>
                    <DonutChart/>
                </div>
            </Container>
        </>
    )
}

export default Dashboard
