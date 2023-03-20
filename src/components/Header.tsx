import { Link } from 'react-router-dom';

type HeaderProps = {
  currentRoute: string;
};

function Header(props: HeaderProps) {
  return (
    <div id="navbar">
      <h1>{props.currentRoute}</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
}

export default Header;
