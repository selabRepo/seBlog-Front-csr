import React from "react";
import "./Contents.css";
import { Setting } from "../../pages";
import { Route, Switch } from "react-router-dom";

const Home = React.lazy<React.ComponentType>(() => import("../../pages/Home"));
const About = React.lazy<React.ComponentType>(() => import("../../pages/About"));
const Blog = React.lazy<React.ComponentType>(() => import("../../pages/Blog"));

const Contents: React.SFC<any> = () => {
  return (
    <div className="App-contetns">
      <React.Suspense fallback={<div>loading..</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Blog" component={Blog} />
          <Route path="/Setting" component={Setting} />
        </Switch>
      </React.Suspense>
    </div>
  );
};

export default Contents;
