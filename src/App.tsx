import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './index.css'; // Your existing index.css
import Dashboard from './pages/Dashboard';
import History from './pages/History';
import Administration from './pages/Administration';
import Settings from './pages/Settings';

const App = () => {
    const [menuVisible, setMenuVisible] = useState(false);

    // Toggle menu visibility
    const toggleMenu = () => setMenuVisible((prev) => !prev);

    return (
        <Router>
            <div className="app-container">
                {/* Header */}
                <header className="app-header">
                    <div className="header-top">
                        <span className="menu-icon" onClick={toggleMenu}>☰</span>
                        <h1>Sensors Dashboard</h1>
                    </div>
                </header>

                {/* Menu Section */}
                {menuVisible && (
                    <nav className="menu-section">
                        <ul className="menu-list">
                            <li><Link to="/">Dashboard</Link></li>
                            <li><Link to="/history">History</Link></li>
                            <li><Link to="/administration">Administration</Link></li>
                            <li><Link to="/settings">Settings</Link></li>
                        </ul>
                    </nav>
                )}

                {/* Main Content */}
                <main>
                    <Routes>
                        <Route path="/" element={<Dashboard/>}/>
                        <Route path="/history" element={<History/>}/>
                        <Route path="/administration" element={<Administration/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                    </Routes>
                </main>
            </div>
        </Router>
    );
};

export default App;
