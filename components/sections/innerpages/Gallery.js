import React, { useState, useEffect } from "react";
import Link from "next/link";
import endpoint from "../../../utils/endpoint";
import { useParams } from "next/navigation";

const Gallery = () => {
  const [data, setData] = useState([]);
  const [filePath, setFilePath] = useState("");
  const [groupName, setGroupName] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);

  const params = useParams();
  const id = params?.id;

  const getData = async (page = 1) => {
    try {
      const res = await endpoint.get(`/gallery-details/${id}?page=${page}`);
      setData(res.data.data.data);
      setFilePath(res.data.file_path);
      setGroupName(res.data.group_name);
      setCurrentPage(res.data.data.current_page);
      setTotalPages(res.data.data.last_page);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, [currentPage]);

  const openModal = (imageLink) => {
    setSelectedImage(filePath + imageLink);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      <section className="project-section-three">
        <div className="auto-container">
          <div className="row">
            {data.map((dat, index) => (
              <div
                className="col-lg-4 project-block-three"
                key={index}>
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <img
                        src={filePath + dat.image_link}
                        alt={dat.group_description}
                        onClick={() => openModal(dat.image_link)}
                        style={{ cursor: "pointer" }}
                      />
                    </figure>
                  </div>
                  <div className="info-box">
                    <h4 className="title">
                      <Link href="#">{dat.group_description}</Link>
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button
              className="btn btn-primary"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}>
              Previous
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              className="btn btn-primary"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}>
              Next
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
