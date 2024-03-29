import React from "react";
import { Link } from "react-router-dom";
import './menu-modal.css';

function MenuModal({ isMenuOpen, onClose }) {
    return (
        isMenuOpen && (
            <div className='menu-modal'>
                <button type='button' className='menu-modal__close' onClick={onClose} />
                <nav className='menu-modal__nav'>
                    <ul className='menu-modal__list_box'>
                        <li className='menu-modal__list'>
                            <Link to={'/'} className='navigation__link menu-modal__link'> Главная </Link>
                        </li>
                        <li className='menu-modal__list'>
                            <Link to={'/movies'} className='navigation__link menu-modal__link'> Фильмы </Link>
                        </li>
                        <li className='menu-modal__list'>
                            <Link to={'/saved-movies'} className='navigation__link menu-modal__link'> Сохранённые фильмы </Link>
                        </li>
                    </ul>
                    <ul className='menu-modal__list_account'>
                        <li className='navigation__list_item menu-modal__list'>
                            <Link to={'/profile'} className='navigation__link menu-modal__link'>
                                <div className='navigation__link-wrapper menu-modal__link_wrapper'>
                                    <h2 className='navigation__text menu-modal__text'>Аккаунт</h2>
                                    <div className='menu-modal__account-logo'></div>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div >
        )
    );
}

export default MenuModal;