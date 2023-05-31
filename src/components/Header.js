import { NavLink } from 'react-router-dom';

const Header = () => (
  <>
    <nav className="nav">
      <div className="name-logo-container">
        <img className="logo" src="https://i.postimg.cc/x8xhGBMh/planet.png" alt="logo" />
        <NavLink className="name-logo" to="/">Space Travelers&apos; Hub</NavLink>
      </div>
      <ul className="ul">
        <li className="li">
          <NavLink className="navlink" to="/">Rockets</NavLink>
        </li>
        <li className="li">
          <NavLink className="navlink missions-navlink" to="/missions">Missions</NavLink>
        </li>
        <li className="li">
          <NavLink className="navlink" to="/profile">My Profile</NavLink>
        </li>
      </ul>
    </nav>
  </>
);

export default Header;
