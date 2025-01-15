import React from 'react';
import SensorList from '../components/SensorList';
import SensorDetails from '../components/SensorDetails';
import SensorChart from '../components/SensorChart';
import PieChart from '../components/PieChart';
import LogList from '../components/LogList';
import SensorsTable from "../components/SensorsTable";

const Dashboard = () => {
    const sensors = [
        { id: 1, name: 'Temperature Sensor', status: 'Active' },
        { id: 2, name: 'Humidity Sensor', status: 'Inactive' },
        { id: 3, name: 'Pressure Sensor', status: 'Active' },
    ];

    const selectedSensor = sensors[0];

    return (
        <div className="dashboard-content">
            {/* Left Column */}
            <div className="left-column">
                <div className="sensor-list-container">
                    <SensorList sensors={sensors} />
                </div>
                    <LogList />
                <div className="pie-chart-container">
                    <PieChart />
                </div>
            </div>

            {/* Right Column */}
            <div className="right-column">
                    <SensorDetails sensor={selectedSensor} />
                    <SensorChart />
                <div className="log-list-container">
                    <SensorsTable/>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
