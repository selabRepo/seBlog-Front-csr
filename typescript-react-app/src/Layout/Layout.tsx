import React from "react";
import Header from "./Header";
import Menu from "./Menu";
import Contents from "./Contents";
import TestComponent from "../Components/TestComponent";

const Layout = () => {
  return (
    <div className="App">
      <TestComponent />
      <Header />
      <Menu />
      <Contents />
    </div>
  );
};

export default Layout;
