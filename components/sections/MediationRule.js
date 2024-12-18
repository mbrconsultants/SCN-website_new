import { useEffect, useState } from "react";
import Link from "next/link";
import BlogRecentSection from "./RecentNews";
import endpoint from "../../utils/endpoint";

const MediationRule = () => {
    const [acts, setActs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchActs();
    }, []);

    const fetchActs = async () => {
        try {
            const response = await endpoint.get("/mediation-rule");
            const data = response.data.data.courtrules.data;
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
                            Mediation Rule <span className="fa fa-legal"></span>
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
                                    <div className="pricing-block-three col-xl-8 col-lg-8 col-md-12 col-sm-12 wow fadeInUp">
                                        <div className="inner-box">
                                            <div className="title-box">
                                                <h5 className="title">{act.file_description}</h5>
                                                <div className="text">
                                                    Click on the Pdf Icon below to download our mediation
                                                    rule.
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
                                                            />
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
                                className="image-column col-xl-4 col-lg-4 col-md-12 col-sm-12 wow fadeInRight"
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
export default MediationRule;
