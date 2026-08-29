import React, { useEffect, useState } from 'react';
import { Container, Info, Button, InfoBars, DonutChart, ExpenseList, SimpleBarChart, CreateExpenseModal } from '../components';
import { convert, calculateTotalSpendings, calculatePercentage, welcomeMessage } from '../common/functions.js';
import { Plus } from 'lucide-react';
import api from '../config/axios.config.js';

function Dashboard() {

    const [username, setUsername] = useState('user');
    const [totalBalance, setTotalbalance] = useState(0);
    const [spendings, setSpendings] = useState([]);
    const [remainingBudget, setRemainingBudget] = useState(0);

    useEffect(() => {
        api.get('/api/v1/users/me')
            .then(response => {
                setUsername(response.data.data.firstname + " " + response.data.data.lastname)
            })
            .catch(error => {console.log(error)});

        api.get('/api/v1/budget/me')
            .then(response => {
                setTotalbalance(response.data.data.totalBudget)
                setRemainingBudget(response.data.data.remainingBudget);
                // console.log(response.data.data);
                
            })
            .catch(error => {console.log(error)});

        api.get('/api/v1/expenses/user/me')
            .then (response => {
                // console.log(response.data.data);
                // console.log(JSON.stringify(response.data.data, null, 2));
                setSpendings(response.data.data);
                
            })  
    }, []);

    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <Container>
                <div className='lg:grid lg:grid-cols-2 lg:gap-4'>
                    <div className='lg:cols-span-10'>
                        <h1 className='text-center lg:text-left text-3xl font-bold text-zinc-900 dark:text-white duration-500'>Dashboard Overview</h1>
                        <p className='text-sm mt-1 dark:text-white duration-500 text-center lg:text-left'>{welcomeMessage(calculateTotalSpendings(spendings), totalBalance, username)}</p>
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
                        <Info text='MONTHLY SPENDING' amount={convert(calculateTotalSpendings(spendings))}/>
                    </div>
                    <div className='lg:cols-span-4'>
                        <Info text='REMAINING BALANCE' amount={convert(remainingBudget)}/>
                    </div>
                </div>
                <div className='mt-6'>
                    {/* dynamic spendings indicator */}
                    <InfoBars text='Budget Usage' per={calculatePercentage(calculateTotalSpendings(spendings), totalBalance)} spent={convert(calculateTotalSpendings(spendings))}/>
                </div>
                <div>
                    <SimpleBarChart data={spendings}/>
                </div>
                <div className='lg:grid lg:grid-cols-2 lg:gap-4 mt-6 mb-6'>
                    <ExpenseList data={spendings}/>
                    <DonutChart data={spendings} totalBudget={totalBalance} />
                </div>
                {showModal && <CreateExpenseModal onClose={() => setShowModal(false)}/>}
            </Container>
        </>
    )
}

export default Dashboard
