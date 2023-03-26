/* eslint-disable @typescript-eslint/no-empty-interface */
import React from 'react';
import { Link } from 'react-router-dom';

interface State {
  currentRoute: string;
}

class Header extends React.Component<unknown, State> {
  constructor() {
    super(undefined);
    this.state = { currentRoute: location.pathname };
  }

  addLinkClasses = (route: string) => {
    const isActive = this.state.currentRoute === route ? ' text-teal-400' : '';
    return 'px-2' + isActive;
  };

  setCurrentRoute(route: string) {
    this.setState({ currentRoute: route });
  }

  render() {
    return (
      <div
        id="navbar"
        className="bg-gray-800 text-white px-2 flex h-16 items-center justify-between"
      >
        <h1>RS-School React</h1>
        <div>
          <Link
            to="/"
            onClick={() => {
              this.setCurrentRoute('/');
            }}
            className={this.addLinkClasses('/')}
          >
            Home
          </Link>
          <Link
            to="/form"
            onClick={() => {
              this.setCurrentRoute('/form');
            }}
            className={this.addLinkClasses('/form')}
          >
            Form
          </Link>
          <Link
            to="/about"
            onClick={() => {
              this.setCurrentRoute('/about');
            }}
            className={this.addLinkClasses('/about')}
          >
            About
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
