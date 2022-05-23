import React, { Fragment, useState } from "react";
import AuthorPostInformation from "./AuthorPostInformation/AuthorPostInformation";
import PostContent from "./PostContent/PostContent";
import PostInformation from "./PostInformation/PostInformation";
import TextareaContent from "../../TextareaContent/TextareaContent";
import "../../../style/Post.scss";

const Post = ({ post: { user, postContent, time }, editPostContent }) => {
  const [editPostActive, setEditPostActive] = useState(false);
  const innitialContent = postContent;
  const [editContent, setEditContent] = useState(innitialContent);
  const [backupContentBeforeEdit, setBackupContentBeforeEdit] =
    useState(editContent);

  const handleClick = (name) => {
    if (name === "editPostButton") {
      setEditPostActive(!editPostActive);
    }
  };
  const handleChange = (e) => {
    const { value } = e.target;
    setEditContent(value);
  };

  const handleOnClick = (e) => {
    const { name } = e.target;
    if (name === "editPostButton") {
      setEditPostActive(!editPostActive);
    }
    if (name === "cancelEditPost") {
      setEditContent(backupContentBeforeEdit);

      setEditPostActive(!editPostActive);
    }
    if (name === "saveChangedPost") {
      setBackupContentBeforeEdit(editContent);
      setEditPostActive(!editPostActive);
    }
  };
  return (
    <div className="Post">
      {editPostActive ? (
        <Fragment>
          <TextareaContent
            inputValue={editContent}
            handleChange={handleChange}
          ></TextareaContent>
          <div className="editButtonGroup">
            <button
              id="saveChangedPost"
              name="saveChangedPost"
              onClick={handleOnClick}
            >
              Save
            </button>
            <button
              id="cancelEditPost"
              name="cancelEditPost"
              onClick={handleOnClick}
            >
              Cancel
            </button>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <AuthorPostInformation author={user}></AuthorPostInformation>
          <PostContent postContent={editContent}></PostContent>
          <PostInformation
            onClick={handleClick}
            createTime={time}
          ></PostInformation>
        </Fragment>
      )}
    </div>
  );
};

export default Post;
