import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import endpoint from "../../utils/endpoint";
import ChamberSittingPaginationLinks from "./ChamberSittingPaginationLinks";

const ChamberSitting = () => {
  const [data, setData] = useState([]);
  const [meta, setMeta] = useState();
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [modalData, setModalData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getData = async (url) => {
    url = url || "/chamber/sittings";
    try {
      const res = await endpoint.get(url);
      setLoading(true);
      const chamberData = res.data.data;
      setData(chamberData.data);
      setMeta(res.data.meta);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  const onPageClick = (url) => getData(url);

  useEffect(() => {
    getData();
  }, []);

  // Format date as `10th July, 2024`
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();
    const ordinalSuffix = (n) => (n === 1 || n === 21 || n === 31 ? "st" : n === 2 || n === 22 ? "nd" : n === 3 || n === 23 ? "rd" : "th");
    return `${day}${ordinalSuffix(day)} ${month} ${year}`;
  };

  // Filter data based on `partyName`
  const filteredData = data.filter((chamber) =>
    chamber.partyName && chamber.partyName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleShowModal = (data) => {
    setModalData(data);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalData(null);
  };

  return (
    <>
      <section>
        <div className="container pb-100">
          <div className="section-content">
            <div className="row">
              <div className="col-md-12">
                <div className="sec-title text-center">
                  <span className="sub-title">explore supreme court chamber sitting</span>
                  <h2 style={{ color: "#0EA476" }}>Chamber Sittings</h2>
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
                                    placeholder="Search by Chamber Title"
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
                        filteredData.map((chamber) => (
                          <div key={chamber.id} className="pricing-block-two col-xl-4 col-lg-4 col-md-4 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                            <div className="inner-box shadow-lg">
                              <div className="title-box pb-3">
                                <figure className="image overlay-anim">
                                  {/* <img src="images/icons/chamber-icon.png" alt="Judgement" /> */}
                                </figure>
                                <h4 className="title">{chamber.scNo}</h4>
                                <div className="text">{chamber.partyName}</div>
                              </div>
                              <div className="content-box pt-2">
                                <ul className="feature-llist p-1">
                                  <li>
                                    <span className="fa fa-balance-scale" style={{ color: "#0EA476" }}></span>
                                    &nbsp; <strong>{chamber.filingParty}</strong>
                                  </li>
                                  <li>
                                    <span className="fa fa-calendar" style={{ color: "#0EA476" }}></span>
                                    &nbsp; {formatDate(chamber.decisionDate)}
                                  </li>
                                </ul>
                                <div className="btn-box text-right">
                                  <button
                                    type="button"
                                    className="theme-btn btn-style-one light-bg p-2"
                                    onClick={() => handleShowModal(chamber)}
                                  >
                                    <span className="btn-title">
                                      View chamber <i className="icon fa fa-arrow-right"></i>
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))
                      ) : (
                        <p className="text-center">No chambers found</p>
                      )}
                    </>
                  )}
                </div>

                {isModalOpen && (
                  <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1">
                    <div className="modal-dialog modal-dialog-centered modal-lg">
                      <div className="modal-content" style={{ border: "2px solid #0EA476" }}>
                        <div className="modal-header" style={{ border: "1px solid #0EA476" }}>
                          <h5 className="modal-title" style={{ color: "#0EA476" }}>{modalData?.partyName}</h5>
                          <button type="button" className="btn-close" onClick={handleCloseModal}></button>
                        </div>
                        <div className="modal-body" style={{ textAlign: "justify" }}>
                          <div className="card">
                            <ul className="list-group list-group-flush">
                              <li className="list-group-item">Suit Number: {modalData?.scNo}</li>
                              <li className="list-group-item">Date of Judgement: {modalData?.decisionDate}</li>
                              <li className="list-group-item">Filing Party: {modalData?.filingParty}</li>
                              <li className="list-group-item">Prayers: {modalData?.prayers}</li>
                              <li className="list-group-item">Sitting Result: {modalData?.sittingResult}</li>
                            </ul>
                          </div>
                        </div>
                        <div className="modal-footer" style={{ border: "1px solid #0EA476" }}>
                          <button type="button" className="btn btn-danger" onClick={handleCloseModal}>Close</button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {meta && meta.links && (
                  <ChamberSittingPaginationLinks meta={meta} onPageClick={onPageClick} />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChamberSitting;
