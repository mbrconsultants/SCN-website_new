import Link from "next/link"
const Pricing3 = () => {
    return (
        <>
            <section className="pricing-section-two">
                <div className="auto-container">
                    <div className="sec-title text-center">
                        {/* <span className="sub-title">Best Pricing</span> */}
                        <h2 style={{color: '#2BB584'}}>Important Resources <span className="fa fa-file-download"></span></h2>
                    </div>
                    <div className="row">
                        <div className="pricing-block-two col-xl-6 col-lg-6 col-md-6 col-sm-12 wow fadeInUp">
                            <div className="inner-box">
                                <div className="title-box">
                                    <h4 className="title" style={{color: '#2BB584', fontSize: '30px'}}> <span className="icon flaticon-email"></span> </h4>
                                    <h4 className="title">Mail</h4>
                                    <div className="text">How to obtain the Nigeria legal Email system.</div>
                                </div>
                                <div className="content-box">
                                    {/* <h2 className="price"><sup>$</sup>25<sub>/month</sub></h2>
                                    <ul className="feature-list">
                                        <li>Mistakes To Avoid</li>
                                        <li>Your Startup</li>
                                        <li>Knew About Fonts</li>
                                        <li>Winning Metric for Your Startup</li>
                                    </ul> */}
                                    <div className="btn-box">
                                        <Link href="page-pricing" className="theme-btn btn-style-two"><span className="btn-title">Download Now <i className="icon fa fa-arrow-right"></i></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="pricing-block-two col-xl-6 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                            <div className="inner-box">
                                <div className="title-box">
                                    <h4 className="title" style={{color: '#2BB584', fontSize: '30px'}}> <span className="icon flaticon-open-magazine"></span> </h4>
                                        <h4 className="title">Magazine</h4>
                                        <div className="text">Download our Apex Quarterly Magazine.</div>
                                    </div>
                                <div className="content-box">
                                    {/* <h2 className="price"><sup>$</sup>35<sub>/month</sub></h2>
                                    <ul className="feature-list">
                                        <li>Mistakes To Avoid</li>
                                        <li>Your Startup</li>
                                        <li>Knew About Fonts</li>
                                        <li>Winning Metric for Your Startup</li>
                                    </ul> */}
                                    <div className="btn-box">
                                        <Link href="page-pricing" className="theme-btn btn-style-one light-bg"><span className="btn-title">Download Now <i className="icon fa fa-arrow-right"></i></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <div className="pricing-block-two col-xl-4 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
                            <div className="inner-box">
                                <div className="title-box">
                                    <h4 className="title">Premium Plan</h4>
                                    <div className="text">Lorem Ipsum is simply dummy text of the printing.</div>
                                </div>
                                <div className="content-box">
                                    <h2 className="price"><sup>$</sup>99<sub>/month</sub></h2>
                                    <ul className="feature-list">
                                        <li>Mistakes To Avoid</li>
                                        <li>Your Startup</li>
                                        <li>Knew About Fonts</li>
                                        <li>Winning Metric for Your Startup</li>
                                    </ul>
                                    <div className="btn-box">
                                        <Link href="page-pricing" className="theme-btn btn-style-one light-bg"><span className="btn-title">Purchase Now <i className="icon fa fa-arrow-right"></i></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
        </>
    );
};
export default Pricing3