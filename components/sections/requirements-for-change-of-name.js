import React, { useState, useEffect } from "react";
import BlogRecentSection from "./RecentNews";
import endpoint from "../../utils/endpoint";

const RequirementsForChangeOfName = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const res = await endpoint.get("/enquiry/requirements-for-name");
      console.log("requirement for change of name", res.data.data);
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
            {data && data.map((namechange, index) => (
              <div key={index} className="content-column col-lg-8 col-md-12 col-sm-12 wow fadeInLeft">
                <div className="inner-column">
                  <div className="sec-title">
                    <span className="sub-title">{namechange.Title}</span>
                    {/* Rendering HTML content */}
                    <div className="text" style={{ textAlign: "justify" }}>
                      <div dangerouslySetInnerHTML={{ __html: namechange.Content }} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="image-column col-lg-4 wow fadeInRight" data-wow-delay="300ms">
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

export default RequirementsForChangeOfName;
