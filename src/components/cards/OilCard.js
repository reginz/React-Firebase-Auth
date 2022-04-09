import React, { useEffect, useState } from "react";
import { ReadMoreShort } from "../../functions/ReadMoreShort";
import { ReadMoreExp } from "../../functions/ReadMoreExp";
import "../../styles/OilCard.css";

function OilCard(props) {
  const [color, setColor] = useState();
  const [over, setOver] = useState(false);
  useEffect(() => {
    if (props.color === "purple") {
      setColor("#B682D5");
    }
    if (props.color === "yellow") {
      setColor("#F8E89C");
    }
    if (props.color === "pink") {
      setColor("#EBAFD1");
    }
    if (props.color === "green") {
      setColor("#95D6A6");
    }
  }, []);

  var shadow = `0px 20px 12px -12px ${color}`;

  return (
    <a href={"/oil-details/" + props.route}>
      <div
        className="oil-card flex-row"
        style={{
          backgroundColor: color,
          boxShadow: shadow,
        }}
      >
        {" "}
        <div className="w-50 d-flex align-items-center">
          <div className="circle"></div>
        </div>
        <div className="w-75">
          <p
           
            className="card-title"
          >
            <ReadMoreShort>{props.name}</ReadMoreShort>
          </p>
          <p>
            🌿 <ReadMoreExp>{props.family}</ReadMoreExp>
          </p>
        </div>
      </div>
    </a>
  );
}

export default OilCard;
