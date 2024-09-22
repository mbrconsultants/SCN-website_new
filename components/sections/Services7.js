import Link from "next/link"
const Services7 = () => {
    return (
        <>
            <section className="services-section-seven">
                <div className="auto-container">
                    <div className="sec-title light text-center">
                        <span className="sub-title">Best Service</span>
                        <h2>Interior design that speaks <br/> volumes</h2>
                    </div>

                    <div className="row">

                        <div className="services-block-seven col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img src="images/resource/services8-1.jpg" alt=""/></figure>
                                </div>
                                <div className="content-box">
                                    <div className="icon-box"><i className="icon flaticon-approved"></i></div>
                                    <h4 className="title"><Link href="page-service-details">Tranquil Retreat Designers</Link></h4>
                                    <div className="text">It is a long established fact that a reader hjl will be distracted by the readable content</div>
                                    <div className="btn-box">
                                        <Link href="page-service-details" className="read-more">Read More <i className="icon fa fa-arrow-right"></i></Link>
                                        <div className="count">01</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="services-block-seven col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img src="images/resource/services8-2.jpg" alt=""/></figure>
                                </div>
                                <div className="content-box">
                                    <div className="icon-box"><i className="icon flaticon-diamond"></i></div>
                                    <h4 className="title"><Link href="page-service-details">Tranquil Retreat Designers</Link></h4>
                                    <div className="text">It is a long established fact that a reader hjl will be distracted by the readable content</div>
                                    <div className="btn-box">
                                        <Link href="page-service-details" className="read-more">Read More <i className="icon fa fa-arrow-right"></i></Link>
                                        <div className="count">02</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="services-block-seven col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img src="images/resource/services8-3.jpg" alt=""/></figure>
                                </div>
                                <div className="content-box">
                                    <div className="icon-box"><i className="icon flaticon-diploma"></i></div>
                                    <h4 className="title"><Link href="page-service-details">Tranquil Retreat Designers</Link></h4>
                                    <div className="text">It is a long established fact that a reader hjl will be distracted by the readable content</div>
                                    <div className="btn-box">
                                        <Link href="page-service-details" className="read-more">Read More <i className="icon fa fa-arrow-right"></i></Link>
                                        <div className="count">03</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="services-block-seven col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="900ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img src="images/resource/services8-4.jpg" alt=""/></figure>
                                </div>
                                <div className="content-box">
                                    <div className="icon-box"><i className="icon flaticon-graph-1"></i></div>
                                    <h4 className="title"><Link href="page-service-details">Tranquil Retreat Designers</Link></h4>
                                    <div className="text">It is a long established fact that a reader hjl will be distracted by the readable content</div>
                                    <div className="btn-box">
                                        <Link href="page-service-details" className="read-more">Read More <i className="icon fa fa-arrow-right"></i></Link>
                                        <div className="count">04</div>
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
export default Services7