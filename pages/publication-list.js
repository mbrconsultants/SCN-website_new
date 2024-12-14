import React from 'react';
import Layout from "@/components/layout/Layout";
import PublicationList from '@/components/sections/innerpages/PublicationhList';
import NewLayout3 from "@/components/layout/NewLayout3"
import PageTitle from "@/components/sections/PageTitle";

const Publication = () => {
  
    return (
      <>
        <NewLayout3>
          <PageTitle pageName="Publications" />
          <PublicationList />
        </NewLayout3>
      </>
    );
}

export default Publication;
