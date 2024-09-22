import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 3,
	spaceBetween: 30,
    navigation: true,
	autoplay: {
		delay: 2500,
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
const Team1 = () => {
	return (
	<>
    <section className="team-section">    
        <div className="auto-container">
            <div className="sec-title mb-0">
                <span className="sub-title">creative members</span>
                <h2>Building a better future with <br/> timeless design</h2>
            </div>
                        
            <div className="carousel-outer">
				<div className="swiper project-slider">
                    <Swiper {...swiperOptions}>
                        <SwiperSlide>
                            <div className="team-block">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><Link href="page-team-details"><img src="/images/resource/team1-1.jpg" alt=""/></Link></figure>
                                    </div>
                                    <div className="info-box">
                                        <h4 className="name"><Link href="page-team-details">Courtney Henry</Link></h4>
                                        <span className="designation">Seller</span>
                                        <span className="share-icon fa fa-share-alt"></span>
                                        <div className="social-links">
                                            <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                                            <Link href="#"><i className="fab fa-twitter"></i></Link>
                                            <Link href="#"><i className="fab fa-linkedin-in"></i></Link>
                                            <Link href="#"><i className="fab fa-pinterest"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="team-block">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><Link href="page-team-details"><img src="/images/resource/team1-2.jpg" alt=""/></Link></figure>
                                    </div>
                                    <div className="info-box">
                                        <h4 className="name"><Link href="page-team-details">Theresa Webb</Link></h4>
                                        <span className="designation">Buyer</span>
                                        <span className="share-icon fa fa-share-alt"></span>
                                        <div className="social-links">
                                            <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                                            <Link href="#"><i className="fab fa-twitter"></i></Link>
                                            <Link href="#"><i className="fab fa-linkedin-in"></i></Link>
                                            <Link href="#"><i className="fab fa-pinterest"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="team-block">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><Link href="page-team-details"><img src="/images/resource/team1-3.jpg" alt=""/></Link></figure>
                                    </div>
                                    <div className="info-box">
                                        <h4 className="name"><Link href="page-team-details">Darell Steward</Link></h4>
                                        <span className="designation">General Manager</span>
                                        <span className="share-icon fa fa-share-alt"></span>
                                        <div className="social-links">
                                            <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                                            <Link href="#"><i className="fab fa-twitter"></i></Link>
                                            <Link href="#"><i className="fab fa-linkedin-in"></i></Link>
                                            <Link href="#"><i className="fab fa-pinterest"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="team-block">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><Link href="page-team-details"><img src="/images/resource/team1-1.jpg" alt=""/></Link></figure>
                                    </div>
                                    <div className="info-box">
                                        <h4 className="name"><Link href="page-team-details">Courtney Henry</Link></h4>
                                        <span className="designation">Seller</span>
                                        <span className="share-icon fa fa-share-alt"></span>
                                        <div className="social-links">
                                            <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                                            <Link href="#"><i className="fab fa-twitter"></i></Link>
                                            <Link href="#"><i className="fab fa-linkedin-in"></i></Link>
                                            <Link href="#"><i className="fab fa-pinterest"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
				</div>
			</div>
		</div>
	</section>
	</>
	);
};
export default Team1