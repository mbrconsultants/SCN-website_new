import React, { useState, useEffect } from "react";
import Link from "next/link";
import BlogRecentSection from "./RecentNews";
import endpoint from "../../utils/endpoint";

const PastChiefRegistrars = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const res = await endpoint.get("/past-chief-registrars");
      setData(res.data.data);
      console.log("====================================");
      console.log(res.data.data);
      console.log("====================================");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <section>
      <div className="container pb-100">
        <div className="section-content">
          <div className="row">
            <div className="col-md-8">
              <div className="sec-title text-center">
                <span className="sub-title">
                  Meet supreme court past chief registrars
                </span>
                <h2 style={{ color: "#009009" }}>Past Chief Registrars</h2>
              </div>
              <div className="table-responsive">
                <table className="table table-striped table-bordered tbl-shopping-cart">
                  <thead>
                    <tr>
                      <th>S/N</th>
                      <th>Fullname</th>
                      <th>Period</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data &&
                      data.map((just, index) => (
                        <tr className="cart_item">
                          <td>{index + 1}</td>

                          <td className="product-name">
                            <Link href="#">{just.fullname}</Link>
                          </td>
                          <td className="product-price">
                            <span className="amount">
                              {just.from_date} - {just.to_date}
                            </span>
                          </td>
                        </tr>
                      ))}
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

export default PastChiefRegistrars;
