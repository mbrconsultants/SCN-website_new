import Link from "next/link";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import React, { useState } from "react";
import ModalVideo from "react-modal-video";

const About3 = () => {
  const [isOpen, setOpen] = useState(false);
  const percentage = 80;
  return (
    <>
      <section className="about-section-five">
        <div className="auto-container">
          <div className="row">
            <div className="content-column col-xl-6 col-lg-6 col-md-12 wow fadeInLeft">
              <div className="inner-column">
                <div className="sec-title light">
                  <span className="sub-title">About us</span>
                  <h2>
                    Where architecture meets <br /> innovation
                  </h2>
                  <div className="text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummyLorem Ipsum is an oi simply
                  </div>
                </div>

                <div className="row">
                  <div className="info-box col-lg-6 col-md-6 col-sm-6">
                    <div className="inner-box">
                      <i className="icon flaticon-diamond-2"></i>
                      <h4 className="title">Urban Design</h4>
                    </div>
                  </div>
                  <div className="info-box col-lg-6 col-md-6 col-sm-6">
                    <div className="inner-box">
                      <i className="icon flaticon-design-tool"></i>
                      <h4 className="title">Tech Solutions</h4>
                    </div>
                  </div>
                </div>
                <div className="btn-box">
                  <Link
                    href="page-about"
                    className="theme-btn btn-style-one hover-light">
                    <span className="btn-title">About us</span>
                  </Link>
                  <Link
                    href="tel:+92(8800)9806"
                    className="info-btn wow fadeInUp">
                    <i className="icon fa fa-phone"></i>
                    <div className="icon-info">
                      <small>Requesting A Call:</small>
                      <strong>(629) 555-0129</strong>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="image-column col-xl-6 col-lg-6 col-md-12">
              <div
                className="inner-column wow fadeInRight"
                data-wow-delay="600ms">
                <div className="image-box">
                  <figure className="image overlay-anim">
                    <img
                      src="images/resource/about5-1.jpg"
                      alt=""
                    />
                  </figure>

                  <div className="video-box">
                    <figure className="image">
                      <img
                        src="images/resource/about5-2.jpg"
                        alt=""
                      />
                    </figure>
                    <a
                      onClick={() => setOpen(true)}
                      className="play-btn">
                      <i
                        className="icon fa fa-play"
                        aria-hidden="true"></i>
                    </a>
                  </div>

                  <div className="graph-box">
                    <div className="pie-graph">
                      <div
                        className="graph-outer"
                        style={{ width: 125, height: 125 }}>
                        <CircularProgressbar
                          value={80}
                          text={`${percentage}%`}
                          strokeWidth={8}
                          styles={buildStyles({
                            textColor: "#fff",
                            trailColor: "#E3E3E3",
                            pathColor: "#2BB584",
                          })}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="L61p2uyiMSo"
        onClose={() => setOpen(false)}
      />
    </>
  );
};

export default About3;
