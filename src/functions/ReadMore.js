import React, { useState } from "react";
import "../styles/ReadMore.css";

export const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 150) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {text.length < 200 ? "" : isReadMore ? "...read more" : " show less"}
      </span>
    </p>
  );
};
