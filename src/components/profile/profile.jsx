import React from 'react';
import { Link } from "react-router-dom";

import './profile.css';

function Profile() {

  return (
    <main>
      <section className='profile'>
      <h1 className='profile__title'> Привет, Виталий! </h1>
      <form className='profile__form'>
        <div className='profile__container'>
          <label className='profile__label'> Имя </label>
          <input
            className='profile__input'
            placeholder='Виталий'
            name='name'
            type='text'
            required
          />
        </div>
        <div className='profile__container'>
          <label className='profile__label'> E-mail </label>
          <input
            className='profile__input profile__input_type_email'
            placeholder='pochta@yandex.ru'
            name='email'
            type='email'
            required
          />
        </div>
      </form>
      <div className='profile__container-button'>
        <button type='button' className='profile__button profile__button_edit'> Редактировать </button>
        <Link to={'/sign-up'}> <button type='button' className='profile__button'> Выйти из аккаунта </button></Link> 
      </div>
      </section>
    </main>
  );
}

export default Profile;