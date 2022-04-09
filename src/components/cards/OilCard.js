import React, { useEffect, useState } from "react";
import { ReadMoreShort } from "../../functions/ReadMoreShort";
import { ReadMoreExp } from "../../functions/ReadMoreExp";
import "../../styles/OilCard.css";
import drop1 from "../../images/drop 1.png";
import drop2 from "../../images/drop 2.png";
import drop3 from "../../images/drop 3.png";

function OilCard(props) {
  const [color, setColor] = useState();
  const [over, setOver] = useState(false);
  useEffect(() => {
    if (props.color === "purple") {
      setColor("#B682D5");
    }
    if (props.color === "red") {
      setColor("var(--red)");
    }
    if (props.color === "orange") {
      setColor("var(--orange)");
    }
    if (props.color === "colorless") {
      setColor("var(--purple)");
    }
    if (props.color === "golden") {
      setColor("var(--blue)");
    }
    if (props.color === "amber") {
      setColor("var(--pink)");
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
          <div className="circle">
            <div className="h-100 d-flex align-items-center justify-content-center">
              <img
                style={{width:"82%",height:"82%" ,objectFit: "contain" }}
                src={props.color == "yellow" ? drop1 : props.color =="colorless" ?  drop2: drop3}
              />
            </div>
          </div>
        </div>
        <div className="w-75">
          <p className="card-title">
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
