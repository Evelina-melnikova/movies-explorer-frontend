import React from 'react';
import movieWord from '../../../images/pic__COLOR_pic.png';
import movieYears from '../../../images/100years.png';
import movieBansky from '../../../images/Bansky.png';
import save from '../../../images/save3.svg';
import movieBasquiat from '../../../images/Basquiat.png';
import movieRun from '../../../images/run.png';
import movieBook from '../../../images/book.png';

import './movies-card.css';

function MoviesCard() {

  return (
    <ul className='movies-card-box'>
      <li className='movies-card'>
        <div className='movies-card__container'>
          <div className='movies-card__box-text'>
            <h2 className='movies-card__title'>33 слова о дизайне</h2>
            <p className='movies-card__time'>1ч 17м</p>
          </div>
          <button type='button' className='movies-card__button'>Сохранить</button>
          <img src={movieWord} alt='Постер фильма' className='movies-card__image' />
        </div>
      </li>
      <li className='movies-card'>
        <div className='movies-card__container'>
          <div className='movies-card__box-text'>
            <h2 className='movies-card__title'>Киноальманах «100 лет дизайна»</h2>
            <p className='movies-card__time'>1ч 17м</p>
          </div>
          <button type='button' className='movies-card__button'>Сохранить</button>
          <img src={movieYears} alt='Постер фильма' className='movies-card__image' />
        </div>
      </li>
      <li className='movies-card'>
        <div className='movies-card__container'>
          <div className='movies-card__box-text'>
            <h2 className='movies-card__title'>В погоне за Бенкси</h2>
            <p className='movies-card__time'>1ч 17м</p>
          </div>
          <img type='button' className='movies-card__button-saved' src={save} />
          <img src={movieBansky} alt='Постер фильма' className='movies-card__image' />
        </div>
      </li>
      <li className='movies-card'>
        <div className='movies-card__container'>
          <div className='movies-card__box-text'>
            <h2 className='movies-card__title'>Баския: Взрыв реальности</h2>
            <p className='movies-card__time'>1ч 17м</p>
          </div>
          <button type='button' className='movies-card__button'>Сохранить</button>
          <img src={movieBasquiat} alt='Постер фильма' className='movies-card__image' />
        </div>
      </li>
      <li className='movies-card'>
        <div className='movies-card__container'>
          <div className='movies-card__box-text'>
            <h2 className='movies-card__title'>Бег это свобода</h2>
            <p className='movies-card__time'>1ч 17м</p>
          </div>
          <button type='button' className='movies-card__button'>Сохранить</button>
          <img src={movieRun} alt='Постер фильма' className='movies-card__image' />
        </div>
      </li>
      <li className='movies-card'>
        <div className='movies-card__container'>
          <div className='movies-card__box-text'>
            <h2 className='movies-card__title'>Книготорговцы</h2>
            <p className='movies-card__time'>1ч 17м</p>
          </div>
          <img type='button' className='movies-card__button-saved' src={save} />
          <img src={movieBook} alt='Постер фильма' className='movies-card__image' />
        </div>
      </li>
    </ul>
  );
}

export default MoviesCard;


{/* <ul class='movies-card-list'>
      <li class='movies-card'>
        <div class='movies-card__container'>
          <div class='movies-card__box-text'>
            <h2 class='movies-card__title'>33 слова о дизайне</h2>
            <p class='movies-card__time'>1ч 17м</p>
          </div>
          <button type='button' class='movies-card__button'>Сохранить</button>
          <img src={movieWord} alt='Постер фильма' class='movies-card__image' />
        </div>
      </li>
      <li class='movies-card'>
        <div class='movies-card__container'>
          <div class='movies-card__box-text'>
            <h2 class='movies-card__title'>Киноальманах «100 лет дизайна»</h2>
            <p class='movies-card__time'>1ч 17м</p>
          </div>
          <button type='button' class='movies-card__button'>Сохранить</button>
          <img src={movieYears} alt='Постер фильма' class='movies-card__image' />
        </div>
      </li>
      <li class='movies-card'>
        <div class='movies-card__container'>
          <div class='movies-card__box-text'>
            <h2 class='movies-card__title'>В погоне за Бенкси</h2>
            <p class='movies-card__time'>1ч 17м</p>
          </div>
          <img type='button' class='movies-card__button-saved' src={save} />
          <img src={movieBansky} alt='Постер фильма' class='movies-card__image' />
        </div>
      </li>
      <li class='movies-card'>
        <div class='movies-card__container'>
          <div class='movies-card__box-text>
            <h2 class='movies-card__title'>Баския: Взрыв реальности</h2>
            <p class='movies-card__time'>1ч 17м</p>
          </div>
          <button type='button' class='movies-card__button'>Сохранить</button>
          <img src={movieBasquiat} alt='Постер фильма' class='movies-card__image' />
        </div>
      </li>
      <li class='movies-card'>
        <div class='movies-card__container'>
          <div class='movies-card__box-text'>
            <h2 class='movies-card__title'>Бег это свобода</h2>
            <p class='movies-card__time'>1ч 17м</p>
          </div>
          <button type='button' class='movies-card__button'>Сохранить</button>
          <img src={movieRun} alt='Постер фильма' class='movies-card__image' />
        </div>
      </li>
      <li class='movies-card'>
        <div class='movies-card__container'>
          <div class='movies-card__box-text'>
            <h2 class='movies-card__title'>Книготорговцы</h2>
            <p class='movies-card__time'>1ч 17м</p>
          </div>
          <img type='button' class='movies-card__button-saved' src={save} />
          <img src={movieBook} alt='Постер фильма' class='movies-card__image' />
        </div>
      </li>
    </ul> */}