import Link from "next/link"
const Services5 = () => {
    return (
        <>
            <section className="services-section-five">
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <span className="sub-title">Best Service</span>
                        <h2>Designing the future, preserving <br/> the past</h2>
                    </div>

                    <div className="row">

                        <div className="services-block-five col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                            <div className="inner-box">
                                <div className="title-box">
                                    <div className="icon-box"><i className="icon flaticon-graph-1"></i></div>
                                    <h4 className="title"><Link href="page-services">Network Solutions</Link></h4>
                                    <div className="text">It is a long established fact that a reader hk will be distracted by the readable contenthl of a page when looking at its layout.</div>
                                </div>
                                <div className="btn-box">
                                    <Link href="page-services" className="read-more">Read More <i className="icon fa fa-arrow-right"></i></Link>
                                    <h6 className="count">01</h6>
                                </div>
                            </div>
                        </div>

                        <div className="services-block-five col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                            <div className="inner-box">
                                <div className="title-box">
                                    <div className="icon-box"><i className="icon flaticon-approved"></i></div>
                                    <h4 className="title"><Link href="page-services">Cybersecurity</Link></h4>
                                    <div className="text">It is a long established fact that a reader hk will be distracted by the readable contenthl of a page when looking at its layout.</div>
                                </div>
                                <div className="btn-box">
                                    <Link href="page-services" className="read-more">Read More <i className="icon fa fa-arrow-right"></i></Link>
                                    <h6 className="count">01</h6>
                                </div>
                            </div>
                        </div>

                        <div className="services-block-five col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
                            <div className="inner-box">
                                <div className="title-box">
                                    <div className="icon-box"><i className="icon flaticon-diamond"></i></div>
                                    <h4 className="title"><Link href="page-services">Cloud Services</Link></h4>
                                    <div className="text">It is a long established fact that a reader hk will be distracted by the readable contenthl of a page when looking at its layout.</div>
                                </div>
                                <div className="btn-box">
                                    <Link href="page-services" className="read-more">Read More <i className="icon fa fa-arrow-right"></i></Link>
                                    <h6 className="count">01</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default Services5