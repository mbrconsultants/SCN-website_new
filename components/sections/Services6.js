import Link from "next/link"
const Services6 = () => {
    return (
        <>
            <section className="services-section-six">
                <div className="auto-container">
                    <div className="sec-title light text-center">
                        <span className="sub-title">Best Service</span>
                        <h2>Bringing your vision to life one <br/> detail at a time</h2>
                    </div>

                    <div className="row">

                        <div className="services-block-six col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img src="images/resource/services7-1.jpg" alt=""/></figure>
                                </div>
                                <div className="content-box">
                                    <div className="icon-box"><i className="icon flaticon-monitor"></i></div>
                                    <h4 className="title"><Link href="page-service-details">Dream Space</Link></h4>
                                    <div className="text">It is a long established fact that bnkhkl  reader hjl will be distracted by the hkjk  readable contentjk of a page</div>
                                    <div className="btn-box">
                                        <Link href="page-service-details" className="read-more">Read More <i className="icon fa fa-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="services-block-six col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img src="images/resource/services7-2.jpg" alt=""/></figure>
                                </div>
                                <div className="content-box">
                                    <div className="icon-box"><i className="icon flaticon-rocket-ship"></i></div>
                                    <h4 className="title"><Link href="page-service-details">Visionary Interiors</Link></h4>
                                    <div className="text">It is a long established fact that bnkhkl  reader hjl will be distracted by the hkjk  readable contentjk of a page</div>
                                    <div className="btn-box">
                                        <Link href="page-service-details" className="read-more">Read More <i className="icon fa fa-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="services-block-six col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img src="images/resource/services7-3.jpg" alt=""/></figure>
                                </div>
                                <div className="content-box">
                                    <div className="icon-box"><i className="icon flaticon-approved"></i></div>
                                    <h4 className="title"><Link href="page-service-details">Elegant Space</Link></h4>
                                    <div className="text">It is a long established fact that bnkhkl  reader hjl will be distracted by the hkjk  readable contentjk of a page</div>
                                    <div className="btn-box">
                                        <Link href="page-service-details" className="read-more">Read More <i className="icon fa fa-arrow-right"></i></Link>
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
export default Services6