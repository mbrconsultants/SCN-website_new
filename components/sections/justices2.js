import React, { useState, useEffect } from "react";
import endpoint from "../../utils/endpoint";
import Link from "next/link";
const Justices2 = () => {
  const [data, setData] = useState([]);
  const [filePath, setFilePath] = useState();

  const getData = async () => {
    try {
      const res = await endpoint.get("/profile-current-justices");
      setData(res.data.data);
      setFilePath(res.data.file_path);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <section
        className="team-section-three mt-2"
        style={{ backgroundColor: "white" }}>
        <div className="auto-container">
          <div className="sec-title light text-center">
            <span className="sub-title">Justices</span>
            <h2 className="text-dark">
              Justices Of the Supreme Court <br /> of Nigeria
            </h2>
          </div>
          <div className="text-right py-3">
            <div className="btn-box">
              <Link
                href="#"
                className="theme-btn btn-style-two">
                <span className="btn-title">
                  View All<i className="icon fa fa-arrow-right"></i>
                </span>
              </Link>
            </div>
          </div>
          <div className="row">
            {data.slice(0, 3).map((justices, index) => (
              <div
                className="team-block-three col-lg-4 col-md-6 col-sm-12 wow fadeInLeft"
                key={index}>
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <Link href={`/justice/${justices.id}`}>
                        <img
                          src={filePath + justices.picture}
                          alt={justices.fullname}
                        />
                      </Link>
                    </figure>
                    {/* <span className="share-icon fa fa-share-alt"></span> */}
                    {/* <div className="social-links">
                    <Link href="#">
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link href="#">
                      <i className="fab fa-twitter"></i>
                    </Link>
                    <Link href="#">
                      <i className="fab fa-linkedin-in"></i>
                    </Link>
                    <Link href="#">
                      <i className="fab fa-pinterest"></i>
                    </Link>
                  </div> */}
                  </div>
                  <div className="info-box mx-5">
                    <h5 className="name">
                      <Link href={`/justice/${justices.id}`}>
                        {justices.fullname}
                      </Link>
                    </h5>
                    <span className="designation">{justices.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default Justices2;
