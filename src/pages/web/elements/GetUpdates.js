import React from "react";

function GetUpdates() {
  return (
    <div>
      <div
        style={{ backgroundColor: "var(--purple)" }}
        className="text-center mb-5 pb-5 pt-5"
      >
        <h2>Get updates from Arotolia AI</h2>
        <p>New course alerts, discounts and free lessons</p>
        <input placeholder="Email" type="email" className="input-field"></input>
      </div>
    </div>
  );
}

export default GetUpdates;
