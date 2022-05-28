import React, { useState, useEffect, useRef } from "react";
import { Alert, Button, Modal } from "react-bootstrap";
import OilCard from "./OilCard";
import app from "../../firebase";
import "firebase/firestore";
import "../../styles/Inputs.css";
import PatientInfo from "./PatientInfo";
const db = app.firestore();
function VisitCard() {
  const [oilData, setOilData] = useState([]);
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const nameRef = useRef();
  const [success, setSuccess] = useState(false);

  //Getting oil details from firebase db
  useEffect(() => {
    const cardData = async () => {
      const card = await db.collection("Visits").get();
      setOilData(
        card.docs.map((doc) => {
          return doc.data();
        })
      );
    };
    cardData();
  }, []);

  return (
    <>
      <div className="page-container">
        <div className="page-wrapper">
          <div className="w-100 ">
            <div className="w-100 text-left d-flex justify-content-between mb-5">
              <h1>Filter Visits</h1>
              <button
                onClick={() => setIsOpen(true)}
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
                Add New Visit
              </button>
            </div>

            <input
              className="searchbar mb-3"
              type="text"
              placeholder=" Search Patient Names"
              onChange={(event) => {
                setSearch(event.target.value);
              }}
            />
          </div>

          <div className="w-100">
            <h2 className="mb-3">Visits</h2>
            <div className="row">
              {oilData &&
                oilData
                  .filter((data) => {
                    if (setSearch === "") {
                      return data;
                    } else if (
                      data.name.toLowerCase().includes(search.toLowerCase())
                    ) {
                      return data;
                    }
                    return null;
                  })
                  // Map cards
                  .map((data) => {
                    var oilName = data && data.name;
                    var family = "28-05-2022";
                    var color = "green";

                    return (
                      <div className="col-md">
                        <OilCard
                          isVisit={true}
                          color={color}
                          route={oilName}
                          family={`${family}`}
                          name={oilName.toUpperCase()}
                        />
                      </div>
                    );
                  })}
            </div>
          </div>
        </div>
        <Modal onHide={() => setIsOpen(false)} show={isOpen}>
          <Modal.Header closeButton>
            <h2>Create New Patient</h2>
          </Modal.Header>
          <Modal.Body className="w-100">
            {success ? (
              <Alert
                className="d-flex justify-content-between align-items-center"
                variant="success"
              >
                New patient created successfully
                <Button
                  variant="success"
                  onClick={() => (window.location.href = "/patients")}
                >
                  Back to Patients
                </Button>
              </Alert>
            ) : (
              <>
                <PatientInfo nameRef={nameRef} buttonText="Create Patient" />{" "}
              </>
            )}
            <div className="d-flex justify-content-end">
              <button
                id="btn-primary-custom"
                className="btn mt-3"
                onClick={async function handleNewPatient() {
                  try {
                    await db.collection("Visits").doc().set({
                      name: nameRef.current.value,
                    });
                    setSuccess(true);
                  } catch {
                    console.log("error");
                  }
                }}
              >
                Create Patient
              </button>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}

export default VisitCard;
