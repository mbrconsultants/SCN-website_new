import React, { useState, useEffect } from "react";
import endpoint from "../../../utils/endpoint";
import Link from "next/link";

const BulletinList = () => {
    const [data, setData] = useState([]);
    const [filteredBulletin, setFilteredBulletin] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const getData = async (page = 1) => {
        try {
            setLoading(true);
            const res = await endpoint.get(`/bulletin?page=${page}`);
            const bulletins = res.data.data.bulletins.data;

            setData(bulletins);
            setFilteredBulletin(bulletins);
            setTotalPages(res.data.data.bulletins.last_page);
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    useEffect(() => {
        getData(currentPage); // Fetch data for the current page on mount or page change
    }, [currentPage]);

    useEffect(() => {
        // Filter based on the search term
        const results = data.filter((bulletin) =>
            bulletin.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredBulletin(results);
    }, [searchTerm, data]);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const handlePageChange = (newPage) => {
        if (newPage > 0 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    return (
        <section className="pricing-section-two">
            <div className="auto-container">
                <div className="sec-title text-center">
                    <h2 style={{ color: "#008751" }}>
                        Bulletin <span className=""></span>
                    </h2>
                </div>

                <div className="row mb-4">
                    <div className="col-md-5 mx-auto">
                        <div className="sidebar__single sidebar__search">
                            <form className="sidebar__search-form">
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

                {loading ? (
                    <div className="row text-center">
                        <p>Fetching data...</p>
                    </div>
                ) : (
                    <div className="row">
                        {filteredBulletin.length > 0 ? (
                            filteredBulletin.map((bulletin, index) => (
                                <div className="pricing-block-three col-xl-4 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" key={index}>
                                    <div className="inner-box">
                                        <div className="title-box">
                                            <h5 className="title">{bulletin.title}</h5>
                                            <div className="text" style={{ textAlign: "justify", marginTop: "" }}>
                                                <div
                                                    dangerouslySetInnerHTML={{
                                                        __html: bulletin.brief_description.length > 100
                                                            ? `${bulletin.brief_description.substring(0, 100)}...`
                                                            : bulletin.brief_description,
                                                    }}
                                                />
                                            </div>
                                            <div>
                                                <figure className="image">
                                                    <Link href={bulletin.file_path} target="_blank">
                                                        <img src="images/resource/icon.jpg" alt="Image" style={{ height: "50px", width: "50px" }} />
                                                    </Link>
                                                </figure>
                                            </div>
                                        </div>
                                        <div className="content-box">
                                            <div className="btn-box">
                                                {/* <Link href={bulletin.file_path} target="_blank" className="theme-btn btn-style-two">
                          <span className="btn-title">
                            Read Now <i className="icon fa fa-arrow-right"></i>
                          </span>
                        </Link> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="row text-center">
                                <p>No data is available...</p>
                            </div>
                        )}
                    </div>
                )}

                {/* Pagination Controls */}
                <div className="pagination-container text-center mt-4">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="pagination-button"
                    >
                        &laquo; Previous
                    </button>
                    <span> Page {currentPage} of {totalPages}</span>
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="pagination-button"
                    >
                        Next &raquo;
                    </button>
                </div>
            </div>
        </section>
    );
};

export default BulletinList;
