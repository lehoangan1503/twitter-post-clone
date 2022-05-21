import React from "react";
import Post from "./Post/Post";
const PostBox = ({ postList }) => {
  const listPost = () => {
    const listPost = postList.map((post, index) => {
      console.log(post);
      return <Post key={index} post={post}></Post>;
    });
    return listPost;
  };
  return <div className="PostBox">{listPost()}</div>;
};

export default PostBox;
