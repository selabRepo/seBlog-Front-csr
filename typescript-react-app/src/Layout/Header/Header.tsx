import React from 'react'
import './Header.css'
// import seLogo from '../../../public/img/logo/seLogo.jpg'

const Header = () => 
        <div className="App-Header">
            <div className="Header-container">
            <img src={process.env.PUBLIC_URL + '/img/logo/seLogo.jpg'} alt="seLogo" className="Header-icon" />
            {/* <img src = {seLogo} alt='seLogo' className="Header-icon" /> */}
            <div className = "Header-title">
                SELOG
            </div>
            </div>
        </div>
    

export default Header
