import React from "react";
import com from "../images/compt.jpeg";
function MidBanner() {
  return (
    <div id="mid" className="d-flex flex-column align-items-center justify-content-center pt-5 mt-5 mb-5">
      <small className="small-text pb-3">AROTOLIA AI</small>
      <h3 style={{ width: "500px", textAlign: "center" }}>
        Get personalized blends, learn from the library and track treatments.
      </h3>
      <div className="pt-4 img-container">
        <img style={{width:"100%", borderRadius:"25px"}} src={com}></img>
      </div>
    </div>
  );
}

export default MidBanner;
