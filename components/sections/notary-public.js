import React, { useState, useEffect } from "react";
import BlogRecentSection from "./RecentNews";
import endpoint from "../../utils/endpoint";

const NotaryPublic = () => { 

  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const res = await endpoint.get("/enquiry/notary-public");
      console.log("notary public details", res.data.data);
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
            {data && data.map((notary, index) => (
              <div key={index} className="content-column col-lg-8 col-md-12 col-sm-12 wow fadeInLeft">
                <div className="inner-column">
                  <div className="sec-title">
                    <span className="sub-title" style={{color: 'green'}}>{notary.Title}</span>
                    {/* <h3 style={{ color: "#2BB584" }}>
                      REQUIREMENTS FOR APPLICATION OF NOTARY PUBLIC
                    </h3> */}
                    <div className="text" style={{ textAlign: "justify" }}>
                      {/* <p>The Underlisted is the requirements for Notary Public:</p> */}
                      {/* Rendering HTML content from API */}
                      <div dangerouslySetInnerHTML={{ __html: notary.Content }} />
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

export default NotaryPublic;
