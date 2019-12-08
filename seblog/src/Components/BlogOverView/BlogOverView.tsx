import React, { FC } from "react";
import { Link } from "react-router-dom";
import "./BlogOverView.scss";
import eyes from "./icons/eye.svg";

type ContentItemType = {
  createdDate: string;
  id: number;
  categoryID: number;
  title: string;
  content: string;
  hits: number;
  createdBy: string;
  titleImg: string;
};

type Category = {
  id: number;
  categoryName: string;
};

const category: Category[] = [
  {
    id: 0,
    categoryName: "react"
  },
  {
    id: 1,
    categoryName: "javascript"
  },
  {
    id: 2,
    categoryName: "typescript"
  },
  {
    id: 3,
    categoryName: "java"
  }
];

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
    <Link to={`/blog/detail/${createdBy}/${title}/${content}/${createdDate}`}>
      <li className="list__item">
        <div className="list__img">
          <img alt="titleImg" className="img img--thumbnail" src={titleImg} />
        </div>
        <div className="list__txt">
          <div className="list__txt--top">
            <div className="list__txt--top-header">
              <div className="category">
                {category.map(index =>
                  index.id === categoryID ? index.categoryName : ""
                )}
              </div>
              <div className="createdBy">{createdBy}</div>
            </div>
            <div className="title">{title}</div>
          </div>
          <div className="list__txt--bottom">
            <p className="description">{content}</p>
            <div className="status">
              <div className="date">{createdDate}</div>
              <div className="hits">
                <img src={eyes} alt="hits" className="hits-icons" />
                {hits}
              </div>
            </div>
          </div>
        </div>
      </li>
    </Link>
  );
};

export default BlogOverView;
