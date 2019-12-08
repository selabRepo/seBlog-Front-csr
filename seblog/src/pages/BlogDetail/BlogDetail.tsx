import React, { FC } from "react";
import Detail from "../../Components/Blog/Detail";

import { RouteComponentProps, withRouter } from "react-router-dom";

type ContentItemType = {
  title: string;
  content: string;
  createdBy: string;
  createdDate: string;
};

const BlogDetail: FC<RouteComponentProps<ContentItemType>> = props => {
  const { match } = props;

  return (
    <Detail
      createdBy={match.params.createdBy}
      title={match.params.title}
      content={match.params.content}
      createdDate={match.params.createdDate}
    />
  );
};

export default withRouter(BlogDetail);
