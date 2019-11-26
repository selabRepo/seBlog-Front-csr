import * as React from "react";
import Header from "./Header";
import { BrowserRouter, Route } from "react-router-dom";

import loadable from "@loadable/component";
const TestComponent = loadable(() => import("../Components/TestComponent"));
const BlogWrite = loadable(() => import("../pages/BlogWrite"));
const Contents = loadable(() => import("./Contents"));

const Layout: React.SFC<any> = () => {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Route exact path="/" component={Contents} />
        <Route exact path="/blog/write" component={BlogWrite} />
      </BrowserRouter>
    </div>
  );
};

export default Layout;
