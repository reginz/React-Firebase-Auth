import React, { useState } from "react";

function PatientInfo(props) {
  const [search, setSearch] = useState("");

  return (
    <div>
      <div className=" w-100">
        <form onSubmit={props.onClick}>
          <div className="d-flex w-100 align-items-between">
            <div className="w-50">
              <div>
                <small className="small-text">NAME</small>
                <div>
                  <hr
                    style={{ margin: 0, width: "10%" }}
                    className="orange-hr"
                  ></hr>
                </div>
                <input
                  ref={props.nameRef}
                  id="name"
                  className="mt-3 input-field"
                  placeholder="eg. User Name"
                  type="text"
                  required
                ></input>
              </div>

              <div className="mt-5">
                <small className="small-text">Birth Date</small>
                <div>
                  <hr
                    style={{ margin: 0, width: "10%" }}
                    className="orange-hr"
                  ></hr>
                </div>
                <input
                  ref={props.ageRef}
                  id="age"
                  className="mt-3 input-field"
                  placeholder="eg. 25"
                  type="date"
                  required
                ></input>
              </div>
            </div>
            <div className="w-50">
              <div>
                {" "}
                <small className="small-text">Phone Number</small>
                <div>
                  <hr
                    style={{ margin: 0, width: "10%" }}
                    className="orange-hr"
                  ></hr>
                </div>
                <input
                  className="input-field w-75 mt-3"
                  type="tel"
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  placeholder=" eg. 5XX XXX XXXX"
                />
              </div>
              <div className="mt-5">
                {" "}
                <small className="small-text">Email</small>
                <div>
                  <hr
                    style={{ margin: 0, width: "10%" }}
                    className="orange-hr"
                  ></hr>
                </div>
                <input
                  className="input-field w-75 mt-3"
                  type="email"
                  placeholder=" eg. example@email.com"
                />
              </div>
            </div>
          </div>
          <div className="mt-5">
            <small className="small-text">Allergies</small>
            <div>
              <hr
                style={{ margin: 0, width: "10%" }}
                className="orange-hr"
              ></hr>
            </div>
            <input
              className="input-field w-100 mt-3"
              type="text"
              placeholder=" Search Allergies"
              onChange={(event) => {
                setSearch(event.target.value);
              }}
            />
          </div>

          {/* <div className=" mt-5">
            <small className="small-text">effects</small>
            <div>
              <hr
                style={{ margin: 0, width: "10%" }}
                className="orange-hr"
              ></hr>
            </div>
            <input
              className="input-field w-75 mt-3"
              type="text"
              placeholder="Search Effects"
              onChange={(event) => {
                setSearch(event.target.value);
              }}
            />
          </div> */}
          {props.treatment ? <div></div> : <></>}
          {props.treatment === false ? (
            <div className="d-flex justify-content-end">
              <button id="btn-primary-custom" className="btn mt-3">
                {props.buttonText}
              </button>
            </div>
          ) : (
            <></>
          )}
        </form>
      </div>
    </div>
  );
}

export default PatientInfo;
