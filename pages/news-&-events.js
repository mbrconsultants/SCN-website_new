import React from 'react';
import Layout from "@/components/layout/Layout";
import NewsList from '@/components/sections/innerpages/NewsList';
import PageTitle from "@/components/sections/PageTitle";

const NewsEvents = () => {
  
    return (
      <>
        <Layout>
          {/* <PageTitle pageName="News " /> */}
          <NewsList />
        </Layout>
      </>
    );
}

export default NewsEvents;
