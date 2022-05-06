import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => (
  <nav>
    <NavLink to="/" exact style={s.link} activeStyle={s.activeLink}>
      Home
    </NavLink>

    <NavLink
      to="/contacts"
      exact
      style={s.link}
      activeStyle={s.activeLink}
    >
      Contacts
    </NavLink>
  </nav>
);

export default Navigation;