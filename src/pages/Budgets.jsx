import { Container, BudgetInfoBars, BudgetBar } from '../components';
import { convert } from '../common/functions';

    const mockData = [
    {
        id: 1,
        title: 'Grocery',
        amount: 10000,
        category: 'Food',
        date: '2026-04-15',
        note: 'Lorem ipsum dolor set amet'
    },
    {
        id: 2,
        title: 'Purchased Trousers',
        amount: 4000,
        category: 'Shopping',
        date: '2026-05-15',
        note: 'Lorem ipsum dolor set amet'
    },
    {
        id: 3,
        title: 'Dinner at KFC',
        amount: 3000,
        category: 'Food',
        date: '2026-05-15',
        note: 'Lorem ipsum dolor set amet'
    },
    {
        id: 4,
        title: 'Petrol',
        amount: 1000,
        category: 'Transport',
        date: '2026-05-18',
        note: 'Lorem ipsum dolor set amet'
    },
    {
        id: 5,
        title: 'Went to the doctor',
        amount: 1500,
        category: 'Health',
        date: '2026-06-01',
        note: 'Lorem ipsum dolor set amet'
    },
    {
        id: 6,
        title: 'Went to a movie',
        amount: 1000,
        category: 'Entertainment',
        date: '2026-06-03',
        note: 'Lorem ipsum dolor set amet'
    },
    {
        id: 7,
        title: 'Grocery',
        amount: 1000,
        category: 'Food',
        date: '2026-06-08',
        note: 'Lorem ipsum dolor set amet'
    },
    {
        id: 8,
        title: 'Ordered Pizza',
        amount: 1500,
        category: 'Food',
        date: '2026-06-10',
        note: 'Lorem ipsum dolor set amet'
    },
    {
        id: 9,
        title: 'Grocery',
        amount: 2000,
        category: 'Food',
        date: '2026-06-15',
        note: 'Lorem ipsum dolor set amet'
    },
    {
        id: 10,
        title: 'Purchased Sneakers',
        amount: 4000,
        category: 'Shopping',
        date: '2026-06-20',
        note: 'Lorem ipsum dolor set amet'
    },
    {
        id: 11,
        title: 'Electricity Bill',
        amount: 10000,
        category: 'Bills',
        date: '2026-07-20',
        note: 'Lorem ipsum dolor set amet'
    }
];
function Budgets() {
    const totalBudget = 60000;

    const calculatePercentage = (num) => {
        const per = (num / totalBudget) * 100;
        return (Number(per)).toFixed(2);
    }

    const calculateTotalAmount = (cat) => {
        const array = ((mockData.filter(category => category.category === cat)).map((i) => i.amount)).reduce((acc, curr) => {
            return acc + curr;
        }, 0);
        return array;
    };

    const calculateTotalSpendings = () => {
        const array = (mockData.map((i) => i.amount)).reduce((acc, curr) => {
            return acc + curr;
        }, 0);
        return array;
    };
    
    return (
        <>  
            <Container>
                <div>
                    <h1 className='text-3xl font-bold text-zinc-900'>Budget Management</h1>
                    <p className='text-sm mt-1'>Optimize your capital allocation and monitor spend.</p>
                </div>
                <div className='mt-6'>
                    <BudgetBar text='Monthly Budget' budget={convert(totalBudget)} per={calculatePercentage(calculateTotalSpendings())} spent={convert(calculateTotalSpendings())} rem={convert(totalBudget - calculateTotalSpendings())} rem_days='26'/>
                </div>
                <div>
                    <h1 className='text-3xl font-bold text-zinc-900 mt-5'>Category Overview</h1>
                </div>
                <div className='grid grid-cols-2 gap-4 mt-5 pb-7'>
                    <div>
                        <BudgetInfoBars text={'Food'} per={calculatePercentage(calculateTotalAmount('Food'))} spent={convert(calculateTotalAmount('Food'))}/>
                    </div>
                    <div>
                        <BudgetInfoBars text={'Bills'} per={calculatePercentage(calculateTotalAmount('Bills'))} spent={convert(calculateTotalAmount('Bills'))}/>
                    </div>
                    <div>
                        <BudgetInfoBars text={'Shopping'} per={calculatePercentage(calculateTotalAmount('Shopping'))} spent={convert(calculateTotalAmount('Shopping'))}/>
                    </div>
                    <div>
                        <BudgetInfoBars text={'Health'} per={calculatePercentage(calculateTotalAmount('Health'))} spent={convert(calculateTotalAmount('Health'))}/>
                    </div>
                    <div>
                        <BudgetInfoBars text={'Transport'} per={calculatePercentage(calculateTotalAmount('Transport'))} spent={convert(calculateTotalAmount('Transport'))}/>
                    </div>
                    <div>
                        <BudgetInfoBars text={'Entertainment'} per={calculatePercentage(calculateTotalAmount('Entertainment'))} spent={convert(calculateTotalAmount('Entertainment'))}/>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Budgets
