import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <nav className="navigation">
      <NavLink className="link" to="/form">Kredīts</NavLink>
    </nav>
  </header>
);

export default Header;
