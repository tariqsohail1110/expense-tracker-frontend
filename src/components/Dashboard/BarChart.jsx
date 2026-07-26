import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';
import { BarChart3 } from 'lucide-react';

const data = [
        { name: "Food", spent: 5000, color: "oklch(57.7% 0.245 27.325)" },
        { name: "Transport", spent: 8000, color: "oklch(54.6% 0.245 262.881)" },
        { name: "Shopping", spent: 3000, color: "oklch(68.1% 0.162 75.834)" },
        { name: "Health", spent: 12000, color: "oklch(50.8% 0.118 165.612)" },
        { name: "Entertainment", spent: 1500, color: "oklch(59.2% 0.249 0.584)" },
        { name: "Bills", spent: 7000, color: "oklch(51.1% 0.262 276.966)" },
        { name: "Others", spent: 1500, color: "oklch(64.8% 0.2 131.684)" },
    ];

function SimpleBarChart() {
    return (
        <>
            <div className='bg-white rounded-lg shadow-lg p-6 border border-gray-100 font-sans mt-6'>
                <div className='flex items-center justify-between mb-6'>
                    <h2 className='text-zinc-900 font-bold text-lg flex items-center gap-2'>
                        <BarChart3 className='text-indigo-500 w-5 h-5' />
                        Expenses by Category
                    </h2>
                </div>
                <BarChart
                    responsive
                    data={data}
                    margin={{
                        top: 5,
                        right: 0,
                        left: 0,
                        bottom: 5,
                    }}
                    className='flex items-center justify-between h-96 w-full'
                >
                <XAxis dataKey="name" />
                <YAxis width="auto" />
                <Tooltip />
                <Bar dataKey="spent" fill="oklch(20.8% 0.042 265.755)" activeBar={{ fill: 'oklch(37.2% 0.044 257.287)' }} radius={[10, 10, 0, 0]} />
                <RechartsDevtools />
                </BarChart>
            </div>
        </>
    );
};

export default SimpleBarChart;