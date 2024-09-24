import Link from "next/link"
import BlogRecentSection from "./RecentNews";

const ScnAct = () => {
    return (
        <>
            <section className="pricing-section-two">
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <h2 style={{ color: '#2BB584' }}>Supreme Court Acts <span className="fa fa-legal"></span></h2>
                    </div>

                    <div className="row">

                        <div className="pricing-block-two col-xl-8 col-lg-8 col-md-8 col-sm-12 wow fadeInUp">
                            <div className="inner-box">
                                <div className="title-box">
                                    <h5 className="title">The Supreme Court Acts</h5>
                                    <div className="text">Click on the Pdf Icon below to download our Act.</div>
                                    
                                </div>
                                <div className="content-box">
                                    <div>
                                        <figure className="image"><img src="images/resource/icon.jpg" alt="Image" style={{ height: '50px', width: '50px' }} /></figure>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>

                        <div
                            className="image-column col-xl-4 col-lg-4 col-md-4 col-sm-12 wow fadeInRight"
                            data-wow-delay="300ms">
                            <div className="inner-column">
                                <BlogRecentSection />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};
export default ScnAct