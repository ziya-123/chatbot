// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './Components/Home';
import NewUser from './Components/Newuser';
import User from './Components/User';
import Chatbot from './Components/Chatbot';

const App = () => {
    return (
        <Router>
            <div>
                <header>
                    <h1>Welcome to BotBuddy</h1>
                </header>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/new-user">New User</Link></li>
                        <li><Link to="/user">User</Link></li>
                    </ul>
                </nav>
                <div className="container">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/new-user" element={<NewUser />} />
                        <Route path="/user" element={<User />} />
                        <Route path="/Chatbot" element={<Chatbot />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;