import React from "react";
import { Card, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";


function ProfileInfo() {
    const history = useHistory();

    const push = () =>{
        history.push("/")
    }
  return (
    <div style={{ height: "100vh" }} className="d-flex justify-content-center">
      <div className="w-50 m-auto">
        <h2 className="logo-signup logo text-center mb-5">
          Tell Us About Yourself
        </h2>
        <Card>
          <Card.Body>
            <form>
              <div className="d-flex w-100 align-items-between">
                <div className="w-50">
                  <div>
                    <small className="small-text">Name</small>
                    <div>
                      <hr
                        style={{ margin: 0, width: "10%" }}
                        className="orange-hr"
                      ></hr>
                    </div>
                    <input
                      className="input-field w-75 mt-3"
                      type="text"
                      placeholder=" eg. John Doe"
                    />
                  </div>
                </div>
                <div className="w-50">
                  <div>
                    {" "}
                    <small className="small-text">ID No</small>
                    <div>
                      <hr
                        style={{ margin: 0, width: "10%" }}
                        className="orange-hr"
                      ></hr>
                    </div>
                    <input
                      className="input-field w-75 mt-3"
                      type="text"
                      placeholder=" TC or other country id"
                    />
                  </div>
                </div>
              </div>

              <div className="d-flex mt-5 w-100 align-items-between">
                <div className="w-50">
                  <div>
                    <small className="small-text">Industry</small>
                    <div>
                      <hr
                        style={{ margin: 0, width: "10%" }}
                        className="orange-hr"
                      ></hr>
                    </div>
                    <select
                      className="input-field mt-3 w-75"
                      name="cars"
                      id="cars"
                    >
                      <option value="volvo">Health Care</option>
                      <option value="saab">Education</option>
                    </select>
                  </div>
                </div>
                <div className="w-50">
                  <div>
                    {" "}
                    <small className="small-text">Age</small>
                    <div>
                      <hr
                        style={{ margin: 0, width: "10%" }}
                        className="orange-hr"
                      ></hr>
                    </div>
                    <input
                      className="input-field w-75 mt-3"
                      type="number"
                      placeholder=" eg. 34"
                    />
                  </div>
                </div>
              </div>

              <div className="d-flex mt-5 w-100 align-items-between">
                <div className="w-50">
                  <div>
                    <small className="small-text">Department</small>
                    <div>
                      <hr
                        style={{ margin: 0, width: "10%" }}
                        className="orange-hr"
                      ></hr>
                    </div>
                    <select
                      className="input-field mt-3 w-75"
                      name="cars"
                      id="cars"
                    >
                      <option value="volvo">Neurosurgery</option>
                      <option value="saab">Oral and Dental Diseases</option>
                      <option value="saab">Pathology</option>
                    </select>
                  </div>
                </div>
                <div className="w-50">
                  <div>
                    {" "}
                    <small className="small-text">Institution</small>
                    <div>
                      <hr
                        style={{ margin: 0, width: "10%" }}
                        className="orange-hr"
                      ></hr>
                    </div>
                    <input
                      className="input-field w-75 mt-3"
                      type="text"
                      placeholder=" eg. Memorial"
                    />
                  </div>
                </div>
              </div>
              <div className="d-flex w-100 mt-5 align-items-between">
                <div className="w-50">
                  <div>
                    <small className="small-text">City</small>
                    <div>
                      <hr
                        style={{ margin: 0, width: "10%" }}
                        className="orange-hr"
                      ></hr>
                    </div>
                    <select
                      className="input-field mt-3 w-75"
                      name="cars"
                      id="cars"
                    >
                      <option value="volvo">Istanbul</option>
                      <option value="saab">Ankara</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <small className="small-text">Areas of expertise</small>
                <div>
                  <hr
                    style={{ margin: 0, width: "10%" }}
                    className="orange-hr"
                  ></hr>
                </div>
                <select className="input-field mt-3 w-100" name="cars" id="cars">
                  <option value="volvo">Neurosurgery</option>
                  <option value="saab">Oral and Dental Diseases</option>
                  <option value="saab">Pathology</option>
                </select>
              </div>
              <div className="mt-5">
                <small className="small-text">Areas of intrest</small>
                <div>
                  <hr
                    style={{ margin: 0, width: "10%" }}
                    className="orange-hr"
                  ></hr>
                </div>
                <select className="input-field mt-3 w-100" name="cars" id="cars">
                  <option value="volvo">Aromatheraphy</option>
                  <option value="saab">Oral and Dental Diseases</option>
                  <option value="saab">Pathology</option>
                </select>
              </div>

            
            </form>

            <div className="d-flex flex-column">
              <div>
                <input
                  className="input-field mt-3"
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                />{" "}
                <label for="vehicle1">
                  I want to get campaign and advertising announcements.
                </label>
              </div>

              <div>
                <input
                  className="input-field mt-3"
                  type="checkbox"
                  id="vehicle2"
                  name="vehicle2"
                  value="Bike"
                />{" "}
                <label for="vehicle2">
                  I want to get new product announcements.
                </label>
              </div>

              <div>
                <input
                  className="input-field mt-3"
                  type="checkbox"
                  id="vehicle3"
                  name="vehicle3"
                  value="Bike"
                />{" "}
                <label for="vehicle3">
                  I want to get professional announcements.
                </label>
              </div>
            </div>
            <Button
                id="btn-primary-custom"
                className="w-100"
                type="submit"
                onClick={push}
              >
                Submit & Continue to Arotolia
              </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default ProfileInfo;
