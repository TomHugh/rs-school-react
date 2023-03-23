/* eslint-disable @typescript-eslint/no-empty-interface */
import React from 'react';
import { Link } from 'react-router-dom';

interface Props {}

interface State {
  currentRoute: string;
}

class Header extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = { currentRoute: location.pathname };
  }

  addLinkClasses = (route: string) => {
    const isActive = this.state.currentRoute === route ? 'text-teal-400' : '';
    return 'px-2 ' + isActive;
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
