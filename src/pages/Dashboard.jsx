import React from 'react'
import { Container, Info, InfoBars } from '../components'

function Dashboard() {
    return (
        <>
            <Container>
                <div>
                    <h1 className='text-3xl font-bold text-zinc-900'>Dashboard Overview</h1>
                    <p className='text-sm mt-1'>Welcome back, your finances are looking healthy this month</p>
                </div>
                <div className='grid grid-cols-3 gap-4 mt-5'>
                    <div className=''>
                        <Info text='TOTAL BALANCE' amount='42,000'/>
                    </div>
                    <div className=''>
                        <Info text='MONTHLY SPENDING' amount='38,000'/>
                    </div>
                    <div className=''>
                        <Info text='REMAINING BALANCE' amount='2,000'/>
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-4 mt-5'>
                    <div>
                        <InfoBars/>
                    </div>
                    <div>
                        <InfoBars/>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Dashboard
