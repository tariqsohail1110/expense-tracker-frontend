import { Container, InfoBars, BudgetBar } from '../components';
import { convert, calculateTotalSpendings, calculatePercentage } from '../common/functions';
import data from '../common/data.json'

const mockData = data;
function Budgets() {
    const totalBudget = 60000;

    const calculateTotalAmount = (cat) => {
        const array = ((mockData.filter(category => category.category === cat)).map((i) => i.amount)).reduce((acc, curr) => {
            return acc + curr;
        }, 0);
        return array;
    };
    
    return (
        <>  
            <Container>
                <div>
                    <h1 className='text-3xl font-bold text-zinc-900 duration-500 dark:text-white'>Budget Management</h1>
                    <p className='text-sm mt-1 duration-500 dark:text-white'>Optimize your capital allocation and monitor spend.</p>
                </div>
                <div className='mt-6'>
                    <BudgetBar text='Monthly Budget' budget={convert(totalBudget)} per={calculatePercentage(calculateTotalSpendings(mockData), totalBudget)} spent={convert(calculateTotalSpendings(mockData))} rem={convert(totalBudget - calculateTotalSpendings(mockData))} rem_days='26'/>
                </div>
                <div>
                    <h1 className='text-3xl font-bold text-zinc-900 mt-5 duration-500 dark:text-white'>Category Overview</h1>
                </div>
                <div className='grid grid-cols-2 gap-4 mt-5 pb-7'>
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

export default Budgets
