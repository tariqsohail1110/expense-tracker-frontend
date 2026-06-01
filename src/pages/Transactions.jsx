import React from 'react'
import { Container } from '../components'

function Transactions() {
    return (
        <>
            <Container>
                <div>
                    <h1 className='text-3xl font-bold text-zinc-900'>Expense Log</h1>
                    <p className='text-sm mt-1'>Monitor and categorize your recent financial activities.</p>
                </div>
            </Container>
        </>
    )
}

export default Transactions
