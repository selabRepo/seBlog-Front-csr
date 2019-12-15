import React from "react";
import "./MainTitle.scss";

type ThumbnailProps = {
  mainTitle: string;
  subTitile: string;
};

const MainTitle = ({ mainTitle, subTitle }) => {
  return (
    <section className="title__wrap--main">
      <div className="title__box">
        <h1 className="title title--top">{mainTitle}</h1>
        <div className="title title--bottom">{subTitle}</div>
      </div>
    </section>
  );
};

export default MainTitle;
