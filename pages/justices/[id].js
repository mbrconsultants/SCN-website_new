

import React from 'react';
import Layout from "@/components/layout/Layout";
import SingleJusticeProfile from "@/components/sections/justiceProfile";
import Profile from '@/components/sections/Profile';



const JusticeProfile = () => {
    return (
      <>
        <Layout>
          {/* <PageTitle pageName="About Us" /> */}

          <SingleJusticeProfile />
        </Layout>
      </>
    );
}

export default JusticeProfile;
