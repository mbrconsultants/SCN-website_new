import React, { useState, useEffect } from "react";
import Link from "next/link";
// import endpoint from "../../utils/endpoint";
import BlogRecentSection from "./RecentNews";
import endpoint from "../../utils/endpoint";

const PastChiefJusticesList = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const res = await endpoint.get("/profile-past-chief-justices");
      setData(res.data.data.data);
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
                  Meet supreme court past chief Justices
                </span>
                <h2 style={{ color: "#009009" }}>Past Chief Justices</h2>
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
                    {data &&
                      data.map((justice, index) => (
                        <tr
                          className="cart_item"
                          key={justice.id}>
                          <td>{index + 1}</td>
                          <td className="product-name">
                            <Link href={`/justices/${justice.id}`}>
                              {justice.fullname}
                            </Link>
                          </td>
                          <td className="product-name">
                            <Link href={`/justices/${justice.id}`}>
                              {justice.designation}
                            </Link>
                          </td>
                          <td className="product-price">
                            <Link href={`/justices/${justice.id}`}>
                              <span className="amount">
                                {justice.periodfrom} - {justice.periodto}
                              </span>
                            </Link>
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

export default PastChiefJusticesList;
