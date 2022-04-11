import React, { useState } from "react";

export const Expandable = ({ children }) => {
  const items = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? items.slice(0, 150) : items}
      <span onClick={toggleReadMore} className="read-or-hide">
        {items.length < 4 ? "" : isReadMore ? "...read more" : " show less"}
      </span>
    </p>
  );
};
