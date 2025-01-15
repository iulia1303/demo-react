import React from 'react';

const SensorDetails = ({ sensor }) => {
    return (
        <div className="sensor-details">
            <h2>{sensor.name} Details</h2>
            <p>Status: {sensor.status}</p>
            <p>Location: Warehouse 1</p> {/* Dummy location */}
            <p>Last Calibrated: 2024-12-15</p> {/* Dummy data */}
        </div>
    );
};

export default SensorDetails;
