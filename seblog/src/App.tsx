import * as React from "react";
import Layout from "./Layout";
import { Provider } from "react-redux";
import store from "./store/configureStore";

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <Layout />
      </Provider>
    );
  }
}

export default App;
