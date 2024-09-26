import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import endpoint from "../../utils/endpoint";
const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 4,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  // Pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      // spaceBetween: 30,
    },
    575: {
      slidesPerView: 1,
      // spaceBetween: 30,
    },
    767: {
      slidesPerView: 2,
      // spaceBetween: 30,
    },
    991: {
      slidesPerView: 2,
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
const Project2 = () => {
  const [data, setData] = useState([]);
  const [filePath, setFilePath] = useState();
 

  const getData = async () => {
    try {
      const res = await endpoint.get("/profile-current-justices");
		setData(res.data.data);
		console.log('====================================');
		console.log(res.data);
		console.log('====================================');
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
      <section className="">
        <div className="auto-container">
          <div className="sec-title text-left">
            {/* <span className="sub-title">Latest Portfolio</span> */}
            <h2 style={{ color: "#2BB584" }}>Justices of the supreme court</h2>
          </div>

          <div className="carousel-outer">
            <div className="swiper project-slider">
              <div className="swiper-wrapper">
                <Swiper
                  {...swiperOptions}
                  className="four-items-carousel owl-carousel owl-theme disable-navs default-dots">
                  {data &&
                    data.map((staff, index) => (
                      <SwiperSlide key={index}>
                        <div className="project-block-two wow fadeInLeft">
                          {filePath + staff.picture}
                          <div className="inner-box">
                            <div
                              className="image-box"
                              style={{ height: "400px" }}>
                              <figure className="image">
                                <img
                                  src={filePath + staff.picture}
                                  alt={staff.fullname}
                                />
                              </figure>
                              <div
                                className="info-box"
                                style={{ backgroundColor: "#2BB584" }}>
                                <h5 className="title">{staff.fullname}</h5>
                                <div className="cat">{staff.designation}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Project2;
