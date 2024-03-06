import React from 'react';
import './promo.css';

function Promo() {
    return (
        <section className='promo'>
            <div className='promo__wrapper'>
                <h1 className='title'> Учебный проект студента факультета Веб&#8209;разработки. </h1>
                <nav>
                <ul className='promo__link-container'>
                    <li><a className='promo__link' href='#about-project'> О проекте </a></li>
                    <li><a className='promo__link' href='#techs'> Технологии </a></li>
                    <li><a className='promo__link' href='#about-me'> Студент </a></li>
                </ul>
                </nav>
            </div>
        </section>
    );
}

export default Promo