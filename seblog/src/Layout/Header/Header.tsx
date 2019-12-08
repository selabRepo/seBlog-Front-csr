import React from "react";
import "./Header.scss";
import MainTitle from '../../Components/MainTitle';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header__wrap">
      <header className="header__box">
        <div className="logo__wrap">
          <div className="logo__box">
              <img className="logo logo--main_selog" src="/public/img/SELAB_logo.png" alt="logo" />
            <Link className="logo--main_selog" to="/">
              selog
            </Link>
          </div>
        </div>
        <div className="button__wrap--header">
          <div className="button__box">
            <button className="button button--menu"></button>
            </div>
          </div>
      </header> 
      <MainTitle mainTitle="SE.LOG" subTitle={["Software Engineering LAB",<br></br>,"Technology Blog"]}></MainTitle>
    </div>   
  );
};
export default Header;
