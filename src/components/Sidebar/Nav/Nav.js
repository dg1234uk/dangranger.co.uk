import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Styles from './Nav.module.css';

const Nav = ({ menu }) => (
  <div>
    <nav className={Styles.nav}>
      <ul className={Styles.nav__ul}>
        {menu.map(menuItem => (
          <li className={Styles.nav__li} key={menuItem.path}>
            <Link
              to={menuItem.path}
              className={Styles.nav__link}
              activeClassName={Styles.nav__linkActive}
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
