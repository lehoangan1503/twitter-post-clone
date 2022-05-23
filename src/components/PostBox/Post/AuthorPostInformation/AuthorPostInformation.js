import React from "react";
import { MdAccountCircle } from "react-icons/md";
import "../../../../style/AuthorPostInformation.scss";
const AuthorPostInformation = ({
  author: { firstName, lastName, avatarUrl },
}) => {
  return (
    <div className="AuthorPostInformation">
      <div className="authorAvatar">
        {avatarUrl !== "" ? (
          <img src={avatarUrl} alt="" />
        ) : (
          <MdAccountCircle></MdAccountCircle>
        )}
      </div>
      <div className="authorName">
        <p>
          {firstName} {lastName}{" "}
        </p>
      </div>
      <span>@{firstName}</span>
    </div>
  );
};

export default AuthorPostInformation;
