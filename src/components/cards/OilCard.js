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
    <a
      href={
        props.isVisit === true
          ? "/visits/" + props.route
          : "/oil-details/" + props.route
      }
    >
      <div
        className="oil-card flex-row"
        style={{
          backgroundColor: color,
          boxShadow: shadow,
        }}
      >
        {" "}
        {props.isVisit === true ? (
          <div className="w-50 d-flex align-items-center">
            <div className="square">
              <div className="h-100 d-flex align-items-center justify-content-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="20"
                  fill="var(--black)"
                  class="bi bi-journal-medical"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a.5.5 0 0 1 .5.5v.634l.549-.317a.5.5 0 1 1 .5.866L9 6l.549.317a.5.5 0 1 1-.5.866L8.5 6.866V7.5a.5.5 0 0 1-1 0v-.634l-.549.317a.5.5 0 1 1-.5-.866L7 6l-.549-.317a.5.5 0 0 1 .5-.866l.549.317V4.5A.5.5 0 0 1 8 4zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"
                  />
                  <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
                  <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
                </svg>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-50 d-flex align-items-center">
            <div className="circle">
              <div className="h-100 d-flex align-items-center justify-content-center">
                <img
                  style={{ width: "82%", height: "82%", objectFit: "contain" }}
                  src={
                    props.color == "yellow"
                      ? drop1
                      : props.color == "colorless"
                      ? drop2
                      : drop3
                  }
                />
              </div>
            </div>
          </div>
        )}
        <div className="w-75">
          <p className="card-title">
            <ReadMoreShort>{props.name}</ReadMoreShort>
          </p>
          <p>
            {props.isVisit === true ? <div></div> : "🌿"} <ReadMoreExp>{props.family}</ReadMoreExp>
          </p>
        </div>
      </div>
    </a>
  );
}

export default OilCard;
