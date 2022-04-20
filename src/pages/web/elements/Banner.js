import React from "react";
import oil from "../images/oil.png";
import "../../../styles/Landing.css";
import AnchorLink from 'react-anchor-link-smooth-scroll'

function Banner() {
  return (
    <div className="banner-container">
      <div
        id="banner-wrapper"
        className="d-flex justify-content-between align-items-center"
        style={{ gap: "4em", height: "70vh" }}
      >
        <div className="banner-wrapper" style={{ width: "60%" }}>
          <h1 className="pb-3 " style={{ fontSize: "50px" }}>
            Aromatherapy with intelligence.
          </h1>
          <p className="banner-p" style={{ fontSize: "23px" }}>
            Arotolia AI is the world's first artificially intelligent,
            personalized aromatherapy platform that creates unique blends at the
            touch of a button. Our AI relies on our database of 400 oils and
            their effects covering body, mind, heart, and soul.
          </p>
          <a href="/signup">
            <button
              style={{ fontSize: "23px" }}
              id="btn-primary-custom"
              className="btn mt-3"
            >
              Get Now
            </button>
          </a>
        </div>
        <div className="img-wrapper">
          <img src={oil}></img>
        </div>
      </div>
      <div className="arrow text-center">
        <AnchorLink href="#mid">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          class="bi bi-chevron-double-down"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
          />
          <path
            fill-rule="evenodd"
            d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
          />
        </svg>
        </AnchorLink>
      
      </div>
    </div>
  );
}

export default Banner;
