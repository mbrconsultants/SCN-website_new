import Link from "next/link";
const Pricing3 = () => {
    return (
        <>
          <section className="services-section-five pt-4">
            <div className="auto-container">
            <div className="sec-title">
            <span className="sub-title">Important resources</span>
            {/* <h2>Quick links</h2> */}
          </div>
    
              <div className="row">
                <div className="services-block-five col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
                  <div className="inner-box">
                    <div className="title-box">
                      <div className="icon-box">
                      <span className="icon flaticon-email"></span>
                      </div>
                      <h4 className="title">
                        <Link href="/">Mail</Link>
                      </h4>
                      <div className="text">
                        How to obtain the Nigeria legal Email system.
                      </div>
                    </div>
                    <div className="btn-box">
                      <Link
                        href="/page-chamber-sitting"
                        className="read-more">
                        Learn more <i className="icon fa fa-arrow-right"></i>
                      </Link>
                      <h6 className="count" style={{background: '#0EA476', color:'#fff'}}>01</h6>
                    </div>
                  </div>
                </div>
    
                <div
                  className="services-block-five col-lg-3 col-md-6 col-sm-12 wow fadeInUp"
                  data-wow-delay="300ms">
                  <div className="inner-box">
                    <div className="title-box">
                      <div className="icon-box">
                      <span className="icon flaticon-play-button"></span>
                      </div>
                      <h4 className="title">
                        <Link href="/page-weekly-causelist">Court proceedings</Link>
                      </h4>
                      <div className="text">
                      Watch live Supreme Court proceedings.
                      </div>
                    </div>
                    <div className="btn-box">
                      <Link
                        href="/"
                        className="read-more">
                        Stream Now <i className="icon fa fa-arrow-right"></i>
                      </Link>
                      <h6 className="count" style={{background: '#0EA476', color:'#fff'}}>02</h6>
                    </div>
                  </div>
                </div>
    
                <div
                  className="services-block-five col-lg-3 col-md-6 col-sm-12 wow fadeInUp"
                  data-wow-delay="600ms">
                  <div className="inner-box">
                    <div className="title-box">
                      <div className="icon-box">
                      <span className="icon flaticon-open-magazine"></span>
                      </div>
                      <h4 className="title">
                        <Link href="/page-causelist-archive">Magazine</Link>
                      </h4>
                      <div className="text">
                       Download our Apex Quarterly Magazine.
                      </div>
                    </div>
                    <div className="btn-box">
                      <Link
                        href="/page-causelist-archive"
                        className="read-more">
                        Download Now <i className="icon fa fa-arrow-right"></i>
                      </Link>
                      <h6 className="count" style={{background: '#0EA476', color:'#fff'}}>03</h6>
                    </div>
                  </div>
                </div>
    
                <div
                  className="services-block-five col-lg-3 col-md-6 col-sm-12 wow fadeInUp"
                  data-wow-delay="600ms">
                  <div className="inner-box">
                    <div className="title-box">
                      <div className="icon-box">
                        <i className="icon flaticon-phone"></i>
                      </div>
                      <h4 className="title">
                        <Link href="https://wa.me/2349000112200">Quick Contact</Link>
                      </h4>
                      <div className="text">
                       Have questions or need assistance?.
                      </div>
                    </div>
                    <div className="btn-box">
                      <Link
                        href="https://wa.me/2349000112200"
                        className="read-more">
                        Call Us <i className="icon fa fa-arrow-right"></i>
                      </Link>
                      <h6 className="count" style={{background: '#0EA476', color:'#fff'}}>04</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      );
};
export default Pricing3;
