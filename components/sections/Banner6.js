import React, { useState, useEffect } from "react";
import BlogRecentSection from "./RecentNews";
import endpoint from "../../utils/endpoint";
import Link from "next/link";
import dynamic from "next/dynamic";
const CounterUp = dynamic(() => import("@/components/elements/CounterUp"), {
  ssr: false,
});
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  autoplay: {
    delay: 8500,
    disableOnInteraction: false,
  },
  loop: true,
  navigation: true,
};
const Banner6 = ({ show }) => {
  const [data, setData] = useState([]);
  const [filePath, setFilePath] = useState();
  const [welcomeNote, setWelcomeNote] = useState();

  const getData = async () => {
    try {
      const res = await endpoint.get("/slider");
      setData(res.data.data);

      setFilePath(res.data.file_path);
    } catch (err) {
      console.log(err);
    }
  };

  const getWelcomeDetails = async () => {
    try {
      const res = await endpoint.get("/welcome");
      setWelcomeNote(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
    getWelcomeDetails();
  }, []);

  console.log("==============show======================");
  console.log(show);
  console.log("====================================");
  return (
    <>
      <section className="banner-section-six">
        <Swiper
          {...swiperOptions}
          className="banner-carousel owl-carousel owl-theme"
          style={{ height: "700px" }}>
          {data &&
            data.map((slide, index) => (
              <SwiperSlide className="slide-item">
                <div
                  className="bg bg-image"
                  style={{
                    backgroundImage: `url(${filePath + slide.file_name})`,
                  }}></div>
                <div className="auto-container">
                  <div className="content-box">
                    {/* <h1 className="title">Creating Harmony <br/> One Room at a Time</h1>
                                <div className="text">Vestibulum rhoncus nisl ac gravida porta. Mauris eu sapien lacus. Etiam <br/> molestie justo neque, in convallis massa tempus in.</div>
                                <div className="btn-box">
                                    <Link href="page-about" className="theme-btn btn-style-one wow fadeInUp" data-wow-delay="900ms"><span className="btn-title">Read More <i className="icon fa fa-arrow-right"></i></span></Link>
                                </div> */}
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
        {/* <div className="info-box">
                    <h5 className="title">Success Rate</h5>
                    <div className="text">It is a long established fact that a reader will be design distracted by the readablejk content of a page when looking at its layout.</div>

                    <div className="skills">
                        <div className="skill-item">
                            <div className="skill-bar">
                                <div className="bar-inner">
                                    <div className="bar progress-line" style={{width:"90%"}}>
                                    </div>
                                </div>
                                <div className="skill-percentage">
                                    <div className="count-box"><CounterUp count={90} time={3} />%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="progress">Development 90%</div>
                </div> */}
      </section>

      <section
        className="call-to-action-four"
        style={{ color: "white !important", background: "white" }}>
        <div className="bg icon-cross"></div>
        <div className="auto-container card shadow-lg p-4">
          <div className="outer-box">
            <div className="title-box">
              <h2
                className="title"
                style={{ color: "#0EA476" }}>
                Welcome
              </h2>
              <div
                className="title"
                style={{ fontFamily: "Blackadder ITC" }}
                dangerouslySetInnerHTML={{ __html: welcomeNote }}></div>
            </div>
            <figure className="image">
              <img
                src="images/banner/scn-scale.jpg"
                alt="Image"
                style={{ height: "80px", width: "80px", borderRadius: "40px" }}
              />
            </figure>
            <div className="btn-box">
              {/* <Link href="page-contact" className="theme-btn btn-style-one light-bg"><span className="btn-title"><i className="icon fab fa-discord"></i> Discord</span></Link> */}
              {/* <Link href="page-contact" className="theme-btn btn-style-one hover-light"><span className="btn-title">About Supreme Court</span></Link> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Banner6;
