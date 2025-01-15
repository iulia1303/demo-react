import React from 'react';

const SensorItem = ({ sensor }) => {
    return (
        <li className="sensor-item">
            <h3>{sensor.name}</h3>
            <p>Status: {sensor.status}</p>
        </li>
    );
};

export default SensorItem;
