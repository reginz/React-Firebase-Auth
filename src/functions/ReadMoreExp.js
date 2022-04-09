import React, { useState } from "react";
import "../styles/ReadMore.css";

export const ReadMoreExp = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 9) : text}
      <span
        onMouseEnter={toggleReadMore}
        onMouseLeave={toggleReadMore}
        onClick={toggleReadMore}
        className="read-or-hide variant"
      >
        {text.length < 9 ? "" : isReadMore ? ".." : ""}
      </span>
    </p>
  );
};
