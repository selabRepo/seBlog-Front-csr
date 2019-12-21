import React from "react";
import "./NavigationMenu.scss";
import Search from "../../Components/Search";
import CategoryList from "../../Components/CategoryList";

//TODO ducks를 통해 CategoryList를 가져오는 작업
const content = [
  {
    categoryName: "React.js",
    id: 1,
    createdDate: "10-10-10",
    updatedDate: "string",
    groupNumber: 0,
    depth: 0,
    groupOrder: 0,
    createdBy: "admin"
  },
  {
    categoryName: "Java",
    id: 2,
    createdDate: "10-10-10",
    updatedDate: "string",
    groupNumber: 0,
    depth: 0,
    groupOrder: 0,
    createdBy: "admin"
  },
  {
    categoryName: "Angular.js",
    id: 3,
    createdDate: "10-10-10",
    updatedDate: "string",
    groupNumber: 0,
    depth: 0,
    groupOrder: 0,
    createdBy: "admin"
  },
  {
    categoryName: "Javascript",
    id: 4,
    createdDate: "10-10-10",
    updatedDate: "string",
    groupNumber: 0,
    depth: 0,
    groupOrder: 0,
    createdBy: "admin"
  },
  {
    categoryName: "Vue.js",
    id: 5,
    createdDate: "10-10-10",
    updatedDate: "string",
    groupNumber: 0,
    depth: 0,
    groupOrder: 0,
    createdBy: "admin"
  }
];

const NavigationMenu = () => {
  return (
    <>
      <nav className="navigation__wrap">
        <div className="navigation__box">
          <Search />
          <CategoryList contents={content} />
        </div>
      </nav>
    </>
  );
};

export default NavigationMenu;
