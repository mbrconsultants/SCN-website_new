import React, { useState, useEffect } from "react";
import endpoint from "../../../utils/endpoint";
import BlogRecentSection from "../RecentNews";
import Link from "next/link";

const BulletinList = () => {
  const [data, setData] = useState([]); // Initialize as an empty array

  const [filteredBulletin, setFilteredBulletin] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const getData = async () => {
    try {
      const res = await endpoint.get("/bulletin");
      console.log("bulletin details", res.data.data.bulletins.data);
      
      const data = res.data.data.bulletins.data;
      setData(data);
      setFilteredBulletin(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData(); // Fetch data on component mount
  }, []);

  useEffect(() => {
    // Filter the rules based on the search term
    const results = data.filter((bulletin) =>
      bulletin.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBulletin(results);
  }, [searchTerm, data]); // Runs when either searchTerm or rules change


  const handleSearch = (e) => {
    setSearchTerm(e.target.value); // Update search term on typing
  };

  return (
    <>
      <section className="pricing-section-two">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2 style={{ color: "#0EA476" }}>
              Bulletin <span className=""></span>
            </h2>
          </div>

          <div className="row mb-4">
            <div className="col-md-5 mx-auto">
              <div className="sidebar__single sidebar__search">
                <form
                  action="#"
                  className="sidebar__search-form">
                  <input
                    type="search"
                    placeholder="Search here"
                    value={searchTerm}
                    onChange={handleSearch}
                  />
                  <button type="submit">
                    <i className="lnr-icon-search"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
          {loading && (
            <div className="row text-center">
              {" "}
              <p>Fetching data...</p>{" "}
            </div>
          )}
          {!loading && (
            <div className="row">
              {filteredBulletin && filteredBulletin.length > 0 ? (
                filteredBulletin.map((bulletin, index) => (
                  <div
                    className="pricing-block-two col-xl-4 col-lg-6 col-md-6 col-sm-12 wow fadeInUp"
                    key={index}>
                    <div className="inner-box">
                      <div className="title-box">
                        <h5 className="title">{bulletin.title}</h5>
                        <div className="text" style={{ textAlign: "justify", marginTop: "" }}>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: bulletin.brief_description.length > 100
                                ? `${bulletin.brief_description.substring(0, 100)}...`
                                : bulletin.brief_description,
                            }}
                          />
                        </div>
                        <div>
                          <figure className="image">
                            <Link
                              href={bulletin.file_path}
                              target="_blank">
                              <img
                                src="images/resource/icon.jpg"
                                alt="Image"
                                style={{ height: "50px", width: "50px" }}
                              />
                            </Link>
                          </figure>
                        </div>
                      </div>
                      <div className="content-box">
                        <div className="btn-box">
                          <Link
                            href={bulletin.file_path}
                            target="_blank"
                            className="theme-btn btn-style-two">
                            <span className="btn-title">
                              {" "}
                              Read Now{" "}
                              <i className="icon fa fa-arrow-right"></i>
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="row text-center">
                  {" "}
                  <p>No data is available...</p>{" "}
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default BulletinList;
