import React, { FC } from "react";
import "./CategoryList.scss";

type ContentType = {
  categoryName: string;
  id: number;
  createdDate: string;
  updatedDate: string;
  groupNumber: number;
  depth: number;
  groupOrder: number;
  createdBy: string;
};

type ContentItemType = {
  contents: ContentType[];
};

const CategoryList: FC<ContentItemType> = ({ contents }) => {
  return (
    <div className="list__wrap--menu">
      <section className="title__wrap">
        <div className="title__box">
          <h1 className="title--menu">카테고리</h1>
        </div>
      </section>
      <ul>
        {contents.map(
          ({
            categoryName,
            id,
            createdDate,
            updatedDate,
            groupNumber,
            depth,
            groupOrder,
            createdBy
          }: ContentType) => (
            <div>{categoryName}</div>
          )
        )}
      </ul>
    </div>
  );
};

export default CategoryList;
