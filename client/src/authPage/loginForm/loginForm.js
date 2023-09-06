import React, { useState } from 'react';
import useStore from '../../store';
import axios from 'axios';

function LoginForm() {
    const { setMessage, setLoading } = useStore();
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const buttonHandler = () => {
        const login = formData.username;
        const password = formData.password;
        if (login.length === 0 || password.length === 0 || login.length < 3 || login.length > 20 || password.length < 8 || password.length > 20) {
            setMessage('Login should be more than 3 and less than 20 character, password should be more than 8 and less than 25 characters')
        } else {
            const data = { login, password };

            setLoading(true);
            axios.post('http://localhost:3001/api/login', data)
                .then((response) => {
                    const data = response.data;
                    if (data.token) {
                        localStorage.setItem('token', data.token);

                        window.location.href = 'http://localhost:3000/';
                    } else {
                        setMessage(data.message);
                        setLoading(false);
                    }
                })
                .catch((error) => {
                    console.error('Ошибка при выполнении запроса:', error);
                    setLoading(false);
                });
        }


    };

    const handleInputKeyDown = (e) => {
        const pattern = /^[a-zA-Z0-9]+$/;

        if (!pattern.test(e.key)) {
            e.preventDefault();
        }
    };

    return (
        <div className='inputs'>


            <input
                placeholder='Your login'
                type='text'
                name='username'
                value={formData.username}
                onChange={handleInputChange}
                onKeyDown={handleInputKeyDown}
            />


            <input
                placeholder='Your password'
                type='password'
                name='password'
                value={formData.password}
                onChange={handleInputChange}
                onKeyDown={handleInputKeyDown}
            />

            <button onClick={buttonHandler}>Log in</button>

        </div>
    );
}

export default LoginForm;