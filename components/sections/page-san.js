import React, { useState, useEffect } from "react";
import BlogRecentSection from "./RecentNews";
import endpoint from "../../utils/endpoint";

// Helper function to remove HTML tags
const stripHtmlTags = (html) => {
  const doc = new DOMParser().parseFromString(html, "text/html");
  return doc.body.textContent || "";
};

const PageSan = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const res = await endpoint.get("/enquiry/SAN");
      console.log("san details", res.data.data);
      setData(res.data.data);
      setLoading(false); // Set loading to false after data is fetched
    } catch (err) {
      console.log(err);
      setLoading(false); // Set loading to false even if there’s an error
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
            {/* Content Column */}
            <div className="content-column col-lg-8 col-md-12 col-sm-12 wow fadeInLeft">
              {/* <div className="sec-title text-center">
                <span className="sub-title">
                  Meet supreme court sans
                </span>
                <h2 style={{ color: "#2BB584" }}>Our Senior Advocates Guidelines</h2>
              </div>   */}
              <div className="inner-column">
                {loading ? (
                  <p className="text-center">Page is Loading...</p> // Show loading text while data is being fetched
                ) : (
                  data &&
                  data.map((san, index) => (
                    <div key={index} className="sec-title">
                      <span className="sub-title">{stripHtmlTags(san.Title)}</span>
                      <h3 style={{ color: "#0EA476" }}>{stripHtmlTags(san.subTitle)}</h3>
                      <div className="text" style={{ textAlign: "justify" }}>
                        <p>{stripHtmlTags(san.Content)}</p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* BlogRecentSection Column */}
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

export default PageSan;
