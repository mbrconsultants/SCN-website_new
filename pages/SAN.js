import React, { useState, useEffect }from "react";
import Layout from "@/components/layout/Layout";
import SAN from "@/components/sections/SAN";
import endpoint from "../utils/endpoint";


const CurrentJustices = () => {
     
  return (
    <>
      <Layout>
        <SAN />
      </Layout>
    </>
  );
};

export default CurrentJustices;
