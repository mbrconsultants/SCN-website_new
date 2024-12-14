import React, { useState, useEffect }from "react";
import Layout from "@/components/layout/Layout";
import NewLayout3 from "@/components/layout/NewLayout3"
import PageTitle from "@/components/sections/PageTitle";
import SAN from "@/components/sections/SAN";
import endpoint from "../utils/endpoint";


const CurrentJustices = () => {
     
  return (
    <>
      <NewLayout3>
      <PageTitle pageName="Senior Advocate of Nigeria" />
        <SAN />
      </NewLayout3>
    </>
  );
};

export default CurrentJustices;
