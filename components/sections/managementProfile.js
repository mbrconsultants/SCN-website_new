import React, { useState, useEffect } from "react";
import Link from "next/link";
import BlogRecentSection from "./RecentNews";
import endpoint from "../../utils/endpoint";
import { useParams } from "next/navigation";

const Profile = ({ data, filePath }) => {
    // const [data, setData] = useState({});
    // const [filePath, setFilePath] = useState();

    // const params = useParams();
    // const id = params?.id;
    // const getData = async () => {
    //     try {
    //         const res = await endpoint.get(`/management-staff/${id}`);



    //         const profileHtml = res.data.data.profile;

    //         // Split the profile into parts using </p> as the delimiter
    //         const profileParts = profileHtml.split(/<\/p>/i);

    //         // Re-add the </p> tag to the first part and leave the rest for the second part
    //         const firstPart = profileParts[0] + "</p>";
    //         const secondPart = profileParts.slice(1).join("</p>");

    //         // setData(res.data.data);
    //         setData({
    //             ...res.data.data,
    //             firstPart,
    //             secondPart,
    //         });
    //         // setData(res.data.data);
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
                                            style={{ height: "700px" }}
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
                                        <div
                                            style={{
                                                maxHeight: "550px",
                                                overflowY: "auto",
                                                paddingRight: "10px",
                                                textAlign: "justify",
                                                borderTop: "1px solid #008751",
                                                borderLeft: "1px solid #008751",
                                                // borderRadius: "8px",
                                                borderTopLeftRadius: "10px",
                                                // border: "1px solid #008751",
                                                paddingTop: "20px",
                                                scrollbarWidth: "thin", // For Firefox
                                                scrollbarColor: "#888 #008751",
                                                // padding: '10px',

                                            }}
                                        >
                                            <p className="team-details__top-text-3 p-3"
                                                style={{ textAlign: "justify" }}
                                                dangerouslySetInnerHTML={{
                                                    __html: data.profile,
                                                    // __html: data.firstPart,
                                                }}
                                            >

                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        {/* <div className="row">
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
                        </div> */}
                    </div>
                </div>
            </section>

        </>
    );
};

export default Profile;
