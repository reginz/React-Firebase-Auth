import React from "react";

function Ready() {
  return (
    <div style={{backgroundColor:"white"}} className="text-center mt-5  pb-5 pt-5">
      <h2>Ready to get started?</h2>
      <a href="/signup">
        <button className="btn" id="btn-primary-custom">
            Sign Up
        </button>
      </a>
      <a href="signup">
        <button className="btn" id="btn-primary-custom">
            Get In Touch
        </button>
      </a>
    </div>
  );
}

export default Ready;
