import React from "react";
import "./Expert.css";
import { Link } from "react-router-dom";
// import { QrReader } from "react-qr-reader";
// import } from 'react-router-dom'

const Expert = () => {
  return (
    <section className="Expert-advice-section">
      <div className="Expert-page-Welcome">
        <h1>Welcome to Expert Suggestion Page</h1>
        <div>
          <Link to={"/ScanImage"}>
            <button>Upload</button>
          </Link>
        </div>
      </div>

      {/* <div className="Expert-advice-search-bar-section">
        <div className="Expert-advice-input-box-and-search">
          <input
            placeholder="Search your query"
            className="Expert-advice-search-box"
          />
          <h6 className="Expert-advice-search">Search</h6>
        </div>

        <button className="Expert-advice-prompt-btn">Find Solution</button>
      </div> */}
    </section>
  );
};

export default Expert;
