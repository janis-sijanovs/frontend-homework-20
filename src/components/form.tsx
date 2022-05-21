import { NavLink, useParams } from 'react-router-dom';

const { pageNumber } = useParams();

const Form = () => (
  <header>
    <nav className="navigation">
      <NavLink className="link" to="/form">Kredīts</NavLink>
    </nav>
  </header>
);

export default Form;
