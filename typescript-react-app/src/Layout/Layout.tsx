import * as React from "react";
import Header from "./Header";
import Menu from "./Menu";
import loadable from "@loadable/component";
const TestComponent = loadable(() => import("../Components/TestComponent"));
const Contents = loadable(() => import("./Contents"));
const Layout: React.SFC<any> = () => {
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
