import React, { useState, useEffect } from "react";
import Link from 'next/link';
import endpoint from "../../../utils/endpoint";

const NewsList = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const res = await endpoint.get("/news-and-events");
      console.log("news and events", res.data.data);
      setData(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // Utility function to remove HTML tags
  const stripHtmlTags = (html) => {
    return html.replace(/<[^>]*>?/gm, ''); // Use regex to remove HTML tags
  };

  // Utility function to format date to "26 Sept, 2024"
  const formatDate = (dateString) => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    const date = new Date(dateString);
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${day} ${month}, ${year}`;
  };

  return (
    <>
      <section className="news-section-three bg-transparent pb-90">
        <div className="auto-container">
          <div className="row">
            {data && data.map((news, index) => (
              <div key={index} className="news-block-three col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <Link href={`/news-details/${news.id}`}>
                        <img
                          style={{ height: "200px", width: "400px" }}
                          src={
                            news.picture
                              ? process.env.NEXT_PUBLIC_UPLOAD_URL + "news/" + news.picture
                              : "/newsgif.gif"  // Default image if news.picture is not available
                          }
                          alt="Image"
                        />
                      </Link>
                    </figure>
                    <div className="post-date">
                      {/* Format the date */}
                      <h6 className="date">{formatDate(news.created_at)}</h6>
                    </div>
                  </div>
                  <div className="content-box">
                    <ul className="post-meta">
                      <li><i className="icon fa fa-user"></i> By {news.placeby}</li>
                    </ul>
                    <div className="title-box">
                      <h4 className="title">
                        <Link href={`/news-details/${news.id}`}>
                          {news.title.length > 40 ? news.title.substring(0, 40) + '...' : news.title}
                        </Link>
                      </h4>
                    </div>
                    <div className="text">
                      {stripHtmlTags(news.content).length > 60
                        ? stripHtmlTags(news.content).substring(0, 80) + '...'
                        : stripHtmlTags(news.content)}
                    </div>
                    <div className="btn-box">
                      <Link href={`/news-details/${news.id}`} className="theme-btn btn-style-one light-bg">
                        <span className="btn-title">Read More <i className="icon fa fa-arrow-right"></i></span>
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

export default NewsList;
