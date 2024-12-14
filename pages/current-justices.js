import React, { useState, useEffect }from "react";
import NewLayout3 from "@/components/layout/NewLayout3"
import Layout from "@/components/layout/Layout";
import CurrentJusticesList from "@/components/sections/current-justices";
import PageTitle from "@/components/sections/PageTitle";
import endpoint from "../utils/endpoint";


const CurrentJustices = () => {
     
  return (
    <>
      <NewLayout3>
        <PageTitle pageName="Current Justices" />
        <CurrentJusticesList />
      </NewLayout3>
    </>
  );
};

export default CurrentJustices;
