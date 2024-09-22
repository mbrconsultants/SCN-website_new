import Link from "next/link"
const Services4 = () => {
    return (
        <>
            <section className="services-section-four pt-0">
                <div className="auto-container">
                    <div className="sec-title light text-center">
                        <span className="sub-title">Best Services</span>
                        <h2>Design your world, one room at a <br/> design time</h2>
                    </div>
                    <div className="row">
                        <div className="service-block-four col-xl-4 col-lg-6 col-md-6 col-sm-12 wow fadeInUp">
                            <div className="inner-box">
                                <figure className="image"><img src="images/resource/services5-1.jpg" alt=""/></figure>
                                <div className="content-box">
                                    <div className="btn-box">
                                        <Link href="page-service-details" className="read-more"><i className="far fa-arrow-right"></i></Link>
                                    </div>
                                    <h4 className="title"><Link href="page-service-details">Digital Marketing</Link></h4>
                                    <div className="text">It is a long established fact that a reader jki will be distracted by the readable contentjli of a page when looking at its layout.</div>
                                    <div className="icon-box"><i className="icon flaticon-approved"></i></div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="service-block-four col-xl-4 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                            <div className="inner-box">
                                <figure className="image"><img src="images/resource/services5-2.jpg" alt=""/></figure>
                                <div className="content-box">
                                    <div className="btn-box">
                                        <Link href="page-service-details" className="read-more"><i className="far fa-arrow-right"></i></Link>
                                    </div>
                                    <h4 className="title"><Link href="page-service-details">IT Consulting</Link></h4>
                                    <div className="text">It is a long established fact that a reader jki will be distracted by the readable contentjli of a page when looking at its layout.</div>
                                    <div className="icon-box"><i className="icon flaticon-diamond"></i></div>
                                </div>
                            </div>
                        </div>

                        <div className="service-block-four col-xl-4 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
                            <div className="inner-box">
                                <figure className="image"><img src="images/resource/services5-3.jpg" alt=""/></figure>
                                <div className="content-box">
                                    <div className="btn-box">
                                        <Link href="page-service-details" className="read-more"><i className="far fa-arrow-right"></i></Link>
                                    </div>
                                    <h4 className="title"><Link href="page-service-details">Data Analytics</Link></h4>
                                    <div className="text">It is a long established fact that a reader jki will be distracted by the readable contentjli of a page when looking at its layout.</div>
                                    <div className="icon-box"><i className="icon flaticon-graph"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default Services4