import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const swiperOptions = {
        modules: [Autoplay, Pagination, Navigation],
        slidesPerView: 5,
        spaceBetween: 0,
        autoplay: {
            delay: 3500,
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
                slidesPerView: 3,
                // spaceBetween: 30,
            },
            1199: {
                slidesPerView: 4,
                // spaceBetween: 30,
            },
            1350: {
                slidesPerView: 5,
                // spaceBetween: 30,
            },
        }

        
    };
const Clients = () => {
    return (
        <>
        <section className="clients-section style-two">
            <div className="auto-container">
			<div className="anim-icons">
				<span className="icon-leaf leaf-1"></span>
				<span className="icon-leaf leaf-2"></span>
				<span className="icon-leaf leaf-3"></span>
			</div>
                <div className="sponsors-outer">
              <Swiper {...swiperOptions} className="clients-carousel owl-carousel owl-theme">
                  {/* Clients Block */}
                  <SwiperSlide className="slide-item">
                    <Link href="#"><img src="/images/resource/client.png" alt=""/></Link>
                  </SwiperSlide>
                  {/* Clients Block */}
                  <SwiperSlide className="slide-item">
                    <Link href="#"><img src="/images/resource/client.png" alt=""/></Link>
                  </SwiperSlide>
                  {/* Clients Block */}
                  <SwiperSlide className="slide-item">
                    <Link href="#"><img src="/images/resource/client.png" alt=""/></Link>
                  </SwiperSlide>
                  {/* Clients Block */}
                  <SwiperSlide className="slide-item">
                    <Link href="#"><img src="/images/resource/client.png" alt=""/></Link>
                  </SwiperSlide>
                  {/* Clients Block */}
                  <SwiperSlide className="slide-item">
                    <Link href="#"><img src="/images/resource/client.png" alt=""/></Link>
                  </SwiperSlide>
                  {/* Clients Block */}
                  <SwiperSlide className="slide-item">
                    <Link href="#"><img src="/images/resource/client.png" alt=""/></Link>
                  </SwiperSlide>
                  {/* Clients Block */}
                  <SwiperSlide className="slide-item">
                    <Link href="#"><img src="/images/resource/client.png" alt=""/></Link>
                  </SwiperSlide>
              </Swiper>
                </div>
            </div>
        </section>
        </>
    );
};
export default Clients
