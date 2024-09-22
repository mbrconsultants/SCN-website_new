import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 4,
	spaceBetween: 30,
	navigation: true,
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
			slidesPerView: 4,
			// spaceBetween: 30,
		},
		1350: {
			slidesPerView: 4,
			// spaceBetween: 30,
		},
	}
};
const Project3 = () => {
	return (
	<>
		<section className="project-section-three">
			<div className="auto-container">
				<div className="sec-title mb-0">
					<span className="sub-title">Latest Portfolio</span>
					<h2>Building dreams one <br/> structure at a time</h2>
				</div>
			</div>
			<div className="carousel-outer">
				<div className="swiper project-slider">
					<Swiper {...swiperOptions} className="four-items-carousel owl-carousel owl-theme default-navs">
						<SwiperSlide>
							<div className="project-block-three">
								<div className="inner-box">
									<div className="image-box">
										<figure className="image"><img src="/images/resource/project3-1.jpg" alt="Image"/></figure>
									</div>
									<div className="info-box">
										<Link href="page-project-details" className="read-more"><i className="icon fa fa-arrow-right"></i></Link>
										<h5 className="text">Business Growth</h5>
										<h4 className="title"><Link href="page-project-details">Digital Business Path</Link></h4>
									</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="project-block-three">
								<div className="inner-box">
									<div className="image-box">
										<figure className="image"><img src="/images/resource/project3-2.jpg" alt="Image"/></figure>
									</div>
									<div className="info-box">
										<Link href="page-project-details" className="read-more"><i className="icon fa fa-arrow-right"></i></Link>
										<h5 className="text">Business Growth</h5>
										<h4 className="title"><Link href="page-project-details">Digital Business Path</Link></h4>
									</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="project-block-three">
								<div className="inner-box">
									<div className="image-box">
										<figure className="image"><img src="/images/resource/project3-3.jpg" alt="Image"/></figure>
									</div>
									<div className="info-box">
										<Link href="page-project-details" className="read-more"><i className="icon fa fa-arrow-right"></i></Link>
										<h5 className="text">Business Growth</h5>
										<h4 className="title"><Link href="page-project-details">Digital Business Path</Link></h4>
									</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="project-block-three">
								<div className="inner-box">
									<div className="image-box">
										<figure className="image"><img src="/images/resource/project3-4.jpg" alt="Image"/></figure>
									</div>
									<div className="info-box">
										<Link href="page-project-details" className="read-more"><i className="icon fa fa-arrow-right"></i></Link>
										<h5 className="text">Business Growth</h5>
										<h4 className="title"><Link href="page-project-details">Digital Business Path</Link></h4>
									</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="project-block-three">
								<div className="inner-box">
									<div className="image-box">
										<figure className="image"><img src="/images/resource/project3-1.jpg" alt="Image"/></figure>
									</div>
									<div className="info-box">
										<Link href="page-project-details" className="read-more"><i className="icon fa fa-arrow-right"></i></Link>
										<h5 className="text">Business Growth</h5>
										<h4 className="title"><Link href="page-project-details">Digital Business Path</Link></h4>
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
export default Project3