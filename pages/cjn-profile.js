import React from 'react';
import Layout from "@/components/layout/Layout";
import NewLayout3 from "@/components/layout/NewLayout3"
import About6 from "@/components/sections/About6";
import Profile from '@/components/sections/Profile';
import PageTitle from "@/components/sections/PageTitle";



const CjnProfile = () => {
    return (
      <>
        <NewLayout3>
          <PageTitle pageName="Chief Justice of Nigeria" />

          <Profile />
          
        </NewLayout3>
      </>
    );
}

export default CjnProfile;
