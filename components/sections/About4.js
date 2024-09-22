import Link from "next/link"
import dynamic from 'next/dynamic'
const CounterUp = dynamic(() => import('@/components/elements/CounterUp'), {
    ssr: false,
})
import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
const About4 = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
    <section className="about-section-seven">
        <div className="auto-container">
            <div className="row">
                <div className="content-column order-lg-2 col-xl-6 col-lg-6 col-md-12 col-sm-12 wow fadeInLeft">
                    <div className="inner-column">
                        <div className="sec-title light">
                            <span className="sub-title">About us</span>
                            <h2>Transforming spaces design creating dreams</h2>
                            <div className="text">It is a long established fact that a reader will be distracted by the readablejk content of a page when looking at its layout. Lorem Ipsum is simply dummyjl text of the printing and typesetting industry.</div>
                        </div>
                        <ul className="list-style-two light two-column">
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

                <div className="image-column col-xl-6 col-lg-6 col-md-12 col-sm-12 wow fadeInLeft" data-wow-delay="300ms">
                    <div className="inner-column">
                        <div className="video-box">
                            <figure className="image"><img src="images/resource/about7-1.jpg" alt="Image"/></figure>
                            <a onClick={() => setOpen(true)} className="play-btn"><i className="icon fa fa-play" aria-hidden="true"></i></a>
                        </div>
                        <div className="exp-box">
                            <div className="inner-box wow fadeInUp" data-wow-delay="900ms">
                                <i className="icon flaticon-diamond"></i>
                                <div className="about-icon">
                                    <div className="counter-title">Trusted by</div>
                                    <div className="count-box"><CounterUp count={253} time={3} /></div>
                                </div>
                            </div>
                        </div>
                        <div className="image-box wow fadeInUp" data-wow-delay="600ms">
                            <figure className="image overlay-anim"><img src="images/resource/about7-2.jpg" alt="Image"/></figure>
                        </div>
                        <span className="icon icon-dots3 bounce-y"></span>
                    </div>
                </div>
            </div>
        </div>
    </section>
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />
        </>
    );
};
export default About4