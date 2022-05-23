import React from "react";
import "../../../../style/PostInformation.scss";
import {
  FaRegEdit,
  FaRegTrashAlt,
  FaRegComment,
  FaRegHeart,
  FaRetweet,
} from "react-icons/fa";
const PostInformation = ({ createTime, onClick }) => {
  const handleClick = (e) => {
    const { name } = e.target;
    onClick(name);
  };
  return (
    <div className="PostInformation">
      <div className="settingPost">
        <button name="editPostButton" onClick={handleClick}>
          <FaRegEdit id="editPostButton"></FaRegEdit>
        </button>
        <FaRegTrashAlt id="deletePostButton"></FaRegTrashAlt>
      </div>
      <div className="contactWithPost">
        <FaRegComment id="commentPostButton"></FaRegComment>
        <FaRegHeart id="reactPostButton"></FaRegHeart>
        <FaRetweet id="resetPostButton"></FaRetweet>
      </div>
      <div className="postCreateTime">
        <p>{createTime}</p>
      </div>
    </div>
  );
};

export default PostInformation;
