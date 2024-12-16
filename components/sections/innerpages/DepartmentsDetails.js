import React, { useState, useEffect } from "react";
import Link from 'next/link';
import BlogRecentSection from "../RecentNews";
import endpoint from "../../../utils/endpoint"
import { useParams } from "next/navigation";

const DepartmentsDetails = ({ data, stripHtmlTags }) => {
    // const [data, setData] = useState([]);
    // const params = useParams();
    // const id = params?.id;

    // const getData = async () => {
    //     try {
    //         const res = await endpoint.get(`/departments/${id}`);
    //         console.log("single department", res.data.data);
    //         setData(res.data.data);
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };

    // useEffect(() => {
    //     getData();
    // }, []);

    // // Utility function to remove HTML tags
    // const stripHtmlTags = (html) => {
    //     return html ? html.replace(/<[^>]*>?/gm, '') : ""; // Use regex to remove HTML tags
    // };

    return (
        <>
            <section className="blog-details">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-7">
                            <div className="blog-details__left">
                                <div className="blog-details__content">
                                    
                                    <h3 className="blog-details__title" style={{ color: 'green' }}>
                                        {data.Title && data.Title}
                                    </h3>

                                    <p className="blog-details__text-2" style={{ textAlign: "justify" }}>
                                        {data.Content && stripHtmlTags(data.Content)}
                                    </p>
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

export default DepartmentsDetails;
