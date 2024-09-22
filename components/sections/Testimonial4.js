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
const Testimonial4 = () => {
	return (
	<>
    <section className="testimonial-section-four pt-0">
        <div className="auto-container">
            <div className="sec-title text-center">
                <span className="sub-title">Testimonial</span>
                <h2>Designs that leave a lasting <br/> impression</h2>
            </div>
            <div className="carousel-outer">
				<Swiper {...swiperOptions} className="testimonial-carousel owl-carousel owl-theme disable-navs">
					<SwiperSlide>
						<div className="testimonial-block-four">
							<div className="inner-box">
								<div className="info-box">
									<div className="inner">
										<h5 className="name">Kristin Watson</h5>
										<span className="designation">Web Designer</span>
										<figure className="thumb"><img src="images/resource/testi4-thumb1.jpg" alt=""/></figure>
										<span className="quote-icon fa fa-quote-left"></span>
									</div>
								</div>
								<div className="text">It is a long established fact that a reader will be distracted by the jkl readable content of a page when looking at its layout. Many hjl desktop publishing packages and web pagejk editors now use fgh Lorem Ipsumkl as their default model text.</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="testimonial-block-four">
							<div className="inner-box">
								<div className="info-box">
									<div className="inner">
										<h5 className="name">Devon Lane</h5>
										<span className="designation">Medical Assistant</span>
										<figure className="thumb"><img src="images/resource/testi4-thumb2.jpg" alt=""/></figure>
										<span className="quote-icon fa fa-quote-left"></span>
									</div>
								</div>
								<div className="text">It is a long established fact that a reader will be distracted by the jkl readable content of a page when looking at its layout. Many hjl desktop publishing packages and web pagejk editors now use fgh Lorem Ipsumkl as their default model text.</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="testimonial-block-four">
							<div className="inner-box">
								<div className="info-box">
									<div className="inner">
										<h5 className="name">Kristin Watson</h5>
										<span className="designation">Web Designer</span>
										<figure className="thumb"><img src="images/resource/testi4-thumb1.jpg" alt=""/></figure>
										<span className="quote-icon fa fa-quote-left"></span>
									</div>
								</div>
								<div className="text">It is a long established fact that a reader will be distracted by the jkl readable content of a page when looking at its layout. Many hjl desktop publishing packages and web pagejk editors now use fgh Lorem Ipsumkl as their default model text.</div>
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
export default Testimonial4
