import React from "react";
import oil from "../images/oil.png";
function Banner() {
  return (
    <div
      className="d-flex justify-content-between align-items-center"
      style={{ gap: "4em" }}
    >
      <div style={{ width: "60%" }}>
        <h1 style={{ fontSize: "46px" }}>Personalized Aromatherapy Platform</h1>
        <p style={{ fontSize: "23px" }}>
          Get personalized advice from the first aromatherapy AI
        </p>
        <a href="/signup">
          <button
          style={{fontSize:"23px"}} 
          id="btn-primary-custom" 
          className="btn">
            Get Now
          </button>
        </a>
      </div>
      <div>
        <img src={oil}></img>
      </div>
    </div>
  );
}

export default Banner;
