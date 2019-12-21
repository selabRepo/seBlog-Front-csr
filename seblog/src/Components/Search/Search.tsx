import React from "react";
import "./Search.scss";

const Search = () => {
  return (
    <div className="search__wrap--menu">
      <div className="search__box">
        <input
          type="text"
          className="search__input"
          placeholder="검색어를 입력하세요."
        />
        <button className="button button--search_clear"></button>
        <button className="button button--search"></button>
      </div>
    </div>
  );
};

export default Search;
