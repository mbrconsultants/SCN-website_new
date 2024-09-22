import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 3,
	spaceBetween: 30,
	autoplay: {
		delay: 2600,
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
const Process4 = () => {
	return (
	<>
    <section className="process-section-three pt-0">
        <div className="auto-container">
            <div className="sec-title mb-0">
                <span className="sub-title">Work process</span>
                <h2>Unlock the beauty within your <br/> walls design</h2>
            </div>

			<Swiper {...swiperOptions} className="team-carousel owl-carousel owl-theme default-navs">
							<SwiperSlide>
								<div className="process-block-three">
									<div className="inner-box">
										<div className="top-box">
											<div className="icon-box"><i className="icon flaticon-graph-1"></i></div>
											<h2 className="count">01</h2>
										</div>
										<h4 className="title"><a href="page-about.html">UI/UX Design</a></h4>
										<div className="text">It is a long established fact that a reader hk will be distracted by the readable contenthl of a page when looking at its layout. </div>
										<div className="btn-box">
											<Link href="page-about" className="read-more"><i className="icon fa fa-arrow-right"></i></Link>
										</div>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="process-block-three">
									<div className="inner-box">
										<div className="top-box">
											<div className="icon-box"><i className="icon flaticon-approved"></i></div>
											<h2 className="count">02</h2>
										</div>
										<h4 className="title"><a href="page-about.html">Cloud Services</a></h4>
										<div className="text">It is a long established fact that a reader hk will be distracted by the readable contenthl of a page when looking at its layout. </div>
										<div className="btn-box">
											<Link href="page-about" className="read-more"><i className="icon fa fa-arrow-right"></i></Link>
										</div>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="process-block-three">
									<div className="inner-box">
										<div className="top-box">
											<div className="icon-box"><i className="icon flaticon-diamond"></i></div>
											<h2 className="count">03</h2>
										</div>
										<h4 className="title"><a href="page-about.html">Network Solutions</a></h4>
										<div className="text">It is a long established fact that a reader hk will be distracted by the readable contenthl of a page when looking at its layout. </div>
										<div className="btn-box">
											<Link href="page-about" className="read-more"><i className="icon fa fa-arrow-right"></i></Link>
										</div>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="process-block-three">
									<div className="inner-box">
										<div className="top-box">
											<div className="icon-box"><i className="icon flaticon-graph-1"></i></div>
											<h2 className="count">01</h2>
										</div>
										<h4 className="title"><a href="page-about.html">UI/UX Design</a></h4>
										<div className="text">It is a long established fact that a reader hk will be distracted by the readable contenthl of a page when looking at its layout. </div>
										<div className="btn-box">
											<Link href="page-about" className="read-more"><i className="icon fa fa-arrow-right"></i></Link>
										</div>
									</div>
								</div>
							</SwiperSlide>
			</Swiper>
        </div>
    </section>
	</>
	);
};
export default Process4