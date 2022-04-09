import React from "react";
import PatientInfo from "./cards/PatientInfo";
import PersonalHealthInfo from "./cards/PersonalHealthInfo";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const renderTooltip = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    <h5>Comming Soon</h5>
  </Tooltip>
);
function GenerateBlend(props) {
  return (
    <div className="d-flex flex-column w-100 p-5">
      <h1>Ask to AI</h1>
      <p className="mb-4" style={{ color: "var(--gray)" }}>
        (Only in Turkish.)
      </p>
      <div className="empty-card mb-4">
        <PersonalHealthInfo />
      </div>
      <OverlayTrigger
        placement="top"
        delay={{ show: 150, hide: 400 }}
        overlay={renderTooltip}
      >
        <div style={{ opacity: ".55" }}>
          <h1 className="mb-4">Generate Custom Blend</h1>
          <div className="empty-card">
            <PatientInfo treatment={false} buttonText="Generate Blend" />
          </div>
        </div>
      </OverlayTrigger>
    </div>
  );
}

export default GenerateBlend;
