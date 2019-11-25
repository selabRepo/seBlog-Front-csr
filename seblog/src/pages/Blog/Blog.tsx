import * as React from "react";
import BlogList from "../../Components/BlogList";
import "./Blog.scss";

const content = [
  {
    createdDate: "2019-07-27",
    updatedDate: "2019-10-04",
    id: 1,
    categoryID: 0,
    title: "내게 실용적이었던 프로그래밍 공부 방법들",
    content:
      "나는 보통 재능이나 공부의 양으로 친구들의 성장 속도를 따라가기 힘들었다. 그래서 '무작정 열심히'보단, '의식적인 연습'을 지속해 나가야 했다. 이득충이 되는 방향으로 공부를 하다 보니까, 내가 어떤 방식으로 공부를 하는 지 어느 정도 정리가 됐다. velog의 독자들은 '경험기'같은 글에 니즈가 꽤 있는 것 같아서, 부족하지만 내 공부를 위한 매개체들을 쭉 소개하고, 내가 어떻게 공부하는지를 짧게 이야기하고자 한다.",
    hits: 2,
    useYN: false,
    createdBy: "l2h",
    userID: 0,
    titleImg: "https://ko.reactjs.org/logo-og.png"
  },
  {
    createdDate: "2019-07-27",
    updatedDate: "2019-10-04",
    id: 2,
    categoryID: 1,
    title: "abb",
    content: "abbbb",
    hits: 1,
    useYN: false,
    createdBy: "LEE HOSU",
    userID: 0,
    titleImg: "https://ko.reactjs.org/logo-og.png"
  },
  {
    createdDate: "2019-07-27",
    updatedDate: "2019-10-04",
    id: 2,
    categoryID: 1,
    title: "아주 오래된 기억",
    content: "백예린 짱짱걸 진짜 노래 너무 좋다. 꼭 들어보세여~~~",
    hits: 150,
    useYN: false,
    createdBy: "LEE HOSU",
    userID: 0,
    titleImg: "https://ko.reactjs.org/logo-og.png"
  },
  {
    createdDate: "2019-11-31",
    updatedDate: "2019-10-04",
    id: 1,
    categoryID: 3,
    title: "SELOG 만든 사람들",
    content: "너는 못만들거임ㅋ",
    hits: 13,
    useYN: false,
    createdBy: "jyb",
    userID: 0,
    titleImg: "https://ko.reactjs.org/logo-og.png"
  },
  {
    createdDate: "2019-11-31",
    updatedDate: "2019-10-04",
    id: 1,
    categoryID: 3,
    title: "SELOG 만든 사람들",
    content: "너는 못만들거임ㅋ",
    hits: 13,
    useYN: false,
    createdBy: "jyb",
    userID: 0,
    titleImg: "https://ko.reactjs.org/logo-og.png"
  },
  {
    createdDate: "2019-11-31",
    updatedDate: "2019-10-04",
    id: 1,
    categoryID: 3,
    title: "SELOG 만든 사람들",
    content: "너는 못만들거임ㅋ",
    hits: 13,
    useYN: false,
    createdBy: "jyb",
    userID: 0,
    titleImg: "https://ko.reactjs.org/logo-og.png"
  },
  {
    createdDate: "2019-07-27",
    updatedDate: "2019-10-04",
    id: 1,
    categoryID: 0,
    title: "내게 실용적이었던 프로그래밍 공부 방법들",
    content:
      "나는 보통 재능이나 공부의 양으로 친구들의 성장 속도를 따라가기 힘들었다. 그래서 '무작정 열심히'보단, '의식적인 연습'을 지속해 나가야 했다. 이득충이 되는 방향으로 공부를 하다 보니까, 내가 어떤 방식으로 공부를 하는 지 어느 정도 정리가 됐다. velog의 독자들은 '경험기'같은 글에 니즈가 꽤 있는 것 같아서, 부족하지만 내 공부를 위한 매개체들을 쭉 소개하고, 내가 어떻게 공부하는지를 짧게 이야기하고자 한다.",
    hits: 2,
    useYN: false,
    createdBy: "l2h",
    userID: 0,
    titleImg: "https://ko.reactjs.org/logo-og.png"
  }
];

const Blog = () => {
  return (
    <div className="App-blog">
      <div className="blog-header">
        <h2> 작성된 포스트 </h2>
      </div>
      <div className="blog-contents">
        <BlogList contents={content} />
      </div>
    </div>
  );
};

export default Blog;
