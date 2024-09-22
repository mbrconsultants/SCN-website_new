import React, { useLayoutEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

const Testimonial5 = () => {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);
	return (
	<>
	<section className="testimonial-section-five pt-0">
		<div className="auto-container">
			<div className="sec-title text-center">
				<span className="sub-title">Testimonial</span>
				<h2>Designs that leave a lasting <br/> impression</h2>
			</div>
			<div className="anim-icons">
				<span className="icon-leaf leaf-1"></span>
				<span className="icon-leaf leaf-2"></span>
				<span className="icon-leaf leaf-3"></span>
			</div>

			<div className="testimonials">
				<div className="swiper-container testimonial-thumbs">
					<Swiper
					onSwiper={setThumbsSwiper}
					slidesPerView={3}
					modules={[Thumbs]}
					loop={true}
					spaceBetween={10}
					autoPlay={500}
					centeredSlides={true}
					className="testimonial-thumbs">
					<SwiperSlide className="swiper-slide">
						<img src="images/resource/testi5-thumb1.jpg" alt=""/>
					</SwiperSlide>
					<SwiperSlide className="swiper-slide">
						<img src="images/resource/testi5-thumb2.jpg" alt=""/>
					</SwiperSlide>
					<SwiperSlide className="swiper-slide">
						<img src="images/resource/testi5-thumb3.jpg" alt=""/>
					</SwiperSlide>
					<SwiperSlide className="swiper-slide">
						<img src="images/resource/testi5-thumb1.jpg" alt=""/>
					</SwiperSlide>
					</Swiper>				
				</div>
				<div className="swiper-container testimonial-slider">
					<Swiper
					spaceBetween={10}
					slidesPerView={1}
					loop={true}
					thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
					modules={[FreeMode, Navigation, Thumbs]}
					className="testimonial-slider">
					<SwiperSlide>
						<div className="testimonial-block-five swiper-slide">
							<div className="inner-box">
								<div className="info-box">
								<h5 className="name">Rafe</h5>
								<span className="designation">President of Sales</span>
								<div className="rating">
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
								</div>
								</div>
								<div className="text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look.</div>
								<div className="quote-icon"><i className="icon fa fa-quote-left"></i></div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="testimonial-block-five swiper-slide">
							<div className="inner-box">
								<div className="info-box">
								<h5 className="name">Rafe</h5>
								<span className="designation">President of Sales</span>
								<div className="rating">
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
								</div>
								</div>
								<div className="text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look.</div>
								<div className="quote-icon"><i className="icon fa fa-quote-left"></i></div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="testimonial-block-five swiper-slide">
							<div className="inner-box">
								<div className="info-box">
								<h5 className="name">Rafe</h5>
								<span className="designation">President of Sales</span>
								<div className="rating">
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
								</div>
								</div>
								<div className="text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look.</div>
								<div className="quote-icon"><i className="icon fa fa-quote-left"></i></div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="testimonial-block-five swiper-slide">
							<div className="inner-box">
								<div className="info-box">
								<h5 className="name">Rafe</h5>
								<span className="designation">President of Sales</span>
								<div className="rating">
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
								</div>
								</div>
								<div className="text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look.</div>
								<div className="quote-icon"><i className="icon fa fa-quote-left"></i></div>
							</div>
						</div>
					</SwiperSlide>
					</Swiper>			
				</div>
			</div>
		</div>
	</section>
	</>
	);
};
export default Testimonial5