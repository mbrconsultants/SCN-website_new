import Link from "next/link";
import React, { useState, useEffect } from "react";
import endpoint from "../../utils/endpoint";
const HomePageNews2 = () => {
  const [data, setData] = useState([]);
  const [filePath, setFilePath] = useState();

  const getData = async () => {
    try {
      const res = await endpoint.get("/news-and-events");
      console.log("====================================");
      console.log(res.data.data);
      console.log("====================================");
      setData(res.data.data);
      setFilePath(res.data.file_path);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();

    const getOrdinalSuffix = (number) => {
      if (number === 1 || number === 21 || number === 31) {
        return "st";
      } else if (number === 2 || number === 22) {
        return "nd";
      } else if (number === 3 || number === 23) {
        return "rd";
      } else {
        return "th";
      }
    };

    const ordinalSuffix = getOrdinalSuffix(day);

    return `${day}${ordinalSuffix} ${month} ${year}`;
  };

  const truncateTitle = (title, wordLimit) => {
    const words = title.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return title;
  };
  return (
    <>
      <section
        className="news-section-two"
        style={{ backgroundColor: "white" }}>
        <div className="auto-container">
          <div className="sec-title light text-center">
            <span className="sub-title">Latest News</span>
            <h2 className="text-dark">
              Latest News from The <br /> Supreme Court of Nigeria
            </h2>
          </div>

          <div className="row">
            {data.slice(0, 3).map((news, index) => (
              <div
                className="news-block-two col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
                key={index}>
                <div
                  className="inner-box"
                  style={{ color: "black" }}>
                  <div className="image-box">
                    <figure className="image">
                      <Link href={`news-details/${news.id}`}>
                        <img
                          src={news.img ? news.img : "/newsgif.gif"}
                          alt="Image"
                        />
                      </Link>
                    </figure>
                    <div
                      className="post-date"
                      style={{ color: "white" }}>
                      <h4 className="date">
                        <i className="icon fa fa-calendar"></i>{" "}
                        {formatDate(news.created_at)}
                      </h4>
                    </div>
                  </div>
                  <div className="content-box">
                    <ul className="post-meta">
                      <li style={{ color: "black" }}>
                        <i className="icon fa fa-user"></i> {news.placeby}
                      </li>
                    </ul>
                    <h4 className="title">
                      <Link
                        href={`news-details/${news.id}`}
                        style={{ color: "black" }}>
                        {truncateTitle(news.title, 4)}
                      </Link>
                    </h4>
                    <div
                      className="text"
                      style={{ color: "black" }}>
                      {truncateTitle(news.title, 4)}
                    </div>
                    <div className="btn-box">
                      <Link
                        href={`news-details/${news.id}`}
                        className="theme-btn btn-style-two light">
                        <span
                          className="btn-title"
                          style={{ color: "black" }}>
                          Read More <i className="icon fa fa-arrow-right"></i>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default HomePageNews2;
