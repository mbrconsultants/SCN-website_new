import React, { useState, useEffect } from "react";
import BlogRecentSection from "./RecentNews";
import endpoint from "../../utils/endpoint";

const About6 = (text) => {
  const [data, setData] = useState({});

  const getData = async () => {
    try {
      const res = await endpoint.get("/court-jurisdiction");
      setData(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <section className="about-section-nine">
        <div className="auto-container">
          <div className="row">
            <div className="content-column col-lg-8 col-md-12 col-sm-12 wow fadeInLeft">
              <div className="inner-column">
                <div className="sec-title">
                  <span className="sub-title">About Us</span>
                  <h2 style={{ color: "#2BB584" }}>{data.title}</h2>
                  <div
                    className="text"
                    style={{ textAlign: "justify" }}>
                    <p dangerouslySetInnerHTML={{ __html: data.details }}></p>
                  </div>
                </div>
              </div>
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
export default About6;
