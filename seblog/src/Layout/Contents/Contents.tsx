import React from "react";
import "./Contents.scss";
import { Setting } from "../../pages";
import { Route, Switch } from "react-router-dom";
import loadable from "@loadable/component";

const fallback = <div>Loading...</div>;
const AboutComponent = loadable(() => import("../../pages/About"), {
  fallback
});
const HomeComponent = loadable(
  () => import(/* webpackChunkName: "HomeComponent" / / webpackPrefetch: true / / webpackPreload: true */ "../../pages/Home"),
  {
    fallback
  }
);
const BlogComponent = loadable(() => import("../../pages/Blog"), {
  fallback
});
const Contents: React.SFC<any> = () => {
  return (
    <div className="App-contetns">
      <Switch>
        <Route exact path="/" component={HomeComponent} />
        <Route path="/About" component={AboutComponent} />
        <Route path="/Blog" component={BlogComponent} />
        <Route path="/Setting" component={Setting} />
      </Switch>
    </div>
  );
};

export default Contents;
