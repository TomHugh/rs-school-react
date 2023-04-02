import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [currentRoute, setCurrentRoute] = useState(location.pathname);

  const addLinkClasses = (route: string) => {
    const isActive = currentRoute === route ? ' text-teal-400' : '';
    return 'px-2' + isActive;
  };

  return (
    <div id="navbar" className="bg-gray-800 text-white px-2 flex h-16 items-center justify-between">
      <h1>RS-School React</h1>
      <div>
        <Link
          to="/"
          onClick={() => {
            setCurrentRoute('/');
          }}
          className={addLinkClasses('/')}
        >
          Home
        </Link>
        <Link
          to="/form"
          onClick={() => {
            setCurrentRoute('/form');
          }}
          className={addLinkClasses('/form')}
        >
          Form
        </Link>
        <Link
          to="/about"
          onClick={() => {
            setCurrentRoute('/about');
          }}
          className={addLinkClasses('/about')}
        >
          About
        </Link>
      </div>
    </div>
  );
}

export default Header;
