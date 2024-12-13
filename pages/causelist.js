import Calender from '@/components/sections/Calender';
import React from 'react';
import BlogRecentSection from '@/components/sections/RecentNews';
import Layout from "@/components/layout/Layout";
const Causelist = () => {
  return (
    <div>
      <Layout>
        <div className="row mt-5">
          <div className="col-md-12">
            <div className="sec-title text-center">
              <span className="sub-title">Explore our</span>
              <h2 style={{ color: "#0EA476" }}>Diary of Cases</h2>
            </div>
          </div>
        </div>
        <div className=" row mx-1 px-4 my-5">
          <div className="col-md-8">
            <Calender BlogRecentSection={BlogRecentSection} />
          </div>
          <div
            className="image-column col-lg-4 wow fadeInRight"
            data-wow-delay="300ms">
            <div className="inner-column">
             <BlogRecentSection />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Causelist;
