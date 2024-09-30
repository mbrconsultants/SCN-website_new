import React, { useState, useEffect } from "react";
import endpoint from "../../utils/endpoint";
// You can add the following line if you're using Font Awesome icons
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'; // Import plus and minus icons

const Departments = () => {
  const [data, setData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null); // Track which accordion is open

  const getData = async () => {
    try {
      const res = await endpoint.get("/departments");
      console.log("department details", res.data.data);
      setData(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle accordion open/close
  };

  return (
    <>
      <section className="about-section-nine">
        <div className="auto-container">
          <div className="row">
            {data &&
              data.map((department, index) => (
                <div key={index} className="content-column col-lg-12 col-md-12 col-sm-12 wow fadeInLeft">
                  <div className="inner-column">
                    <div className="sec-title">
                      {/* Accordion Title with Plus/Minus Icon */}
                      <div
                        style={{
                          backgroundColor: "#f9f9f9",
                          padding: "10px", // Reduced padding
                          cursor: "pointer",
                          border: "1px solid #ddd",
                          marginBottom: "2px", // Further reduced space between items
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          borderRadius: "8px",
                          boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)", // Slightly smaller shadow
                        }}
                        onClick={() => toggleAccordion(index)}
                      >
                        <span style={{ fontSize: "18px", fontWeight: "bold", color: "#333" }}>
                          {department.Title}
                        </span>
                        {/* Display plus/minus icon depending on whether the accordion is open */}
                        {/* <FontAwesomeIcon icon={activeIndex === index ? faMinus : faPlus} /> */}
                      </div>

                      {/* Accordion Content (only show if active) */}
                      {activeIndex === index && (
                        <div
                          className="text"
                          style={{
                            textAlign: "justify",
                            padding: "10px", // Reduced padding for content
                            border: "1px solid #ddd",
                            borderTop: "none",
                            backgroundColor: "#fff",
                            borderRadius: "0 0 8px 8px",
                            boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)", // Slightly smaller shadow
                          }}
                        >
                          <div dangerouslySetInnerHTML={{ __html: department.Content }} />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Departments;
