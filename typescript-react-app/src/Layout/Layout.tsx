import * as React from "react";
import Header from "./Header";
import Menu from "./Menu";
import Contents from "./Contents";

const TestComponent = React.lazy(() => import("../Components/TestComponent"));

const Layout: React.SFC<any> = () => {
  return (
    <React.Suspense fallback={<div>loading...</div>}>
      <div className="App">
        <TestComponent />
        <Header />
        <Menu />
        <Contents />
      </div>
    </React.Suspense>
  );
};

export default Layout;
