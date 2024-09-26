import React, { useState, useEffect } from "react";
import Link from "next/link";
import endpoint from "../../utils/endpoint";
const News6 = () => {
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

  //
  const formattedDate = (dateString) => {
    const dateParts = dateString.split("-");
    if (dateParts.length !== 3) return dateString;

    const [year, month, day] = dateParts;
    return `${day}/${month}/${year}`;
  };

  //truncate words
  const truncateText = (text, wordLimit) => {
    const words = text.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..."
      : text;
  };
  return (
    <>
      <section className="news-section-six">
        <div className="auto-container">
          <div className="sec-title text-center">
            <span
              className="sub-title"
              style={{ color: "#2BB584" }}>
              Latest News
            </span>{" "}
            <span
              style={{ color: "#2BB584" }}
              className="fa fa-newspaper"></span>
            <h2 style={{ color: "#2BB584" }}>Recent News and Events </h2>
          </div>

          <div className="row">
            {data &&
              data.map((news, index) => (
                <div
                  className="news-block-six col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
                  key={index}>
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image">
                        <Link href={`/news-details/${news.id}`}>
                          <img
                            src={
                              news.image
                                ? filePath + news.image
                                : "/newsgif.gif"
                            }
                            alt="Image"
                          />
                        </Link>
                      </figure>
                      <div className="post-date">
                        <h6 className="date">
                          {formattedDate(news.created_at)}
                        </h6>
                      </div>
                    </div>
                    <div className="content-box">
                      <ul className="post-meta">
                        <li>
                          <i className="icon fa fa-user"></i> {news.placeby}
                        </li>
                        {/* <li><i className="icon fa fa-comments"></i> Comments (05)</li> */}
                      </ul>
                      <h4 className="title">
                        <Link
                          href={`/news-details/${news.id}`}
                          className="text-uppercase">
                          {truncateText(news.title, 3)}
                        </Link>
                      </h4>
                      {/* <div className="text">
                        {truncateText(news.content, 10)}
                      </div> */}
                      <div className="btn-box">
                        <Link
                          href={`/news-details/${news.id}`}
                          className="read-more">
                          Read More <i className="icon fa fa-arrow-right"></i>
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
export default News6;
