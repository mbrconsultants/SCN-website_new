import React, { useState, useEffect } from "react";
import Link from "next/link";
import endpoint from "../../utils/endpoint";
const About1 = () => {
  const [data, setData] = useState([]);
  const [filePath, setFilePath] = useState();

  const getData = async () => {
    try {
      const res = await endpoint.get("/cjn");
      console.log("====================================");
      console.log(res.data);
      console.log("====================================");
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
      <section className="about-section">
        <div className="auto-container">
          <div className="row">
            <div className="image-column col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <div
                className="inner-column wow fadeInRight"
                data-wow-delay="200ms">
                {filePath + data.picture}
                <div className="image-box">
                  <figure className="image overlay-anim">
                    <img
                      src={filePath + data.picture}
                      alt={data.fullname}
                    />
                  </figure>
                  {/* <figure className="image-2 overlay-anim"><img src="/images/resource/about1-2.jpg" alt="Image" /></figure> */}
                  <div className="experience-box wow fadeInUp">
                    <div className="inner-box">
                      {/* <i className="icon flaticon-winner"></i> */}
                      <div className="title-box">
                        <h5 className="title mb-2">{data.fullname}</h5>
                        <h6 className="mb-0 text-white">{data.designation}</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="content-column col-xl-6 col-lg-6 col-md-12 col-sm-12 wow fadeInLeft"
              data-wow-delay="300ms">
              <div className="inner-column">
                <div className="sec-title">
                  <span className="sub-title">About</span>
                  <h2>Brief background of the CJN</h2>
                  <div
                    className="text"
                    dangerouslySetInnerHTML={{ __html: data.profile }}></div>
                </div>
                <div>
                  {/* <Link href="#" className="theme-btn btn-style-one hover-light"><span className="btn-title">Read More...</span></Link> */}
                </div>
                {/* <div className="row">
                                    <div className="info-box col-lg-6 col-md-6 col-sm-12">
                                        <div className="inner-box">
                                            <div className="title-box">
                                                <i className="icon flaticon-diamond"></i>
                                                <h4 className="title">20+ Year Of <br className="d-none d-lg-block" /> Experience</h4>
                                            </div>
                                            <div className="text">Lorem Ipsum is simply dummy text the printing and typesetting industry.</div>
                                        </div>
                                    </div>
                                    <div className="info-box col-lg-6 col-md-6 col-sm-12">
                                        <div className="inner-box">
                                            <div className="title-box">
                                                <i className="icon flaticon-handshake"></i>
                                                <h4 className="title">Total Project <br className="d-none d-lg-block" /> Completed</h4>
                                            </div>
                                        </div>
                                        <div className="text">Lorem Ipsum is simply dummy text the printing and typesetting industry.</div>
                                    </div>
                                </div>
                                <div className="bottom-box">
                                    <Link href="tel:+92(8800)9806" className="info-btn wow fadeInUp">
                                        <i className="icon fa fa-phone"></i>
                                        <small>Requesting A Call:</small>
                                        <strong>(629) 555-0129</strong>
                                    </Link>
                                    <div className="author-box">
                                        <div className="inner-box wow fadeInLeft">
                                            <figure className="image"><img src="/images/resource/about1-thumb1.png" alt="Thumb" /></figure>
                                            <div className="author-info">
                                                <div className="name">Jenny Willson</div>
                                                <div className="designation">Web Designer</div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default About1;
