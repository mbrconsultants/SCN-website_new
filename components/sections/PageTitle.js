import Link from "next/link";
import React from "react";

const PageTitle = (props) => {
  return (
    <section
      className="page-title"
      style={{
        backgroundImage: "url(/images/banner/scnbanner-1.JPG)",
        position: "relative",
      }}>
      {/* Overlay for the opaque background */}
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.4)", // Opaque background
          position: "absolute", // Position the overlay
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1, // Ensure it sits beneath content
        }}
      ></div>

      {/* Content container */}
      <div
        className="auto-container"
        style={{
          position: "relative", // Ensure it sits above the background
          zIndex: 2,
        }}>
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