import React from 'react';
import Layout from "@/components/layout/Layout";
import BulletinList from '@/components/sections/innerpages/BulletinList';

const Bulletin = () => {
  
    return (
      <>
        <Layout>
          {/* <PageTitle pageName="News " /> */}
          <BulletinList />
        </Layout>
      </>
    );
}

export default Bulletin;
