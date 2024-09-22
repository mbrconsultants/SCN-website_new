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
	navigation: true,
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
const Testimonial6 = () => {
	return (
	<>
    <section className="testimonial-section-six pt-0">
        <div className="auto-container">
            <div className="sec-title light mb-0">
                <span className="sub-title">Testimonial</span>
                <h2>Designing with passion, creating <br/> with precision</h2>
            </div>
            <div className="carousel-outer">
				<Swiper {...swiperOptions} className="three-items-carousel owl-carousel owl-theme default-navs">
					<SwiperSlide>
						<div className="testimonial-block-six">
							<div className="inner-box">
								<div className="info-box">
									<div className="content-box">
										<span className="quote-icon fa fa-quote-left"></span>
										<div className="text">There are many variations of passages of lk Lorem Ipsum available, but the majority hjk have suffered alteration in some</div>
									</div>
									<div className="bottom-box">
										<figure className="thumb"><img src="images/resource/testi6-thumb1.jpg" alt="Image"/></figure>
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
					<SwiperSlide>
						<div className="testimonial-block-six">
							<div className="inner-box">
								<div className="info-box">
									<div className="content-box">
										<span className="quote-icon fa fa-quote-left"></span>
										<div className="text">There are many variations of passages of lk Lorem Ipsum available, but the majority hjk have suffered alteration in some</div>
									</div>
									<div className="bottom-box">
										<figure className="thumb"><img src="images/resource/testi6-thumb2.jpg" alt="Image"/></figure>
										<div className="author-info">
											<h6 className="name">Jenny Wilson</h6>
											<span className="designation">Dog Trainer</span>
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
						<div className="testimonial-block-six">
							<div className="inner-box">
								<div className="info-box">
									<div className="content-box">
										<span className="quote-icon fa fa-quote-left"></span>
										<div className="text">There are many variations of passages of lk Lorem Ipsum available, but the majority hjk have suffered alteration in some</div>
									</div>
									<div className="bottom-box">
										<figure className="thumb"><img src="images/resource/testi6-thumb3.jpg" alt="Image"/></figure>
										<div className="author-info">
											<h6 className="name">Arlene McCoy</h6>
											<span className="designation">Medical Assistant</span>
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
                    <div className="testimonial-block-six">
                        <div className="inner-box">
                            <div className="info-box">
                                <div className="content-box">
                                    <span className="quote-icon fa fa-quote-left"></span>
                                    <div className="text">There are many variations of passages of lk Lorem Ipsum available, but the majority hjk have suffered alteration in some</div>
                                </div>
                                <div className="bottom-box">
                                    <figure className="thumb"><img src="images/resource/testi6-thumb1.jpg" alt="Image"/></figure>
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
export default Testimonial6
