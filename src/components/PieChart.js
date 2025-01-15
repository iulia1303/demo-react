import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
    const data = {
        labels: ['Active', 'Inactive', 'Error'],
        datasets: [
            {
                data: [70, 20, 10],
                backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56']
            }
        ]
    };

    return (
        <div>
            <h3>Sensor Status Distribution</h3>
            <div className="pie-chart">
                <Pie data={data}/>
            </div>
        </div>
    );
};

export default PieChart;
