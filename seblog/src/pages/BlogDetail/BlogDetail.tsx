import React from "react";
import Detail from "../../Components/Blog/Detail";

const BlogDetail = ({ match }) => {
  return (
    <div className="blogDetail">
      <Detail
        createdBy={match.params.createdBy}
        title={match.params.title}
        content={match.params.content}
        createdDate={match.params.createdDate}
      />
    </div>
  );
};

export default BlogDetail;
