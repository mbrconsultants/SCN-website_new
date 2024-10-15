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
      slidesPerView: 3,
      // spaceBetween: 30,
    },
    1350: {
      slidesPerView: 3,
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
    borderRadius: "10px", // Rounded corners for a smoother look
    padding: "20px", // Padding inside the card
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Soft shadow for a subtle elevation effect
  };

  return (
    <>
      <section className="process-section-three pt-4">
        <div className="auto-container">
          <div className="sec-title mb-0">
            <span className="sub-title">Quick resources</span>
            {/* <h2>Quick links</h2> */}
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
                    <div className="icon-box"></div>
                    <h2
                      className="count"
                      style={{ color: "#2BB584" }}>
                      <span className="fa fa-legal"></span>
                    </h2>
                  </div>
                  <h4
                    className="title"
                    style={{ color: "#2BB584" }}>
                    <a href="">Chamber Sitting</a>
                  </h4>
                  <div className="text">
                    Review ongoing cases and legal proceedings scheduled for the
                    Supreme Court's chamber sittings.{" "}
                  </div>
                  <div className="btn-box">
                    <Link
                      href="page-about"
                      style={{ color: "#2BB584" }}
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
                    <div className="icon-box"></div>
                    <h2
                      className="count"
                      style={{ color: "#2BB584" }}>
                      <span className="fa fa-book-law"></span>
                    </h2>
                  </div>
                  <h4
                    className="title"
                    style={{ color: "#2BB584" }}>
                    <a href="">Judgements</a>
                  </h4>
                  <div className="text">
                    Access landmark judgments delivered by the Supreme Court,
                    shaping the interpretation of laws and upholding justice.{" "}
                  </div>
                  <div className="btn-box">
                    <Link
                      href="page-about"
                      style={{ color: "#2BB584" }}
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
                    <div className="icon-box"></div>
                    <h2
                      className="count"
                      style={{ color: "#2BB584" }}>
                      <span className="fa fa-balance-scale"></span>
                    </h2>
                  </div>
                  <h4
                    className="title"
                    style={{ color: "#2BB584" }}>
                    <a href="">Causelist</a>
                  </h4>
                  <div className="text">
                    Explore the daily cause list to view scheduled cases and
                    hearings before the Supreme Court.{" "}
                  </div>
                  <div className="btn-box">
                    <Link
                      href="page-about"
                      style={{ color: "#2BB584" }}
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
                    <div className="icon-box"></div>
                    <h2
                      className="count"
                      style={{ color: "#2BB584" }}>
                      <span className="fa fa-book"></span>
                    </h2>
                  </div>
                  <h4
                    className="title"
                    style={{ color: "#2BB584" }}>
                    <a href="">Case Dairy</a>
                  </h4>
                  <div className="text">
                    Stay updated with the latest court proceedings, schedules,
                    and case statuses with the Supreme Court case diary.{" "}
                  </div>
                  <div className="btn-box">
                    <Link
                      href="page-about"
                      style={{ color: "#2BB584" }}
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
