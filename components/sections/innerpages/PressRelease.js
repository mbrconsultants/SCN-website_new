import React, { useState, useEffect } from "react";
import endpoint from "../../../utils/endpoint";

const PressRelease = () => {
    const [data, setData] = useState([]); // Initialize as an empty array
    const [filePath, setFilePath] = useState(null);
    const [searchTitleInput, setSearchTitleInput] = useState([]);
    const [startDate, setStartDate] = useState("");
    const [stopDate, setStopDate] = useState("");
    const [title, setTitle] = useState("")

    const getData = async () => {
        try {
            const res = await endpoint.get("/press-release");
            console.log("Initial press release data:", res.data.data.data);
            setData(res.data.data?.data || []);
            setFilePath(res.data.file_path);
        } catch (err) {
            console.log(err);
        }
    };

    const handleSearch = async () => {
        try {
            let res;

            if (startDate && stopDate) {
                res = await endpoint.post(`/press-release-by-date-range`, {
                    startDate: startDate,
                    stopDate: stopDate,
                });
            } else if (title) {
                res = await endpoint.post(`/press-release-by-title`, {
                    title: title,
                });
            }

            if (res) {
                console.log("Full response:", res);
                console.log("Response data:", res.data.data); // Inspect the structure here

                // Attempt to set data based on response structure
                setData(res.data.data || res.data || []); // Ensure it matches your expected format
                setFilePath(res.data.file_path || null);
                setStartDate("");
                setStopDate("");
                setTitle("")
            }
        } catch (error) {
            console.error("Error during search:", error);
            setData([]); // Reset data on error
        }
    };


    useEffect(() => {
        getData();
    }, []);

    const formatDate = (dateString) => {
        if (!dateString || dateString === "0000-00-00") {
            return "N/A";
        }
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
        const date = new Date(dateString);
        if (isNaN(date.getTime())) {
            return "N/A";
        }
        const day = date.getDate();
        const month = months[date.getMonth()];
        const year = date.getFullYear();
        return `${day} ${month}, ${year}`;
    };

    return (
        <>
            <section className="about-section-nine">
                <div className="auto-container">
                    <div className="row align-items-start">
                        <div className="content-column col-lg-12 col-md-12 col-sm-12 wow fadeInLeft">
                            <h3 style={{ color: "#0EA476", textAlign: "center" }}>PRESS RELEASE</h3>

                            <div className="container mb-5">
                                <div className="row d-flex justify-content-between align-items-center" style={{ marginBottom: "20px" }}>
                                    <div className="col-md-3">
                                        <label>Start Date</label>
                                        <input
                                            type="date"
                                            value={startDate}
                                            onChange={(e) => setStartDate(e.target.value)}
                                            className="form-control"
                                            style={{ background: "none", boxShadow: "none", border: "1px solid #ccc", height: "40px", padding: "4px 8px" }}
                                        />
                                    </div>
                                    <div className="col-md-3">
                                        <label>Stop Date</label>
                                        <input
                                            type="date"
                                            value={stopDate}
                                            onChange={(e) => setStopDate(e.target.value)}
                                            className="form-control"
                                            style={{ background: "none", boxShadow: "none", border: "1px solid #ccc", height: "40px", padding: "4px 8px" }}
                                        />
                                    </div>
                                    <div className="col-md-3">
                                        <label>Search By Title</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Title"
                                            name="title"
                                            value={title}
                                            onChange={(e) => setTitle(e.target.value)}
                                            style={{ background: "none", boxShadow: "none", border: "1px solid #ccc", height: "40px", padding: "4px 8px" }}
                                        />
                                    </div>
                                    <div className="col-md-3 mt-4" style={{ textAlign: "center" }}>
                                        <button
                                            className="btn btn-success"
                                            onClick={handleSearch}
                                            style={{ padding: "8px 20px" }}
                                        >
                                            Search
                                        </button>
                                    </div>
                                </div>

                                <table className="table table-bordered w-100" style={{ marginTop: "10px" }}>
                                    <thead>
                                        <tr style={{ backgroundColor: "#f2f2f2" }}>
                                            <th>S/N</th>
                                            <th>TITLE</th>
                                            <th>DATE DELIVERED</th>
                                            <th>DOWNLOAD</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.length > 0 ? (
                                            data.map((prelease, index) => (
                                                <tr key={index} style={{ borderBottom: "1px solid #ddd" }}>
                                                    <td>{index + 1}</td>
                                                    <td>{prelease.title}</td>
                                                    <td>{formatDate(prelease.release_date)}</td>
                                                    <td>
                                                        <a
                                                            href={filePath + prelease.filename}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            <img
                                                                src="images/resource/icon.jpg"
                                                                alt="PDF Icon"
                                                                style={{ height: "40px", width: "40px" }}
                                                            />
                                                        </a>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="5" style={{ padding: "10px", textAlign: "center" }}>
                                                    No Press Releases available
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PressRelease;
