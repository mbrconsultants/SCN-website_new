import React, { useState, useEffect } from "react";
import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import endpoint from "../../utils/endpoint";

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
        el: ".swiper-pagination",
        clickable: true,
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
const NewHomeProject3 = () => {
    const [data, setData] = useState([]);
    const [filePath, setFilePath] = useState();

    const getData = async () => {
        try {
            const res = await endpoint.get("/profile-current-justices");
            setData(res.data.data);
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
            {/* <style jsx>
    {`
      .info-box {
        background: #0EA476;
        transition: background-color 0.3s ease;
      }

      .info-box .title:hover {
        color: white;
      }
        .info-box .cat:hover {
        color: white;
      }
    `}
    </style> */}
            <style jsx>
                {`
            .info-box .title:hover {
                color: white;
            }
                .info-box .cat:hover {
                color: white;
            }
        `}
            </style>

            <style jsx>
                {`
            .image-box:hover .info-box .title {
                    color: white; /* Change text color to white on hover */
            }

            .image-box:hover .info-box .cat {
                color: white; /* Change designation text color to white on hover */
            }
        `}
            </style>

            <section className="project-section-twoo">
                {/* <div className="large-container"> */}
                <div className="container pt-4" style={{ paddingBottom: '0px' }}>
                    <div className="sec-title text-center">
                        <span className="sub-title">Meet the justices of Supreme Court</span>
                        <h2 style={{ color: "" }}>
                            Our justices
                        </h2>
                    </div>

                    <div className="carousel-outer">
                        <div className="swiper project-slider">
                            <div className="swiper-wrapper">
                                <Swiper
                                    {...swiperOptions}
                                    className="four-items-carousel owl-carousel owl-theme disable-navs default-dots">
                                    {data &&
                                        data.map((staff, index) => (
                                            <SwiperSlide key={index}>
                                                <div className="project-block-two wow fadeInLeft">
                                                    <div
                                                        className="inner-box"
                                                        style={{
                                                            borderTopLeftRadius: "15px",
                                                            borderBottomRightRadius: "15px",
                                                            borderTop: "4px solid #0EA476", // Top left border
                                                            borderRight: "none",
                                                            borderBottom: "4px solid #0EA476", // Bottom right border
                                                            borderLeft: "none",
                                                        }}
                                                    >
                                                        <Link href={`justices/${staff.id}`}>
                                                            <div
                                                                className="image-box"
                                                                style={{ height: "400px" }}>
                                                                <figure className="image">
                                                                    <img
                                                                        src={
                                                                            staff.picture
                                                                                ? filePath + staff.picture
                                                                                : "/avatar.jpg"
                                                                        }
                                                                        alt={staff.fullname}
                                                                        style={{ height: "400px" }}
                                                                    />
                                                                </figure>
                                                                <div className="info-box"
                                                                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
                                                                >
                                                                    <h4 className="title">{staff.fullname}</h4>
                                                                    <div className="cat">{staff.designation}</div>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <Link
                        href="/current-justices"
                        className="theme-btn btn-style-one hover-light rounded-pill">
                        <span className="btn-title">View all...</span>
                    </Link>
                </div>
            </section>
        </>
    );
};
export default NewHomeProject3;
