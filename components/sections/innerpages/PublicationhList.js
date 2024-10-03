import React, { useState, useEffect } from "react";
import endpoint from "../../../utils/endpoint";

const PublicationList = () => {
  const [data, setData] = useState([]); // Initialize as an empty array
  const [filePath, setfilePath] = useState(null);

  const getData = async () => {
    try {
      const res = await endpoint.get("/publication");
      console.log("publication details", res.data.data.data);
      setData(res.data.data.data);
      setfilePath(res.data.file_path);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const formatDate = (dateString) => {
    if (!dateString || dateString === "0000-00-00") {
      return "N/A";
    }

    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];
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
              <h3 style={{ color: "#2BB584", textAlign: "center" }}>
                PUBLICATIONS
              </h3>

              <div className="container mb-5">

                {/* Data Table */}
                <table className="table table-bordered" style={{ marginTop: "10px" }}>
                  <thead>
                    <tr style={{ backgroundColor: "#f2f2f2" }}>
                      <th style={{ padding: "10px" }}>S/N</th>
                      <th style={{ padding: "10px" }}>TITLE</th>
                      <th style={{ padding: "10px" }}>AUTHOR</th>
                      <th style={{ padding: "10px" }}>PUBLICATION DATE</th>
                      <th style={{ padding: "10px" }}>PREVIEW</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.length > 0 ? (
                      data.map((publication, index) => (
                        <tr key={index} style={{ borderBottom: "1px solid #ddd" }}>
                          <td style={{ padding: "10px" }}>{index + 1}</td>
                          <td style={{ padding: "10px" }}>{publication.title}</td>
                          <td style={{ padding: "10px" }}>{publication.author}</td>
                          <td style={{ padding: "10px" }}>{formatDate(publication.publication_date)}</td>
                          <td style={{ padding: "10px" }}>
                            <a
                              href={filePath + publication.pdf_name}
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
                        <td
                          colSpan="5"
                          style={{ padding: "10px", textAlign: "center" }}
                        >
                          No Publication(s) available
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

export default PublicationList;
