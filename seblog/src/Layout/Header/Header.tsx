import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header__wrap">
      <div className="header__box">
        <div className="logo__wrap">
          <div className="logo__box">
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
      </div>
    </div>
  );
};
export default Header;
