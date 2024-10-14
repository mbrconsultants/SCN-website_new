import React, { useState, useEffect } from "react";
import endpoint from "../../../utils/endpoint";

const PressRelease = () => {
  const [data, setData] = useState([]); // Initialize as an empty array
  const [filePath, setfilePath] = useState(null);
  const [searchTitleInput, setSearchTitleInput] = useState("");

  const getData = async () => {
    try {
      const res = await endpoint.get("/press-release");
      console.log("press release details", res.data.data.data);
      setData(res.data.data.data);
      setfilePath(res.data.file_path);
    } catch (err) {
      console.log(err);
    }
  };

  const searchTitle = async () => {
    try {
      const res = await endpoint.post(
        `/press-release-by-title/${searchTitleInput}`
      );
      console.log("Search results", res.data.data);
      setData(res.data.data); // Update the table with search results
      // Clear the title input field after search
      setSearchTitleInput("");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // Utility function to format date to "26 Sept, 2024" or return "N/A" for invalid dates
  const formatDate = (dateString) => {
    if (!dateString || dateString === "0000-00-00") {
      return "N/A";
    }

    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];
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
              <h3 style={{ color: "#009009", textAlign: "center" }}>
                PRESS RELEASE
              </h3>

              <div className="container mb-5">
                {/* Search Form Row */}
                <div
                  className="row d-flex justify-content-between align-items-center"
                  style={{ marginBottom: "20px" }}>
                  {/* Start Date */}
                  <div className="col-md-3">
                    <label>Start Date</label>
                    <input
                      type="date"
                      className="form-control"
                      placeholder="Start Date"
                      style={{
                        background: "none",
                        boxShadow: "none",
                        border: "1px solid #ccc",
                        height: "40px",
                        padding: "4px 8px",
                      }}
                    />
                  </div>

                  {/* Stop Date */}
                  <div className="col-md-3">
                    <label>Stop Date</label>
                    <input
                      type="date"
                      className="form-control"
                      placeholder="Stop Date"
                      style={{
                        background: "none",
                        boxShadow: "none",
                        border: "1px solid #ccc",
                        height: "40px",
                        padding: "4px 8px",
                      }}
                    />
                  </div>

                  {/* Search By Title */}
                  <div className="col-md-3">
                    <label>Search By Title</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Title"
                      name="title"
                      value={searchTitleInput}
                      onChange={(e) => setSearchTitleInput(e.target.value)}
                      style={{
                        background: "none",
                        boxShadow: "none",
                        border: "1px solid #ccc",
                        height: "40px",
                        padding: "4px 8px",
                      }}
                    />
                  </div>

                  {/* Search Button */}
                  <div
                    className="col-md-3 mt-4"
                    style={{ textAlign: "center" }}>
                    <button
                      className="btn btn-success"
                      onClick={searchTitle}
                      style={{ padding: "8px 20px" }}>
                      Search
                    </button>
                  </div>
                </div>

                {/* Data Table */}
                <table
                  className="table table-bordered w-100"
                  style={{ marginTop: "10px" }}>
                  <thead>
                    <tr style={{ backgroundColor: "#f2f2f2" }}>
                      <th style={{ padding: "10px" }}>S/N</th>
                      <th style={{ padding: "10px" }}>TITLE</th>
                      <th style={{ padding: "10px" }}>DATE DELIVERED</th>
                      <th style={{ padding: "10px" }}>DOWNLOAD</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.length > 0 ? (
                      data.map((prelease, index) => (
                        <tr
                          key={index}
                          style={{ borderBottom: "1px solid #ddd" }}>
                          <td style={{ padding: "10px" }}>{index + 1}</td>
                          <td style={{ padding: "10px" }}>{prelease.title}</td>
                          <td style={{ padding: "10px" }}>
                            {formatDate(prelease.release_date)}
                          </td>
                          <td style={{ padding: "10px" }}>
                            <a
                              href={filePath + prelease.filename}
                              target="_blank"
                              rel="noopener noreferrer">
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
                        <td
                          colSpan="5"
                          style={{ padding: "10px", textAlign: "center" }}>
                          No Speeches available
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
