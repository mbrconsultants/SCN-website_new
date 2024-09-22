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
		disableOnInteraction: false,
	},
	loop: true,
	breakpoints:{
		320: {
			slidesPerView: 1,
			// spaceBetween: 30,
		},
		575: {
			slidesPerView: 2,
			// spaceBetween: 30,
		},
		767: {
			slidesPerView: 3,
			// spaceBetween: 30,
		},
		991: {
			slidesPerView: 3,
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
const Team2 = () => {
	return (
	<>
    <section className="team-section-two pt-0">
        <div className="auto-container">
            <div className="sec-title mb-0">
                {/* <span className="sub-title">Expert members</span> */}
                <h2 style={{color: '#2BB584'}}>Management Staff </h2>
            </div>
				<div className="swiper project-slider">
                    <Swiper {...swiperOptions} className="team-carousel owl-carousel owl-theme default-navs">
                        <SwiperSlide>
                            <div className="team-block-two wow fadeInUp">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><Link href="page-team-details"><img src="/images/resource/mgt/mgtsarki1.jpg" alt=""/></Link></figure> 
                                    </div>
                                    <div className="info-box">
                                        
                                        <h4 className="name"><Link href="page-team-details">MRS. Hajo Sarki Bello</Link></h4>
                                        <span className="designation">Cheif Registrar</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="team-block-two wow fadeInUp">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><Link href="page-team-details"><img src="/images/resource/mgt/mgtjego2.jpg" alt=""/></Link></figure> 
                                    </div>
                                    <div className="info-box">
                                        
                                        <h4 className="name"><Link href="page-team-details">Mr. Reuben M. A. Jego</Link></h4>
                                        <span className="designation">Deputy Cheif Registrar I</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="team-block-two wow fadeInUp">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><Link href="page-team-details"><img src="/images/resource/mgt/mgtbabasoro3.jpg" alt=""/></Link></figure> 
                                    </div>
                                    <div className="info-box">

                                        <h4 className="name"><Link href="page-team-details">Mr. Yusuf Abubakar Babasoro</Link></h4>
                                        <span className="designation">Deputy Cheif Registrar II</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="team-block-two wow fadeInUp">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><Link href="page-team-details"><img src="/images/resource/mgt/mgtsani4.jpg" alt=""/></Link></figure> 
                                    </div>
                                    <div className="info-box">
                                       
                                        <h4 className="name"><Link href="page-team-details">
                                        Mr. Ibrahim Sani Mohammed, mni</Link></h4>
                                        <span className="designation">Director Training</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="team-block-two wow fadeInUp">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><Link href="page-team-details"><img src="/images/resource/mgt/mgtakande5.jpg" alt=""/></Link></figure> 
                                    </div>
                                    <div className="info-box">
                                       
                                        <h4 className="name"><Link href="page-team-details">
                                        Dr. Festus Aweneri Akande</Link></h4>
                                        <span className="designation">Director Press and Information</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="team-block-two wow fadeInUp">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><Link href="page-team-details"><img src="/images/resource/mgt/mgtuka6.jpg" alt=""/></Link></figure> 
                                    </div>
                                    <div className="info-box">
                                       
                                        <h4 className="name"><Link href="page-team-details">
                                            Dr. Ochea Ochea Ukai</Link></h4>
                                        <span className="designation">Acting Medical Director</span>
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
export default Team2