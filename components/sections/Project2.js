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
    <section className="">
        <div className="auto-container">
            <div className="sec-title text-left">
                {/* <span className="sub-title">Latest Portfolio</span> */}
                <h2 style={{color: '#2BB584'}}>Justices of the supreme court</h2>
            </div>
                        
            <div className="carousel-outer">
				<div className="swiper project-slider">
					<div className="swiper-wrapper">
						<Swiper {...swiperOptions} className="four-items-carousel owl-carousel owl-theme disable-navs default-dots">
							<SwiperSlide>
								<div className="project-block-two wow fadeInLeft">
									<div className="inner-box">
										<div className="image-box" style={{height: '400px'}}>
											<figure className="image"><img src="/images/resource/justices/kekere1.jpg" alt="Image"/></figure>
											<div className="info-box" style={{backgroundColor: '#2BB584'}}>
												<h5 className="title">Hon. Mr. Justice Kudirat Motonmori Olatokunbo Kekere-Ekun CFR</h5>
												<div className="cat">Ag Chief Justice of Nigeria</div>
											</div>
										</div>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="project-block-two wow fadeInLeft">
									<div className="inner-box">
										<div className="image-box" style={{height: '400px'}}>
											<figure className="image"><img src="/images/resource/justices/justicejohn2.jpg" alt="Image"/></figure>
											<div className="info-box" style={{backgroundColor: '#2BB584'}}>
												<h5 className="title">Hon. Mr. Justice John Inyang Okoro</h5>
												<div className="cat">Justice</div>
											</div>
										</div>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="project-block-two wow fadeInLeft">
									<div className="inner-box">
										<div className="image-box" style={{height: '400px'}}>
											<figure className="image"><img src="/images/resource/justices/justiceuwani3.jpeg" alt="Image"/></figure>
											<div className="info-box" style={{backgroundColor: '#2BB584'}}>
												<h5 className="title">Hon. Mr. Justice Uwani Musa Abba Aji</h5>
												<div className="cat">Justice</div>
											</div>
										</div>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="project-block-two wow fadeInLeft">
									<div className="inner-box">
										<div className="image-box" style={{height: '400px'}}>
											<figure className="image"><img src="/images/resource/justices/justicelawal4.jpg" alt="Image"/></figure>
											<div className="info-box" style={{backgroundColor: '#2BB584'}}>
												<h5 className="title">Hon. Mr. Justice M. Lawal Garba</h5>
												<div className="cat">Justice</div>
											</div>
										</div>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="project-block-two wow fadeInLeft">
									<div className="inner-box">
										<div className="image-box" style={{height: '400px'}}>
											<figure className="image"><img src="/images/resource/justices/justicehelen5.jpg" alt="Image"/></figure>
											<div className="info-box" style={{backgroundColor: '#2BB584'}}>
												<h5 className="title">Hon. Mr. Justice Helen M. Ogunwumiju</h5>
												<div className="cat">Justice</div>
											</div>
										</div>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="project-block-two wow fadeInLeft">
									<div className="inner-box">
										<div className="image-box" style={{height: '400px'}}>
											<figure className="image"><img src="/images/resource/justices/justiceibrahim6.jpg" alt="Image"/></figure>
											<div className="info-box" style={{backgroundColor: '#2BB584'}}>
												<h5 className="title">Hon. Mr. Justice Ibrahim Mohammed Musa Saulawa</h5>
												<div className="cat">Justice</div>
											</div>
										</div>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="project-block-two wow fadeInLeft">
									<div className="inner-box">
										<div className="image-box" style={{height: '400px'}}>
											<figure className="image"><img src="/images/resource/justices/justiceadamu7.jpg" alt="Image"/></figure>
											<div className="info-box" style={{backgroundColor: '#2BB584'}}>
												<h5 className="title">Hon. Mr. Justice Adamu Jauro</h5>
												<div className="cat">Justice</div>
											</div>
										</div>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="project-block-two wow fadeInLeft">
									<div className="inner-box">
										<div className="image-box" style={{height: '400px'}}>
											<figure className="image"><img src="/images/resource/justices/justicetijani8.jpg" alt="Image"/></figure>
											<div className="info-box" style={{backgroundColor: '#2BB584'}}>
												<h5 className="title">Hon. Mr. Justice Tijjani Abubakar</h5>
												<div className="cat">Justice</div>
											</div>
										</div>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="project-block-two wow fadeInLeft">
									<div className="inner-box">
										<div className="image-box" style={{height: '400px'}}>
											<figure className="image"><img src="/images/resource/justices/justiceagim9.jpg" alt="Image"/></figure>
											<div className="info-box" style={{backgroundColor: '#2BB584'}}>
												<h5 className="title">Hon. Mr. Justice Emmanuel A. Agim</h5>
												<div className="cat">Justice</div>
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