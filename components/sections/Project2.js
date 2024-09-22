import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 4,
	spaceBetween: 30,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
  // Pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
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
			slidesPerView: 4,
			// spaceBetween: 30,
		},
		1350: {
			slidesPerView: 4,
			// spaceBetween: 30,
		},
	}
};
const Project2 = () => {
	return (
	<>
    <section className="project-section-two">
        <div className="large-container">
            <div className="sec-title text-center light">
                <span className="sub-title">Latest Portfolio</span>
                <h2>Inspired architecture for <br/> inspired living</h2>
            </div>
                        
            <div className="carousel-outer">
				<div className="swiper project-slider">
					<div className="swiper-wrapper">
						<Swiper {...swiperOptions} className="four-items-carousel owl-carousel owl-theme disable-navs default-dots">
							<SwiperSlide>
								<div className="project-block-two wow fadeInLeft">
									<div className="inner-box">
										<div className="image-box">
											<figure className="image"><img src="/images/resource/project2-1.jpg" alt="Image"/></figure>
											<div className="info-box">
												<h4 className="title">Archi Tech</h4>
												<div className="cat">Product Designer</div>
											</div>
										</div>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="project-block-two wow fadeInLeft">
									<div className="inner-box">
										<div className="image-box">
											<figure className="image"><img src="/images/resource/project2-2.jpg" alt="Image"/></figure>
											<div className="info-box">
												<h4 className="title">Design Hub</h4>
												<div className="cat">Group Disscusing</div>
											</div>
										</div>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="project-block-two wow fadeInLeft">
									<div className="inner-box">
										<div className="image-box">
											<figure className="image"><img src="/images/resource/project2-3.jpg" alt="Image"/></figure>
											<div className="info-box">
												<h4 className="title">Forma Teche</h4>
												<div className="cat">Psychologist</div>
											</div>
										</div>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="project-block-two wow fadeInLeft">
									<div className="inner-box">
										<div className="image-box">
											<figure className="image"><img src="/images/resource/project2-4.jpg" alt="Image"/></figure>
											<div className="info-box">
												<h4 className="title">Go Archi</h4>
												<div className="cat">Psychologist</div>
											</div>
										</div>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="project-block-two wow fadeInLeft">
									<div className="inner-box">
										<div className="image-box">
											<figure className="image"><img src="/images/resource/project2-1.jpg" alt="Image"/></figure>
											<div className="info-box">
												<h4 className="title">Archi Tech</h4>
												<div className="cat">Product Designer</div>
											</div>
										</div>
									</div>
								</div>
							</SwiperSlide>
						</Swiper>
					</div>
				</div>
			</div>
		</div>
	</section>
	</>
	);
};
export default Project2