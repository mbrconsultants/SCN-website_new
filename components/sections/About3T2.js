import Link from "next/link"

const About3T2 = () => {
    return (
        <>
        <section className="about-section-six">
            <div className="row g-0">
                <div className="image-column col-lg-6 col-md-12 col-sm-12 wow fadeInLeft">
                    <div className="inner-column">
                        <figure className="image wow fadeInLeft"><img src="images/resource/about6-1.jpg" alt="Image"/></figure>
                    </div>
                </div>
                
                <div className="content-column col-xl-6 col-lg-6 col-md-12 wow fadeInRight">
                    <div className="inner-column">
                        <div className="sec-title light">
                            <span className="sub-title">About us</span>
                            <h2>A smarter way to manage <br/> your money.</h2>
                            <div className="text">It is a long established fact that a reader will be distracted by the readable hkklj content of a page when looking at its layout. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                        </div>
    
                        <ul className="list-style-two light two-column">
                            <li><i className="fa fa-check-circle"></i> Mistakes To Avoid to design</li>
                            <li><i className="fa fa-check-circle"></i> Your Startup</li>
                            <li><i className="fa fa-check-circle"></i> Knew design About Fonts</li>
                            <li><i className="fa fa-check-circle"></i> Winning Metric for Your Startup</li>
                        </ul>
    
                        <div className="row">
                            <div className="info-box col-lg-6 col-md-6 col-sm-6">
                                <div className="inner-box">
                                    <i className="icon flaticon-diamond-2"></i>
                                    <h5 className="title">Full Time Employee</h5>
                                </div>
                            </div>
                            <div className="info-box col-lg-6 col-md-6 col-sm-6">
                                <div className="inner-box">
                                    <i className="icon flaticon-design-tool"></i>
                                    <h5 className="title">Award Winner</h5>
                                </div>
                            </div>
                        </div>
                        <div className="btn-box">
                            <Link href="page-about" className="theme-btn btn-style-one hover-light"><span className="btn-title">Read More <i className="icon fa fa-arrow-right"></i></span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default About3T2;