import * as React from "react";
import Layout from "./Layout";
import { hot as Hot } from "react-hot-loader";

class App extends React.Component {
  public render() {
    return <Layout />;
  }
}

export default Hot(module)(App);
