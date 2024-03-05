import React from "react";
import Logo from '../../images/logo.svg';
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import './navigation.css';
import BurgerMenu from './burger-menu/burger-menu';
import MenuModal from "./menu-modal/menu-modal";

function Navigation({ isLoggedIn }) {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = (event) => {
            setWidth(event.target.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleBurgerMenuOpen = () => {
        setIsMenuOpen(true);
    };

    const hadndleMenuClose = () => {
        setIsMenuOpen(false);
    }

    return (
        <>
            <nav className='navigation'>
                <div className='navigation__list-links'>
                    <img className='navigation__logo' alt='Логотип' src={Logo} onClick={() => navigate('/')} />
                </div>
                {width > 1279 && isLoggedIn && (
                    <div className="navigation__list-box">
                        <li className='navigation__list-links'>
                            <Link to={'/movies'} className='navigation__link'> Фильмы </Link>
                        </li>
                        <li className='navigation__list-links'>
                            <Link to={'/saved-movies'} className='navigation__link'> Сохранённые фильмы </Link>
                        </li>
                    </div>
                )}
                {width > 1279 && isLoggedIn
                    ? (
                        <div className='navigation__list-links'>
                            <Link to={'/profile'} className='navigation__link'>
                                <div className='navigation__link-wrapper'>
                                    <h2 className='navigation__text'>Аккаунт</h2>
                                </div>
                            </Link>
                        </div>
                    )
                    : !isLoggedIn && (
                        <ul className='navigation__list navigation__list_account'>
                            <li className='navigation__list-links'>
                                <Link to={'/sign-up'} className='navigation__link navigation__link_signup'> Регистрация </Link>
                            </li>
                            <li className='navigation__list-links'>
                                <Link to={'/sign-in'} className='navigation__link navigation__link_signin'> Войти </Link>
                            </li>
                        </ul>
                    )}
                {(isLoggedIn && width < 1280) && (
                    <BurgerMenu handleOpen={handleBurgerMenuOpen} />
                )}
            </nav>
            <MenuModal
                isMenuOpen={isMenuOpen}
                onClose={hadndleMenuClose}
            />
        </>
    );
}

export default Navigation;