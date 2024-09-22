import Link from "next/link"
const Banner2 = () => {
    return (
        <>
        <section className="banner-section-two">
            <div className="bg-image-outer wow fadeInRight">
                <div className="bg-image">
                    <img src="/images/banner/banner-2.jpg" alt="Image"/>
                    <div className="icon shape-3"></div>
                </div>
            </div>
            <div className="icon-dots"></div>
            <div className="auto-container">
                <div className="row">
                    <div className="content-columnn col-lg-6">
                        <div className="inner-column">
                            <span className="sub-title wow fadeInUp" data-wow-delay="300ms">Growth Accel erato</span>
                            <h1 className="title wow fadeInUp" data-wow-delay="600ms">Transform Skyline Redefining your Possibilities</h1>
                            <div className="text wow fadeInUp" data-wow-delay="900ms">We have been operating for over a decade, providing top-notch  our clients and building a strong track record in the industry</div>
                            <div className="btn-box wow fadeInUp" data-wow-delay="1200ms">
                                <Link href="page-about" className="theme-btn btn-style-one"><span className="btn-title">Read More</span></Link>
                                <Link href="tel:+92(8800)9806" className="info-btn">
                                    <i className="icon fa fa-phone"></i>
                                    <small>Need Help:</small>
                                    <strong>(208) 555-0112</strong>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12"></div>
                </div>
            </div>
        </section>
        </>
    );
};
export default Banner2