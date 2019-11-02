import * as React from "react";
import Header from "./Header";
import Menu from "./Menu";
import Contents from "./Contents";

const Layout = () => {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Contents />
    </div>
  );
};

export default Layout;
