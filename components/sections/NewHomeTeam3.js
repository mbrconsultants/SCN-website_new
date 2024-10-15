import Link from "next/link"
import React, { useState, useEffect } from "react";
import endpoint from "../../utils/endpoint";

const NewHomeTeam3 = () => {
    const [data, setData] = useState([]);
    const [filePath, setFilePath] = useState();

    const getData = async () => {
        try {
            const res = await endpoint.get("/management-staff");
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
            <section className="team-section-four">
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <span className="sub-title">management</span>
                        <h2>Meet our management <br /> team</h2>
                    </div>

                    <div className="row">
                        {data &&
                            data.slice(0, 4).map((staff, index) => (
                                <div className="team-block-four col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image" 
                                            // style={{ height: "450px" }}
                                            >
                                                <Link href={`management/${staff.id}`}>
                                                    <img
                                                        src={staff.picture ? filePath + staff.picture : "/avatar.jpg"}
                                                        alt={staff.fullname}
                                                        style={{ height: "350px" }}
                                                    />
                                                </Link>
                                            </figure>
                                        </div>
                                        <div className="info-box mt-0" style={{border:'1px solid #0EA476'}}>
                                            <h4 className="name"><Link href={`management/${staff.id}`}>
                                                {staff.fullname}
                                            </Link></h4>
                                            <span className="designation"> {staff.position} </span>

                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>

                </div>
                <div className="text-center">
                    <Link
                        href="/cjn-profile"
                        className="theme-btn btn-style-one hover-light">
                        <span className="btn-title">View all...</span>
                    </Link>
                </div>
            </section>
        </>
    );
};
export default NewHomeTeam3