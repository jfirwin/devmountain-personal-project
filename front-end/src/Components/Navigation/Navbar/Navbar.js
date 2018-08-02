import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import style from './navbar.css'

const activeStyle = {
  color: 'red'
}

class Navbar extends Component {
  render() {
    return (
      <nav>
        <NavLink exact to="/" activeClassName="selected" activeStyle={activeStyle}>Home</NavLink>
        <NavLink to="/about" activeClassName="selected" activeStyle={activeStyle}>About</NavLink>
        <NavLink to="/search" activeClassName="selected" activeStyle={activeStyle}>Search</NavLink>
        <NavLink to="/" activeClassName="selected" activeStyle={activeStyle}>Sign Up</NavLink>
        <NavLink to="/" activeClassName="selected" activeStyle={activeStyle}>Login</NavLink>
      </nav>
    );
  }
}

export default Navbar;
