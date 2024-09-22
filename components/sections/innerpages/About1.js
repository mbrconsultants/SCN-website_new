import Link from "next/link";
import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
const About1 = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
        <section className="about-section pt-80">
            <div className="auto-container">
                <div className="row">
                    <div className="image-column col-lg-6 col-md-12 col-sm-12">
                        <div className="about-image-wrapper">
                            <figure className="bg-shape zoom-one" data-wow-delay="600ms"><img src="/images/icons/object-1.png"
                                    alt="" /></figure>
                            <figure className="image-1" data-wow-delay="300ms"><img src="/images/resource/about-img-1.png"
                                    alt="" /></figure>
                            <figure className="image-2 wow zoomIn" data-wow-delay="900ms"><img src="/images/resource/about-img-2.png"
                                    alt="" /></figure>
                        </div>
                    </div>
        
                    <div className="content-column col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-column wow fadeInRight">
                            <div className="sec-title">
                                <span className="sub-title">Get to Know Dispensary</span>
                                <h2>We’re Using Quality Products</h2>
                                <span className="divider"></span>
                                <div className="text">There are many variations of passages of available but the majority have suffered alteration in some form.</div>
                            </div>
                            <div className="info-box">
                                <ul className="list-style-one">
                                    <li>Nsectetur cing elit.</li>
                                    <li>Suspe ndisse suscipit sagittis leo.</li>
                                    <li>Entum estibulum digni posuere.</li>
                                    <li>Donec tristique ante dictum oncus.</li>
                                </ul>
                                <a onClick={() => setOpen(true)} className="lightbox-image video-box"><img src="/images/resource//video-img.jpg" alt=""/><i className="icon fa fa-play" /><span className="ripple"></span></a>
                                
                            </div>
                            <Link href="shop-products" className="theme-btn btn-style-one">shop now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />
        </>
    );
};
export default About1
