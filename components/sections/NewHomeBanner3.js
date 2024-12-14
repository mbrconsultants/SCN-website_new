import React, { useState, useEffect } from "react";
import endpoint from "../../utils/endpoint";
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
    const [data, setData] = useState([]);
    const [filePath, setFilePath] = useState();
  
    const getData = async () => {
      try {
        const res = await endpoint.get("/slider");
        setData(res.data.data);
        console.log("sliders", res.data.data)
        setFilePath(res.data.file_path);
      } catch (err) {
        console.log(err);
      }
    };
  
    useEffect(() => {
      getData();
    }, []);

    return (
        <>
        <section className="banner-section-seven">

                <Swiper {...swiperOptions} className="banner-carousel owl-carousel owl-theme" style={{ height: "600px" }}>
                {data &&
                    data.map((slide, index) => (
                        <SwiperSlide className="slide-item">
                            <div className="bg bg-image" style={{
                                    backgroundImage: `url(${filePath + slide.file_name})`,
                                    // zIndex: 0
                                }}
                            ></div>
                            {/* <div className="bg-new-home-3"></div> */}
                            {(slide.title || slide.description) ?
                            <div className="auto-container">
                                <div className="content-box" style={{backgroundColor: 'inherit'}}>
                                    <h3 className="title" style={{color: 'white'}}>{slide.title} </h3>
                                    <div className="text" style={{color: 'white', fontFamily:'Bahnschrift SemiCondensed', fontSize:'18px'}}>{slide.description}  </div>
                                    <div className="btn-box">
                                        <Link href="page-about" className="theme-btn btn-style-one wow fadeInUp" data-wow-delay="900ms"><span className="btn-title">History of court</span></Link>
                                    </div>
                                </div>
                            </div> : ''}
                        </SwiperSlide>
                    ))
                }
                </Swiper>
        </section>
        </>
    );
};
export default Banner7