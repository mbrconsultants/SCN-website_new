import React, { useState, useEffect } from "react";
import Link from "next/link";
import endpoint from "../../utils/endpoint";

const NewHomeNews3 = () => {

    const [data, setData] = useState([]);
    const [filePath, setFilePath] = useState();

    const getData = async () => {
        try {
            const res = await endpoint.get("/news-and-events");
            setData(res.data.data);
            setFilePath(res.data.file_path);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    const formattedDate = (dateString) => {
        const dateParts = dateString.split("-");
        if (dateParts.length !== 3) return dateString;

        const [year, month, day] = dateParts;
        return `${day}/${month}/${year}`;
    };

    const truncateText = (text, wordLimit) => {
        const words = text.split(" ");
        return words.length > wordLimit
            ? words.slice(0, wordLimit).join(" ") + "..."
            : text;
    };

    return (
        <>
            <section className="news-section-four pt-2">
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <span className="sub-title"><span style={{display: 'inline-block',
                            width: '30px',
                            height: '3px',
                            backgroundColor: '#0EA476',
                            marginRight: '7px',
                            verticalAlign: 'middle'}}></span>Latest News</span>
                        <h2>News</h2>
                    </div>

                    <div className="row">
                        {data &&
                            data.slice(0, 3).map((news, index) => (
                                <div className="news-block-four col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image">
                                                <Link href={`/news-details/${news.id}`}>
                                                    <img
                                                        src={
                                                            news.image
                                                                ? filePath + news.image
                                                                : "/images/resource/news/defaultNewsImg.jpg"
                                                        }
                                                        alt="Image"
                                                    />
                                                </Link>
                                            </figure>
                                        </div>
                                        <div className="content-box">
                                            <ul className="post-meta">
                                                <li><i className="icon fa fa-user"></i> {news.placeby}</li>
                                                <li><i className="icon fa fa-calendar"></i> {formattedDate(news.created_at)}</li>
                                            </ul>
                                            <h4 className="title"><Link href={`/news-details/${news.id}`}>{truncateText(news.title, 15)}</Link></h4>
                                            <div className="text" dangerouslySetInnerHTML={{ __html: truncateText(news.content, 20)}}></div>
                                            <div className="btn-box">
                                                <Link href={`/news-details/${news.id}`} className="read-more rounded-pill" style={{width: '150px'}}><i className="icon fa fa-arrow-right"></i></Link>
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
export default NewHomeNews3