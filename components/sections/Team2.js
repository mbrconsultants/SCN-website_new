import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import endpoint from "../../utils/endpoint";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      // spaceBetween: 30,
    },
    575: {
      slidesPerView: 2,
      // spaceBetween: 30,
    },
    767: {
      slidesPerView: 3,
      // spaceBetween: 30,
    },
    991: {
      slidesPerView: 3,
      // spaceBetween: 30,
    },
    1199: {
      slidesPerView: 4,
      // spaceBetween: 30,
    },
    1350: {
      slidesPerView: 4,
      // spaceBetween: 30,
    },
  },
};
const Team2 = () => {
  const [data, setData] = useState([]);
  const [filePath, setFilePath] = useState();

  const getData = async () => {
    try {
      const res = await endpoint.get("/management-staff");
      setData(res.data.data);
      setFilePath(res.data.file_path);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <section className="team-section-two pt-0">
        <div className="auto-container">
          <div className="sec-title mb-0">
            {/* <span className="sub-title">Expert members</span> */}
            <h2 style={{ color: "#2BB584" }}>Management Staff </h2>
          </div>
          <div className="swiper project-slider">
            <Swiper
              {...swiperOptions}
              className="team-carousel owl-carousel owl-theme default-navs">
              {data &&
                data.map((staff, index) => (
                  <SwiperSlide>
                    <div className="team-block-two wow fadeInUp">
                      <div className="inner-box">
                        <div className="image-box">
                          <figure className="image">
                            <Link href={`management/${staff.id}`}>
                              <img
                                src={staff.picture ? filePath + staff.picture :"/avatar.jpg"}
                                alt={staff.fullname}
                              />
                            </Link>
                          </figure>
                        </div>
                        <div className="info-box">
                          <h4 className="name">
                            <Link href={`management/${staff.id}`}>
                              {staff.fullname}
                            </Link>
                          </h4>
                          <span className="designation"> {staff.position}</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};
export default Team2;
