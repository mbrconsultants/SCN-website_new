import React, { useState, useEffect } from "react";
import endpoint from "../../../utils/endpoint";

const PublicationList = () => {
    const [data, setData] = useState([]);
    const [filePath, setfilePath] = useState(null);

    const getData = async () => {
        try {
            const res = await endpoint.get("/publication");
            console.log("publication details", res.data.data.data);
            setData(res.data.data.data);
            setfilePath(res.data.file_path);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    const formatDate = (dateString) => {
        if (!dateString || dateString === "0000-00-00") {
            return "N/A";
        }

        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
        const date = new Date(dateString);

        if (isNaN(date.getTime())) {
            return "N/A";
        }

        const day = date.getDate();
        const month = months[date.getMonth()];
        const year = date.getFullYear();
        return `${day} ${month}, ${year}`;
    };

    return (
        <>
            <section className="services-section-three">
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <span className="sub-title">Our Publications</span>
                        <h2 style={{ color: "#0EA476" }}>
                            Explore Supreme court publications
                        </h2>
                    </div>
                    <div className="row">
                        {data.length > 0 ? (
                            data.map((publication, index) => (
                                <div
                                    key={index}
                                    className="service-block-three col-xl-4 col-lg-6 col-md-6 col-sm-12 wow fadeInUp">
                                    <div className="inner-box card shadow-lg">
                                        <div className="content-box">
                                            <div className="title-box">
                                                <h4 className="title">
                                                    {publication.title}
                                                </h4>
                                                <i className="icon fa fa-home"></i>
                                            </div>
                                            <div
                                                className="publication-details"
                                                style={{
                                                    display: "flex",
                                                    justifyContent: "space-between",
                                                    alignItems: "center",
                                                }}
                                            >
                                                <div style={{ textAlign: "left" }}>
                                                    <li><i className="icon fa fa-user"></i>   {publication.author}</li>
                                                    <li><i className="icon fa fa-calendar"></i>   {formatDate(publication.publication_date)}</li>
                                                </div>
                                                <div className="btn-box" style={{ textAlign: "right" }}>
                                                    <a
                                                        href={filePath + publication.pdf_name}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <img
                                                            src="images/resource/icon.jpg"
                                                            alt="PDF Icon"
                                                            style={{ height: "40px", width: "40px" }}
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No Publication(s) available</p>
                        )}
                    </div>
                </div>
            </section>
        </>
    );


};

export default PublicationList;
