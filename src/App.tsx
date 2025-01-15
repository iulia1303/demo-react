import React from 'react';
import SensorList from './components/SensorList';
import SensorDetails from './components/SensorDetails';
import SensorChart from './components/SensorChart';
import PieChart from './components/PieChart';
import LogList from "./components/LogList";

const App = () => {
    const sensors = [
        {id: 1, name: 'Temperature Sensor', status: 'Active'},
        {id: 2, name: 'Humidity Sensor', status: 'Inactive'},
        {id: 3, name: 'Pressure Sensor', status: 'Active'}
    ];

    const selectedSensor = sensors[0]; // Default selected sensor

    return (
        <div className="app-container">
            <h1>Sensors Dashboard</h1>
            <div className="sensors-container">
                <div className="sensors-dashboard">
                    <div className="sensor-list-container">
                        <SensorList sensors={sensors}/>
                    </div>
                        <LogList/>
                        <PieChart/>
                </div>
                <div className="sensor-details-chart-container">
                    <SensorDetails sensor={selectedSensor}/>
                    <SensorChart/>
                        <LogList/>
                </div>
            </div>
        </div>
    );
};

export default App;
