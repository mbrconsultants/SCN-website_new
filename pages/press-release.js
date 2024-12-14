import React from 'react';
import Layout from "@/components/layout/Layout";
import PressRelease from '@/components/sections/innerpages/PressRelease'
import NewLayout3 from "@/components/layout/NewLayout3"
import PageTitle from "@/components/sections/PageTitle";

const PressReleases = () => {
  
    return (
      <>
        <NewLayout3>
          <PageTitle pageName="Press release " />
          <PressRelease />
        </NewLayout3>
      </>
    );
}

export default PressReleases;
