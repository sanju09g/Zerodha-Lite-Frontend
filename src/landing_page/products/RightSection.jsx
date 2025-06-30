import React from "react";
import "../styles/landing.css";
function RightSection({imageUrl,
    title,
    prodDesc,
    learnMore,}) {
  return (
    <div className="container mt-5 p-3">
      <div className="row  p-5">
        <div className="col-5 ">
          <h1 className="mb-4">{title}</h1>
          <p className="text-muted fs-5 mb-4">{prodDesc}</p>
          <div className="mt-3">
            <a className="text-decoration-none " href={learnMore}>
              Learn more <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
        <div className="col-7">
          <img src={imageUrl} alt="console" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
