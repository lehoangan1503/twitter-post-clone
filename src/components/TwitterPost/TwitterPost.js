import React, { useState } from "react";
import "../../style/TwitterPost.scss";
import PostBox from "../PostBox/PostBox";
import UserInputComment from "../UserInputComment/UserInputComment";
const TwitterPost = () => {
  //state of user input value
  const [inputValue, setInputValue] = useState("");
  const handleChange = (value) => {
    setInputValue(value);
  };

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  // convert date format: month day, year hours:minutes AM/PM
  const dateFormatter = () => {
    const date = new Date();
    let month = months[date.getMonth()];
    let day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    let year = date.getFullYear();
    let hours = date.getHours();
    let minutes =
      date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    
    let ampm = hours >= 12 ? "pm" : "am";
    hours = hours === 0 ? 12 : hours;
    let dateStr = `${month} ${day}, ${year} ${hours}:${minutes} ${ampm}`;
    return dateStr;
  };
  const initialPostListState = [
    {
      user: { firstName: "Anonymous", lastName: "User", avatarUrl: "" },
      postContent:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis tempore, tenetur accusamus nulla quisquam inventore maxime amet eaque, at, beatae exercitationem sequi voluptates laudantium totam porro vero molestias ipsum ad?",
      time: "May 20, 2022 21:32 pm",
    },
  ];
  //state for list of post
  const [postList, setPostList] = useState(initialPostListState);
  const handleSubmit = (e) => {
    e.preventDefault();
    const post = {
      user: { firstName: "An", lastName: "Le Hoang", avatarUrl: "" },
      postContent: inputValue,
      time: dateFormatter(),
    };
    setInputValue("");
    setPostList([post, ...postList]);
  };
  const activedTest = () => {
    let actived =
      inputValue.length !== 0 && inputValue.length <= 250 ? true : false;
    return actived;
  };
  return (
    <div className="TwitterPost">
      <UserInputComment
        onChange={handleChange}
        inputValue={inputValue}
        actived={activedTest()}
        onSubmit={handleSubmit}
      ></UserInputComment>
      <PostBox postList={postList}></PostBox>
    </div>
  );
};

export default TwitterPost;
