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

  return (
    <>
      <section>
        <div className="container pb-100">
          <div className="section-content">
            <div className="row">
              <div className="col-md-12">
                <div className="sec-title text-center">
                  <span className="sub-title">recent judgments</span>
                  <h2 style={{ color: "#0EA476" }}>Supreme Court Judgments</h2>
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
                                      style={{ color: "#0EA476" }}
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
                                      style={{ color: "#0EA476" }}
                                    ></span>{" "}
                                    &nbsp; {formatDate(judgment.dateJudgement)}
                                  </li>
                                </ul>
                                <div className="btn-box text-right">
                                  <Link
                                    href={`/judgment-details/${judgment.case_id}`}
                                    className="theme-btn btn-style-one light-bg p-2"
                                    // onClick={() => { setOpen(true), setDetail(judgment.judgement) }}
                                  >
                                    <span className="btn-title">
                                      View judgment
                                      <i className="icon fa fa-arrow-right"></i>
                                    </span>
                                  </Link>
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

                <Modal show={isOpen}>
                  {/* <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable"> */}
                  <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">Judgement Details</h5>
                        <button type="button" class="btn-close" onClick={() =>
                          setOpen(false)
                        }></button>
                      </div>

                      <div className="modal-body">
                        <p dangerouslySetInnerHTML={{
                          __html: detail,
                        }}></p>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-danger" onClick={() =>
                          setOpen(false)
                        }>Close</button>
                      </div>
                    </div>
                  </div>
                </Modal>

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
