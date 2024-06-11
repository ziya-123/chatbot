import React, { useState } from 'react';

const NewUser = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        contact: '',
        email: '',
        address: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const users = JSON.parse(localStorage.getItem('users')) || [];
        users.push(formData);
        localStorage.setItem('users', JSON.stringify(users));
        alert('Successfully registered');
        setFormData({
            username: '',
            password: '',
            contact: '',
            email: '',
            address: ''
        });
    };

    return (
        <div>
            <img src="https://th.bing.com/th/id/OIP.15l1Um-KWxuSeLMq8CjqHQHaH_?w=178&h=192&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="Register" className=" newbanner" />
            <h2>New User Registration</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input type="text" name="username" value={formData.username} onChange={handleChange} required placeholder='Enter your Name'/>
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} required placeholder='Enter your Password'/>
                </div>
                <div>
                    <label>Contact No:</label>
                    <input type="text" name="contact" value={formData.contact} onChange={handleChange} required placeholder='Enter your Phone no' />
                </div>
                <div>
                    <label>Email ID:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder='Enter your Email' />
                </div>
                <div>
                    <label>Address:</label>
                    <input type="text" name="address" value={formData.address} onChange={handleChange} required placeholder='Enter your Address'/>
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default NewUser;