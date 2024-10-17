import Link from "next/link";
const Pricing3 = () => {
    return (
        <>
          <section className="services-section-five pt-5">
            <div className="auto-container">
            <div className="sec-title text-center">
            <span className="sub-title">Important resources</span>
            <h2>Important resources</h2>
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
                        href="/"
                        className="read-more">
                        Learn more
                      </Link>
                      <Link href="/"><h6 className="count" style={{background: '#0EA476', color:'#fff'}}><i className="icon fa fa-arrow-right"></i></h6></Link>
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
                        <Link href="/">Court proceedings</Link>
                      </h4>
                      <div className="text">
                      Watch live Supreme Court proceedings.
                      </div>
                    </div>
                    <div className="btn-box">
                      <Link
                        href="/"
                        className="read-more">
                        Stream Now
                      </Link>
                      <Link href="/"><h6 className="count" style={{background: '#0EA476', color:'#fff'}}><i className="icon fa fa-arrow-right"></i></h6></Link>
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
                        <Link href="/">Magazine</Link>
                      </h4>
                      <div className="text">
                       Download our Apex Quarterly Magazine.
                      </div>
                    </div>
                    <div className="btn-box">
                      <Link
                        href="/"
                        className="read-more">
                        Download Now 
                      </Link>
                      <Link href="/"><h6 className="count" style={{background: '#0EA476', color:'#fff'}}><i className="icon fa fa-arrow-right"></i></h6></Link>
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
                        Call Us
                      </Link>
                      <Link href="/"><h6 className="count" style={{background: '#0EA476', color:'#fff'}}><i className="icon fa fa-arrow-right"></i></h6></Link>
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
