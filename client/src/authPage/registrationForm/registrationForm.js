import axios from 'axios';
import useStore from '../../store';
import { useState } from 'react';
function RegistationForm() {
    const { setMessage,setLoading } = useStore();
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        repeatPassword: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const buttonHandler = () => {
        if (formData.username.length < 3 || formData.username.length > 20) {
            setMessage('Login cannot be less than 3 and more than 20 characters');
        } else if (formData.password.length < 8 || formData.username.length > 25) {
            setMessage('Password cannot be less than 8 and more than 25 characters');
        } else if (formData.password !== formData.repeatPassword) {
            setMessage('Passwords are not equal');
        } else {
            setLoading(true);
            axios.post('http://localhost:3001/api/register', { login: formData.username, password: formData.password })
                .then((response) => {
                    setMessage(response.data);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error('Ошибка отправки:', error);
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
            <input
                placeholder='Repeat password'
                type='password'
                name='repeatPassword'
                value={formData.repeatPassword}
                onChange={handleInputChange}
                onKeyDown={handleInputKeyDown}
            />

            <button onClick={buttonHandler}>Register</button>

        </div>
    );
}
export default RegistationForm;