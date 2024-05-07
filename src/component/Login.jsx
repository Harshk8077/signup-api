import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';


const Login = () => {
    const [mobileNumber, setMobileNumber] = useState('');
    const [password, setPassword] = useState('');

    function loginData() {
        const requestData = {
            mobileNumber: mobileNumber,
            password: password
        };

        console.warn(requestData);

        axios.post('https://riyo.onrender.com/riyologistics/loginweb', requestData)
            .then((response) => {
                console.log(response);
                const token = response.data.token;

                Cookies.set('token', token);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    const handleFormSubmit = (e) => {
        e.preventDefault();
        loginData();
    };
    return (
        <div>
            <h1>LOGIN PAGE</h1>
            <br /><br />
            <form onSubmit={loginData}>
                <label htmlFor="mobileNumber">Mobile Number: </label>
                <input type="text" value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    name='mobileNumber' placeholder='Mobile Number' /> <br /><br />

                <label htmlFor="password">Password: </label>
                <input type="password" value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    name='password' placeholder='Password' /> <br /><br />

                <button onClick={handleFormSubmit}>Login</button>
            </form>
            <br /><br />
        </div>
    );
};

export default Login;
