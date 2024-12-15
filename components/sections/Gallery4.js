import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import React, { useState, useEffect } from "react";
import BlogRecentSection from "./RecentNews";
import endpoint from "../../utils/endpoint";

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 4,
    spaceBetween: 0,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
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
    },
};
const Gallery4 = () => {
    const [data, setData] = useState([]);
    const [fileURL, setFilePath] = useState([]);

    const getFeaturedImages = async () => {
        try {
            const res = await endpoint.get("/home");
            setData(res.data.data.mediapix);
            setFilePath(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getFeaturedImages();
    }, []);
    return (
        <>
            <section className="gallery-section">
                <h3
                    className="text-center"
                    style={{ color: "#0EA476" }}>
                    {" "}
                    Featured Images <span className="icon flaticon-camera"></span>{" "}
                </h3>
                <Swiper
                    {...swiperOptions}
                    className="gallery-carousel owl-carousel owl-theme">
                    {data.map((images, index) => (
                        <SwiperSlide key={index}>
                            <div className="gallery-block">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image">
                                            <img
                                                src={
                                                    process.env.NEXT_PUBLIC_UPLOAD_URL + images.image_link
                                                }
                                                alt={images.image_description}
                                                style={{ height: "250px" }}
                                            />
                                        </figure>
                                        <div className="overlay">
                                            <Link
                                                href="/gallery"
                                                className="icon">
                                                <i className="fa fa-expand"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
        </>
    );
};
export default Gallery4;
