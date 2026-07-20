import React from 'react'
import { PieChart, Pie, Tooltip } from 'recharts'

function DonutChart() {
    const data = [
        { name: "Geeksforgeeks", students: 400 },
        { name: "Technical scripter", students: 700 },
        { name: "Geek-i-knack", students: 200 },
        { name: "Geek-o-mania", students: 1000 },
    ];
    return (
        <>
            <div className='bg-white rounded-lg shadow-md p-6 border flex justify-center'>
                <PieChart width={550} height={330}>
                <Tooltip />
                    <Pie 
                        data={data}
                        dataKey='students'
                        outerRadius={100}
                        innerRadius={75}
                        fill='green'
                        label={({name, students}) =>
                            `${name}: ${students}`
                        }
                    />
                </PieChart>
            </div>
        </>
    )
}

export default DonutChart
