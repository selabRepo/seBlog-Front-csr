import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { RootState } from "../../store/modules";
import { blogListAction } from "../../store/modules/blogList";

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapDispatchToProps>;
type TestComponentProps = StateProps & DispatchProps;
class TestComponent extends React.Component<TestComponentProps> {
  // eslint-disable-next-line
  constructor(props: any) {
    super(props);
  }

  render() {
    return <div></div>;
  }
  componentDidMount() {
    this.props.BlogListAction.getBlogList();
  }
  componentDidUpdate(prevProps: TestComponentProps, prevState: any) {
    console.log(this.props.blogList);
  }
}

const mapStateToProps = ({ blogList }: RootState) => ({
  blogList
});
const mapDispatchToProps = dispatch => ({
  BlogListAction: bindActionCreators(blogListAction, dispatch)
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TestComponent);
