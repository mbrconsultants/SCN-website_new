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

                <Swiper {...swiperOptions} className="banner-carousel owl-carousel owl-theme" style={{ height: '700px' }}>
                    <SwiperSlide className="slide-item">
                        <div className="bg bg-image" style={{ backgroundImage: 'url(images/banner/scnbanner-3.JPG)' }}></div>
                        <div className="auto-container">
                            <div className="content-box">
                                {/* <h1 className="title">Creating Harmony <br/> One Room at a Time</h1>
                                <div className="text">Vestibulum rhoncus nisl ac gravida porta. Mauris eu sapien lacus. Etiam <br/> molestie justo neque, in convallis massa tempus in.</div>
                                <div className="btn-box">
                                    <Link href="page-about" className="theme-btn btn-style-one wow fadeInUp" data-wow-delay="900ms"><span className="btn-title">Read More <i className="icon fa fa-arrow-right"></i></span></Link>
                                </div> */}
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="slide-item">
                        <div className="bg bg-image" style={{ backgroundImage: 'url(images/banner/scnbanner-2.JPG)' }}></div>
                        <div className="auto-container">
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="slide-item">
                        <div className="bg bg-image" style={{ backgroundImage: 'url(images/banner/scnbanner-4.JPG)' }}></div>
                        <div className="auto-container">
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="slide-item">
                        <div className="bg bg-image" style={{ backgroundImage: 'url(images/banner/scnbanner-1.JPG)' }}></div>
                        <div className="auto-container">
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="slide-item">
                        <div className="bg bg-image" style={{ backgroundImage: 'url(images/banner/scnbanner-5.JPG)' }}></div>
                        <div className="auto-container">
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="slide-item">
                        <div className="bg bg-image" style={{ backgroundImage: 'url(images/banner/scnbanner-6.JPG)' }}></div>
                        <div className="auto-container">
                        </div>
                    </SwiperSlide>
                </Swiper>
                {/* <div className="info-box">
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
                </div> */}
            </section>

            <section className="call-to-action-four">
                <div className="bg icon-cross"></div>
                <div className="auto-container">
                    <div className="outer-box">
                        <div className="title-box">
                            <h2 className="title" style={{color: '#2BB584'}}>Welcome</h2>
                            <div className="text">
                            Welcome to the Supreme Court of Nigeria website. The Supreme Court has original jurisdiction in any dispute between 
                            the Federation and a state or between states and also has appellate jurisdiction to hear and determine appeals from the Court of Appeal.
                            The Supreme Court of Nigeria consists of the Chief Justice of Nigeria and such number of Justices of the Supreme Court, not exceeding twenty-one, 
                            as may be prescribed by an Act of the National Assembly. Presently the Supreme Court is made up of the Chief Justice and twenty (20) other Justices.
                            </div>
                        </div>
                        <div className="btn-box">
                            {/* <Link href="page-contact" className="theme-btn btn-style-one light-bg"><span className="btn-title"><i className="icon fab fa-discord"></i> Discord</span></Link> */}
                            {/* <Link href="page-contact" className="theme-btn btn-style-one hover-light"><span className="btn-title">About Supreme Court</span></Link> */}
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};
export default Banner6