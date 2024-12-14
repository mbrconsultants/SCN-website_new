import React, { useState, useEffect } from "react";
import Link from "next/link";
import BlogRecentSection from "./RecentNews";
import endpoint from "../../utils/endpoint";
import dynamic from 'next/dynamic';
const CounterUp = dynamic(() => import('@/components/elements/CounterUp'), {
  ssr: false,
})

const Profile = () => {
  const [data, setData] = useState([]);
  const [filePath, setFilePath] = useState();

  const getData = async () => {
    try {
      const res = await endpoint.get("/profile-cjn");
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
                    <p className="team-details__top-title">{data.designation}</p>
                    {/* <div className="team-details__social"><Link href="#"><i className="fab fa-facebook"></i></Link> <Link href="#"><i className="fab fa-pinterest-p"></i></Link> <Link href="#"><i className="fab fa-instagram"></i></Link> </div> */}
                    {/* <p className="team-details__top-text-1">I help my clients stand out and <br /> they help me grow.</p> */}
                    <p className="team-details__top-text-3"
                      style={{ textAlign: "justify" }}
                      dangerouslySetInnerHTML={{
                        __html: data.profile,
                      }}
                    >
                     
                    </p>
                    
                  </div>
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
