import * as React from 'react'
import { NavLink } from 'react-router-dom'
import './Menu.css';

const Menu = () => {
  return (
    <div className="App-Menu">
      <div className="Menu-container">
          <NavLink to='/' className="menu-item" activeClassName='active'>Home</NavLink>
          <NavLink to='/About' className="menu-item" activeClassName='active'>About</NavLink>
          <NavLink to='/Blog' className="menu-item" activeClassName='active'>Blog</NavLink>
          <NavLink to='/Setting' className="menu-item" activeClassName='active'>Setting</NavLink>
        </div>
    </div>
  )
}

export default Menu;
