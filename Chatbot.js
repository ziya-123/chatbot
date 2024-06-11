// src/components/Chatbot.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const predefinedAnswers = {
    "What is your name?": "I am ChatBot.",
    "How can I help you?": "You can ask me any question.",
    "What is the capital of France?": "The capital of France is Paris.",
    "Tell me a joke": "Why don't scientists trust atoms? Because they make up everything!",
    // Add more predefined questions and answers here
};

const Chatbot = () => {
    const [messages, setMessages] = useState([
        { sender: 'bot', text: 'Hello! How can I assist you today?' }
    ]);
    const [input, setInput] = useState('');
    const navigate = useNavigate();

    const handleSend = () => {
        if (input.trim()) {
            const newMessages = [...messages, { sender: 'user', text: input }];
            setMessages(newMessages);
            const answer = predefinedAnswers[input] || "I'm sorry, I don't understand that question.";
            setTimeout(() => {
                setMessages(prevMessages => [
                    ...prevMessages,
                    { sender: 'bot', text: answer }
                ]);
            }, 500);
            setInput('');
        }
    };

    const handleLogout = () => {
        navigate('/user');
    };

    return (
        <div>
            <div className="header">
                <h2>Chatbot</h2>
                <button className="logout-button" onClick={handleLogout}>Logout</button>
            </div>
            <div className="chat-window">
                {messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.sender}`}>
                        {msg.text}
                    </div>
                ))}
            </div>
            <div className="input-area">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                />
                <button onClick={handleSend}>Send</button>
            </div>
        </div>
    );
};

export default Chatbot;
