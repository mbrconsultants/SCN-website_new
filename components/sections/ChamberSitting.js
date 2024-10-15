import Link from "next/link";

const ChamberSitting = () => {
  return (
    <>
      <section>
        <div className="container pb-100">
          <div className="section-content">
            <div className="row">
              <div className="col-md-12">
                <div className="sec-title text-center">
                  <span className="sub-title">
                    explore supreme court chamber sitting
                  </span>
                  <h2 style={{ color: "#2BB584" }}>Chamber Sittings</h2>
                </div>
                <div className="table-responsive">
                  <table className="table table-striped table-bordered tbl-shopping-cart">
                    <thead>
                      <tr>
                        <th>S/N</th>
                        <th>Appeal No.</th>
                        <th>Parties</th>
                        <th>Date Motion Filed (dd-mm-yyyy)</th>
                        <th>Filed by Which Party</th>
                        <th>Prayers</th>
                        <th>Date of Sitting</th>
                        <th>Result of Application|Ruling</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="cart_item">
                        <td className="product-remove">
                          <Link
                            title="Remove this item"
                            className="remove"
                            href="#"
                            style={{ background: "#2BB584" }}>
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
                          Alhaji Abdul Rauf MNI & Ors. (Appellants/Applicants)
                          Vs Federal Republic of Nigeria & Ors. (Respondents)
                          01-01-1970
                        </td>
                        <td
                          className="product-name"
                          style={{ width: "160px" }}>
                          {" "}
                          01-12-2021{" "}
                        </td>
                        <td className="product-quantity">Appellant</td>
                        <td className="product-subtotal">
                          Application for an order of the Supreme Court...
                        </td>
                        <td>21-06-2023</td>
                        <td>Application for substitution Struck-out</td>
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
export default ChamberSitting;
