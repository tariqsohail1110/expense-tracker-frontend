import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { PieChart as PieChartIcon } from 'lucide-react';
import mockData from '../../common/data.json';
import useTheme from '../../contexts/theme';

const categoryColors = {
    Food: '#10B981',       // Emerald 500
    Shopping: '#3B82F6',   // Blue 500
    Transport: '#F59E0B',  // Amber 500
    Health: '#EF4444',     // Red 500
    Entertainment: '#8B5CF6', // Purple 500
    Bills: '#06B6D4',      // Cyan 500
    Other: '#6B7280',
    default: '#6B7280'
};

function DonutChart({ data = mockData, totalBudget = 60000 }) {

    const { themeMode } = useTheme();
    const isDark = themeMode === 'dark';

    // Group transactions by category
    const categoryTotals = {};
    const transactions = Array.isArray(data) ? data : [];

    transactions.forEach((item) => {
        const cat = item.category || 'Other';
        const amount = Number(item.amount) || 0;
        categoryTotals[cat] = (categoryTotals[cat] || 0) + amount;
    });

    const processedData = Object.keys(categoryTotals).map((cat) => ({
        name: cat,
        amount: categoryTotals[cat],
        color: categoryColors[cat] || categoryColors.default
    })).sort((a, b) => b.amount - a.amount);

    const totalSpent = processedData.reduce((sum, item) => sum + item.amount, 0);
    const spentPercentage = totalBudget > 0 ? ((totalSpent / totalBudget) * 100).toFixed(1) : '0.0';

    return (
        <div className='bg-white rounded-lg shadow-lg p-6 h-full flex flex-col font-sans
            dark:bg-zinc-700 duration-500 mt-6 lg:m-0'>
            <div className='flex items-center justify-between mb-6'>
                <h2 className='text-zinc-900 font-bold text-lg flex items-center gap-2 dark:text-white'>
                    <PieChartIcon className='text-emerald-500 w-5 h-5' />
                    Category Based Spendings
                </h2>
                <span className='hidden md:block lg:block text-xs text-gray-500 font-medium bg-gray-100 px-2 py-1 rounded-full dark:bg-gray-500 dark:text-white duration-500'>
                    Distribution
                </span>
            </div>

            <div className='flex-1 flex flex-col md:flex-row items-center justify-center gap-6'>
                {/* Chart Container */}
                <div className='relative w-full md:w-1/2 h-[260px] flex items-center justify-center'>
                    <ResponsiveContainer width="100%" height="100%" minWidth={0}>
                        <PieChart>
                            <Tooltip 
                                formatter={(value) => [
                                    `₨ ${value.toLocaleString()} (${((value / totalBudget) * 100).toFixed(1)}% of Budget)`, 
                                    'Spent'
                                ]}
                                contentStyle={{ 
                                    borderRadius: '8px',
                                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                                    backgroundColor: isDark ? '#27272a' : '#ffffff',
                                    border: isDark ? '1px solid #E5E7EB' : '1px solid #e4e4e7',
                                    color: isDark ? '#ffffff' : '#000000',
                                }}
                            />
                            <Pie 
                                data={processedData}
                                dataKey='amount'
                                nameKey='name'
                                outerRadius={95}
                                innerRadius={70}
                                paddingAngle={2}
                                stroke={0}
                            >
                                {processedData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none'>
                        <h2 className='text-3xl font-extrabold text-slate-800 dark:text-white duration-500'>{spentPercentage}%</h2>
                        <p className='text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1 drak:text-gray-300 duration-500'>Used of Budget</p>
                    </div>
                </div>

                {/* Custom Legend */}
                <span className='block md:hidden lg:hidden text-xs text-gray-500 font-medium bg-gray-100 px-2 py-1 rounded-full dark:bg-gray-500 dark:text-white duration-500'>
                    Distribution
                </span>
                <div className='w-full md:w-1/2 flex flex-col justify-center'>
                    <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-3 w-full px-2'>
                        {processedData.map((entry) => {
                            const percentOfBudget = ((entry.amount / totalBudget) * 100).toFixed(1);
                            return (
                                <li key={entry.name} className='flex items-center justify-between text-sm py-1.5 border-b border-gray-100 hover:bg-gray-50/50 rounded px-2 duration-150 dark:border-zinc-600 dark:border-b dark:hover:bg-zinc-700'>
                                    <div className='flex items-center gap-2.5 min-w-0'>
                                        <span 
                                            className='w-3 h-3 rounded-full flex-shrink-0' 
                                            style={{ backgroundColor: entry.color }}
                                        />
                                        <span className='font-semibold text-gray-700 truncate dark:text-white'>{entry.name}</span>
                                    </div>
                                    <div className='text-right ml-4 flex-shrink-0'>
                                        <span className='font-bold text-slate-900 dark:text-gray-300'>₨ {entry.amount.toLocaleString()}</span>
                                        <span className='text-[10px] text-gray-400 block font-medium'>{percentOfBudget}% of budget</span>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default DonutChart;
