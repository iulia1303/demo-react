import React, { useState } from 'react';
import '../Settings.css';

const Settings = () => {
    const [formData, setFormData] = useState({
        username: 'AdminUser',
        email: 'admin@example.com',
        theme: 'Light',
    });
    const [showToast, setShowToast] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSave = (e) => {
        e.preventDefault();
        setShowToast(true);

        // Hide the toaster after 3 seconds
        setTimeout(() => setShowToast(false), 3000);
    };

    return (
        <div className="settings-container">
            <h2>Settings</h2>
            <p>Adjust application settings here.</p>
            <form onSubmit={handleSave} className="settings-form">
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="theme">Theme</label>
                    <select
                        id="theme"
                        name="theme"
                        value={formData.theme}
                        onChange={handleChange}
                    >
                        <option value="Light">Light</option>
                        <option value="Dark">Dark</option>
                    </select>
                </div>
                <button type="submit" className="save-button">Save Settings</button>
            </form>

            {showToast && <div className="toast">Settings saved successfully!</div>}
        </div>
    );
};

export default Settings;
