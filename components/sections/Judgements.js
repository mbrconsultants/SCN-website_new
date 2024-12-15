import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import endpoint from "../../utils/endpoint";
import JudgmentPaginationLinks from "./JudgmentPaginationLinks";

const Judgements = () => {
    const [data, setData] = useState([]);
    const [meta, setMeta] = useState();
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState(""); // Search term state
    const [isOpen, setOpen] = useState(false);
    const [detail, setDetail] = useState('');

    const [modalData, setModalData] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const getData = async (url) => {
        if (url) {
            url = url;
        } else {
            url = "/judgment/passed";
        }

        try {
            const res = await endpoint.get(url);
            setLoading(true);
            const judgmentData = res.data.data;
            console.log("judgments", res.data);
            const { data, ...rest } = judgmentData;
            setData(data);
            setLoading(false);
            setMeta(rest);
        } catch (err) {
            console.log(err);
            setLoading(false);
        }
    };

    const onPageClick = (url) => {
        console.log("url 1", url);
        getData(url);
    };

    useEffect(() => {
        getData();
    }, []);

    const truncateTitle = (title, wordLimit) => {
        if (!title) return ""; // Check if title is undefined or null
        const words = title.split(" ");
        if (words.length > wordLimit) {
            return words.slice(0, wordLimit).join(" ") + "...";
        }
        return title;
    };

    function formatDate(dateString) {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.toLocaleString("default", { month: "long" });
        const year = date.getFullYear();

        const getOrdinalSuffix = (number) => {
            if (number === 1 || number === 21 || number === 31) return "st";
            if (number === 2 || number === 22) return "nd";
            if (number === 3 || number === 23) return "rd";
            return "th";
        };

        const ordinalSuffix = getOrdinalSuffix(day);

        return `${day}${ordinalSuffix} ${month} ${year}`;
    }

    // Filter the data based on searchTerm
    const filteredData = data.filter((judgment) =>
        judgment.caseTitle.toLowerCase().includes(searchTerm.toLowerCase())
    );


    const handleShowModal = (data) => {
        console.log("checking", data);

        setModalData(data);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setModalData(null); // Reset modal data when closing
    };


    return (
        <>
            <section>
                <div className="container pb-100">
                    <div className="section-content">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="sec-title text-center">
                                    <span className="sub-title">recent judgments</span>
                                    <h2 style={{ color: "#008751" }}>Supreme Court Judgments</h2>
                                </div>

                                <div className="row mb-4">
                                    <div className="col-md-5 mx-auto">
                                        <div className="sidebar__single sidebar__search">
                                            <form
                                                action="#"
                                                className="sidebar__search-form"
                                                onSubmit={(e) => e.preventDefault()} // Prevent form submission
                                            >
                                                <input
                                                    type="search"
                                                    placeholder="Search by Case Title"
                                                    value={searchTerm}
                                                    onChange={(e) => setSearchTerm(e.target.value)} // Update search term
                                                />
                                                <button type="submit">
                                                    <i className="lnr-icon-search"></i>
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    {loading && <p className="text-center">Fetching data...</p>}
                                    {!loading && (
                                        <>
                                            {filteredData && filteredData.length > 0 ? (
                                                filteredData.map((judgment) => (
                                                    <div
                                                        key={judgment.id} // Add a key prop
                                                        className="pricing-block-two col-xl-4 col-lg-4 col-md-4 col-sm-12 wow fadeInUp"
                                                        data-wow-delay="300ms"
                                                    >
                                                        <div className="inner-box shadow-lg">
                                                            <div className="title-box pb-3">
                                                                <figure className="image overlay-anim">
                                                                    <img
                                                                        src="images/icons/judgment-icon.png"
                                                                        alt={"Judgement"}
                                                                    />
                                                                </figure>
                                                                <h4 className="title">{judgment.suitNo}</h4>
                                                                <div className="text">
                                                                    {truncateTitle(judgment.caseTitle, 10)}
                                                                </div>
                                                            </div>
                                                            <div className="content-box pt-2">
                                                                <ul className="feature-llist p-1">
                                                                    <li>
                                                                        {" "}
                                                                        <span
                                                                            className="fa fa-balance-scale"
                                                                            style={{ color: "#008751" }}
                                                                        ></span>{" "}
                                                                        &nbsp;{" "}
                                                                        <strong>
                                                                            {" "}
                                                                            Hon. justice {judgment.mainjudge}
                                                                        </strong>
                                                                    </li>
                                                                    <li>
                                                                        {" "}
                                                                        <span
                                                                            className="fa fa-calendar"
                                                                            style={{ color: "#008751" }}
                                                                        ></span>{" "}
                                                                        &nbsp; {formatDate(judgment.dateJudgement)}
                                                                    </li>
                                                                </ul>
                                                                <div className="btn-box text-right">
                                                                    <button
                                                                        type="button"
                                                                        className="theme-btn btn-style-one light-bg p-2"
                                                                        onClick={() => handleShowModal(judgment)}
                                                                    >
                                                                        <span className="btn-title">
                                                                            View judgment
                                                                            <i className="icon fa fa-arrow-right"></i>
                                                                        </span>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            ) : (
                                                <p className="text-center">No judgments found</p>
                                            )}
                                        </>
                                    )}
                                </div>

                                {isModalOpen && (
                                    <div
                                        className="modal fade show"
                                        style={{ display: 'block' }} // Show the modal
                                        tabIndex="-1"
                                        aria-labelledby="staticBackdropLabel"
                                        aria-hidden="true"
                                    >
                                        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
                                            <div className="modal-content" style={{ border: "2px solid #008751" }}>
                                                <div className="modal-header" style={{ border: "1px solid #008751" }}>
                                                    <h5 className="modal-title" id="staticBackdropLabel" style={{ color: "#008751" }}>{modalData?.caseTitle}</h5>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleCloseModal}></button>
                                                </div>
                                                <div className="modal-body" style={{ textAlign: "justify" }}>
                                                    <div className="card" style={{ width: "", border: "2px solid #fff" }}>
                                                        <ul className="list-group list-group-flush">
                                                            <li className="list-group-item" style={{ borderBottom: "2px solid #008751" }}>Suit Number : {modalData?.suitNo}</li>
                                                            <li className="list-group-item" style={{ borderBottom: "2px solid #008751" }}>Date of Judgement : {modalData?.dateJudgement}</li>
                                                            <li className="list-group-item" style={{ borderBottom: "2px solid #008751" }}>Main Judge : {modalData?.mainjudge}</li>
                                                            <li className="list-group-item" style={{ borderBottom: "2px solid #008751" }}>Judges :  {modalData?.judgeName} </li>
                                                            {/* <li className="list-group-item" style={{ borderBottom: "2px solid #008751" }}>Judges :
                                                                <ul>
                                                                    {modalData?.judgeName?.split(',').map((judge, index) => (
                                                                        <li key={index} >{judge.trim()}</li>
                                                                    ))}
                                                                </ul>
                                                            </li> */}
                                                            <li className="list-group-item" style={{ borderBottom: "2px solid #008751" }}>Petition Counsel : {modalData?.petCounsel}</li>
                                                            <li className="list-group-item" style={{ borderBottom: "2px solid #008751" }}>Petitioner : {modalData?.petitioner}</li>
                                                            <li className="list-group-item" style={{ borderBottom: "2px solid #008751" }}>Respondent Counsel : {modalData?.respCounsel}</li>
                                                            <li className="list-group-item" style={{ borderBottom: "2px solid #008751" }}>Respondent : {modalData?.respondent}</li>
                                                        </ul>
                                                    </div>
                                                    <br />
                                                    <div className="modal-header" style={{ border: "1px solid #008751" }}>
                                                        <h5 className="modal-title" id="staticBackdropLabel" style={{ color: "#008751" }}>Judgement Details : </h5>
                                                    </div>
                                                    <br />
                                                    <p dangerouslySetInnerHTML={{
                                                        __html: modalData?.judgement,
                                                    }}></p>
                                                </div>
                                                <div className="modal-footer" style={{ border: "1px solid #008751" }}>
                                                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={handleCloseModal}>Close</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                )}

                                {meta && meta.links && (
                                    <JudgmentPaginationLinks meta={meta} onPageClick={onPageClick} />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Judgements;
