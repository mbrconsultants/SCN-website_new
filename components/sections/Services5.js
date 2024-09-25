import Link from "next/link";
const Services5 = () => {
  return (
    <>
      <section className="services-section-five">
        <div className="auto-container">
          {/* <div className="sec-title text-center">
                        <span className="sub-title">Best Service</span>
                        <h2>Designing the future, preserving <br/> the past</h2>
                    </div> */}

          <div className="row">
            <div className="services-block-five col-lg-3 col-md-6 col-sm-12 wow fadeInUp card shadow-lg">
              <div className="inner-box">
                <div className="title-box">
                  <div className="icon-box">
                    <span className="fa fa-legal"></span>
                  </div>
                  <h4 className="title">
                    <Link href="page-services">Chamber Sitting</Link>
                  </h4>
                  <div className="text">
                    You can view chamber sitting schedule.
                  </div>
                </div>
                <div className="btn-box">
                  <Link
                    href="page-services"
                    className="read-more">
                    View <i className="icon fa fa-arrow-right"></i>
                  </Link>
                  <h6 className="count">01</h6>
                </div>
              </div>
            </div>

            <div
              className="services-block-five col-lg-3 col-md-6 col-sm-12 wow fadeInUp card shadow-lg"
              data-wow-delay="300ms">
              <div className="inner-box">
                <div className="title-box">
                  <div className="icon-box">
                    <i className="icon flaticon-file"></i>
                  </div>
                  <h4 className="title">
                    <Link href="page-services">Weekly Causelist</Link>
                  </h4>
                  <div className="text">
                    Matters currently going on in the court.
                  </div>
                </div>
                <div className="btn-box">
                  <Link
                    href="page-services"
                    className="read-more">
                    View <i className="icon fa fa-arrow-right"></i>
                  </Link>
                  <h6 className="count">02</h6>
                </div>
              </div>
            </div>

            <div
              className="services-block-five col-lg-3 col-md-6 col-sm-12 wow fadeInUp card shadow-lg"
              data-wow-delay="600ms">
              <div className="inner-box">
                <div className="title-box">
                  <div className="icon-box">
                    <i className="icon flaticon-folder-outline"></i>
                  </div>
                  <h4 className="title">
                    <Link href="page-services">Causelist Archive</Link>
                  </h4>
                  <div className="text">
                    Past Matters decided on by the court.
                  </div>
                </div>
                <div className="btn-box">
                  <Link
                    href="page-services"
                    className="read-more">
                    View <i className="icon fa fa-arrow-right"></i>
                  </Link>
                  <h6 className="count">03</h6>
                </div>
              </div>
            </div>

            <div
              className="services-block-five col-lg-3 col-md-6 col-sm-12 wow fadeInUp card shadow-lg"
              data-wow-delay="600ms">
              <div className="inner-box">
                <div className="title-box">
                  <div className="icon-box">
                    <i className="icon flaticon-attachment"></i>
                  </div>
                  <h4 className="title">
                    <Link href="page-services">Judgements</Link>
                  </h4>
                  <div className="text">
                    Cases which judgement has been served.
                  </div>
                </div>
                <div className="btn-box">
                  <Link
                    href="page-services"
                    className="read-more">
                    View <i className="icon fa fa-arrow-right"></i>
                  </Link>
                  <h6 className="count">04</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Services5;
