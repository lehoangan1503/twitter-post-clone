import React from "react";
import Post from "./Post/Post";
const PostBox = ({ postList ,deletePost }) => {
  const handleDeletePost = (postId) => {
    deletePost(postId);
  };
  const listPost = () => {
    const listPost = postList.map((post) => {
      return (
        <Post
          key={post.postId}
          post={post}
          deletePost={handleDeletePost}
        ></Post>
      );
    });

    return listPost;
  };
  return <div className="PostBox">{listPost()}</div>;
};

export default PostBox;
