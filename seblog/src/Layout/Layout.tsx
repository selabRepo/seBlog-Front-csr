import * as React from "react";
import Header from "./Header";
import {
  Route,
  Switch,
  RouteComponentProps,
  withRouter
} from "react-router-dom";

import loadable from "@loadable/component";
const TestComponent = loadable(() => import("../Components/TestComponent"));
const BlogWrite = loadable(() => import("../pages/BlogWrite"));
const Contents = loadable(() => import("./Contents"));
const BlogDetail = loadable(() => import("../pages/BlogDetail"));
const NotFound = loadable(() => import("../pages/NotFound"));

type ContentItemType = {
  title: string;
  content: string;
  createdBy: string;
  createdDate: string;
};

const Layout: React.SFC<RouteComponentProps<ContentItemType>> = props => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Contents} />
        <Route path="/blog/detail/:id" component={BlogDetail} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default withRouter(Layout);
