import * as React from "react";
import Header from "./Header";
import { Route } from "react-router-dom";

import loadable from "@loadable/component";
const TestComponent = loadable(() => import("../Components/TestComponent"));
const Contents = loadable(() => import("./Contents"));
const BlogDetail = loadable(() => import("../pages/BlogDetail"));

const Layout: React.SFC<any> = () => {
  return (
    <div className="App">
      <TestComponent />
      <Header />
      <Route exact path="/" component={Contents} />
      <Route
        exact
        path="/blog/detail/:createdBy/:title/:content/:createdDate"
        component={BlogDetail}
      />
    </div>
  );
};

export default Layout;
