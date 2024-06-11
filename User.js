import React, { useState } from 'react';

const User = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        // e.preventDefault();
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(u => u.username === username && u.password === password);
        if (user) {
            alert('Login successful');
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <div>
            <img src="https://th.bing.com/th/id/OIP.fio1nXsUCvmMVKmVqHO0cgHaHa?w=218&h=218&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="Login" className="newbanner" />
            <h2>User Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required placeholder='Enter your Username'/>
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder='Enter your Password' />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default User;
