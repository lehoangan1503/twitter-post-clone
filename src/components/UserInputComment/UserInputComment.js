import React from "react";
import "../../style/UserInputComment.scss";
const UserInputComment = () => {
  return (
    <div className="UserInputComment">
      <form>
        <div className="inputTextContainer">
          <textarea
            name="userInputComment"
            id=""
            cols="30"
            rows="10"
            placeholder="Tweet about 30 Days Of React..."
          ></textarea>
        </div>

        <div className="addPostButtonContainer">
          <input type="submit" value="Add Post" />
        </div>
      </form>
      <div>
        <p className="textLength">250</p>
      </div>
    </div>
  );
};

export default UserInputComment;
