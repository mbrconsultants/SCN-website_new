import Link from "next/link";
import React, { useState, useEffect } from "react";
import endpoint from "../../utils/endpoint";

const WeeklyCauselist = () => {
  const [data, setData] = useState([]);

  const causeEndpoint = "https://diary.mbrcomputers.net/api/v1.0";

  const getData = async () => {
    try {
      const res = await causeEndpoint.get("/cause-list/weekly-list");
      // console.log("weekly cause list details", res.data.data);
      setData(res.data.data);
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

    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];
    const date = new Date(dateString);

    if (isNaN(date.getTime())) {
      return "N/A";
    }

    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${day} ${month}, ${year}`;
  };

  const handlePrint = () => {
    const printContent = document.getElementById('print-area').innerHTML;
    const originalContent = document.body.innerHTML;
    
    document.body.innerHTML = printContent;  // Replace the body content with the print content
    window.print();  // Open the print dialog
    document.body.innerHTML = originalContent;  // Restore the original content after printing
    window.location.reload();  // Reload to restore the state (optional but useful)
  };

  return (
    <>
      <section>
        <div className="container pb-100">
          <div className="section-content">
            <div className="row">
              <div className="col-md-12">
                <div className="sec-title text-center">
                  <span className="sub-title">
                    Stay updated with our current matters
                  </span>
                  <h2 style={{ color: "#0EA476" }}>Weekly Causelist</h2>
                </div>

                {/* Add an ID to this div to identify what will be printed */}
                <div id="print-area" className="table-responsive">
                  <table className="table table-striped table-bordered tbl-shopping-cart">
                    <thead>
                      <tr>
                        <th>S/N</th>
                        <th>Appeal No.</th>
                        <th>Sitting Date</th>
                        <th>Case Type</th>
                        <th>Parties</th>
                        <th>Particulars</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.length > 0 ? (
                        data.map((causelist, index) => (
                          <tr key={index} className="cart_item">
                            <td className="product-remove">
                              <Link
                                title="Remove this item"
                                className="remove"
                                href="#"
                                style={{ background: "#0EA476" }}
                              >
                                {index + 1}
                              </Link>
                            </td>
                            <td className="product-thumbnail">
                              {causelist.firstcase.suite_no}
                            </td>
                            <td
                              className="product-name"
                              style={{ width: "160px" }}
                            >
                              {formatDate(causelist.date_held)}
                            </td>
                            <td className="product-quantity">
                              {causelist.CaseType.case_type}
                            </td>
                            <td className="product-subtotal">
                              {causelist.firstcase.parties}
                            </td>
                            <td>{causelist.firstcase.case_desc}</td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td
                            colSpan="5"
                            style={{ padding: "10px", textAlign: "center" }}
                          >
                            No Weekly Causelist(s) available
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>

                <div className="text-center mt-3">
                  <button
                    type="button"
                    className="theme-btn btn-style-one"
                    onClick={handlePrint}
                  >
                    <span className="btn-title">
                      <span className="fa fa-download"></span>&nbsp;Print
                      Causelist
                    </span>
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add a media query for print to hide everything else */}
      <style jsx>{`
        @media print {
          body * {
            visibility: hidden;
          }
          #print-area, #print-area * {
            visibility: visible;
          }
          #print-area {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
          }
        }
      `}</style>
    </>
  );
};

export default WeeklyCauselist;
