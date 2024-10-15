import React, { useState, useEffect } from "react";
import Link from "next/link";
import endpoint from "../../utils/endpoint";

const Gallery = () => {
  const [data, setData] = useState([]);
  const [filePath, setFilePath] = useState();

  const getData = async () => {
    try {
      const res = await endpoint.get(`/gallery`);
      setData(res.data.data);
      setFilePath(res.data.file_path);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const truncateTitle = (title, wordLimit) => {
    if (!title) return ""; // Check if title is undefined or null
    const words = title.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return title;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();

    // Function to add suffix to date
    const getDayWithSuffix = (day) => {
      if (day > 3 && day < 21) return `${day}th`;
      switch (day % 10) {
        case 1:
          return `${day}st`;
        case 2:
          return `${day}nd`;
        case 3:
          return `${day}rd`;
        default:
          return `${day}th`;
      }
    };

    return `${getDayWithSuffix(day)} ${month} ${year}`;
  };

  return (
    <section className="news-section-three bg-transparent pb-90">
      <div className="auto-container">
        <div className="row">
          {data.map((gal, index) => (
            <div
              className="news-block-three col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
              key={index}>
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image">
                    <Link
                      href={`/gallery-details/${gal.groupID}`}
                      legacyBehavior>
                      <a>
                        <img
                          src={
                            filePath + gal.image_url ||
                            "images/banner/scnbanner-1.JPG"
                          }
                          alt="Image"
                        />
                      </a>
                    </Link>
                    <div className="post-date mb-5 ">
                      <h6 className="date">{formatDate(gal.created_at)}</h6>
                    </div>
                  </figure>
                </div>
                <div className="content-box">
                  <ul className="post-meta">
                    <li>
                      <i className="icon fa fa-image"></i> Image Count:{" "}
                      {gal.group_picture || 0}
                    </li>
                  </ul>
                  <div className="title-box">
                    <h4 className="title">
                      <Link
                        href={`/gallery-details/${gal.groupID}`}
                        legacyBehavior>
                        <a>{truncateTitle(gal.group_description, 5)}</a>
                      </Link>
                    </h4>
                  </div>
                  <div className="btn-box">
                    <Link
                      href={`/gallery-details/${gal.groupID}`}
                      legacyBehavior>
                      <a className="theme-btn btn-style-one light-bg">
                        <span className="btn-title">
                          Read More <i className="icon fa fa-arrow-right"></i>
                        </span>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
