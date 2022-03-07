import React from "react";
import PersonalHealthInfo from "./cards/PersonalHealthInfo";

function GenerateBlend(props) {
  return (
    <div className="d-flex flex-column w-100 p-5">
      <h1 className="mb-4">Generate Custom Blend</h1>
      <div className="empty-card"> 
        <PersonalHealthInfo 
        treatment={false}
        buttonText="Generate Blend" />
      </div>
    </div>
  );
}

export default GenerateBlend;
