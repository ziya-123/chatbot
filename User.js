// src/components/User.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const User = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isForgotPassword, setIsForgotPassword] = useState(false);
    const [newPassword, setNewPassword] = useState('');
    const navigate = useNavigate();

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(u => u.username === username && u.password === password);

        if (user) {
            alert('Login successful');
            navigate('/chatbot');
        } else {
            alert('Invalid credentials');
        }
    };

    const handleResetPasswordSubmit = (e) => {
        e.preventDefault();
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const userIndex = users.findIndex(u => u.username === username);

        if (userIndex !== -1) {
            users[userIndex].password = newPassword;
            localStorage.setItem('users', JSON.stringify(users));
            alert('Password reset successful');
            setIsForgotPassword(false);
        } else {
            alert('User not found');
        }
    };

    return (
        <div>
            <img src="https://th.bing.com/th/id/OIP.fio1nXsUCvmMVKmVqHO0cgHaHa?w=218&h=218&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="Login" className="newbanner" />
            {isForgotPassword ? (
                <div>
                    <h2>Reset Password</h2>
                    <form onSubmit={handleResetPasswordSubmit}>
                        <div>
                            <label>Username:</label>
                            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required placeholder='Enter your Username'/>
                        </div>
                        <div>
                            <label>New Password:</label>
                            <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required placeholder='Enter your New password' />
                        </div>
                        <button className='btn1' type="submit">Reset Password</button>
                        <button type="button" onClick={() => setIsForgotPassword(false)}>Back to Login</button>
                    </form>
                </div>
            ) : (
                <div>
                    <h2>User Login</h2>
                    <form onSubmit={handleLoginSubmit}>
                        <div>
                            <label>Username:</label>
                            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required placeholder='Enter your Username' />
                        </div>
                        <div>
                            <label>Password:</label>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder='Enter your Password' />
                        </div>
                        <button type="submit">Login</button>
                    </form>
                    <div>
                        <button className='btn' type="button" onClick={() => setIsForgotPassword(true)}>Forgot Password?</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default User;
