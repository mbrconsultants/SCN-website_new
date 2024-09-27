

import React from 'react';
import Layout from "@/components/layout/Layout";
// import SingleNewsDetail from "@/components/sections/justiceProfile";
import SingleNewsDetail from "@/components/sections/innerpages/NewsDetails";
import Profile from '@/components/sections/Profile';



const NewsDetails = () => {
    return (
      <>
        <Layout>
          {/* <PageTitle pageName="About Us" /> */}

          <SingleNewsDetail />
        </Layout>
      </>
    );
}

export default NewsDetails;
