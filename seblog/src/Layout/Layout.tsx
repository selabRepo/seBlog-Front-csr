import * as React from "react";
import Header from "./Header";

import loadable from "@loadable/component";
const TestComponent = loadable(() => import("../Components/TestComponent"));
const BlogList = loadable(() => import("./BlogList"));

const Layout: React.SFC<any> = () => {
  return (
    <div className="App">
      <TestComponent />
      <Header />
      <BlogList />
    </div>
  );
};

export default Layout;
