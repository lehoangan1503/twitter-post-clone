import React from "react";
import "../../../../style/PostInformation.scss";
import {
  FaRegEdit,
  FaRegTrashAlt,
  FaRegComment,
  FaRegHeart,
  FaRetweet,
} from "react-icons/fa";
const PostInformation = () => {
  return (
    <div className="PostInformation">
      <div className="settingPost">
        <FaRegEdit></FaRegEdit>
        <FaRegTrashAlt></FaRegTrashAlt>
      </div>
      <div className="contactWithPost">
        <FaRegComment></FaRegComment>
        <FaRegHeart></FaRegHeart>
        <FaRetweet></FaRetweet>
      </div>
      <div className="postCreateTime">
        <p>May 20, 2022 21:32 pm</p>
      </div>
    </div>
  );
};

export default PostInformation;
