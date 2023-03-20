import { Link } from 'react-router-dom';

type HeaderProps = {
  currentRoute: string;
};

function Header(props: HeaderProps) {
  return (
    <div id="navbar" className="bg-gray-800 text-white px-2 flex h-16 items-center justify-between">
      <h1>{props.currentRoute}</h1>
      <div>
        <Link to="/" className="px-2">
          Home
        </Link>
        <Link to="/about" className="px-2">
          About
        </Link>
      </div>
    </div>
  );
}

export default Header;
