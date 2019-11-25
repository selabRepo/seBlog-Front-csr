import * as React from "react";
import Blog from "../../pages/Blog";
import "./Contents.scss";
import { Route } from "react-router-dom";
import BlogDetail from "../../pages/BlogDetail";

const Contents = () => {
  return (
    <div className="App-contents">
      <Route exact path="/" component={Blog} />
      <Route exact path="/BlogDetail" component={BlogDetail} />
    </div>
  );
};

export default Contents;
