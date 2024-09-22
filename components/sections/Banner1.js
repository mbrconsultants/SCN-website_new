import Link from "next/link"
const Banner1 = () => {
    return (
        <>
            <section className="banner-section">
                <div className="icon shape-2"></div>
                <div className="icon icon-lines bounce-x"></div>
                <div className="bg-image wow fadeInLeft">
                    <img src="/images/banner/banner-1.jpg" alt=""/>
                    <div className="icon shape-1"></div>
                </div>
                <div className="auto-container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12"></div>
                        <div className="content-columnn col-lg-6">
                            <div className="inner-column">
                                <span className="sub-title wow fadeInUp" data-wow-delay="300ms">Innovation that Inspires</span>
                                <h1 className="title wow fadeInUp" data-wow-delay="600ms">Architecture Inspiring a World of Imagination</h1>
                                <div className="text wow fadeInUp" data-wow-delay="900ms">As an AI language model, I don't have personal opinions or points of view. However, I can tell you that design is a multifaceted field that encompasses various disciplines and industries loren ipsum</div>
                                <div className="btn-box wow fadeInUp" data-wow-delay="1200ms">
                                    <Link href="page-about" className="theme-btn btn-style-one"><span className="btn-title">Learn More</span></Link>
                                    <Link href="tel:+92(8800)9806" className="info-btn wow fadeInRight" data-wow-delay="1400ms">
                                        <i className="icon fa fa-phone"></i>
                                        <small>Requesting A Call:</small>
                                        <strong>(629) 555-0129</strong>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default Banner1