import React, { useState, useEffect } from "react";
import endpoint from "../../../utils/endpoint";

const SpeechList = () => {
  const [data, setData] = useState([]);
  const [filePath, setFilePath] = useState(null);
  const [searchTitleInput, setSearchTitleInput] = useState("");
  const [startDate, setStartDate] = useState("");
  const [stopDate, setStopDate] = useState("");
  const [author, setAuthor] = useState("");

  const getData = async () => {
    try {
      const res = await endpoint.get("/speeches");
      setData(res.data.data.data);
      setFilePath(res.data.file_path);
    } catch (err) {
      console.log(err);
    }
  };

  const search = async () => {
    try {
      let results = [];
      if (startDate && stopDate) {
        const dateRes = await endpoint.post("/speeches-search-by-date-range", {
          startDate,
          stopDate
        });
        results = dateRes.data.data;
      }

      if (author) {
        const authorRes = await endpoint.get(`/speeches-search-by-author/${author}`);
        results = authorRes.data.data;
      }

      if (searchTitleInput) {
        const titleRes = await endpoint.get(`/speeches-search-by-title/${searchTitleInput}`);
        results = titleRes.data.data;
      }

      setData(results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const formatDate = (dateString) => {
    if (!dateString || dateString === "0000-00-00") return "N/A";
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return "N/A";
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
                      style={{ background: "none", boxShadow: "none", border: "1px solid #ccc", height: "40px", padding: "4px 8px" }}
                    />
                  </div>
                  <div className="col-md-2">
                    <label>Stop Date</label>
                    <input
                      type="date"
                      className="form-control"
                      value={stopDate}
                      onChange={(e) => setStopDate(e.target.value)}
                      style={{ background: "none", boxShadow: "none", border: "1px solid #ccc", height: "40px", padding: "4px 8px" }}
                    />
                  </div>
                  <div className="col-md-3">
                    <label>Search By Author</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Author"
                      value={author}
                      onChange={(e) => setAuthor(e.target.value)}
                      style={{ background: "none", boxShadow: "none", border: "1px solid #ccc", height: "40px", padding: "4px 8px" }}
                    />
                  </div>
                  <div className="col-md-3">
                    <label>Search By Title</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Title"
                      value={searchTitleInput}
                      onChange={(e) => setSearchTitleInput(e.target.value)}
                      style={{ background: "none", boxShadow: "none", border: "1px solid #ccc", height: "40px", padding: "4px 8px" }}
                    />
                  </div>
                  <div className="col-md-2" style={{ textAlign: "center" }}>
                    <button className="btn btn-success" onClick={search} style={{ padding: "8px 20px" }}>
                      Search
                    </button>
                  </div>
                </div>
                <table className="table table-bordered" style={{ marginTop: "10px" }}>
                  <thead>
                    <tr style={{ backgroundColor: "#f2f2f2" }}>
                      <th>S/N</th>
                      <th>TITLE</th>
                      <th>AUTHOR</th>
                      <th>DATE DELIVERED</th>
                      <th>PREVIEW</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.length > 0 ? (
                      data.map((speech, index) => (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{speech.title}</td>
                          <td>{speech.author}</td>
                          <td>{formatDate(speech.date_delivered)}</td>
                          <td>
                            <a href={filePath + speech.pdf_name} target="_blank" rel="noopener noreferrer">
                              <img src="images/resource/icon.jpg" alt="PDF Icon" style={{ height: "40px", width: "40px" }} />
                            </a>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="5" style={{ textAlign: "center" }}>No Speeches available</td>
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

export default SpeechList;
