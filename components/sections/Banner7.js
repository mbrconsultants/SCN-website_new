import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
const swiperOptions = {
        modules: [Autoplay, Pagination, Navigation],
        slidesPerView: 1,
        autoplay: {
            delay: 8500,
            disableOnInteraction: false,
        },
        loop: true,
        navigation: true
    };
const Banner7 = () => {
    return (
        <>
        <section className="banner-section-seven">

                <Swiper {...swiperOptions} className="banner-carousel owl-carousel owl-theme">
                    <SwiperSlide className="slide-item">
                        <div className="bg bg-image" style={{ backgroundImage: 'url(images/banner/banner-7.jpg)' }}
                        ></div>
                        <div className="auto-container">
                            <div className="content-box">
                                <h1 className="title">Creating spaces <br/> that tell your <br/> story about</h1>
                                <div className="text">Vestibulum rhoncus nisl ac gravida porta. Mauris eu sapien lacus. Etiam <br/> molestie justo neque, in convallis massa tempus in.</div>
                                <div className="btn-box">
                                    <Link href="page-about" className="theme-btn btn-style-one wow fadeInUp" data-wow-delay="900ms"><span className="btn-title">Read More</span></Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="slide-item">
                        <div className="bg bg-image" style={{ backgroundImage: 'url(images/banner/banner-7.jpg)' }}></div>
                        <div className="auto-container">
                            <div className="content-box">
                                <h1 className="title">Creating spaces <br/> that tell your <br/> story about</h1>
                                <div className="text">Vestibulum rhoncus nisl ac gravida porta. Mauris eu sapien lacus. Etiam <br/> molestie justo neque, in convallis massa tempus in.</div>
                                <div className="btn-box">
                                    <Link href="page-about" className="theme-btn btn-style-one wow fadeInUp" data-wow-delay="900ms"><span className="btn-title">Read More <i className="icon fa fa-arrow-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
        </section>
        </>
    );
};
export default Banner7