import Link from "next/link"
import dynamic from 'next/dynamic'
const CounterUp = dynamic(() => import('@/components/elements/CounterUp'), {
    ssr: false,
})
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
const Banner6 = () => {
    return (
        <>
        <section className="banner-section-six">

                <Swiper {...swiperOptions} className="banner-carousel owl-carousel owl-theme">
                    <SwiperSlide className="slide-item">
                        <div className="bg bg-image" style={{ backgroundImage: 'url(images/banner/banner-6.jpg)' }}></div>
                        <div className="auto-container">
                            <div className="content-box">
                                <h1 className="title">Creating Harmony <br/> One Room at a Time</h1>
                                <div className="text">Vestibulum rhoncus nisl ac gravida porta. Mauris eu sapien lacus. Etiam <br/> molestie justo neque, in convallis massa tempus in.</div>
                                <div className="btn-box">
                                    <Link href="page-about" className="theme-btn btn-style-one wow fadeInUp" data-wow-delay="900ms"><span className="btn-title">Read More <i className="icon fa fa-arrow-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="slide-item">
                        <div className="bg bg-image" style={{ backgroundImage: 'url(images/banner/banner-6.jpg)' }}></div>
                        <div className="auto-container">
                            <div className="content-box">
                                <h1 className="title">Creating Harmony <br/> One Room at a Time</h1>
                                <div className="text">Vestibulum rhoncus nisl ac gravida porta. Mauris eu sapien lacus. Etiam <br/> molestie justo neque, in convallis massa tempus in.</div>
                                <div className="btn-box">
                                    <Link href="page-about" className="theme-btn btn-style-one wow fadeInUp" data-wow-delay="900ms"><span className="btn-title">Read More <i className="icon fa fa-arrow-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="info-box">
                    <h5 className="title">Success Rate</h5>
                    <div className="text">It is a long established fact that a reader will be design distracted by the readablejk content of a page when looking at its layout.</div>

                    <div className="skills">
                        <div className="skill-item">
                            <div className="skill-bar">
                                <div className="bar-inner">
                                    <div className="bar progress-line" style={{width:"90%"}}>
                                    </div>
                                </div>
                                <div className="skill-percentage">
                                    <div className="count-box"><CounterUp count={90} time={3} />%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="progress">Development 90%</div>
                </div>
        </section>
        </>
    );
};
export default Banner6