import Link from "next/link";
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
  pagination:{clickable:true},
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
const Project1 = () => {
	return (
	<>
    <section className="project-section">
        <div className="large-container">
            <div className="sec-title text-center light">
                <span className="sub-title">Latest Portfolio</span>
                <h2>Transforming spaces into <br/> works of art</h2>
            </div>
                        
            <div className="carousel-outer">
				<div className="swiper project-slider">
					<div className="swiper-wrapper">
						<Swiper {...swiperOptions}>
							<SwiperSlide>
								<div className="project-block">
									<div className="inner-box">
										<div className="image-box">
											<figure className="image"><Link href="page-project-details"><img src="/images/resource/project1-1.jpg" alt="Image"/></Link></figure>
											<div className="info-box">
												<span className="cat"><Link href="page-project-details">Ideas</Link></span>
												<h4 className="title">Awesome Interior Design</h4>
											</div>
										</div>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="project-block">
									<div className="inner-box">
										<div className="image-box">
											<figure className="image"><Link href="page-project-details"><img src="/images/resource/project1-2.jpg" alt="Image"/></Link></figure>
											<div className="info-box">
												<span className="cat"><Link href="page-project-details">Ideas</Link></span>
												<h4 className="title">Awesome Interior Design</h4>
											</div>
										</div>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="project-block">
									<div className="inner-box">
										<div className="image-box">
											<figure className="image"><Link href="page-project-details"><img src="/images/resource/project1-3.jpg" alt="Image"/></Link></figure>
											<div className="info-box">
												<span className="cat"><Link href="page-project-details">Ideas</Link></span>
												<h4 className="title">Awesome Interior Design</h4>
											</div>
										</div>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="project-block">
									<div className="inner-box">
										<div className="image-box">
											<figure className="image"><Link href="page-project-details"><img src="/images/resource/project1-4.jpg" alt="Image"/></Link></figure>
											<div className="info-box">
												<span className="cat"><Link href="page-project-details">Ideas</Link></span>
												<h4 className="title">Awesome Interior Design</h4>
											</div>
										</div>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="project-block">
									<div className="inner-box">
										<div className="image-box">
											<figure className="image"><Link href="page-project-details"><img src="/images/resource/project1-1.jpg" alt="Image"/></Link></figure>
											<div className="info-box">
												<span className="cat"><Link href="page-project-details">Ideas</Link></span>
												<h4 className="title">Awesome Interior Design</h4>
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
export default Project1