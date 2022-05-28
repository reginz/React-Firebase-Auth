import React, { useState } from "react";

function VisitInfo(props) {
  const [search, setSearch] = useState("");

  return (
    <div>
      <div className=" w-100">
        <form onSubmit={props.onClick}>
          <div className="d-flex w-100 align-items-between">
            <div className="w-50">
              <div>
                <small className="small-text">Patients</small>
                <div>
                  <hr
                    style={{ margin: 0, width: "10%" }}
                    className="orange-hr"
                  ></hr>
                </div>
                <select className="input-field mt-3 w-75" name="cars" id="cars">
                  <option value="volvo">John Doe</option>
                  <option value="saab">Marry Moe</option>
                </select>
              </div>
            </div>
            <div className="w-50">
              <div>
                {" "}
                <small className="small-text">Date</small>
                <div>
                  <hr
                    style={{ margin: 0, width: "10%" }}
                    className="orange-hr"
                  ></hr>
                </div>
                <input
                  className="input-field w-75 mt-3"
                  type="date"
                  placeholder=" eg. 5XX XXX XXXX"
                />
              </div>
            </div>
          </div>
          <div className="mt-5">
            <small className="small-text">Effects</small>
            <div>
              <hr
                style={{ margin: 0, width: "10%" }}
                className="orange-hr"
              ></hr>
            </div>
            <input
              className="input-field w-100 mt-3"
              type="text"
              placeholder=" eg. Analagesic"
              onChange={(event) => {
                setSearch(event.target.value);
              }}
            />
          </div>

          <div className="mt-5">
            <small className="small-text">treatment</small>
            <div>
              <hr
                style={{ margin: 0, width: "10%" }}
                className="orange-hr"
              ></hr>
            </div>
            <input
              className="input-field w-100 mt-3"
              type="text"
              placeholder=" eg. Sandalwood Essential Oil"
              onChange={(event) => {
                setSearch(event.target.value);
              }}
            />
          </div>

          <div className="mt-5">
            <small className="small-text">Notes</small>
            <div>
              <hr
                style={{ margin: 0, width: "10%" }}
                className="orange-hr"
              ></hr>
            </div>
            <textarea
              id="textarea"
              className="input-field w-100 mt-3"
              rows="4"
              placeholder="eg. Notes about patient"
            ></textarea>
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

export default VisitInfo;
