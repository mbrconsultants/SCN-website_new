import React from 'react';
import Layout from "@/components/layout/Layout";
import NewsList from '@/components/sections/innerpages/NewsList';
import PageTitle from "@/components/sections/PageTitle";
import NewLayout3 from "@/components/layout/NewLayout3"

const NewsEvents = () => {
  
    return (
      <>
        <NewLayout3>
          <PageTitle pageName="News " />
          <NewsList />
        </NewLayout3>
      </>
    );
}

export default NewsEvents;
