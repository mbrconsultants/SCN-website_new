import React, { useState, useEffect } from "react";
import Link from "next/link";
import endpoint from "../../utils/endpoint";

const CJN = () => {
  const [data, setData] = useState({});
  const [filePath, setFilePath] = useState("");

  const getData = async () => {
    try {
      const res = await endpoint.get(`/cjn`);
      console.log("====================================");
      console.log(res.data);
      console.log("====================================");
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
    <section className="call-to-action-two">
      <div className="auto-container">
        <div
          className="outer-box"
          style={{ display: "flex", alignItems: "center" }}>
          <div
            className="image"
            style={{ flex: "0 0 40%", paddingRight: "20px" }}>
            <img
              src={`${filePath}${data.picture}`}
              alt={data.fullname || "Chief Justice of Nigeria"}
              style={{ width: "100%", height: "auto" }} // Adjusted image size
            />
            <div className="text-center mt-2">
              <h4 className="title">
                <Link href={`justice/${data.id}`}>
                  {data.title + " "}
                  {data.fullname}
                </Link>
                <br />
                <Link href={`justice/${data.id}`}>{data.designation}</Link>
              </h4>
            </div>
          </div>
          <div
            className="sec-title"
            style={{ flex: "0 0 60%" }}>
            {/* <span className="icon fa fa-phone"></span> */}

            <div className="text">
              <h4>Profile of the Chief Justice of Nigeria</h4>
              <p
                className="mx-5"
                dangerouslySetInnerHTML={{ __html: data.profile }}></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CJN;
