import * as React from 'react'
import { HashRouter as Router, Link} from 'react-router-dom'
import './Menu.css';


const Menu = () => {
  return (
    <div className="App-Menu">
      <div className="Menu-container">
        <Router>
          <Link to='/' className="menu-item">Home</Link>
          <Link to='/About' className="menu-item">About</Link>
          <Link to='/Blog' className="menu-item">Blog</Link>
          <Link to='/Setting' className="menu-item">Setting</Link>
        </Router>
      </div>
    </div>
  )
}

export default Menu;
