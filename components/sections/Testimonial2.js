import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 3,
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
			slidesPerView: 3,
			// spaceBetween: 30,
		},
		1350: {
			slidesPerView: 3,
			// spaceBetween: 30,
		},
	}
};
const Testimonial1 = () => {
	return (
	<>
		<section className="testimonial-section-two pt-0">
			<div className="auto-container">
				<div className="sec-title text-center">
					<span className="sub-title">clients review</span>
					<h2>Transforming spaces into <br/> works of art</h2>
				</div>
				<div className="carousel-outer">
					<Swiper {...swiperOptions} className="team-carousel owl-carousel owl-theme default-navs">
						<SwiperSlide>
							<div className="testimonial-block-two">
								<div className="inner-box">
									<div className="info-box">
										<div className="content-box">
											<span className="quote-icon fa fa-quote-right"></span>
											<div className="text">There are many variations of passages of lk Lorem Ipsum available, but the majority hjk have suffered alteration in some</div>
										</div>
										<div className="bottom-box">
											<figure className="thumb"><img src="images/resource/testi2-thumb1.jpg" alt="Image"/></figure>
											<div className="author-info">
												<h6 className="name">Leslie Alexander</h6>
												<span className="designation">Software Developer</span>
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
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="testimonial-block-two">
								<div className="inner-box">
									<div className="info-box">
										<div className="content-box">
											<span className="quote-icon fa fa-quote-right"></span>
											<div className="text">There are many variations of passages of lk Lorem Ipsum available, but the majority hjk have suffered alteration in some</div>
										</div>
										<div className="bottom-box">
											<figure className="thumb"><img src="images/resource/testi2-thumb2.jpg" alt="Image"/></figure>
											<div className="author-info">
												<h6 className="name">Esther Howard</h6>
												<span className="designation">Team Leader</span>
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
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="testimonial-block-two">
								<div className="inner-box">
									<div className="info-box">
										<div className="content-box">
											<span className="quote-icon fa fa-quote-right"></span>
											<div className="text">There are many variations of passages of lk Lorem Ipsum available, but the majority hjk have suffered alteration in some</div>
										</div>
										<div className="bottom-box">
											<figure className="thumb"><img src="images/resource/testi2-thumb3.jpg" alt="Image"/></figure>
											<div className="author-info">
												<h6 className="name">Savannah Nguyen</h6>
												<span className="designation">Ethical Hacker</span>
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
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="testimonial-block-two">
								<div className="inner-box">
									<div className="info-box">
										<div className="content-box">
											<span className="quote-icon fa fa-quote-right"></span>
											<div className="text">There are many variations of passages of lk Lorem Ipsum available, but the majority hjk have suffered alteration in some</div>
										</div>
										<div className="bottom-box">
											<figure className="thumb"><img src="images/resource/testi2-thumb1.jpg" alt="Image"/></figure>
											<div className="author-info">
												<h6 className="name">Esther Howard</h6>
												<span className="designation">Web Designer</span>
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
