import React, { useState, useEffect } from "react";
import endpoint from "../../../utils/endpoint";

const SpeechList = () => {
  const [data, setData] = useState([]); // Ensure `data` is initialized as an empty array
  const [filePath, setFilePath] = useState(null);
  const [searchTitleInput, setSearchTitleInput] = useState("");
  const [searchAuthorInput, setSearchAuthorInput] = useState("");
  const [startDate, setStartDate] = useState("");
  const [stopDate, setStopDate] = useState("");
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")

  const getData = async () => {
    try {
      const res = await endpoint.get("/speeches");
      setData(res.data.data?.data || []); // Ensure data is an array
      setFilePath(res.data.file_path);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSearch = async () => {
    try {
      let res;
  
      if (startDate && stopDate) {
        // Date range search - sent in the request body
        res = await endpoint.post(`/speeches-search-by-date-range`, {
          startDate: startDate,
          stopDate: stopDate,
        });
      } else if (author) {
        // Author search - included in the URL
        // res = await endpoint.post(`/speeches-search-by-author/${searchAuthorInput}`);
        res = await endpoint.post(`/speeches-search-by-author`, {
          author: author,
        });
      } else if (title) {
        // Title search - included in the URL
        // res = await endpoint.post(`/speeches-search-by-title/${searchTitleInput}`);
        res = await endpoint.post(`/speeches-search-by-title`, {
          title: title,
        });
      }
  
      if (res) {
        console.log(res.data); // Log response data for debugging
        // setData(res.data.data?.data || []); // Adjust based on actual data structure if needed
        setData(res.data.data || res.data || []); 
        setFilePath(res.data.file_path);
        setSearchTitleInput("");
        setSearchAuthorInput("");
        setStartDate("");
        setStopDate("");
        setTitle("");
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
    if (!dateString || dateString === "0000-00-00") return "N/A";
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    const date = new Date(dateString);
    return isNaN(date.getTime()) ? "N/A" : `${date.getDate()} ${months[date.getMonth()]}, ${date.getFullYear()}`;
  };

  return (
    <section className="about-section-nine">
      <div className="auto-container">
        <div className="row align-items-start">
          <div className="content-column col-lg-12 col-md-12 col-sm-12 wow fadeInLeft">
            <h3 style={{ color: "#0EA476", textAlign: "center" }}>SPEECHES AND PAPERS</h3>
            <div className="container mb-5">
            <div className="row d-flex justify-content-between align-items-end" style={{ marginBottom: "20px" }}>
                  <div className="col-md-2">
                    <label>Start Date</label>
                    <input
                      type="date"
                      className="form-control"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      style={{
                        background: "none",
                        boxShadow: "none",
                        border: "1px solid #ccc",
                        height: "40px",
                        padding: "4px 8px",
                      }}
                    />
                  </div>
                  <div className="col-md-2">
                    <label>Stop Date</label>
                    <input
                      type="date"
                      className="form-control"
                      value={stopDate}
                      onChange={(e) => setStopDate(e.target.value)}
                      style={{
                        background: "none",
                        boxShadow: "none",
                        border: "1px solid #ccc",
                        height: "40px",
                        padding: "4px 8px",
                      }}
                    />
                  </div>
                  <div className="col-md-3">
                    <label>Search By Author</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Author"
                      name="author"
                      value={author}
                      onChange={(e) => setAuthor(e.target.value)}
                      style={{
                        background: "none",
                        boxShadow: "none",
                        border: "1px solid #ccc",
                        height: "40px",
                        padding: "4px 8px",
                      }}
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
                      style={{
                        background: "none",
                        boxShadow: "none",
                        border: "1px solid #ccc",
                        height: "40px",
                        padding: "4px 8px",
                      }}
                    />
                  </div>
                  <div className="col-md-2" 
                    style={{ textAlign: "center" }}>
                    <button
                      className="btn btn-success"
                      onClick={handleSearch}
                      style={{ padding: "8px 20px" }}
                    >
                      Search
                    </button>
                  </div>
                </div>
              <table className="table table-bordered" style={{ marginTop: "10px" }}>
                <thead>
                  <tr style={{ backgroundColor: "#f2f2f2" }}>
                    <th style={{ padding: "10px" }}>S/N</th>
                    <th style={{ padding: "10px" }}>TITLE</th>
                    <th style={{ padding: "10px" }}>AUTHOR</th>
                    <th style={{ padding: "10px" }}>DATE DELIVERED</th>
                    <th style={{ padding: "10px" }}>PREVIEW</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.isArray(data) && data.length > 0 ? (
                    data.map((speech, index) => (
                      <tr key={index} style={{ borderBottom: "1px solid #ddd" }}>
                        <td style={{ padding: "10px" }}>{index + 1}</td>
                        <td style={{ padding: "10px" }}>{speech.title}</td>
                        <td style={{ padding: "10px" }}>{speech.author}</td>
                        <td style={{ padding: "10px" }}>{formatDate(speech.date_delivered)}</td>
                        <td style={{ padding: "10px" }}>
                          <a
                            href={filePath + speech.pdf_name}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img src="images/resource/icon.jpg" alt="PDF Icon" style={{ height: "40px", width: "40px" }} />
                          </a>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" style={{ padding: "10px", textAlign: "center" }}>No Speeches available</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeechList;
