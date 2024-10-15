import React, { useState, useEffect } from "react";
import endpoint from "../../../utils/endpoint";
import BlogRecentSection from "../RecentNews";

const BulletinList = () => {
  const [data, setData] = useState([]); // Initialize as an empty array

  const getData = async () => {
    try {
      const res = await endpoint.get("/bulletin");
      console.log("Bulletin details:", res.data.data.bulletins.data); // Log the entire response to inspect the structure

      if (
        res.data &&
        res.data.data.bulletins &&
        Array.isArray(res.data.data.bulletins.data)
      ) {
        console.log("bulletins data:", res.data.data.bulletins.data);
        setData(res.data.data.bulletins.data); // Set data if it's an array
      } else {
        console.warn("API returned unexpected data structure");
      }
    } catch (err) {
      console.error("Error fetching bulletins:", err);
    }
  };

  useEffect(() => {
    getData(); // Fetch data on component mount
  }, []);

  return (
    <>
      <section className="about-section-nine">
        <div className="auto-container">
          <div className="row align-items-start">
            {" "}
            {/* Ensure alignment at the top */}
            <div className="content-column col-lg-8 col-md-12 col-sm-12 wow fadeInLeft">
              <h3 style={{ color: "#0EA476" }}>BULLETIN</h3>
              {data.length > 0 ? (
                data.map((bulletin, index) => (
                  <div
                    key={index}
                    className="inner-column">
                    {" "}
                    {/* Reduce margin between bulletins */}
                    <div
                      className="sec-title"
                      style={{ paddingBottom: "1px" }}>
                      {" "}
                      {/* Reduce padding between the title and content */}
                      {/* Display PDF title */}
                      <span
                        className="sub-title"
                        style={{ display: "block" }}>
                        {bulletin.title}
                      </span>
                      {/* Add margin between title and description */}
                      <div
                        className="text"
                        style={{ textAlign: "justify", marginTop: "" }}>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: bulletin.brief_description,
                          }}
                        />
                      </div>
                      {/* Open PDF in a new tab */}
                      <div>
                        <a
                          href={bulletin.file_path}
                          target="_blank"
                          rel="noopener noreferrer">
                          <figure className="image">
                            <img
                              src="images/resource/icon.jpg"
                              alt="PDF Icon"
                              style={{ height: "50px", width: "50px" }}
                            />
                          </figure>
                        </a>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p>No bulletins available</p>
              )}
            </div>
            <div
              className="image-column col-lg-4 wow fadeInRight"
              data-wow-delay="300ms">
              <div className="inner-column">
                <BlogRecentSection />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BulletinList;
