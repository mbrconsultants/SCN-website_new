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
                        <span className="sub-title"> <span style={{display: 'inline-block',
                            width: '30px',
                            height: '3px',
                            backgroundColor: '#0EA476',
                            marginRight: '7px',
                            verticalAlign: 'middle'}}></span> Meet the management team of supreme court</span>
                        <h2>Management Team</h2>
                    </div>

                    <div className="row">
                        {data &&
                            data.slice(0, 4).map((staff, index) => (
                                <div className="team-block-four col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image" 
                                            // style={{ height: "450px" }}
                                            style={{
                                                borderTopLeftRadius: "15px",
                                                // borderBottomRightRadius: "15px",
                                                borderTop: "4px solid #30373E", // Top left border
                                                borderRight: "none",
                                                // borderBottom: "4px solid #0EA476",
                                                borderLeft: "none",
                                              }}
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
                                        <div className="info-box mt-0" 
                                        // style={{background: '#0EA476', border:'1px solid #0EA476', 
                                        // borderBottomLeftRadius: "15px",
                                        // borderBottomRightRadius: "15px"}}
                                        style={{
                                            borderBottomRightRadius: "15px",
                                            background: '#0EA476',
                                            borderRight: "none",
                                            borderBottom: "4px solid #30373E",
                                            borderLeft: "none",
                                          }}
                                        >
                                            <h4 className="name text-white"><Link href={`management/${staff.id}`}>
                                                {staff.fullname}
                                            </Link></h4>
                                            <span className="designation text-white"> {staff.position} </span>

                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>

                </div>
                <div className="text-center">
                    <Link
                        href="/management-staff"
                        className="theme-btn btn-style-one hover-light rounded-pill">
                        <span className="btn-title">View all...</span>
                    </Link>
                </div>
            </section>
        </>
    );
};
export default NewHomeTeam3