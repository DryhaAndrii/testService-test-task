import './authPage.scss';
import { useState } from 'react';
import LoginForm from './loginForm/loginForm';
import RegistationForm from './registrationForm/registrationForm';

function AuthPage() {
    const [isLoginForm, setIsLoginForm] = useState(true);


    return (
        <div className='authPage'>
            <div className='form'>
                <div className='formHeader'>
                    <div className={`${isLoginForm}`} onClick={()=>{setIsLoginForm(true)}}>Login</div>
                    <div className={`${!isLoginForm}`} onClick={()=>{setIsLoginForm(false)}}>Registration</div>
                </div>
                {isLoginForm ? <LoginForm /> : <RegistationForm />}
            </div>

        </div>
    )
}
export default AuthPage;