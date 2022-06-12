import React from "react";
import "../../style/TextareaContent.scss";
const TextareaContent = ({ inputValue, handleChange }) => {
  const handleChangeText = (e) => {
    handleChange(e.target.value);
  };
  return (
    <textarea
      name="userInputComment"
      id=""
      cols="30"
      rows="10"
      placeholder="Tweet about 30 Days Of React..."
      value={inputValue}
      onChange={handleChangeText}
    ></textarea>
  );
};

export default TextareaContent;
