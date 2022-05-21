import React from "react";
import AuthorPostInformation from "./AuthorPostInformation/AuthorPostInformation";
import PostContent from "./PostContent/PostContent";
import PostInformation from "./PostInformation/PostInformation";
import "../../../style/Post.scss";

const Post = ({ post: { user, postContent, time } }) => {
  return (
    <div className="Post">
      <AuthorPostInformation author={user}></AuthorPostInformation>
      <PostContent postContent={postContent}></PostContent>
      <PostInformation createTime={time}></PostInformation>
    </div>
  );
};

export default Post;
