import Link from "next/link";

const Judgements = () => {
  return (
    <>
      <section>
        <div className="container pb-100">
          <div className="section-content">
            <div className="row">
              <div className="col-md-12">
                <div className="sec-title text-center">
                  <span className="sub-title">recent judgments</span>
                  <h2 style={{ color: "#0EA476" }}>Supreme Court Judgements</h2>
                </div>
                <div className="table-responsive">
                  <table className="table table-striped table-bordered tbl-shopping-cart">
                    <thead>
                      <tr>
                        <th>S/N</th>
                        <th>Appeal No.</th>
                        <th>Parties</th>
                        <th>Appearance</th>
                        <th>Justice</th>
                        {/* <th>Decision</th> */}
                        {/* <th>Sitting Panel</th> */}
                        <th>Date</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="cart_item">
                        <td className="product-remove">
                          <Link
                            title="Remove this item"
                            className="remove"
                            href="#"
                            style={{ background: "#0EA476" }}>
                            {" "}
                            1
                          </Link>
                        </td>
                        <td
                          className="product-thumbnail"
                          style={{ width: "180px" }}>
                          {" "}
                          SC/1043/2018{" "}
                        </td>
                        <td>
                          Chief Nelson Amadi & 5 Ors (Appelants) Vs Chief
                          Richard Orlu & 3 Ors (Respondents)
                        </td>
                        <td>
                          D. O. Ezaga SAN, with him, P. I. O. David-Ezaga Esq.
                          for the petitioner & C. C. Achunnulo, Esq. for the
                          respondent
                        </td>
                        <td>
                          This is an appeal against the judgment of the Court of
                          Appeal, Port Harcourt Division, which set aside the
                          judgment of the High Court of River State which had
                          earlier dismissed suit No...
                        </td>
                        {/* <td></td> */}
                        {/* <td>John Inyang Okoro, JSC Uwani Musa Abba Aji, JSC Ibrahim Mohammed Musa Saulawa, JSC Adamu Jauro, JSC Emmanuel Akomaye Agim, JSC</td> */}
                        <td
                          className="product-name"
                          style={{ width: "160px" }}>
                          {" "}
                          07-07-2023{" "}
                        </td>
                        <td>
                          <button
                            type="submit"
                            className="theme-btn btn-style-one hover-light"
                            style={{ padding: "7px", borderRadius: "5px" }}
                            defaultValue="View">
                            {" "}
                            <span className="fa fa-file"></span>{" "}
                            <span className="btn-title">View</span>
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
export default Judgements;
