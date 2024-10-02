import React, { useState, useEffect } from "react";
import BlogRecentSection from "./RecentNews";
import endpoint from "../../utils/endpoint";

const GoodStanding = () => { 

  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const res = await endpoint.get("/enquiry/good-standing");
      console.log("good standing details", res.data.data);
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
              {data && data.map((goodstanding, index) => (
                <div key={index} className="content-column col-lg-8 col-md-12 col-sm-12 wow fadeInLeft">
                  <div className="inner-column">
                    <div className="sec-title">
                      <span className="sub-title">{goodstanding.Title}</span>
                      {/* You can uncomment the heading if needed */}
                      {/* <h4 style={{ color: "#2BB584" }}>REQUIREMENTS FOR ISSUANCE OF LETTER OF GOOD STANDING</h4> */}
                      <div className="text" style={{ textAlign: "justify" }}>
                        {/* Rendering HTML content from API */}
                        <div dangerouslySetInnerHTML={{ __html: goodstanding.Content }} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div
                className="image-column col-lg-4 wow fadeInRight"
                data-wow-delay="300ms"
              >
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

export default GoodStanding;
