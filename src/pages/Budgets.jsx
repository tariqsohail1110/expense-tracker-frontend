import React from 'react'
import { Container, InfoBars, BudgetBar } from '../components'

function Budgets() {
    return (
        <>  
            <Container>
                <div>
                    <h1 className='text-3xl font-bold text-zinc-900'>Budget Management</h1>
                    <p className='text-sm mt-1'>Optimize your capital allocation and monitor spend.</p>
                </div>
                <div className='mt-5'>
                    <BudgetBar text='Monthly Budget' budget='42,000' per='90' spent='38,000' rem='4,000'/>
                </div>
                <div>
                    <h1 className='text-3xl font-bold text-zinc-900 mt-5'>Category Overview</h1>
                </div>
                <div className='grid grid-cols-2 gap-4 mt-5'>
                    <div>
                        <InfoBars text={'Grocery'} per={'60'}/>
                    </div>
                    <div>
                        <InfoBars text={'Bills'} per={'80'}/>
                    </div>
                    <div>
                        <InfoBars text={'Shopping'} per={'25'}/>
                    </div>
                    <div>
                        <InfoBars text={'Health'} per={'45'}/>
                    </div>
                    <div>
                        <InfoBars text={'Transport'} per={'20'}/>
                    </div>
                    <div>
                        <InfoBars text={'Entertainment'} per={'10'}/>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Budgets
