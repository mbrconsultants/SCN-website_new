import React from "react";
import Link from "next/link";
import BlogRecentSection from "./RecentNews";

const PastChiefJusticesList = () => {
  return (
    <section>
      <div className="container pb-100">
        <div className="section-content">
          <div className="row">
            <div className="col-md-8">
              <div className="sec-title text-center">
                <span className="sub-title">
                  Meet supreme court past Justices
                </span>
                <h2 style={{ color: "#2BB584" }}>Past  Justices</h2>
              </div>
              <div className="table-responsive">
                <table className="table table-striped table-bordered tbl-shopping-cart">
                  <thead>
                    <tr>
                      <th>S/N</th>
                      <th>Fullname</th>
                      <th>Position</th>
                      <th>Period</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="cart_item">
                      <td>1</td>
                      <td className="product-name">
                        <Link href="#">Stafford Foster Sutton (Past JF)</Link>
                      </td>
                      <td className="product-price">
                        <span className="amount">
                          {" "}
                          Former Chief Justice of Nigeria
                        </span>
                      </td>

                      <td className="product-price">
                        <span className="amount">1958 - 1960</span>
                      </td>
                    </tr>
                
                 
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-md-4">
              <BlogRecentSection />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PastChiefJusticesList;
