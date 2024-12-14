import React from 'react';
import Layout from "@/components/layout/Layout";
import NewLayout3 from "@/components/layout/NewLayout3"
import PageTitle from "@/components/sections/PageTitle";
import BulletinList from '@/components/sections/innerpages/BulletinList';

const Bulletin = () => {
  
    return (
      <>
        <NewLayout3>
          <PageTitle pageName="Bulletin " />
          <BulletinList />
        </NewLayout3>
      </>
    );
}

export default Bulletin;
