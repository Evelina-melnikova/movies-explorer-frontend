import React from 'react';
import './register.css'
import Logo from '../../images/logo.svg';
import { Link, useNavigate } from 'react-router-dom';

const Register = ({ onRegister }) => {
    const navigate = useNavigate();

    const [nameValue, setNameValue] = React.useState('');
    const [emailValue, setEmailValue] = React.useState('');
    const [passwordValue, setPasswordValue] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onRegister(passwordValue, emailValue);
    };

    const handleName = (e) => {
        setNameValue(e.target.value);
    };

    const handleEmail = (e) => {
        setEmailValue(e.target.value);
    };

    const handlePassword = (e) => {
        setPasswordValue(e.target.value);
    };

    return (
        <div className='register'>
            <form className='register__form' name='login' noValidate>
                <img className='register__logo' src={Logo} alt='Логотип' onClick={() => navigate('/')} />
                <h1 className='register__title'>Добро пожаловать!</h1>
                <div className="register__container register__container-input">
                    <label className='register__label'> Имя </label>
                    <input
                        name="name"
                        type="text"
                        className="register__input register__input_type_name"
                        required={true}
                        value={nameValue ?? ''}
                        onChange={handleName}
                    />
                    <span className="register__input-error register__input-error_type_email" />
                </div>
                <div className="register__container register__container-input">
                    <label className='register__label'> E-mail </label>
                    <input
                        name="email"
                        type="email"
                        className="register__input register__input_type_email"
                        required={true}
                        value={emailValue ?? ''}
                        onChange={handleEmail}
                    />
                    <span className="register__input-error register__input-error_type_email" />
                </div>
                <div className="register__container register__container-input">
                    <label className='register__label'> Пароль </label>
                    <input
                        name="password"
                        type="password"
                        className="register__input register__input_type_password"
                        required={true}
                        minLength={6}
                        value={passwordValue ?? ''}
                        onChange={handlePassword}
                    />
                    <span className="register__input-error register__input-error_type_password" />
                </div>
                <div className='register__container register__container_type_button register__container_type_register'>
                    <button className="register__button" type='submit' onClick={handleSubmit}> Зарегистрироваться </button>
                    <p className="register__caption"> Уже зарегистрированы?
                        <Link to="/sign-in" className="register__link"> {" "} Войти </Link>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Register;