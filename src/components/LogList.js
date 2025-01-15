import React, { useState, useEffect, useRef } from 'react';

const LogItem = ({ log }) => {
    return (
        <li className="log-item">
            <span className="log-text">{`${log.user} ${log.action}`}</span>
            <button className="view-details">View More Details</button>
        </li>
    );
};

const LogList = () => {
    const [logs, setLogs] = useState([]);
    const [visibleLogs, setVisibleLogs] = useState(10);
    const containerRef = useRef(null);

    useEffect(() => {
        const generateLogs = () => {
            const logsData = [];
            for (let i = 0; i < 50; i++) {
                const user = ['Josh', 'Emma', 'Michael', 'Sarah', 'David'][i % 5];
                const action = `changed the temperature from ${Math.floor(Math.random() * 30 + 10)} to ${Math.floor(Math.random() * 30 + 20)}`;
                logsData.push({ id: i, user, action });
            }
            setLogs(logsData);
        };

        generateLogs();
    }, []);

    const handleScroll = () => {
        if (containerRef.current) {
            const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
            if (scrollTop + clientHeight >= scrollHeight && visibleLogs < logs.length) {
                setVisibleLogs(prevVisibleLogs => Math.min(prevVisibleLogs + 10, logs.length));
            }
        }
    };

    const handleReadMore = () => {
        setVisibleLogs(prevVisibleLogs => Math.min(prevVisibleLogs + 10, logs.length));
    };

    useEffect(() => {
        const currentContainer = containerRef.current;
        currentContainer.addEventListener('scroll', handleScroll);

        return () => {
            currentContainer.removeEventListener('scroll', handleScroll);
        };
    }, [visibleLogs, logs]);

    return (
        <div className="log-list-container">
            <h1 className="log-list-title">Temperature Logs</h1>
            <div className="log-list" ref={containerRef} style={{ maxHeight: '300px', overflowY: 'auto' }}>
                <ul>
                    {logs.slice(0, visibleLogs).map(log => (
                        <LogItem key={log.id} log={log} />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default LogList;
