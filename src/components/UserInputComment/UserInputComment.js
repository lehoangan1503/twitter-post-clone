import React from "react";
import "../../style/UserInputComment.scss";
import styled from "styled-components";

const ActiveButton = styled.input.attrs({ type: "submit", value: "Add Post" })`
  font-size: 1rem;
  font-family: inherit;
  border-radius: 3px;
  width: 85%;
  margin-left: 15px;
  padding: 10px;
  border: none;
  background-color: rgb(29, 161, 242);
  color: rgba(249, 251, 254, 1);
`;
const Container = styled.div`
  width: 20%;
`;
const TooLongInput = styled.p`
  position: absolute;
  color: red;
  font-size: 0.75rem;
  right: 20%;
`;

const UserInputComment = ({ inputValue, onChange, actived, onSubmit }) => {
  const handleChange = (e) => {
    const { value } = e.target;
    onChange(value);
  };
  const handleSubmit = (e) => {
    onSubmit(e);
  };
  return (
    <div className="UserInputComment">
      <form onSubmit={handleSubmit}>
        <div className="inputTextContainer">
          <textarea
            name="userInputComment"
            id=""
            cols="30"
            rows="10"
            placeholder="Tweet about 30 Days Of React..."
            value={inputValue}
            onChange={handleChange}
          ></textarea>
        </div>
        {actived ? (
          <Container>
            <ActiveButton></ActiveButton>
          </Container>
        ) : (
          <div className="addPostButtonContainer">
            <input type="submit" value="Add Post" disabled />
          </div>
        )}
      </form>
      <div>
        {inputValue.length > 250 ? (
          <TooLongInput>{250 - inputValue.length}</TooLongInput>
        ) : (
          <p className="textLength">{250 - inputValue.length}</p>
        )}
      </div>
    </div>
  );
};

export default UserInputComment;
