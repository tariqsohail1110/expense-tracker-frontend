import React from 'react';
import { Button } from '../index.js';
import { 
    Utensils, 
    ShoppingBag, 
    Car, 
    HeartPulse, 
    Film, 
    CreditCard,
    TrendingDown
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import data from '../../common/data.json';

const categoryConfig = {
    Food: { icon: Utensils, bgColor: 'bg-emerald-100', iconColor: 'text-emerald-600' },
    Shopping: { icon: ShoppingBag, bgColor: 'bg-blue-100', iconColor: 'text-blue-600' },
    Transport: { icon: Car, bgColor: 'bg-amber-100', iconColor: 'text-amber-600' },
    Health: { icon: HeartPulse, bgColor: 'bg-rose-100', iconColor: 'text-rose-600' },
    Entertainment: { icon: Film, bgColor: 'bg-purple-100', iconColor: 'text-purple-600' },
    default: { icon: CreditCard, bgColor: 'bg-slate-100', iconColor: 'text-slate-600' }
};

const defaultMockData = data;

function ExpenseList({ data = defaultMockData }) {
    // Sort descending by amount and take the top 5
    const topExpenses = [...data]
        .sort((a, b) => b.amount - a.amount)
        .slice(0, 5);

        const navigate = useNavigate();

    return (
        <div className='bg-white rounded-lg shadow-lg p-6 border border-gray-100 font-sans h-full flex flex-col'>
            <div className='flex items-center justify-between mb-6'>
                <h2 className='text-zinc-900 font-bold text-lg flex items-center gap-2'>
                    <TrendingDown className='text-rose-500 w-5 h-5' />
                    Top 5 Expenses
                </h2>
                <span className='text-xs text-gray-500 font-medium bg-gray-100 px-2 py-1 rounded-full'>
                    Highest Value
                </span>
            </div>
            
            <div className='flow-root flex-1'>
                <ul className='divide-y divide-gray-100 -my-3'>
                    {topExpenses.map((expense) => {
                        const config = categoryConfig[expense.category] || categoryConfig.default;
                        const IconComponent = config.icon;
                        
                        return (
                            <li 
                                key={expense.id} 
                                className='py-3.5 flex items-center justify-between hover:bg-gray-50/50 rounded-lg px-2 -mx-2 transition-all duration-200 group'
                            >
                                <div className='flex items-center gap-3.5 min-w-0'>
                                    <div className={`p-2.5 rounded-full ${config.bgColor} ${config.iconColor} transition-transform group-hover:scale-105 duration-200`}>
                                        <IconComponent className='w-5 h-5' />
                                    </div>
                                    <div className='min-w-0'>
                                        <p className='text-sm font-semibold text-gray-800 truncate group-hover:text-slate-900 transition-colors'>
                                            {expense.title}
                                        </p>
                                        <div className='flex items-center gap-2 mt-0.5'>
                                            <span className='text-xs font-medium text-gray-500'>
                                                {expense.category}
                                            </span>
                                            <span className='text-[10px] text-gray-300'>•</span>
                                            <span className='text-xs text-gray-400'>
                                                {expense.date}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className='text-right ml-4 flex-shrink-0'>
                                    <p className='text-sm font-bold text-slate-900 group-hover:text-rose-600 transition-colors duration-200'>
                                        ₨ {expense.amount.toLocaleString()}
                                    </p>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>

            <div className='mt-6 pt-4 border-t border-gray-100'>
                <Button
                    onClick={() => navigate('/transactions')}
                    bgColor='bg-slate-900'
                    textColor='text-white'
                    className='w-full text-sm hover:bg-slate-800 transition-all duration-200'
                >
                    View All Transactions
                </Button>
            </div>
        </div>
    );
}

export default ExpenseList;