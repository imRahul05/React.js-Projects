import React from 'react'
import '../App.css'
import { AuthContext } from '../ContextAPI/AuthContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router'

const Login = () => {
    const { login, data, setData } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        login(data, navigate);
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input type="email" 
                    name="email" 
                    value={data.email} 
                    onChange={handleChange} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" 
                    name="password"
                     value={data.password}
                      onChange={handleChange}/>
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;