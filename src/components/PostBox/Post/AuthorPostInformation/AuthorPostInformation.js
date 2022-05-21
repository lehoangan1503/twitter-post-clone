import React from "react";
import { MdAccountCircle } from "react-icons/md";
import "../../../../style/AuthorPostInformation.scss";
const AuthorPostInformation = () => {
  return (
    <div className="AuthorPostInformation">
      <div className="authorAvatar">
        <MdAccountCircle></MdAccountCircle>
      </div>
      <div className="authorName">
        <p>An Le Hoang </p>
      </div>
      <span>@An</span>
    </div>
  );
};

export default AuthorPostInformation;
