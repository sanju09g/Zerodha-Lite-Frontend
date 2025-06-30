import React from "react";
import "../styles/landing.css";
function LeftSection({
  imageUrl,
  title,
  prodDesc,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container  p-3">
      <div className="row  p-5">
        <div className="col-7">
          <img src={imageUrl} alt="kite" />
        </div>
        <div className="col-5 ">
          <h1 className="mb-4">{title}</h1>
          <p className="text-muted fs-5 mb-4">{prodDesc}</p>
          <div className="mt-3">
            <a className="text-decoration-none" href={tryDemo}>
              {tryDemo} <i className="fa-solid fa-arrow-right"></i>
            </a>
            <a className="text-decoration-none mx-5" href={learnMore} >
              {learnMore} <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          <div className="mt-3">
            <a className="text-decoration-none " href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" alt="gplay" />
            </a>
            <a className="text-decoration-none mx-3" href={appStore}>
              <img src="media/images/appstoreBadge.svg" alt="app_store" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
