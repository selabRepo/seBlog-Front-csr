import * as React from "react";
import Header from "./Header";
import { Route } from "react-router-dom";

import loadable from "@loadable/component";
const TestComponent = loadable(() => import("../Components/TestComponent"));
const BlogWrite = loadable(() => import("../pages/BlogWrite"));
const Contents = loadable(() => import("./Contents"));
const BlogDetail = loadable(() => import("../pages/BlogDetail"));
const NotFound = loadable(() => import("../pages/NotFound"));

const Layout: React.SFC<any> = () => {
  return (
    <div className="App">
      <Header />
      <Route exact path="/" component={Contents} />
      <Route
        exact
        path="/blog/detail/:createdBy/:title/:content/:createdDate"
        component={BlogDetail}
      />
      <Route component={NotFound} />
    </div>
  );
};

export default Layout;
