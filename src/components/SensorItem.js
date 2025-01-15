import React from 'react';

const SensorItem = ({ sensor }) => {
    return (
        <li className="sensor-item">
            <h3 className='sensor-name'>{sensor.name}</h3>
            <p className="sensor-status">Status: {sensor.status}</p>
        </li>
    );
};

export default SensorItem;
