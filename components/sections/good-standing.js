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

  // Helper function to remove HTML tags
  const stripHtmlTags = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };



  return (
    <>
      <section className="about-section-nine">
        <div className="auto-container">
          <div className="row">
            {data &&
              data.map((goodstanding, index) => (
                <div
                  key={index}
                  className="content-column col-lg-8 col-md-12 col-sm-12 wow fadeInLeft"
                >
                  <div className="inner-column">
                    <div className="sec-title">
                      <span className="sub-title">
                        {stripHtmlTags(goodstanding.Title)}
                      </span>
                      <h3 style={{ color: "#0EA476" }}>
                        {stripHtmlTags(goodstanding.subTitle)}
                      </h3>
                      <div className="text" style={{ textAlign: "justify" }}>
                        <p>{stripHtmlTags(goodstanding.Content)}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
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

export default GoodStanding;
