import React, { Component } from "react";
import Detail from "../../Components/Blog/Detail";
import { RouteComponentProps } from "react-router-dom";
import { RootState } from "../../store/modules";
import { bindActionCreators } from "redux";
import { blogAction } from "../../store/modules/blog";
import { connect } from "react-redux";
import Blog from "../Blog/Blog";

interface ContentItemType {
  id: string;
}
type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapDispatchToProps>;
type RoutingProps = RouteComponentProps<ContentItemType>;
type BlogDetailComponentsProps = StateProps & DispatchProps & RoutingProps;

class BlogDetail extends Component<BlogDetailComponentsProps, {}> {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    const { BlogAction } = this.props;
    BlogAction.getBlogDetail(id);
  }

  componentDidUpdate(prevProps: BlogDetailComponentsProps, prevState: {}) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.props.BlogAction.getBlogDetail(this.props.match.params.id);
    }
  }
  render() {
    const { title, createdBy, content, date } = this.props.blog;
    return <Detail {...{ title, createdBy, content, date }} />;
  }
}

const mapStateToProps = ({ blog }: RootState) => ({
  blog
});
const mapDispatchToProps = dispatch => ({
  BlogAction: bindActionCreators(blogAction, dispatch)
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogDetail);
