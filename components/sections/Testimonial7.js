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
const Testimonial7 = () => {
	return (
	<>
		<section className="testimonial-section-seven">
			<div className="auto-container">
				<div className="sec-title light text-center">
					<span className="sub-title">Testimonial</span>
					<h2>A smarter way to manage <br/> your money</h2>
				</div>
				
				<div className="carousel-outer">
					<Swiper {...swiperOptions} className="two-items-carousel owl-carousel owl-theme">
						<SwiperSlide>
							<div className="testimonial-block-seven">
								<div className="inner-box">
									<figure className="thumb"><img src="images/resource/testi7-thumb1.jpg" alt=""/></figure>
									<h5 className="name">Cody Fisher</h5>
									<span className="designation">Web Designer</span>
									<div className="text">It is a long established fact that a reader will beinl distracted by the hjkljli readable content of a page jklilk when looking at its layout. It is a long hjl establishedl fact that a reader will be distracted by the hjkfhllil readableli content layout design by the boy and thedesign you</div>
									<div className="rating">
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<span>4.8</span>
									</div>
									<span className="quote-icon fa fa-quote-right"></span>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="testimonial-block-seven">
								<div className="inner-box">
									<figure className="thumb"><img src="images/resource/testi7-thumb2.jpg" alt=""/></figure>
									<h5 className="name">Brooklyn Simmons</h5>
									<span className="designation">President of Sales</span>
									<div className="text">It is a long established fact that a reader will beinl distracted by the hjkljli readable content of a page jklilk when looking at its layout. It is a long hjl establishedl fact that a reader will be distracted by the hjkfhllil readableli content layout design by the boy and thedesign you</div>
									<div className="rating">
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<span>4.8</span>
									</div>
									<span className="quote-icon fa fa-quote-right"></span>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="testimonial-block-seven">
								<div className="inner-box">
									<figure className="thumb"><img src="images/resource/testi7-thumb1.jpg" alt=""/></figure>
									<h5 className="name">Cody Fisher</h5>
									<span className="designation">Web Designer</span>
									<div className="text">It is a long established fact that a reader will beinl distracted by the hjkljli readable content of a page jklilk when looking at its layout. It is a long hjl establishedl fact that a reader will be distracted by the hjkfhllil readableli content layout design by the boy and thedesign you</div>
									<div className="rating">
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<span>4.8</span>
									</div>
									<span className="quote-icon fa fa-quote-right"></span>
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
export default Testimonial7
