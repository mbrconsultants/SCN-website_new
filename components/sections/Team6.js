import Link from "next/link";
import React, { useLayoutEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Pagination, Thumbs } from 'swiper/modules';

const Team6 = () => {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);
	return (
	<>	
    <section className="team-section-six pt-0">
        <div className="auto-container">
            <div className="row">
                <div className="content-column col-xl-6 col-lg-6 order-lg-2 wow fadeInRight" data-wow-delay="300ms">
                    <div className="inner-column">
                        <div className="sec-title">
                            <span className="sub-title">MEET OUR TEAM MEMBER</span>
                            <h2>Designing with passion creating with </h2>
                            <div className="text">It is a long established fact that a reader will be distracted by the content of a page when looking at its layout. Lorem Ipsum is simply d</div>
                        </div>
					  <Swiper
						onSwiper={setThumbsSwiper}
						spaceBetween={10}
						autoPlay={1500}
						slidesPerView={3}
						freeMode={true}
						loop={true}
						watchSlidesProgress={true}
						modules={[FreeMode, Navigation, Pagination, Thumbs]}
						className="team-thumbs">
						<SwiperSlide className="swiper-slide">
							<img src="images/resource/team6-3.jpg" alt=""/>
						</SwiperSlide>
						<SwiperSlide className="swiper-slide">
							<img src="images/resource/team6-4.jpg" alt=""/>
						</SwiperSlide>
						<SwiperSlide className="swiper-slide">
							<img src="images/resource/team6-5.jpg" alt=""/>
						</SwiperSlide>
						<SwiperSlide className="swiper-slide">
							<img src="images/resource/team6-3.jpg" alt=""/>
						</SwiperSlide>
					  </Swiper>
                    </div>
                </div>

                <div className="image-column col-xl-6 col-lg-6">
                    <div className="inner-column wow fadeInLeft" data-wow-delay="200ms">
                        <figure className="image overlay-anim"><img src="images/resource/team6-1.jpg" alt="Image"/></figure>

                        <div className="slider-outer">
                            <div className="swiper-container team-slider">
                                <div className="swiper-wrapper">
						<Swiper
						spaceBetween={10}
						slidesPerView={1}
						loop={true}
						thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
						modules={[FreeMode, Navigation, Pagination, Thumbs]}>
						<SwiperSlide>
                                    <div className="team-block-six swiper-slide">
                                        <div className="inner-box">
                                            <figure className="thumb"><img src="images/resource/team6-3.jpg" alt="Image"/></figure>
                                            <h6 className="name">Albert Flores</h6>
                                            <div className="designation">Marketing Coordinator</div>
                                            <ul className="social-icons">
                                                <li><Link href="#"><i className="icon fab fa-facebook-f"></i></Link></li>
                                                <li><Link href="#"><i className="icon fab fa-pinterest-p"></i></Link></li>
                                                <li><Link href="#"><i className="icon fab fa-linkedin"></i></Link></li>
                                                <li><Link href="#"><i className="icon fab fa-twitter"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
						</SwiperSlide>
						<SwiperSlide>
                                    <div className="team-block-six swiper-slide">
                                        <div className="inner-box">
                                            <figure className="thumb"><img src="images/resource/team6-4.jpg" alt="Image"/></figure>
                                            <h6 className="name">Albert Flores</h6>
                                            <div className="designation">Marketing Coordinator</div>
                                            <ul className="social-icons">
                                                <li><Link href="#"><i className="icon fab fa-facebook-f"></i></Link></li>
                                                <li><Link href="#"><i className="icon fab fa-pinterest-p"></i></Link></li>
                                                <li><Link href="#"><i className="icon fab fa-linkedin"></i></Link></li>
                                                <li><Link href="#"><i className="icon fab fa-twitter"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
						</SwiperSlide>
						<SwiperSlide>
                                    <div className="team-block-six swiper-slide">
                                        <div className="inner-box">
                                            <figure className="thumb"><img src="images/resource/team6-5.jpg" alt="Image"/></figure>
                                            <h6 className="name">Albert Flores</h6>
                                            <div className="designation">Marketing Coordinator</div>
                                            <ul className="social-icons">
                                                <li><Link href="#"><i className="icon fab fa-facebook-f"></i></Link></li>
                                                <li><Link href="#"><i className="icon fab fa-pinterest-p"></i></Link></li>
                                                <li><Link href="#"><i className="icon fab fa-linkedin"></i></Link></li>
                                                <li><Link href="#"><i className="icon fab fa-twitter"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
						</SwiperSlide>
						<SwiperSlide>
                                    <div className="team-block-six swiper-slide">
                                        <div className="inner-box">
                                            <figure className="thumb"><img src="images/resource/team6-3.jpg" alt="Image"/></figure>
                                            <h6 className="name">Albert Flores</h6>
                                            <div className="designation">Marketing Coordinator</div>
                                            <ul className="social-icons">
                                                <li><Link href="#"><i className="icon fab fa-facebook-f"></i></Link></li>
                                                <li><Link href="#"><i className="icon fab fa-pinterest-p"></i></Link></li>
                                                <li><Link href="#"><i className="icon fab fa-linkedin"></i></Link></li>
                                                <li><Link href="#"><i className="icon fab fa-twitter"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
						</SwiperSlide>
					  </Swiper>
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
export default Team6