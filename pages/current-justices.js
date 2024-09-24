import React, { useState, useEffect }from "react";
import Layout from "@/components/layout/Layout";
import CurrentJusticesList from "@/components/sections/current-justices";
import endpoint from "../utils/endpoint";


const CurrentJustices = () => {
     
  return (
    <>
      <Layout>
        <CurrentJusticesList />
      </Layout>
    </>
  );
};

export default CurrentJustices;
