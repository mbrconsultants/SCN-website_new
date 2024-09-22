import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 2,
	spaceBetween: 30,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	loop: true,
	breakpoints:{
		320: {
			slidesPerView: 1,
			// spaceBetween: 30,
		},
		575: {
			slidesPerView: 1,
			// spaceBetween: 30,
		},
		767: {
			slidesPerView: 2,
			// spaceBetween: 30,
		},
		991: {
			slidesPerView: 2,
			// spaceBetween: 30,
		},
		1199: {
			slidesPerView: 2,
			// spaceBetween: 30,
		},
		1350: {
			slidesPerView: 2,
			// spaceBetween: 30,
		},
	}
};
const Testimonial1 = () => {
	return (
	<>
		<section className="testimonial-section">
			<div className="bg bg-image" style={{ backgroundImage: 'url(images/background/2.jpg)' }}></div>
			<div className="auto-container">
				<div className="sec-title light text-center">
					<span className="sub-title">client testimonial</span>
					<h2>Designing spaces <br/> that inspire</h2>
				</div>
						<div className="carousel-outer">
							<Swiper {...swiperOptions} className="two-items-carousel owl-carousel owl-theme disable-navs">
								<SwiperSlide>
									<div className="testimonial-block">
										<div className="inner-box">
											<div className="content-box">
												<div className="image-box">
													<figure className="image"><img src="/images/resource/testi1-thumb1.jpg" alt="Image"/></figure>
													<div className="quote-icon"><span className="icon fa fa-quote-right"></span></div>
												</div>
												<div className="text">It is a long established fact that a reader will be distracted  the jkl readable content of a page when looking at its layout. Many desktop publishing packages and web pagejk editors now use Lorem Ipsumk</div>
												<h5 className="name">Bogur Rifar</h5>
												<span className="designation">Project Manager</span>
												<div className="rating">
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
												</div>
											</div>
										</div>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="testimonial-block">
										<div className="inner-box">
											<div className="content-box">
												<div className="image-box">
													<figure className="image"><img src="/images/resource/testi1-thumb2.jpg" alt="Image"/></figure>
													<div className="quote-icon"><span className="icon fa fa-quote-right"></span></div>
												</div>
												<div className="text">It is a long established fact that a reader will be distracted  the jkl readable content of a page when looking at its layout. Many desktop publishing packages and web pagejk editors now use Lorem Ipsumk</div>
												<h5 className="name">Jenny Wilson</h5>
												<span className="designation">Software Development Manager</span>
												<div className="rating">
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
												</div>
											</div>
										</div>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="testimonial-block">
										<div className="inner-box">
											<div className="content-box">
												<div className="image-box">
													<figure className="image"><img src="/images/resource/testi1-thumb1.jpg" alt="Image"/></figure>
													<div className="quote-icon"><span className="icon fa fa-quote-right"></span></div>
												</div>
												<div className="text">It is a long established fact that a reader will be distracted  the jkl readable content of a page when looking at its layout. Many desktop publishing packages and web pagejk editors now use Lorem Ipsumk</div>
												<h5 className="name">Bogur Rifar</h5>
												<span className="designation">Project Manager</span>
												<div className="rating">
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
												</div>
											</div>
										</div>
									</div>
								</SwiperSlide>
							</Swiper>
						</div>
			</div>
		</section>
	</>
	);
};
export default Testimonial1
