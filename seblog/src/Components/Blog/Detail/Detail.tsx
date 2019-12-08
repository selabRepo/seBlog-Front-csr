import React, { FC } from "react";
import "./Detail.scss";

type ContentItemType = {
  title: string;
  content: string;
  createdBy: string;
  date: string;
};

const Detail: FC<ContentItemType> = ({ createdBy, title, content, date }) => {
  return (
    <div className="Detail-App">
      <div className="Detail-top">
        <div className="top-createdBy">{createdBy}</div>
        <div className="top-image">
          <img
            src="https://ko.reactjs.org/logo-og.png"
            alt="titleImg"
            className="titleImg"
          />
        </div>
      </div>
      <div className="Detail-title">
        <h2>{title}</h2>
      </div>
      <div className="separator"></div>
      <div className="Detail-content">{content}</div>
      <div className="Detail-info">
        <div className="top-date">{date}</div>
      </div>
    </div>
  );
};

export default Detail;
