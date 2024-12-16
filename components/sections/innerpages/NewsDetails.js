import React, { useState, useEffect } from "react";
import Link from 'next/link';
import BlogRecentSection from "../RecentNews";
import endpoint from "../../../utils/endpoint"
import { useParams } from "next/navigation";

const NewsDetails = () => {
    const [data, setData] = useState([]);
    const params = useParams();
    const id = params?.id;

    const getData = async () => {
        try {
            const res = await endpoint.get(`/news-and-event-detail/${id}`);
            setData(res.data.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    // Utility function to remove HTML tags
    const stripHtmlTags = (html) => {
        return html ? html.replace(/<[^>]*>?/gm, '') : ""; // Use regex to remove HTML tags
    };

    return (
        <>
            <section className="blog-details">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-7">
                            <div className="blog-details__left">
                                <div className="blog-details__content">
                                    <ul className="list-unstyled blog-details__meta">
                                        <li>
                                            <Link href="news-details">
                                                <i className="fas fa-user-circle"></i> {data.placeby}
                                            </Link>
                                        </li>
                                    </ul>
                                    <h3 className="blog-details__title" style={{ color: 'green' }}>
                                        {data.title}
                                    </h3>
                                    {/* Remove HTML tags from the content */}
                                    <div
                                        style={{
                                            maxHeight: "400px",
                                            overflowY: "auto",
                                            paddingRight: "10px",
                                            textAlign: "justify",
                                            borderTop: "1px solid #ddd",
                                            paddingTop: "20px",
                                            scrollbarWidth: "thin", // For Firefox
                                            scrollbarColor: "#888 #f1f1f1",
                                        }}
                                    >

                                        <p className="blog-details__text-2" style={{ textAlign: "justify" }}>
                                            {stripHtmlTags(data.content)}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-5">
                            <BlogRecentSection />
                        </div>
                    </div>
                </div>
            </section>


        </>
    );
};

export default NewsDetails;
