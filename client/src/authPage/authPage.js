import './authPage.scss';
import { useState } from 'react';
import LoginForm from './loginForm/loginForm';
import RegistationForm from './registrationForm/registrationForm';
const clientUrl = process.env.REACT_APP_CLIENT_URL;
function AuthPage() {
    const [isLoginForm, setIsLoginForm] = useState(true);


    return (
        <div className='authPage'>
            <div className='form'>
                <div className='formHeader'>
                    <div className={`${isLoginForm}`} onClick={() => { setIsLoginForm(true) }}>Login</div>
                    <div className={`${!isLoginForm}`} onClick={() => { setIsLoginForm(false) }}>Registration</div>
                </div>
                {isLoginForm ? <LoginForm /> : <RegistationForm />}
                <button onClick={() => { window.location.href = `${clientUrl}` }} className='cancelButton'>Cancel</button>
            </div>

        </div>
    )
}
export default AuthPage;