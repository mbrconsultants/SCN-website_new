import React, { useState, useEffect } from "react";
import endpoint from "../../../utils/endpoint";
import Link from "next/link";

const PublicationList = () => {
    const [data, setData] = useState([]);
    const [filePath, setfilePath] = useState(null);
    const [loading, setLoading] = useState(true); // Add loading state
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredPublication, setFilteredPublication] = useState([]);

    const getData = async () => {
        try {
            const res = await endpoint.get("/publication");
            console.log("publication details", res.data.data.data);
            setData(res.data.data.data);
            setfilePath(res.data.file_path);
            setLoading(false); // Set loading to false after data is fetched
        } catch (err) {
            console.log(err);
            setLoading(false); // Set loading to false in case of an error
        }
    };

    useEffect(() => {
        getData();
    }, []);


    useEffect(() => {
        // Filter the rules based on the search term
        const results = data.filter((pub) =>
            pub.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredPublication(results);
    }, [searchTerm, data]); // Runs when either searchTerm or rules change

    const handleSearch = (e) => {
        setSearchTerm(e.target.value); // Update search term on typing
    };

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
             <section className="pricing-section-two">
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <h2 style={{ color: "#0EA476" }}>
                            Our Publications <span className="fa fa-book"></span>
                        </h2>
                    </div>

                    <div className="row mb-4">
                        <div className="col-md-5 mx-auto">
                            <div className="sidebar__single sidebar__search">
                                <form
                                    action="#"
                                    className="sidebar__search-form">
                                    <input
                                        type="search"
                                        placeholder="Search here"
                                        value={searchTerm}
                                        onChange={handleSearch}
                                    />
                                    <button type="submit">
                                        <i className="lnr-icon-search"></i>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    {loading && (
                        <div className="row text-center">
                            {" "}
                            <p>Fetching data...</p>{" "}
                        </div>
                    )}
                    {!loading && (
                        <div className="row">
                            {filteredPublication && filteredPublication.length > 0 ? (
                                filteredPublication.map((pub, index) => (
                                    <div
                                        // className="pricing-block-two col-xl-4 col-lg-6 col-md-6 col-sm-12 wow fadeInUp"
                                        className="pricing-block-three col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp"
                                        key={index}>
                                        <div className="inner-box">
                                            <div className="title-box">
                                                <h5 className="title">{pub.title}</h5>
                                            </div>
                                            <div className="content-box">
                                                <div
                                                    style={{
                                                        display: "flex",
                                                        justifyContent: "space-between",
                                                        alignItems: "center",
                                                    }}
                                                >
                                                    {/* Left-aligned content */}
                                                    <div style={{ textAlign: "left" }}>
                                                        <li>
                                                            <i
                                                                className="icon fa fa-user"
                                                                style={{ fontSize: "12px", marginRight: "5px" }}
                                                            ></i>
                                                            {pub.author}
                                                        </li>
                                                        <li>
                                                            <i
                                                                className="icon fa fa-calendar"
                                                                style={{ fontSize: "12px", marginRight: "5px" }}
                                                            ></i>
                                                            {formatDate(pub.publication_date)}
                                                        </li>
                                                    </div>


                                                    {/* Right-aligned content */}
                                                    <div>
                                                        <figure className="image">
                                                            <a
                                                                href={filePath + pub.pdf_name}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                            >
                                                                <img
                                                                    src="images/resource/icon.jpg"
                                                                    alt="PDF Icon"
                                                                    style={{ height: "40px", width: "40px" }}
                                                                />
                                                            </a>
                                                        </figure>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="row text-center">
                                    {" "}
                                    <p>No data is available...</p>{" "}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </section>
        </>
    );
};

export default PublicationList;
