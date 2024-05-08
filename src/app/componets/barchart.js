import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { LineChart } from '@mui/x-charts/LineChart';
import { PieChart } from '@mui/x-charts/PieChart';
import { ScatterChart } from '@mui/x-charts/ScatterChart';


export default function BasicBars() {

    return (
        <>
            <BarChart
                sx={{ backgroundColor: 'white' }}
                xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
                series={[
                    { data: [40, 30, 50], label: 'Maths' },
                    { data: [10, 50, 30], label: 'Science' },
                    { data: [50, 20, 20], label: 'English' }
                ]}
                width={500}
                height={300}
            />
            <br></br>
            <br></br>
            <br></br>
            <LineChart
                sx={{ backgroundColor: 'white' }}
                xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                series={[
                    {
                        data: [2, 5.5, 2, 8.5, 1.5, 5],
                        color: 'red',
                        label: 'Red'
                    },
                    {
                        data: [20, 5.50, 52, 8.5, 51.5, 75],
                        color: 'green',
                        label: 'Green'
                    },
                    {
                        data: [55, 5.5, 25, 8.5, 1.57, 5],
                        color: 'orange',
                        label: 'Orange'
                    },
                ]}
                width={500}
                height={300}
            />
            <br></br>
            <br></br>
            <br></br>
            <PieChart
                sx={{ backgroundColor: 'white' }}
                colors={['red', 'blue', 'green']}
                series={[
                    {
                        data: [
                            {
                                id: 0, value: 10, label: 'series A',
                            },

                            { id: 1, value: 15, label: 'series B' },
                            { id: 2, value: 20, label: 'series C' },
                        ],
                    },
                ]}
                width={400}
                height={200}
            />
            <br></br>
            <br></br>
            <br></br>
            
        </>


    );
}