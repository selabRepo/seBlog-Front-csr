import React from "react";
import "./Header.scss";
const Header = () => {
  return (
    <div className="header__wrap">
      <div className="header__box">
        <div className="logo__wrap">
          <div className="logo__box">
            <a className="logo--main_selog" href="/">
              selog
            </a>
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
