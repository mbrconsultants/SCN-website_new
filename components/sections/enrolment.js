import React, { useState, useEffect } from "react";
import BlogRecentSection from "./RecentNews";
import endpoint from "../../utils/endpoint";

const Enrolment = () => {
    const [enrolmentData, setEnrolmentData] = useState([]);
    const [goodStandingData, setGoodStandingData] = useState([]);
    const [nameChangeData, setNameChangeData] = useState([]);
    const [loading, setLoading] = useState(true);

    // Individual loading states
    const [enrolmentLoading, setEnrolmentLoading] = useState(true);
    const [goodStandingLoading, setGoodStandingLoading] = useState(true);
    const [nameChangeLoading, setNameChangeLoading] = useState(true);

    const getData = async () => {
        try {
            const res = await endpoint.get("/enquiry/enrollment-form");
            console.log("enrolment form", res.data.data);
            setEnrolmentData(res.data.data);
        } catch (err) {
            console.log(err);
        } finally {
            setEnrolmentLoading(false); // Set individual loading state to false
        }
    };

    const getDataGoodStanding = async () => {
        try {
            const res = await endpoint.get("/enquiry/good-standing");
            console.log("good standing details", res.data.data);
            setGoodStandingData(res.data.data);
        } catch (err) {
            console.log(err);
        } finally {
            setGoodStandingLoading(false); // Set individual loading state to false
        }
    };

    const getDataChangeOfName = async () => {
        try {
            const res = await endpoint.get("/enquiry/requirements-for-name");
            console.log("change of name details", res.data.data);
            setNameChangeData(res.data.data);
        } catch (err) {
            console.log(err);
        } finally {
            setNameChangeLoading(false); // Set individual loading state to false
        }
    };

    useEffect(() => {
        getData();
        getDataGoodStanding();
        getDataChangeOfName();
    }, []);

    // Check if all individual loading states are false
    useEffect(() => {
        if (!enrolmentLoading && !goodStandingLoading && !nameChangeLoading) {
            setLoading(false);
        }
    }, [enrolmentLoading, goodStandingLoading, nameChangeLoading]);

    // Helper function to remove HTML tags
    const stripHtmlTags = (html) => {
        const doc = new DOMParser().parseFromString(html, "text/html");
        return doc.body.textContent || "";
    };

    // Combine all data into a single array
    const combinedData = [...enrolmentData, ...goodStandingData, ...nameChangeData];

    return (
        <>
            <section className="about-section-nine">
                <div className="auto-container">
                    <div className="row">
                        {/* Content Column */}
                        <div className="content-column col-lg-8 col-md-12 col-sm-12 wow fadeInLeft">
                            <div className="inner-column">
                                {loading ? (
                                    <p className="text-center">Page is Loading...</p> // Display loading message while data is being fetched
                                ) : (
                                    combinedData.map((item, index) => (
                                        <div key={index} className="sec-title">
                                            <span className="sub-title">{stripHtmlTags(item.Title)}</span>
                                            <h3 style={{ color: "#008751" }}>{stripHtmlTags(item.subTitle || "")}</h3>
                                            <div className="text" style={{ textAlign: "justify" }}>
                                                <p>{stripHtmlTags(item.Content)}</p>
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

export default Enrolment;
