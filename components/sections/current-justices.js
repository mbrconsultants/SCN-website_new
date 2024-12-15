import React, { useState, useEffect } from "react";
import Link from "next/link";
import endpoint from "../../utils/endpoint";

const CurrentJustices = () => {
    const [data, setData] = useState([]);
    const [filePath, setFilePath] = useState();

    const getData = async () => {
        try {
            const res = await endpoint.get("/profile-current-justices");
            setData(res.data.data);
            // console.log("current justices images", res.data.file_path);
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
                    <span className="sub-title">
                        Current Justices of the Supreme Court
                    </span>
                    <h2 style={{ color: "#008751" }}>Current Justices</h2>
                </div>

                <div className="row">
                    {data &&
                        data.map((justice, index) => (
                            <div
                                className="team-block-seven col-lg-4 col-md-6 col-sm-12 wow"
                                key={index}
                            >
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image">
                                            <Link href={`justices/${justice.id}`}>
                                                <img
                                                    src={`${filePath}${justice.picture}`}
                                                    alt={justice.name}
                                                />
                                            </Link>
                                        </figure>
                                    </div>
                                    <div className="info-box">
                                        <h4 className="name">
                                            <Link href={`justices/${justice.id}`}>{justice.fullname}</Link>
                                        </h4>
                                        <span className="designation">{justice.designation}</span>
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
