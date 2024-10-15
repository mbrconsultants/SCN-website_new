import React, { useState, useEffect } from "react";
import BlogRecentSection from "./RecentNews";
import endpoint from "../../utils/endpoint";

const Enrolment = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const res = await endpoint.get("/enquiry/enrollment-form");
      console.log("enrolment form", res.data.data);
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
            {data &&
              data.map((enrolment, index) => (
                <div
                  key={index}
                  className="content-column col-lg-8 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <div className="sec-title">
                      <span className="sub-title">{enrolment.Title}</span>
                      {/* <h4 style={{ color: "#2BB584" }}>REQUIREMENTS FOR ENROLMENT AS A BARRISTER AND SOLICITOR OF THE SUPREME COURT.</h4> */}
                      <div
                        className="text"
                        style={{ textAlign: "justify" }}>
                        {/* Rendering HTML content from API */}
                        <div
                          dangerouslySetInnerHTML={{
                            __html: enrolment.Content,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            <div className="image-column col-lg-4">
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

export default Enrolment;
