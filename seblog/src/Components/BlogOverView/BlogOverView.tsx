import React, { FC } from "react";
import "./BlogOverView.scss";
import eyes from "./icons/eye.svg";
import date from "./icons/calendar.svg";

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
    <li className="list__item">
      <div className="list__img">
        <img alt="test" className="img img--thumbnail" src={titleImg} />
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
          <h2 className="title">{title}</h2>
        </div>
        <div className="list__txt--bottom">
          <p className="description">{content}</p>
          <div className="status">
            <div className="date">
              <img src={date} alt="createDate" className="date-icon" />
              {createdDate}
            </div>
            <div className="hits">
              <img src={eyes} alt="hits" className="hits-icons" />
              {hits}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default BlogOverView;
