import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';

export default function AuthNav() {
  return (
    <div>
        <NavLink
            to="/register"
            exact
            style={s.link}
            activeStyle={s.activeLink}
        >
            Register
        </NavLink>
            
        <NavLink
            to="/login"
            exact
            style={s.link}
            activeStyle={s.activeLink}
        >
            Login
        </NavLink>
    </div>
  );
}