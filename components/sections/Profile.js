import React, { useState, useEffect } from "react";
import Link from "next/link";
import BlogRecentSection from "./RecentNews";
import endpoint from "../../utils/endpoint";

const Profile = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const res = await endpoint.get("/profile-cjn");
      setData(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <section className="blog-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <div className="blog-details__left">
                <div className="blog-details__img text-center">
                  <img
                    style={{ height: "500px", width: "500px" }}
                    src={
                      process.env.NEXT_PUBLIC_UPLOAD_URL +
                      "justices/" +
                      data.picture
                    }
                    alt=""
                  />
                </div>
                <div className="blog-details__content">
                  <h3 className="blog-details__title">
                    {data.fullname} <small>({data.title})</small>
                  </h3>
                  <h6 className="">{data.designation}</h6>
                  <p
                    className="blog-details__text-2"
                    style={{ textAlign: "justify" }}
                    dangerouslySetInnerHTML={{
                      __html: data.profile,
                    }}></p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5">
              <BlogRecentSection />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
