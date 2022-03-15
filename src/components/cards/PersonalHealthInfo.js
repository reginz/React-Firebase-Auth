import React, { useState } from "react";

export default function PersonalHealthInfo() {
  const [state, setState] = useState();
  const [showResults, setShowResults] = React.useState(false);

  const Results = () => (
    <div id="results" className="search-results">
      {state} <br></br>
      <a
        href="https://www.aromaterapimarket.com/therapium-naturalis"
        target="_blank"
        className="btn-link"
      >
        Please visit our website to review our products.
      </a>
      <br></br>
      <div className="d-flex justify-content-end">
        <button
          id="btn-primary-custom"
          className="btn"
          onClick={() => setShowResults(false)}
        >
          Try Again
        </button>
      </div>
    </div>
  );
  const ShowForm = () => {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <small className="small-text">Your Complaint</small>
          <div>
            <hr style={{ margin: 0, width: "10%" }} className="orange-hr"></hr>
          </div>
          <br></br>
          <textarea
            id="textarea"
            className="input-field w-100"
            required
            placeholder="EX: I have a headache"
          ></textarea>

          <br></br>

          <div className="d-flex justify-content-end">
            <button id="btn-primary-custom" className="btn" type="submit">
              Generate Blend
            </button>
          </div>
        </form>
      </div>
    );
  };

  function handleSubmit(event) {
    event.preventDefault();
    const MonkeyLearn = require("monkeylearn");

    const ml = new MonkeyLearn("7775ad6a7351c42aabe5bfd4bb0d72a7b274a700");
    let model_id = "cl_ZHru2yjJ";
    let data = [document.getElementById("textarea").value];
    ml.classifiers.classify(model_id, data).then((res) => {
      if (res.body[0].classifications[0]) {
        var response = res.body[0].classifications[0].tag_name;
        setState(
          "Our special recommendation for you is" +
            " '" +
            response +
            "' " +
            "oil. "
        );
      } else {
        setState(
          "We could not find a suitable recommendation for you. Please try to describe your request with different sentences."
        );
      }

      setShowResults(true);
    });
  }

  return <div>{showResults ? <Results /> : <ShowForm />}</div>;
}
