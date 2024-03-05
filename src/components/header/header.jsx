import React from 'react';
import './header.css';
import Navigation from '../navigation/navigation';

function Header({ isLoggedIn }) {
  return (
    <header className={'header'}>
      <Navigation isLoggedIn={isLoggedIn} />
    </header>
  );
}

export default Header;