import Link from "next/link";

const WeeklyCauselist = () => {
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
                  <h2 style={{ color: "#009009" }}>Weekly Causelist</h2>
                </div>
                <div className="table-responsive">
                  <table className="table table-striped table-bordered tbl-shopping-cart">
                    <thead>
                      <tr>
                        <th>S/N</th>
                        <th>Appeal No.</th>
                        <th>Sitting Date</th>
                        <th>Case Type</th>
                        <th>Parties</th>
                        <th>Particulars</th>
                        <th>Court Room</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="cart_item">
                        <td className="product-remove">
                          <Link
                            title="Remove this item"
                            className="remove"
                            href="#"
                            style={{ background: "#009009" }}>
                            {" "}
                            1
                          </Link>
                        </td>
                        <td className="product-thumbnail"> SC 530/2021 </td>
                        <td
                          className="product-name"
                          style={{ width: "160px" }}>
                          {" "}
                          01-12-2021{" "}
                        </td>
                        <td className="product-quantity">CIVIL MOTION</td>
                        <td className="product-subtotal">
                          Union Bank of Nigeria Plc & Anor (Appellants) Vs
                          Visana Nigeria Limited & Ors (Respondents)
                        </td>
                        <td>
                          1. Application filed on 29/7/2021 for an order of this
                          Honourable Court extending the time within which the
                          Appellants/Applicants may seek leave to appeal..etc 2.
                          Application filed on 24/11/2021 for an order of this
                          Honourable Court granting leave to the
                          Appellants/Applicant to serve the
                          Appellants/Applicants?..etc
                        </td>
                        <td className="product-quantity">Chamber Sitting</td>
                      </tr>

                      <tr className="cart_item">
                        <td>&nbsp;</td>
                        <td>
                          <button
                            type="button"
                            className="theme-btn btn-style-one">
                            <span className="btn-title">
                              {" "}
                              <span className="fa fa-download"> </span>{" "}
                              &nbsp;Print Causelist
                            </span>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default WeeklyCauselist;
