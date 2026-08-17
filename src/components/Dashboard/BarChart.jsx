import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';
import { BarChart3 } from 'lucide-react';
import useTheme from '../../contexts/theme.js';
import data from '../../common/data.json';

const mockData = data;

function SimpleBarChart({ data = mockData }) {
    const { themeMode } = useTheme();
    const isDark = themeMode === 'dark';

    const [isMobile, setIsMobile] = React.useState(
        typeof window !== 'undefined' ? window.innerWidth < 768 : false
    );

    React.useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    if (isMobile) return null;

    // Group transactions by category
    const categoryTotals = {};
    const transactions = Array.isArray(data) ? data : [];

    transactions.forEach((item) => {
        const cat = item.category || 'Other';
        const amount = Number(item.amount) || 0;
        categoryTotals[cat] = (categoryTotals[cat] || 0) + amount;
    });

    const processedData = Object.keys(categoryTotals).map((cat) => ({
        category: cat,
        amount: categoryTotals[cat]
    })).sort((a, b) => b.amount - a.amount);

    // Dynamic styles based on theme
    const barColor = isDark ? 'oklch(51.1% 0.262 276.966)' : 'oklch(69.6% 0.17 162.48)';
    const activeBarColor = isDark ? 'oklch(39.8% 0.195 277.366)' : 'oklch(43.2% 0.095 166.913)';
    const textColor = isDark ? '#e4e4e7' : '#71717a';

    return (
        <div className='hidden md:block lg:block bg-white rounded-lg shadow-lg p-6 font-sans mt-6
            dark:bg-zinc-700 duration-500
        '>
            <div className='flex items-center justify-between mb-6'>
                <h2 className='text-zinc-900 font-bold text-lg flex items-center gap-2
                dark:text-white'>
                    <BarChart3 className='text-indigo-500 w-5 h-5 dark:text-indigo-600' />
                    Expenses by Category
                </h2>
            </div>
            <div className='h-96 w-full text-xs lg:text-md'>
                <ResponsiveContainer width="100%" height="100%" minWidth={0}>
                    <BarChart
                        data={processedData}
                        margin={{
                            top: 5,
                            right: 0,
                            left: 0,
                            bottom: 5,
                        }}
                    >
                        <XAxis 
                            dataKey="category" 
                            stroke={textColor} 
                            tick={{ fill: textColor }}
                        />
                        <YAxis 
                            width="auto" 
                            tickFormatter={(val) => `₨${val.toLocaleString()}`} 
                            stroke={textColor}
                            tick={{ fill: textColor }}
                        />
                        <Tooltip 
                            contentStyle={{
                                backgroundColor: isDark ? '#27272a' : '#ffffff',
                                border: isDark ? '1px solid #E5E7EB' : '1px solid #e4e4e7',
                                color: isDark ? '#ffffff' : '#000000',
                                borderRadius: '8px'
                            }}
                            itemStyle={{
                                color: isDark ? '#ffffff' : '#000000'
                            }}
                            labelStyle={{
                                color: isDark ? '#a1a1aa' : '#71717a'
                            }}
                            formatter={(value) => [`₨ ${value.toLocaleString()}`, 'Amount']} 
                        />
                        <Bar 
                            dataKey="amount" 
                            fill={barColor} 
                            activeBar={{ fill: activeBarColor }} 
                            radius={[10, 10, 0, 0]}
                        />
                        <RechartsDevtools />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

export default SimpleBarChart;