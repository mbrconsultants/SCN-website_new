import Link from "next/link"
const Services2 = () => {
    return (
        <>
        <section className="services-section-two pt-0">
            <div className="auto-container">
                <div className="sec-title text-center">
                    <span className="sub-title">Our Services</span>
                    <h2>Creating beauty through <br/> architectural mastery</h2>
                </div>
                <div className="row">
                    <div className="service-block-two col-xl-4 col-lg-6 col-md-6 col-sm-12 wow fadeInUp">
                        <div className="inner-box">
                            <figure className="image"><img src="/images/resource/services2-1.jpg" alt=""/></figure>
                            <div className="content-box">
                                <i className="icon flaticon-approved"></i>
                                <h4 className="title"><Link href="page-service-details">Design Craft</Link></h4>
                                <div className="text">It is a long established fact that a reader jki will be distracted by the readable contentjli of a page when looking at its layout.</div>
                                <div className="btn-box">
                                    <Link href="page-service-details" className="read-more"><i className="far fa-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="service-block-two col-xl-4 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                        <div className="inner-box">
                            <figure className="image"><img src="/images/resource/services2-2.jpg" alt=""/></figure>
                            <div className="content-box">
                                <i className="icon flaticon-approved"></i>
                                <h4 className="title"><Link href="page-service-details">Build Master</Link></h4>
                                <div className="text">It is a long established fact that a reader jki will be distracted by the readable contentjli of a page when looking at its layout.</div>
                                <div className="btn-box">
                                    <Link href="page-service-details" className="read-more"><i className="far fa-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div className="service-block-two col-xl-4 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
                        <div className="inner-box">
                            <figure className="image"><img src="/images/resource/services2-3.jpg" alt=""/></figure>
                            <div className="content-box">
                                <i className="icon flaticon-approved"></i>
                                <h4 className="title"><Link href="page-service-details">Structure Pro</Link></h4>
                                <div className="text">It is a long established fact that a reader jki will be distracted by the readable contentjli of a page when looking at its layout.</div>
                                <div className="btn-box">
                                    <Link href="page-service-details" className="read-more"><i className="far fa-arrow-right"></i></Link>
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
export default Services2