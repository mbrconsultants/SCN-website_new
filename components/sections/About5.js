import dynamic from 'next/dynamic'
const CounterUp = dynamic(() => import('@/components/elements/CounterUp'), {
    ssr: false,
})
const About5 = () => {
    return (
        <>
            <section className="about-section-eight">
                <div className="auto-container">
                    <div className="row">
                        <div className="content-column col-lg-8 col-md-12 col-sm-12 wow fadeInLeft">
                            <div className="inner-column">
                                <div className="sec-title">
                                    <span className="sub-title">About Us</span>
                                    <h2>Transforming your business <br/> with technology.</h2>
                                    {/* <div className="text">It is a long established fact that a reader will be distracted by the readablejk content <br/> of a page when looking at its layout. Lorem Ipsum is simply dummyjl text of the <br> printing and typesetting industry.</div> */}
                                </div>
                                <div className="row">
                                    <div className="info-box-one col-lg-6 col-md-6 col-sm-6">
                                        <div className="inner-box">
                                            <i className="icon flaticon-graph-1"></i>
                                            <div className="about-icon">
                                                <div className="count-box"><CounterUp count={250} time={3} />+</div>
                                                <h6 className="counter-title">Services we provide</h6>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="info-box-two col-lg-6 col-md-6 col-sm-6">
                                        <div className="inner-box">
                                            <ul className="clients-thumb">
                                                <li><img src="images/resource/about8-thumb1.jpg" alt="Image"/></li>
                                                <li><img src="images/resource/about8-thumb2.jpg" alt="Image"/></li>
                                                <li><img src="images/resource/about8-thumb3.jpg" alt="Image"/></li>
                                                <li><i className="icon fa fa-plus"></i></li>
                                            </ul>
                                            <div className="counter">
                                                <div className="count-box"><CounterUp count={3000} time={3} />+</div>
                                                <h6 className="counter-title">Experience Team</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="author-box">
                                    <div className="inner-box">
                                        <div className="image"><img src="images/resource/about8-thumb4.jpg" alt="Image"/></div>
                                        <div className="author-info">
                                            <h5 className="name">Ariene McCoy</h5>
                                            <div className="designation">Medical Assistant</div>
                                        </div>
                                    </div>
                                    <div className="author-sign">
                                        <img src="images/resource/sign-1.jpg" alt="Signature"/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="image-column col-lg-4 wow fadeInRight" data-wow-delay="300ms">
                            <div className="inner-column">
                                <div className="image-box one">
                                    <figure className="image overlay-anim"><img src="images/resource/about8-1.jpg" alt="Image"/></figure>
                                    <figure className="image-2 overlay-anim"><img src="images/resource/about8-2.jpg" alt="Image"/></figure>
                                    <span className="icon-dots"></span>
                                </div>
                                <div className="experience-box">
                                    <div className="inner-box wow fadeInUp" data-wow-delay="900ms">
                                        <i className="icon fa fa-award"></i>
                                        <div className="about-icon">
                                            <h4 className="count">230+</h4>
                                            <div className="text">Project Complete</div>
                                        </div>
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
export default About5