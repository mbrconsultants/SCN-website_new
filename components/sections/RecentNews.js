import React, { useState, useEffect } from "react";
import Link from "next/link";
import endpoint from "../../utils/endpoint";

const BlogRecentSection = () => {
  const [data, setData] = useState([]);
  const [filePath, setFilePath] = useState();

  const getData = async () => {
    try {
      const res = await endpoint.get("/news-and-events");
      setData(res.data.data);
      console.log("================data====================");
      console.log(res.data.data);
      console.log("====================================");
      setFilePath(res.data.file_path);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  function formatDate(dateString) {
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
  }

  const truncateTitle = (title, wordLimit) => {
    const words = title.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return title;
  };

  return (
    <div className="col-xl-12">
      <div className="sidebar">
        <div className="sidebar__single sidebar__search">
          <form
            action="#"
            className="sidebar__search-form">
            <input
              type="search"
              placeholder="Search here"
            />
            <button type="submit">
              <i className="lnr-icon-search"></i>
            </button>
          </form>
        </div>
        <div className="sidebar__single sidebar__post">
          <h3 className="sidebar__title">Latest Posts</h3>
          <ul className="sidebar__post-list list-unstyled">
            {data &&
              data.slice(0, 3).map((news, index) => (
                <li>
                  <div className="sidebar__post-image">
                    {" "}
                    <img
                      src={news.img ? news.img : "/newsgif.gif"}
                      alt=""
                      style={{ height: "50px" }}
                    />{" "}
                  </div>
                  <div className="sidebar__post-content">
                    <h3>
                      {" "}
                      <span className="sidebar__post-content-meta">
                        <i className="fas fa-user-circle"></i>
                        {news.placeby}
                      </span>{" "}
                      <Link href="news-details">{truncateTitle(news.title, 5)}</Link>
                    </h3>
                    <br />
                    <span className="fa fa-clock"></span>{" "}
                    <small>{formatDate(news.display_date)}</small>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogRecentSection;
