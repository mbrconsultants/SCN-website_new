import Link from "next/link"
import dynamic from 'next/dynamic'
const CounterUp = dynamic(() => import('@/components/elements/CounterUp'), {
    ssr: false,
})
const About2 = () => {
    return (
        <>
        <section className="about-section-three">
            <div className="auto-container">
                <div className="row">
                    <div className="content-column col-xl-6 col-lg-6 wow fadeInLeft" data-wow-delay="300ms">
                        <div className="inner-column">
                            <div className="sec-title">
                                <span className="sub-title">About Us</span>
                                <h2>Where architecture meets innovation</h2>
                                <div className="text">It is a long established fact that a reader will be distracted the readable content of a page when looking at its layout. Lorem Ipsum is simpl dummy text</div>
                            </div>
                            <div className="info-box">
                                <i className="icon flaticon-approved"></i>
                                <h4 className="title">Project Completed</h4>
                            </div>
                            <div className="text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>
                            
                            <div className="skills">
                                <div className="skill-item">
                                    <div className="skill-bar">
                                        <div className="bar-inner">
                                            <div className="bar progress-line" style={{width:"80%"}}></div>
                                        </div>
                                        <div className="skill-percentage">
                                            <div className="count-box"><CounterUp count={80} time={3} />% Success Rate</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="btn-box wow fadeInUp">
                                <Link href="page-about" className="theme-btn btn-style-one"><span className="btn-title">Read More <i className="icon fa fa-arrow-right"></i></span></Link>
                            </div>
                        </div>
                    </div>
    
                    <div className="image-column col-xl-6 col-lg-6">
                        <div className="inner-column wow fadeInRight" data-wow-delay="200ms">
                            <div className="image-box">
                                <figure className="image overlay-anim"><img src="images/resource/about3-1.jpg" alt="Image"/></figure>
                                <div className="exp-box wow fadeInUp">
                                    <div className="inner-box">
                                        <i className="icon flaticon-graph-1"></i>
                                        <div className="info">
                                            <div className="count-box"><CounterUp count={300} time={3} />+</div>
                                            <h6 className="counter-title">Project Complete</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="image-box style-two wow fadeInRight" data-wow-delay="500ms">
                                <figure className="image overlay-anim"><img src="images/resource/about3-2.jpg" alt="Image"/></figure>
                                <figure className="image overlay-anim"><img src="images/resource/about3-3.jpg" alt="Image"/></figure>
                                <div className="icon icon-dots2 bounce-x"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};
export default About2