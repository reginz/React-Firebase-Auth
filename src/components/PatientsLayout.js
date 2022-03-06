import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import app from "../firebase";
import PatientCard from "./cards/PatientCard";

function PatientsLayout(props) {
  const db = app.firestore();
  const [search, setSearch] = useState();
  const [patients, setPatients] = useState([]);
  const { currentUser } = useAuth();

  useEffect(() => {
    const getData = async () => {
      db.collection("Users")
        .doc(currentUser.uid)
        .collection("patients")
        .get()
        .then((querySnapshot) => {
          // doc.data() is never undefined for query doc snapshots
          setPatients(
            querySnapshot.docs.map((doc) => {
              return doc.data();
            })
          );
        });
    };
    getData();
  }, []);

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
              gap: "1em",
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

        <div className="empty-card w-100">
          <div className="patient-header__wrapper text-center">
            <div>
              <small className="small-text">total patient count</small>
              <h1>17</h1>
            </div>
            <div>
              <small className="small-text">avarage age</small>
              <h1>39</h1>
            </div>
            <div>
              <small className="small-text">completed treatments</small>
              <h1>4</h1>
            </div>
          </div>
          <hr className="orange-hr"></hr>
          <input
            className="searchbar input-field mb-5"
            type="text"
            placeholder=" Search Patients by Name"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
          {patients &&
            patients.map((patient) => {
              return (
                <>
                  <PatientCard
                    age={patient.patient_age}
                    treatment={patient.patient_current_treatment}
                    name={patient.patient_name}
                  />
                  <hr></hr>
                </>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default PatientsLayout;
