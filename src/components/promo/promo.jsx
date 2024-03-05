import React from 'react';
import './promo.css';

function Promo() {
    return (
        <section className='promo'>
            <div className='promo__wrapper'>
                <h1 className='title'> Учебный проект студента факультета Веб&#8209;разработки. </h1>
                <div className='promo__link_container'>
                <a className='promo__link' href='#about-project'> О проекте </a>
                <a className='promo__link' href='#techs'> Технологии </a>
                <a className='promo__link' href='#about-me'> Студент </a>
                </div>
            </div>
        </section>
    );
}

export default Promo