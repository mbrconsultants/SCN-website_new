import Link from "next/link";
import React from "react";

const PageTitle = (props) => {
  return (
    <section
      className="page-title"
      style={{ backgroundImage: "url(/images/banner/scnbanner-3.JPG)" }}>
      <div className="auto-container">
        <div className="title-outer d-sm-flex align-items-center justify-content-sm-between">
          <h1 className="title text-white">{props.pageName}</h1>
          <ul className="page-breadcrumb">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>{props.pageName}</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PageTitle;