import React from "react";
import "../../style/TwitterPost.scss";
import PostBox from "../PostBox/PostBox";
import UserInputComment from "../UserInputComment/UserInputComment";
const TwitterPost = () => {
  return (
    <div className="TwitterPost">
      <UserInputComment></UserInputComment>
      <PostBox></PostBox>
    </div>
  );
};

export default TwitterPost;
