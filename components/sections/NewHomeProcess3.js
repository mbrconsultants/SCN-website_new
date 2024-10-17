import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 3,
  spaceBetween: 30,
  autoplay: {
    delay: 2600,
    disableOnInteraction: false,
  },
  navigation: true,
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
const Process4 = () => {
  const cardStyle = {
    background: "linear-gradient(135deg, #8fd3f4 0%, #84fab0 100%)", // Gradient from soft blue to mint green
    borderRadius: "10px", // Rounded corners for a smoother look
    padding: "20px", // Padding inside the card
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Soft shadow for a subtle elevation effect
  };

  const cardStyle2 = {
    background: "#0EA476",
    borderRadius: "10px", // Rounded corners for a smoother look
    padding: "20px", // Padding inside the card
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Soft shadow for a subtle elevation effect
  };

  return (
    <>
      <style>
        {`
      .read-moree {
        display: inline-block;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #fff;
        text-align: center;
        line-height: 50px;
        color: #0EA476;
        transition: all 0.3s ease;
      }

      .read-moree .icon {
        font-size: 20px;
        color: #0EA476; /* Set the arrow icon color to green */
      }

      .read-moree:hover {
        background-color: #0EA476; /* Optional: Change background color on hover */
        color: #fff; /* Change arrow color to white on hover */
      }

      .read-moree:hover .icon {
        color: #fff; /* Change arrow icon color to white on hover */
      }
      `}
      </style>
      <section className="process-section-three pt-4">
        <div className="auto-container">
          <div className="sec-title mb-0 text-center">
            <span className="sub-title"><span style={{display: 'inline-block',
                            width: '30px',
                            height: '3px',
                            backgroundColor: '#0EA476',
                            marginRight: '7px',
                            verticalAlign: 'middle'}}></span>Quick resources</span>
            <h2>Quick resources</h2>
          </div>

          <Swiper
            {...swiperOptions}
            className="team-carousel owl-carousel owl-theme default-navs">
            <SwiperSlide>
              <div className="process-block-three">
                <div
                  className="inner-box"
                  style={cardStyle2}>
                  <div className="top-box">
                    {/* <div className="icon-box"></div> */}
                    <h2
                      className="count"
                      style={{ color: "#fff", opacity: '0.9' }}>
                      <span className="fa fa-legal"></span>
                    </h2>
                  </div>
                  <h4
                    className="title"
                    style={{ color: "#fff" }}>
                    <a href="">Chamber Sitting</a>
                  </h4>
                  <div className="text" style={{ color: "#fff" }}>
                    Review ongoing cases and legal proceedings scheduled for the
                    Supreme Court's chamber sittings.{" "}
                  </div>
                  <div className="btn-box">
                    <Link
                      href="page-about"
                      style={{ color: "#fff" }}
                      className="read-moree">
                      <i className="icon fa fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="process-block-three">
                <div
                  className="inner-box"
                  style={cardStyle2}>
                  <div className="top-box">
                    {/* <div className="icon-box"></div> */}
                    <h2
                      className="count"
                      style={{ color: "#fff", opacity: '0.9' }}>
                      <span className="fa fa-book-law"></span>
                    </h2>
                  </div>
                  <h4
                    className="title"
                    style={{ color: "#fff" }}>
                    <a href="">Judgments</a>
                  </h4>
                  <div className="text" style={{ color: "#fff" }}>
                    Access landmark judgments delivered by the Supreme Court,
                    shaping the interpretation of laws and upholding justice.{" "}
                  </div>
                  <div className="btn-box">
                    <Link
                      href="page-about"
                      style={{ color: "#0EA476" }}
                      className="read-moree">
                      <i className="icon fa fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="process-block-three">
                <div
                  className="inner-box"
                  style={cardStyle2}>
                  <div className="top-box">
                    {/* <div className="icon-box"></div> */}
                    <h2
                      className="count"
                      style={{ color: "#fff", opacity: '0.9' }}>
                      <span className="fa fa-balance-scale"></span>
                    </h2>
                  </div>
                  <h4
                    className="title"
                    style={{ color: "#fff" }}>
                    <a href="">Causelist</a>
                  </h4>
                  <div className="text" style={{ color: "#fff" }}>
                    Explore the daily cause list to view scheduled cases and
                    hearings before the Supreme Court.{" "} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  </div>
                  <div className="btn-box">
                    <Link
                      href="page-about"
                      style={{ color: "#fff" }}
                      className="read-moree">
                      <i className="icon fa fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="process-block-three">
                <div
                  className="inner-box"
                  style={cardStyle2}>
                  <div className="top-box">
                    {/* <div className="icon-box"></div> */}
                    <h2
                      className="count"
                      style={{ color: "#fff", opacity: '0.9' }}>
                      <span className="fa fa-book"></span>
                    </h2>
                  </div>
                  <h4
                    className="title"
                    style={{ color: "#fff" }}>
                    <a href="">Case Dairy</a>
                  </h4>
                  <div className="text" style={{ color: "#fff" }}>
                    Stay updated with the latest court proceedings, schedules,
                    and case statuses with the Supreme Court case diary.{" "}
                  </div>
                  <div className="btn-box">
                    <Link
                      href="page-about"
                      style={{ color: "#fff" }}
                      className="read-moree">
                      <i className="icon fa fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};
export default Process4;
