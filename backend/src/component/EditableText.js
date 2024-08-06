import React, { useState } from "react";

const EditableText = ({ initialText }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(initialText);

  const handleTextClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setIsEditing(false);
    }
  };

  return (
    <div className="editable-text">
      {isEditing ? (
        <input
          type="text"
          value={text}
          onChange={handleInputChange}
          onBlur={handleBlur}
          onKeyPress={handleKeyPress}
          autoFocus
          className="w-full px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
        />
      ) : (
        <span
          onClick={handleTextClick}
          className="cursor-pointer text-gray-700"
        >
          {text}
        </span>
      )}
    </div>
  );
};

export default EditableText;
