import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const SensorChart = () => {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [
            {
                label: 'Sensor Data',
                data: [65, 59, 80, 81, 56],
                borderColor: 'rgba(75, 192, 192, 1)',
                tension: 0.1
            }
        ]
    };

    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Sensor Data Over Time'
            }
        }
    };

    return (
        <div className="sensor-chart">
            <h3>Sensor Data Chart</h3>
            <Line data={data} options={options} />
        </div>
    );
};

export default SensorChart;
