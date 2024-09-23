import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 4,
	spaceBetween: 0,
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
const Gallery4 = () => {
	return (
	<>
    <section className="gallery-section">
		<h3 className="text-center" style={{color: '#2BB584'}}> Featured Images <span className="icon flaticon-camera"></span> </h3>
		<Swiper {...swiperOptions} className="gallery-carousel owl-carousel owl-theme">
			<SwiperSlide>
            <div className="gallery-block">
                <div className="inner-box">
                    <div className="image-box">
                        <figure className="image"><img src="images/banner/scnbanner-2.JPG" alt="Image" style={{height: '250px'}}/></figure>
                        <div className="overlay"><Link href="page-projects" className="icon"><i className="fa fa-expand"></i></Link></div>
                    </div>
                </div>
            </div>
			</SwiperSlide>
			<SwiperSlide>
            <div className="gallery-block">
                <div className="inner-box">
                    <div className="image-box">
                        <figure className="image"><img src="images/banner/scnbanner-3.JPG" alt="Image" style={{height: '250px'}}/></figure>
                        <div className="overlay"><Link href="page-projects"><i className="icon fa fa-expand"></i></Link></div>
                    </div>
                </div>
            </div>
			</SwiperSlide>
			<SwiperSlide>
            <div className="gallery-block">
                <div className="inner-box">
                    <div className="image-box">
                        <figure className="image"><img src="images/banner/scnbanner-4.JPG" alt="Image" style={{height: '250px'}}/></figure>
                        <div className="overlay"><Link href="page-projects"><i className="icon fa fa-expand"></i></Link></div>
                    </div>
                </div>
            </div>
			</SwiperSlide>
			<SwiperSlide>
            <div className="gallery-block">
                <div className="inner-box">
                    <div className="image-box">
                        <figure className="image"><img src="images/banner/scnbanner-1.JPG" alt="Image" style={{height: '250px'}}/></figure>
                        <div className="overlay"><Link href="page-projects"><i className="icon fa fa-expand"></i></Link></div>
                    </div>
                </div>
            </div>
			</SwiperSlide>
			<SwiperSlide>
            <div className="gallery-block">
                <div className="inner-box">
                    <div className="image-box">
                        <figure className="image"><img src="images/banner/scnbanner-6.JPG" alt="Image" style={{height: '250px'}}/></figure>
                        <div className="overlay"><Link href="page-projects" className="icon"><i className="fa fa-expand"></i></Link></div>
                    </div>
                </div>
            </div>
			</SwiperSlide>
		</Swiper>
    </section>
	</>
	);
};
export default Gallery4
