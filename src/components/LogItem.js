import React from 'react';

const LogItem = ({ log }) => {
    return (
        <li className="log-item">
            <strong>{log.user}</strong> has {log.action}.
        </li>
    );
};

export default LogItem;
