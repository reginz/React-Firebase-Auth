import React from "react";

function Features(props) {
  return (
    <div>
      <div className="d-flex fetures-wrapper" style={{ gap: "2em" }}>
        <div className="feature text-center w-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            fill="currentColor"
            class="bi bi-droplet-half"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M7.21.8C7.69.295 8 0 8 0c.109.363.234.708.371 1.038.812 1.946 2.073 3.35 3.197 4.6C12.878 7.096 14 8.345 14 10a6 6 0 0 1-12 0C2 6.668 5.58 2.517 7.21.8zm.413 1.021A31.25 31.25 0 0 0 5.794 3.99c-.726.95-1.436 2.008-1.96 3.07C3.304 8.133 3 9.138 3 10c0 0 2.5 1.5 5 .5s5-.5 5-.5c0-1.201-.796-2.157-2.181-3.7l-.03-.032C9.75 5.11 8.5 3.72 7.623 1.82z"
            />
            <path
              fill-rule="evenodd"
              d="M4.553 7.776c.82-1.641 1.717-2.753 2.093-3.13l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448z"
            />
          </svg>
          <h5 className="pt-3">Custom Blend</h5>
          <p>
            Create custom blends based on your needs, allergies and desired
            result.
          </p>
        </div>

        <div className="feature text-center w-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            fill="currentColor"
            class="bi bi-eyedropper"
            viewBox="0 0 16 16"
          >
            <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z" />
          </svg>
          <h5 className="pt-3">Library</h5>
          <p>Search oils by origin, components and effecs.</p>
        </div>

        <div className="feature text-center w-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            fill="currentColor"
            class="bi bi-people"
            viewBox="0 0 16 16"
          >
            <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
          </svg>
          <h5 className="pt-3">Patients</h5>
          <p>Track your patients by treatment.</p>
        </div>
      </div>
      <div className="d-flex mt-5" style={{ gap: "2em" }}>
        <div className="feature text-center w-25">
          <h1>+10k</h1>
          <h5 className="pt-3">Sample Database</h5>
        </div>
        <div className="feature text-center w-25">
          <h1>41</h1>
          <h5 className="pt-3">Oils</h5>
        </div>
        <div className="feature text-center w-25">
          <h1>%91</h1>
          <h5 className="pt-3">Accuracy</h5>
        </div>
        <div className="feature text-center w-25">
          <h1>21</h1>
          <h5 className="pt-3">Ullamcorper</h5>
        </div>
      </div>
    </div>
  );
}

export default Features;
