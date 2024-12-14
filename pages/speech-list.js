import React from 'react';
import Layout from "@/components/layout/Layout";
import SpeechList from '@/components/sections/innerpages/SpeechList';
import NewLayout3 from "@/components/layout/NewLayout3"
import PageTitle from "@/components/sections/PageTitle";

const Speech = () => {
  
    return (
      <>
        <NewLayout3>
          <PageTitle pageName="Speeches " />
          <SpeechList />
        </NewLayout3>
      </>
    );
}

export default Speech;
