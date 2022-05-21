import React from "react";
import AuthorPostInformation from "./AuthorPostInformation/AuthorPostInformation";
import PostContent from "./PostContent/PostContent";
import PostInformation from "./PostInformation/PostInformation";
import "../../../style/Post.scss";

const Post = () => {
  return (
    <div className="Post">
      <AuthorPostInformation></AuthorPostInformation>
      <PostContent></PostContent>
      <PostInformation></PostInformation>
    </div>
  );
};

export default Post;
