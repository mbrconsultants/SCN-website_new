import Link from "next/link"
const Services1 = () => {
    return (
        <>
        <section className="services-section pt-0">
            <div className="auto-container">
                <div className="sec-title text-center">
                    <span className="sub-title">Our Services</span>
                    <h2>Creating beauty through <br/> architectural mastery</h2>
                </div>
                <div className="row">
                    <div className="services-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><img src="/images/resource/services1-1.jpg" alt="Image"/></figure>
                                <div className="icon-box"><i className="icon flaticon-christmas-tree"></i></div>
                            </div>
                            <div className="content-box">
                                <h4 className="title"><Link href="page-service-details">Green Scape</Link></h4>
                                <div className="text">It is a long established fact that a reader jki will be distracted by the readable contentjli of a page when looking at its layout.</div>
                                <div className="btn-box wow fadeInUp">
                                    <Link href="page-service-details" className="theme-btn btn-style-one light-bg"><span className="btn-title">Read More <i className="icon fa fa-arrow-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="services-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><img src="/images/resource/services1-2.jpg" alt="Image"/></figure>
                                <div className="icon-box"><i className="icon flaticon-telegram-logo"></i></div>
                            </div>
                            <div className="content-box">
                                <h4 className="title"><Link href="page-service-details">Renova Arch</Link></h4>
                                <div className="text">It is a long established fact that a reader jki will be distracted by the readable contentjli of a page when looking at its layout.</div>
                                <div className="btn-box wow fadeInUp">
                                    <Link href="page-service-details" className="theme-btn btn-style-one light-bg"><span className="btn-title">Read More <i className="icon fa fa-arrow-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="services-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><img src="/images/resource/services1-3.jpg" alt="Image"/></figure>
                                <div className="icon-box"><i className="icon flaticon-design-tool"></i></div>
                            </div>
                            <div className="content-box">
                                <h4 className="title"><Link href="page-service-details">Space Vision</Link></h4>
                                <div className="text">It is a long established fact that a reader jki will be distracted by the readable contentjli of a page when looking at its layout.</div>
                                <div className="btn-box wow fadeInUp">
                                    <Link href="page-service-details" className="theme-btn btn-style-one light-bg"><span className="btn-title">Read More <i className="icon fa fa-arrow-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};
export default Services1