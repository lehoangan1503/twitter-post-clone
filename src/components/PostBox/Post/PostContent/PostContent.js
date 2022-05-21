import React from "react";
import "../../../../style/PostContent.scss";
const PostContent = ({ postContent }) => {
  return (
    <div className="PostContent">
      <p>{postContent}</p>
    </div>
  );
};

export default PostContent;
