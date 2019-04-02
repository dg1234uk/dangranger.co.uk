import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const Nav = ({ menu }) => (
  <div>
    <nav className="nav">
      <ul className="nav__ul">
        {menu.map(menuItem => (
          <li className="nav__li" key={menuItem.path}>
            <Link
              to={menuItem.path}
              className="nav__link"
              activeClassName="nav__link--active"
            >
              {menuItem.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  </div>
);

Nav.propTypes = {
  menu: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default Nav;
