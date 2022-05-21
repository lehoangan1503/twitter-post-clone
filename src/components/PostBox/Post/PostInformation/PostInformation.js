import React from "react";
import "../../../../style/PostInformation.scss";
import {
  FaRegEdit,
  FaRegTrashAlt,
  FaRegComment,
  FaRegHeart,
  FaRetweet,
} from "react-icons/fa";
const PostInformation = ({ createTime }) => {
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
        <p>{createTime}</p>
      </div>
    </div>
  );
};

export default PostInformation;
