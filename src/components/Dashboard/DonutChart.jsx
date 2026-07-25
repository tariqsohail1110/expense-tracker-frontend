import React from 'react'
import { PieChart, Pie, Cell, Tooltip } from 'recharts'
import { PieChart as PieChartIcon } from 'lucide-react'

function DonutChart() {
    const data = [
        { name: "Food", amount: 5000, color: "oklch(57.7% 0.245 27.325)" },
        { name: "Transport", amount: 8000, color: "oklch(54.6% 0.245 262.881)" },
        { name: "Shopping", amount: 3000, color: "oklch(68.1% 0.162 75.834)" },
        { name: "Health", amount: 12000, color: "oklch(50.8% 0.118 165.612)" },
        { name: "Entertainment", amount: 1500, color: "oklch(59.2% 0.249 0.584)" },
        { name: "Bills", amount: 7000, color: "oklch(51.1% 0.262 276.966)" },
        { name: "Others", amount: 1500, color: "oklch(64.8% 0.2 131.684)" },
    ];

    const totalBudget = 42000;
    const totalSpent = data.reduce((sum, item) => sum + item.amount, 0);
    const spentPercentage = ((totalSpent / totalBudget) * 100).toFixed(1);

    return (
        <>
            <div className='bg-white rounded-lg shadow-lg p-6 border border-gray-100 h-full flex flex-col'>
                <div className='flex items-center justify-between mb-6'>
                    <h2 className='text-gray-900 font-bold text-lg flex items-center gap-2 font-sans'>
                        <PieChartIcon className='text-emerald-500 w-5 h-5' />
                        Category Based Spendings
                    </h2>
                </div>
                <div className='flex-1 flex flex-col items-center justify-center'>
                    <div className='relative font-mono text-sm' style={{ width: 550, height: 330 }}>
                        <PieChart width={550} height={330}>
                            <Tooltip 
                                formatter={(value) => [
                                    `${value.toLocaleString()} (${((value / totalBudget) * 100).toFixed(1)}% of Budget)`, 
                                    'Spent'
                                ]}
                                contentStyle={{ 
                                    borderRadius: '8px', 
                                    border: '1px solid #E5E7EB',
                                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                                }}
                            />
                            <Pie 
                                data={data}
                                dataKey='amount'
                                outerRadius={100}
                                innerRadius={75}
                                paddingAngle={1}
                                label={({ name, amount }) => {
                                    const percentage = ((amount / totalBudget) * 100).toFixed(1);
                                    return `${name}: ${percentage}%`;
                                }}
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                        </PieChart>
                        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none'>
                            <h2 className='text-3xl font-extrabold text-slate-800 font-sans'>{spentPercentage}%</h2>
                            <p className='text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1 font-sans'>Used of Budget</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DonutChart
