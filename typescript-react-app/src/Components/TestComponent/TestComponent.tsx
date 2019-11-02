import * as React from "react";
interface StateProps {}
interface DispatchProps {}
interface OwnProps {}
type Props = StateProps & DispatchProps & OwnProps;
class TestComponent extends React.PureComponent<Props> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return <div></div>;
  }
}

export default TestComponent;
