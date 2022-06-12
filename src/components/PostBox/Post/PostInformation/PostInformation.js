import React, { useState } from "react";
import "../../../../style/PostInformation.scss";
import {
  FaRegEdit,
  FaRegTrashAlt,
  FaRegComment,
  FaRegHeart,
  FaHeart,
  FaRetweet,
} from "react-icons/fa";
const PostInformation = ({ createTime, onClick, handleDeletePost }) => {
  const [reactActive, setReactActive] = useState(false);
  const handleClick = (e) => {
    const { name } = e.target;
    if (name === "deletePostButton") {
      handleDeletePost();
    }
    if (name === "reactPostButton") {
      setReactActive(!reactActive);
    }
  };

  return (
    <div className="PostInformation">
      <div className="settingPost">
        <button name="editPostButton" onClick={onClick}>
          <FaRegEdit id="editPostButton"></FaRegEdit>
        </button>
        <button name="deletePostButton" onClick={handleClick}>
          {" "}
          <FaRegTrashAlt id="deletePostButton"></FaRegTrashAlt>
        </button>
      </div>
      <div className="contactWithPost">
        <button>
          {" "}
          <FaRegComment id="commentPostButton"></FaRegComment>
        </button>{" "}
        {reactActive ? (
          <button name="reactPostButton" onClick={handleClick}>
            <FaHeart id="reactActivedPostButton"></FaHeart>
          </button>
        ) : (
          <button name="reactPostButton" onClick={handleClick}>
            <FaRegHeart id="reactPostButton"></FaRegHeart>
          </button>
        )}
        <button>
          <FaRetweet id="resetPostButton"></FaRetweet>
        </button>
      </div>
      <div className="postCreateTime">
        <p>{createTime}</p>
      </div>
    </div>
  );
};

export default PostInformation;
