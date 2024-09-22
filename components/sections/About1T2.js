import Link from "next/link"
const About1T2 = () => {
    return (
        <>
        <section className="about-section-two">
            <div className="row g-0">
                <div className="content-columnn col-lg-6 col-md-12 order-lg-2 wow fadeInRight">
                    <div className="inner-column">
                        <div className="sec-title alt">
                            <span className="sub-title">About Us</span>
                            <h2>Transforming your business with technology</h2>
                            <div className="text">It is a long established fact that a reader will be distracted by the readablejk content of a page when looking at its layout. Lorem Ipsum is simply dummyjl text of the printing and typesetting industry.</div>
                        </div>
                        <ul className="list-style-two two-column">
                            <li><i className="fa fa-check-circle"></i> Mistakes To Avoid to design</li>
                            <li><i className="fa fa-check-circle"></i> Your design here Startup</li>
                            <li><i className="fa fa-check-circle"></i> Knew About Fonts</li>
                            <li><i className="fa fa-check-circle"></i> Mistakes To Avoid to our costomer</li>
                            <li><i className="fa fa-check-circle"></i> Your Startup business our comm</li>
                            <li><i className="fa fa-check-circle"></i> Knew design About Fonts</li>
                        </ul>
                        <div className="btn-box">
                            <Link href="page-about" className="theme-btn btn-style-one"><span className="btn-title">Read More</span></Link>
                        </div>
                    </div>
                </div>
    
                
                <div className="image-column col-lg-6 col-md-12 wow fadeIn">
                    <div className="inner-column">
                        <figure className="image"><img src="images/resource/about2-1.jpg" alt="Image"/></figure>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};
export default About1T2