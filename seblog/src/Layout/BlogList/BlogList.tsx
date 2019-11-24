import * as React from "react";
import "./BlogList.css";

const BlogList = () => {
  return (
    <div className="list__wrap list__wrap--main">
      <ul className="list__box">
        <li className="list__item">
          <div className="list__img">
            <img
              alt="test"
              className="img img--thumbnail"
              src="https://ko.reactjs.org/logo-og.png"
            />
          </div>
          <div className="list__txt">
            <div className="list__txt--top">
              <div className="category">React</div>
              <h2 className="title two_line">
                This is React title - maximum : two line This is React title -
                maximum : two line
              </h2>
            </div>
            <div className="list__txt--bottom">
              <p className="description three_line">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis ullam neque, suscipit iste ut, provident eligendi
                totam qui quidem saepe fuga aperiam deleniti quisquam corporis
                nam nostrum temporibus quis? Aspernatur!
              </p>
              <div className="status">
                <span className="date">0000 - 00 - 00</span>
                <span className="comment">Comment : 0,000</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default BlogList;
