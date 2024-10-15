import { useEffect, useState } from "react";
import Link from "next/link";
import BlogRecentSection from "./RecentNews";
import endpoint from "../../utils/endpoint";

const ScnAct = () => {
  const [acts, setActs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchActs();
  }, []);

  const fetchActs = async () => {
    try {
      const response = await endpoint.get("/supreme-court-acts");
      const data = response.data.data.courtacts.data;
      console.log("data", data);
      setActs(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <>
      <section className="pricing-section-two">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2 style={{ color: "#0EA476" }}>
              Supreme Court Acts <span className="fa fa-legal"></span>
            </h2>
          </div>
          {loading && (
            <div className="row text-center">
              {" "}
              <p>Fetching data...</p>{" "}
            </div>
          )}
          {!loading && (
            <div className="row">
              {acts && acts.length > 0 ? (
                acts.map((act, index) => (
                  <div
                    className="pricing-block-two col-xl-8 col-lg-8 col-md-8 col-sm-12 wow fadeInUp"
                    key={index}>
                    <div className="inner-box">
                      <div className="title-box">
                        <h5 className="title">{act.file_description}</h5>
                        <div className="text">
                          Click on the Pdf Icon below to download our Act.
                        </div>
                      </div>
                      <div className="content-box">
                        <div>
                          <figure className="image">
                            <Link
                              href={act.file_path}
                              target="_blank">
                              <img
                                src="images/resource/icon.jpg"
                                alt="Image"
                                style={{ height: "50px", width: "50px" }}
                              />{" "}
                            </Link>
                          </figure>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="card shadow-lg text-center">
                  <h5 className="title">No acts available.</h5>
                </div>
              )}

              <div
                className="image-column col-xl-4 col-lg-4 col-md-4 col-sm-12 wow fadeInRight"
                data-wow-delay="300ms">
                <div className="inner-column">
                  <BlogRecentSection />
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};
export default ScnAct;
