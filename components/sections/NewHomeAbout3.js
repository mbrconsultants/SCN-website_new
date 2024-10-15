import React, { useState, useEffect } from "react";
import Link from "next/link";
import endpoint from "../../utils/endpoint";
import dynamic from "next/dynamic";
const CounterUp = dynamic(() => import("@/components/elements/CounterUp"), {
  ssr: false,
});
import ModalVideo from "react-modal-video";
const About4 = () => {
  const [isOpen, setOpen] = useState(false);
  const [data, setData] = useState({});
  const [filePath, setFilePath] = useState("");

  const getData = async () => {
    try {
      const res = await endpoint.get("/cjn");

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
    <>
      <section className="about-section-nine">
        <div className="auto-container">
          <div className="row">
            <div className="content-column col-lg-7 col-md-12 col-sm-12 wow fadeInLeft">
              <div className="inner-column">
                <div className="sec-title mb-4">
                  <span className="sub-title">Brief History of the CJN</span>
                  <h2>{data.fullname || "Full Name"}</h2>
                  <h5 style={{ color: "#2BB584" }}>
                    {data.designation || "Designation"}
                  </h5>
                  <div
                    className="text"
                    dangerouslySetInnerHTML={{
                      __html: truncateTitle(data.profile, 100),
                    }}></div>
                  <Link
                    href="/court-history"
                    className="read-more">
                    Read More <i className="icon fa fa-arrow-right"></i>
                  </Link>
                </div>
                <div className="row">
                  <div className="info-box col-lg-6 col-md-6 col-sm-12 wow fadeInLeft">
                    <div className="inner-box card shadow-lg">
                      <div>
                        <h4 className="count">
                          <span className="fa fa-balance-scale"></span>
                        </h4>
                        <h6 className="title">Our Mission</h6>
                        <p className="title">
                          To uphold justice, ensure the rule of law, and protect
                          the rights of every citizen through impartial,
                          transparent, and timely judgments.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="info-box col-lg-6 col-md-6 col-sm-12 wow fadeInLeft"
                    data-wow-delay="300ms">
                    <div className="inner-box card shadow-lg">
                      <div>
                        <h4 className="count">
                          <span className="fa fa-legal"></span>
                        </h4>
                        <h6 className="title">Our Vision</h6>
                        <p className="title">
                          To be a beacon of justice, fostering a society where
                          fairness and equity prevail, and the legal system
                          serves all with integrity.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="image-column col-lg-5 wow fadeInRight"
              data-wow-delay="300ms">
              <div className="inner-columnn">
                <div className="image-box">
                  <figure className="image overlay-anim">
                    <img
                      className="card shadow-lg"
                      src={filePath + (data.picture || "")}
                      alt={data.fullname || "Full Name"}
                      // style={{ borderRadius: "250px" }}
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default About4;
