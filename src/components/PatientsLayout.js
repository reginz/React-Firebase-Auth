import React from "react";

function PatientsLayout(props) {
  return (
    <div className="page-container">
      <div className="page-wrapper">
        <div className="w-100 text-left d-flex justify-content-between">
          <h2>Patients</h2>
          <button
            id="btn-primary-custom"
            style={{
              display: "flex",
              width: "20%",
              justifyContent: "center",
              alignItems: "center",
              gap: "1em"
            }}
            className="btn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-plus-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
            </svg>
            Create Patient
          </button>
        </div>
      </div>
    </div>
  );
}

export default PatientsLayout;
