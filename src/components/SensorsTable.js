import React, { useState } from 'react';
import '../SensorsTable.css';
import {FaArrowUp, FaArrowDown, FaSort, FaTrash} from 'react-icons/fa'; // Sorting icons

const SensorsTable = () => {
    const [sensors, setSensors] = useState([
        { id: 1, name: 'Temperature Sensor', status: 'Active', temperature: 28 },
        { id: 2, name: 'Humidity Sensor', status: 'Inactive', temperature: 22 },
        { id: 3, name: 'Pressure Sensor', status: 'Error', temperature: 30 },
        { id: 4, name: 'Light Sensor', status: 'Active', temperature: 25 },
        { id: 5, name: 'Proximity Sensor', status: 'Inactive', temperature: 20 },
    ]);

    const [sortConfig, setSortConfig] = useState({ key: null, direction: null });
    const [statusFilter, setStatusFilter] = useState('');

    // Sort sensors based on current sort configuration
    const sortedSensors = [...sensors].sort((a, b) => {
        if (!sortConfig.key) return 0; // No sorting
        const { key, direction } = sortConfig;
        const order = direction === 'ascending' ? 1 : -1;

        if (key === 'name') return a[key].localeCompare(b[key]) * order;
        if (key === 'temperature') return (a[key] - b[key]) * order;

        return 0;
    });

    // Filter sensors by status (case-insensitive)
    const filteredSensors = sortedSensors.filter((sensor) =>
        sensor.status.toLowerCase().includes(statusFilter.toLowerCase())
    );

    // Update sorting configuration
    const handleSort = (key) => {
        setSortConfig((prevConfig) => {
            if (prevConfig.key === key) {
                if (prevConfig.direction === 'ascending') {
                    return { key, direction: 'descending' };
                } else if (prevConfig.direction === 'descending') {
                    return { key: null, direction: null }; // Disable sorting
                }
            }
            return { key, direction: 'ascending' };
        });
    };

    // Remove sensor
    const removeSensor = (id) => {
        setSensors(sensors.filter((sensor) => sensor.id !== id));
    };

    // Edit sensor (dummy functionality for demo purposes)
    const editSensor = (id) => {
        alert(`Edit sensor with ID: ${id}`);
    };

    return (
        <div className="sensor-table-container">
            <h2>Sensors Table</h2>

            {/* Filter */}
            <input
                type="text"
                placeholder="Filter by status (Active, Inactive, Error)"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="filter-input"
            />

            {/* Table */}
            <table className="sensor-table">
                <thead>
                <tr>
                    <th onClick={() => handleSort('name')} className="sortable">
                        Name{' '}
                        {sortConfig.key === 'name' &&
                            (sortConfig.direction === 'ascending' ? (
                                <FaArrowUp />
                            ) : sortConfig.direction === 'descending' ? (
                                <FaArrowDown />
                            ) : (
                                <FaSort />
                            ))}
                    </th>
                    <th onClick={() => handleSort('temperature')} className="sortable">
                        Reference value {' '}
                        {sortConfig.key === 'temperature' &&
                            (sortConfig.direction === 'ascending' ? (
                                <FaArrowUp />
                            ) : sortConfig.direction === 'descending' ? (
                                <FaArrowDown />
                            ) : (
                                <FaSort />
                            ))}
                    </th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {filteredSensors.map((sensor) => (
                    <tr key={sensor.id}>
                        <td>{sensor.name}</td>
                        <td>{sensor.temperature}</td>
                        <td>{sensor.status}</td>
                        <td>
                            <button
                                onClick={() => editSensor(sensor.id)}
                                className="action-button edit-button"
                            >
                                <FaArrowUp />
                            </button>
                            <button
                                onClick={() => removeSensor(sensor.id)}
                                className="action-button delete-button"
                            >
                                <FaTrash />
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default SensorsTable;
