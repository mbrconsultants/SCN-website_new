import React, { useState, useEffect } from "react";
import Link from "next/link";
import BlogRecentSection from "./RecentNews";
import endpoint from "../../utils/endpoint";
import { useParams } from "next/navigation";

const Profile = ({ data, filePath }) => {

    // const [data, setData] = useState([]);
    // const [filePath, setFilePath] = useState();

    // const params = useParams();
    // const id = params?.id;

    // const getData = async () => {
    //     try {
    //         const res = await endpoint.get(`/profile-justice/${id}`);
    //         setData(res.data.data);
    //         setFilePath(res.data.file_path);
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };

    // useEffect(() => {
    //     getData();
    // }, []);


    return (
        <>
            <section className="team-details">
                <div className="container pb-100">
                    <div className="team-details__top pb-70">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6">
                                <div className="team-details__top-left">
                                    <div className="team-details__top-img">
                                        <img
                                            // style={{ height: "500px", width: "500px" }}
                                            src={`${filePath}${data.picture}`}
                                            alt={data.fullname}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6">
                                <div className="team-details__top-right">
                                    <div className="team-details__top-content">
                                        <h3 className="team-details__top-name">{data.fullname}</h3>
                                        <p className="team-details__top-title">{data.position}</p>
                                        <p className="team-details__top-text-3"
                                            style={{ textAlign: "justify" }}
                                            dangerouslySetInnerHTML={{
                                                __html: data.firstPart,
                                            }}
                                        >

                                        </p>

                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="row">
                            <div className="col-xl-12 col-lg-12">
                                <div className="team-details__bottom-lef">
                                    <p className="team-details__bottom-left-text"
                                        style={{ textAlign: "justify" }}
                                        dangerouslySetInnerHTML={{
                                            __html: data.secondPart,
                                        }}
                                    >
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default Profile;
