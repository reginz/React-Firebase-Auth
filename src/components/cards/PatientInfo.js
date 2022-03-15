import React,{useState} from 'react';

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
                  ></input>
                </div>
  
                <div className="mt-5">
                  <small className="small-text">Age</small>
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
                    type="text"
                  ></input>
                </div>
              </div>
              {/* <div className="w-50">
                <small className="small-text">Allergies</small>
                <div>
                  <hr
                    style={{ margin: 0, width: "10%" }}
                    className="orange-hr"
                  ></hr>
                </div>
                <input
                  className="input-field w-75 mt-3"
                  type="text"
                  placeholder=" Search Allergies"
                  onChange={(event) => {
                    setSearch(event.target.value);
                  }}
                />
              </div> */}
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
            {props.treatment ? (
              <div className=" mt-5">
                <small className="small-text">treatment</small>
                <div>
                  <hr
                    style={{ margin: 0, width: "10%" }}
                    className="orange-hr"
                  ></hr>
                </div>
                <input
                  className="input-field w-75 mt-3"
                  type="text"
                  placeholder="Current Treatment"
                  ref={props.treatmentRef}
                />
              </div>
            ) : (
              <></>
            )}
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