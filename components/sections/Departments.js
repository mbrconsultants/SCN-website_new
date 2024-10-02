import Link from "next/link"
import React, { useState, useEffect } from "react";
import endpoint from "../../utils/endpoint";

const Departments = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);


    const getData = async () => {
        try {
          const res = await endpoint.get("/departments");
          console.log("departments details", res.data.data);
          setData(res.data.data);
        } catch (err) {
          console.log(err);
        } finally {
          setLoading(false);
        }
      };
  
    useEffect(() => {
      getData();
    }, []);


      // Utility function to remove HTML tags
    const stripHtmlTags = (html) => {
        return html.replace(/<[^>]*>?/gm, ''); // Use regex to remove HTML tags
    };

    if (loading) {
        return <div>Loading...</div>;
      }

    return (
        <>
            <section className="services-section-three">
                <div className="auto-container">
                <div className="sec-title text-center">
                        <span className="sub-title">Our Departments</span>
                        <h2 style={{color: '#2BB584'}}>Explore Supreme court departments</h2>
                    </div>
                    <div className="row">
                    {data && data.map((departments, index) => (
                        <div key={index} className="service-block-three col-xl-4 col-lg-6 col-md-6 col-sm-12 wow fadeInUp card shadow-sm">
                            <div className="inner-box">
                                <div className="content-box">
                                    <div className="title-box">
                                        <h4 className="title"><Link href={`/departments-details/${departments.ID}`}>{departments.Title}</Link></h4>
                                        <i className="icon flaticon-approved"></i>
                                    </div>
                                    <div className="text">
                                        {stripHtmlTags(departments.Content).length > 60
                                        ? stripHtmlTags(departments.Content).substring(0, 80) + '...'
                                        : stripHtmlTags(departments.Content)}
                                    </div>
                                    <div className="btn-box">
                                        <Link href={`/departments-details/${departments.ID}`} className="read-more">Read More<i className="btn-icon far fa-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};
export default Departments