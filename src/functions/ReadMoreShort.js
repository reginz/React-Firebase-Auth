import React, { useState } from "react";
import "../styles/ReadMore.css";

export const ReadMoreShort = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 12) : text}
      <span
        onMouseEnter={toggleReadMore}
        onMouseLeave={toggleReadMore}
        className="read-or-hide variant"
      >
        {text.length < 13 ? "" : isReadMore ? ".." : ""}
      </span>
    </p>
  );
};
