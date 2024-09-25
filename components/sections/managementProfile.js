import React, { useState, useEffect } from "react";
import Link from "next/link";
import BlogRecentSection from "./RecentNews";
import endpoint from "../../utils/endpoint";
import { useParams } from "next/navigation";

const Profile = () => {
  const [data, setData] = useState({});

    const params = useParams();
  const id = params?.id;
  const getData = async () => {
    try {
      const res = await endpoint.get(`/management-staff/${id}`);
      setData(res.data.data);
      console.log('====================================');
      console.log(res.data.data);
      console.log('====================================');
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
                      "management/" +
                      data.picture
                    }
                    alt=""
                  />
                </div>
                <div className="blog-details__content">
                  <h3 className="blog-details__title">{data.fullname}</h3>
                  <p>{data.position}</p>
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
