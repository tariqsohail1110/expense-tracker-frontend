import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';
import { BarChart3 } from 'lucide-react';
import data from '../../common/data.json';

const mockData = data;

function SimpleBarChart() {
    return (
        <div className='bg-white rounded-lg shadow-lg p-6 border border-gray-100 font-sans mt-6'>
            <div className='flex items-center justify-between mb-6'>
                <h2 className='text-zinc-900 font-bold text-lg flex items-center gap-2'>
                    <BarChart3 className='text-indigo-500 w-5 h-5' />
                    Expenses by Category
                </h2>
            </div>
            <div className='h-96 w-full'>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={mockData}
                        margin={{
                            top: 5,
                            right: 0,
                            left: 0,
                            bottom: 5,
                        }}
                    >
                        <XAxis dataKey="category" />
                        <YAxis width="auto" tickFormatter={(val) => `₨${val.toLocaleString()}`} />
                        <Tooltip formatter={(value) => [`₨ ${value.toLocaleString()}`, 'Amount']} />
                        <Bar 
                            dataKey="amount" 
                            fill="#2a3542" 
                            activeBar={{ fill: '#334155' }} 
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