import React from "react";
import Post from "./Post/Post";
const PostBox = ({ postList }) => {
  const listPost = () => {
    const listPost = postList.map((post) => {
      return <Post key={post.postId} post={post}></Post>;
    });
    return listPost;
  };
  return <div className="PostBox">{listPost()}</div>;
};

export default PostBox;
