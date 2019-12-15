import React, { Component } from "react";
import "./Header.scss";
import MainTitle from "../../Components/MainTitle";
import { Link } from "react-router-dom";

type titleTypes = {
  mainTitle: string;
  subTitle: string;
};

class Header extends Component {
  state: titleTypes = {
    mainTitle: "SE.LOG",
    subTitle: "Software Engineering LAB Technology Blog"
  };

  render() {
    return (
      <div className="header__wrap">
        <header className="header__box">
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
        </header>
        <MainTitle
          mainTitle={this.state.mainTitle}
          subTitle={this.state.subTitle}
        />
      </div>
    );
  }
}
export default Header;
