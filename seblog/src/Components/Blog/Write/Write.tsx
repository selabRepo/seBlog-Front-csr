import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { blogAction } from "../../../store/modules/blog";
import { RootState } from "../../../store/modules/index";

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapDispatchToProps>;
type WriteComponentsProps = StateProps & DispatchProps;

class Write extends Component<WriteComponentsProps, {}> {
  private title: string;
  private content: string;
  constructor(props) {
    super(props);
    this.title = "";
    this.content = "";
  }

  componentDidMount() {
    console.log("123");
  }
  componentDidUpdate(prevProps: WriteComponentsProps, prveState: {}) {}

  handleInputChange = (dataKey: string) => (evt: React.ChangeEvent<HTMLInputElement>) => {
    evt.preventDefault();
    this[dataKey] = evt.target.value;
    return false;
  };

  handleBlurTitle = (evt: React.SyntheticEvent) => {
    this.props.BlogAction.addBlogTitle(this.title);
    this.title = "";
    return false;
  };

  handleBlurContent = (evt: React.SyntheticEvent) => {
    this.props.BlogAction.addBlogContent(this.content);
    this.title = "";
    return false;
  };

  handleChangeCategory = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    this.props.BlogAction.addBlogCategory(evt.target.value);
    return false;
  };

  render() {
    return (
      <div>
        <input
          type="text"
          className="title"
          placeholder="제목"
          onChange={this.handleInputChange("title")}
          onBlur={this.handleBlurTitle}
        ></input>
        <input
          type="text"
          className="contents"
          placeholder="내용"
          onChange={this.handleInputChange("content")}
          onBlur={this.handleBlurContent}
        ></input>
        <select name="fruits" onChange={this.handleChangeCategory}>
          <option value="">-- 선택 --</option>
          <option value="1">javascript</option>
          <option value="2">node</option>
          <option value="3">react</option>
        </select>
      </div>
    );
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
)(Write);
