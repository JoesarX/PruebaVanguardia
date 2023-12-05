import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/login.css"

const Login = ({ setLoggedIn }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/agregarIngrediente');
    };

    return (
        <div className="container login-container">
            <div className="form-container">
                <h2>Login</h2>
                <div className="input-group">
                    <label>Username:</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="input-group">
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button onClick={handleLogin}>Login</button>
            </div>
        </div>
    );
};

export default Login;
