import React from 'react';
import SensorItem from './SensorItem';

const SensorList = ({ sensors }) => {
    return (
        <div className="sensor-list">
            <h2>Sensors</h2>
            <ul>
                {sensors.map(sensor => (
                    <SensorItem key={sensor.id} sensor={sensor} />
                ))}
            </ul>
        </div>
    );
};

export default SensorList;
