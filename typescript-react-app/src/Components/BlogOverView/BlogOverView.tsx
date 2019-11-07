import React, { FC } from "react";

import "./BlogOverView.css";

type ContentItemType = {
  createdDate: string;
  id: number;
  categoryID: number;
  title: string;
  content: string;
  hits: number;
  createdBy: string;
  titleImg: any;
};

const BlogOverView: FC<ContentItemType> = ({
  createdDate,
  id,
  categoryID,
  title,
  content,
  hits,
  createdBy,
  titleImg
}) => {
  return (
    <div className="BlogListItem-root">
      <div className="BlogListItem-container">
        <div className="BlogListItem-titleImg">
          <img src={titleImg} alt="titleImg" className="titleImg" />
        </div>
        <div className="BlogListItem-body">
          <div className="BlogListItem-title">
            <h2>{title}</h2>
          </div>
          <div className="BlogListItem-info">
            <div className="BlogListItem-createDate">{createdDate}</div>
            <div className="BlogListItem-createdBy">{createdBy}</div>
            <div className="BlogListItem-hits">{hits}</div>
          </div>
          <div className="BlogListItem-content">{content}</div>
        </div>
      </div>
    </div>
  );
};

export default BlogOverView;
