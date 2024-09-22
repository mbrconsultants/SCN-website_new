import Link from "next/link"
const Pricing2 = () => {
    return (
        <>
        <section className="pricing-section">
            <div className="auto-container">
                <div className="sec-title text-center">
                    <span className="sub-title">Best pricing</span>
                    <h2>Interior design that speaks <br/> volumes</h2>
                </div>
                <div className="row">

                    <div className="pricing-block col-xl-4 col-lg-6 col-md-6 col-sm-12 wow fadeInUp">
                        <div className="inner-box">
                            <div className="title-box">
                                <h4 className="title">Stater</h4>
                                <h2 className="price">$19<sub>/month</sub></h2>
                                <div className="text">Lorem Ipsum is simply dummy text of the printing.</div>
                            </div>
                            <div className="content-box">
                                <ul className="feature-list">
                                    <li>Mistakes To Avoid</li>
                                    <li>Your Startup</li>
                                    <li>Knew About Fonts</li>
                                    <li>Winning Metric for Your Startup</li>
                                </ul>
                            </div>
                            <div className="btn-box">
                                <Link href="page-pricing" className="theme-btn btn-style-one"><span className="btn-title">Select Plan <i className="icon fa fa-arrow-right"></i></span></Link>
                            </div>
                        </div>
                    </div>

                    <div className="pricing-block col-xl-4 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                        <div className="inner-box tagged">
                            <div className="title-box">
                                <h4 className="title">Business</h4>
                                <h2 className="price">$29<sub>/month</sub></h2>
                                <div className="text">Lorem Ipsum is simply dummy text of the printing.</div>
                            </div>
                            <div className="content-box">
                                <ul className="feature-list">
                                    <li>Mistakes To Avoid</li>
                                    <li>Your Startup</li>
                                    <li>Knew About Fonts</li>
                                    <li>Winning Metric for Your Startup</li>
                                </ul>
                            </div>
                            <div className="btn-box">
                                <Link href="page-pricing" className="theme-btn btn-style-one"><span className="btn-title">Select Plan <i className="icon fa fa-arrow-right"></i></span></Link>
                            </div>
                        </div>
                    </div>

                    <div className="pricing-block col-xl-4 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
                        <div className="inner-box">
                            <div className="title-box">
                                <h4 className="title">Premium</h4>
                                <h2 className="price">$49<sub>/month</sub></h2>
                                <div className="text">Lorem Ipsum is simply dummy text of the printing.</div>
                            </div>
                            <div className="content-box">
                                <ul className="feature-list">
                                    <li>Mistakes To Avoid</li>
                                    <li>Your Startup</li>
                                    <li>Knew About Fonts</li>
                                    <li>Winning Metric for Your Startup</li>
                                </ul>
                            </div>
                            <div className="btn-box">
                                <Link href="page-pricing" className="theme-btn btn-style-one"><span className="btn-title">Select Plan <i className="icon fa fa-arrow-right"></i></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};
export default Pricing2