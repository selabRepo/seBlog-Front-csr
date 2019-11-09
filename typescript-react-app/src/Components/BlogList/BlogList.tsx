import React, { FC } from "react";
import BlogOverView from "../BlogOverView";

import "./BlogList.scss";

type ContentType = {
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

type ContentItemType = {
  contents: ContentType[];
};

const BlogList: FC<ContentItemType> = ({ contents }) => {
  return (
    <div className="BlogList">
      <div className="BlogList-contents">
        {contents.map(
          ({
            createdDate,
            categoryID,
            title,
            content,
            hits,
            createdBy,
            id,
            titleImg
          }: ContentType) => (
            <BlogOverView
              createdDate={createdDate}
              categoryID={categoryID}
              title={title}
              content={content}
              hits={hits}
              createdBy={createdBy}
              id={id}
              titleImg={titleImg}
              key={id}
            />
          )
        )}
      </div>
    </div>
  );
};

export default BlogList;
