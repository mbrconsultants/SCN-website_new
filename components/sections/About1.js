import React, { useState, useEffect } from "react";
import Link from "next/link";
import endpoint from "../../utils/endpoint";

const About1 = () => {
  const [data, setData] = useState({});
  const [filePath, setFilePath] = useState("");

  const getData = async () => {
    try {
      const res = await endpoint.get("/cjn");
      console.log("====================================");
      console.log(res.data);
      console.log("====================================");
      setData(res.data.data || {});
      setFilePath(res.data.file_path || "");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const truncateTitle = (title, wordLimit) => {
    if (!title) return ""; // Check if title is undefined or null
    const words = title.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return title;
  };

  return (
    <section className="about-section">
      <div className="auto-container">
        <div className="row">
          <div className="image-column col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div
              className="inner-column wow fadeInRight"
              data-wow-delay="200ms">
             
              <div className="image-box">
                <figure className="image overlay-anim">
                  <img
                    src={filePath + (data.picture || "")}
                    alt={data.fullname || "Full Name"}
                  />
                </figure>
                <div className="experience-box wow fadeInUp">
                  <div className="inner-box">
                    <div className="title-box">
                      <h5 className="title mb-2">
                        {data.fullname || "Full Name"}
                      </h5>
                      <h6 className="mb-0 text-white">
                        {data.designation || "Designation"}
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="content-column col-xl-6 col-lg-6 col-md-12 col-sm-12 wow fadeInLeft"
            data-wow-delay="300ms">
            <div className="inner-column">
              <div className="sec-title">
                <span className="sub-title">About</span>
                <h2>Brief background of the CJN</h2>
                <div
                  className="text"
                  dangerouslySetInnerHTML={{
                    __html: truncateTitle(data.profile, 50),
                  }}></div>
              </div>
              <div>
                <Link
                  href="/cjn-profile"
                  className="theme-btn btn-style-one hover-light">
                  <span className="btn-title">Read More...</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About1;
