import React, { useState, useEffect } from "react";
import Link from "next/link";
import endpoint from "../../utils/endpoint";

const CurrentJustices = () => {
    const [data, setData] = useState([]);
    const [filePath, setFilePath] = useState();

    const getData = async () => {
        try {
            const res = await endpoint.get("/senior-advocates-of-nigeria");
            console.log("sans data", res.data.data);
            setData(res.data.data);
            console.log("current sans images", res.data.file_path);
            setFilePath(res.data.file_path);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <section style={{ paddingTop: "80px" }}>
            <div className="auto-container">
                <div className="sec-title text-center">
                    <span className="sub-title">Current</span>
                    <h2 style={{ color: "#0EA476" }}> Senior Advocates of Nigeria</h2>
                </div>

                <div className="row">
                    {data &&
                        data.map((san, index) => (
                            <div
                                className="team-block-seven col-lg-4 col-md-6 col-sm-12 wow"
                                key={index}>
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image">
                                            <Link href={`sans/${san.id}`}>
                                                <img
                                                    src={`${filePath}${san.picture}`}
                                                    alt={san.name}
                                                />
                                            </Link>
                                        </figure>
                                    </div>
                                    <div className="info-box">
                                        <h4 className="name">
                                            <Link href={`sans/${san.id}`}>
                                                {san.fullname}
                                            </Link>
                                        </h4>
                                        <span className="designation">{san.position}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </section>
    );
};

export default CurrentJustices;
