import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 2,
	spaceBetween: 30,
	pagination:{clickable:true},
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
const Testimonial3 = () => {
	return (
	<>
    <section className="testimonial-section-three">
        <div className="auto-container">
            <div className="sec-title text-center">
                <span className="sub-title">Testimonial</span>
                <h2>Building a better future with <br/> timeless design</h2>
            </div>

            <div className="carousel-outer">
				<Swiper {...swiperOptions} className="testimonial-carousel owl-carousel owl-theme default-navs">
					<SwiperSlide>
						<div className="testimonial-block-three">
							<div className="inner-box">
								<span className="quote-icon fa fa-quote-right"></span>
								<div className="rating">
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
								</div>
								<div className="text">Lorem Ipsum is simply dummy text of the printing an type setting industry Many desktop publishing packages and web page nhklk editors now use Lorem Ipsum is simply dummy text of the printing</div>
								<div className="info-box">
									<figure className="thumb"><img src="images/resource/testi3-thumb1.jpg" alt="Image"/></figure>
									<h6 className="name">Albert Flores</h6>
									<span className="designation">Ethical Hacker</span>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="testimonial-block-three">
							<div className="inner-box">
								<span className="quote-icon fa fa-quote-right"></span>
								<div className="rating">
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
								</div>
								<div className="text">Lorem Ipsum is simply dummy text of the printing an type setting industry Many desktop publishing packages and web page nhklk editors now use Lorem Ipsum is simply dummy text of the printing</div>
								<div className="info-box">
									<figure className="thumb"><img src="images/resource/testi3-thumb2.jpg" alt="Image"/></figure>
									<h6 className="name">Leslie Alexander</h6>
									<span className="designation">Scrum Master</span>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="testimonial-block-three">
							<div className="inner-box">
								<span className="quote-icon fa fa-quote-right"></span>
								<div className="rating">
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
								</div>
								<div className="text">Lorem Ipsum is simply dummy text of the printing an type setting industry Many desktop publishing packages and web page nhklk editors now use Lorem Ipsum is simply dummy text of the printing</div>
								<div className="info-box">
									<figure className="thumb"><img src="images/resource/testi3-thumb1.jpg" alt="Image"/></figure>
									<h6 className="name">Albert Flores</h6>
									<span className="designation">Ethical Hacker</span>
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
export default Testimonial3
