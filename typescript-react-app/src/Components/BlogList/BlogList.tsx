import React, { FC } from "react";
import BlogListItem from "../BlogListItem";

import "./BlogList.css";

type contentType = {
  createdDate: string;
  updatedDate: string;
  id: number;
  categoryID: number;
  title: string;
  content: string;
  hits: number;
  useYN: boolean;
  createdBy: string;
  userID: number;
  titleImg: any;
};

const BlogList: FC<contentType> = ({
  createdDate,
  updatedDate,
  id,
  categoryID,
  title,
  content,
  hits,
  useYN,
  createdBy,
  userID,
  titleImg
}) => {
  return (
    <div className="BlogList">
      <div className="BlogList-contents">
        <BlogListItem
          createdDate={createdDate}
          categoryID={categoryID}
          title={title}
          content={content}
          hits={hits}
          createdBy={createdBy}
          id={id}
          titleImg={titleImg}
        />
      </div>
    </div>
  );
};

export default BlogList;
