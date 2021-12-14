import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <NavLink
          exact
          to="/"
          className="nav-text"
          activeClassName="nav-text-active"
        >
          Home
        </NavLink>
        <NavLink
          to="/movies"
          className="nav-text"
          activeClassName="nav-text-active"
        >
          Movies
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
