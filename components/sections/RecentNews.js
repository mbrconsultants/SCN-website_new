
import Link from "next/link";
import React from "react";

const BlogRecentSection  = () => {
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
    const allNews = [
      {
        id: 1,
        display_date: "2024-02-12",
        title: "Kekere-ekun makes history, Appointed CJN",
      },
      {
        id: 1,
        display_date: "2024-02-12",
        title: "Hon. Justice Olukayode Ariwola Retires as CJN",
      },
      {
        id: 1,
        display_date: "2024-02-12",
        title: "Supreme court Launches Enrollment Portal for new wigs",
      },
    ];

 
  return (
    <div
      className="card shadow-sm"
      style={{ padding: "12px" }}>
      <div className="rv-blog-details-right rv-blog-details-recents">
        <h3
          className="rv-blog-details-right__title"
          style={{ color: "#2BB584" }}>
          Recent Posts
        </h3>
        {allNews &&
          allNews.slice(0, 3).map((item) => (
            <div
              className="rv-recent-blog mx-auto"
              key={item.id}>
              <img
                style={{ width: "200px" }}
                className="rv-recent-blog__img"
                src={item.img ? item.img : "/newsgif.gif"}
                alt="blog image"
              />
              <div className="rv-recent-blog__txt">
                <span className="rv-recent-blog__date">
                  <i className="fa-light fa-calendar-alt"></i>{" "}
                  {formatDate(item.display_date)}
                </span>
                <h6 className="rv-recent-blog__title">
                  <Link href={`/news-events/${item.id}`}>{item.title}</Link>
                </h6>
              </div>
            </div>
          ))}
      </div>
      <div className="text-center">
        <Link
          href="page-contact"
          className="theme-btn btn-style-one hover-light rounded"
          style={{ padding: "5px" }}>
          <span className="btn-title">
            {" "}
            -- View all -- 
          </span>
        </Link>
      </div>
    </div>
  );
};

export default BlogRecentSection;
