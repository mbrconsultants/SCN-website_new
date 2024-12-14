import React from "react";
import Layout from "@/components/layout/Layout";
import PageTitle from "@/components/sections/PageTitle";
import About6 from "@/components/sections/About6";
import About3 from "@/components/sections/About3";
import Testimonial3 from "@/components/sections/Testimonial3";
import Funfact3 from "@/components/sections/Funfact3";
import Process6 from "@/components/sections/Process6";
import GallerySection from "@/components/sections/Gallery";
import NewLayout3 from "@/components/layout/NewLayout3"

const Gallery = () => {
  return (
    <>
      <NewLayout3
        headerStyle={7}
        footerStyle={3}>
        <PageTitle pageName="Gallery" />
        <GallerySection />
      </NewLayout3>
    </>
  );
};

export default Gallery;
