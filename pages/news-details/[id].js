

import React from 'react';
import Layout from "@/components/layout/Layout";
import SingleNewsDetail from "@/components/sections/innerpages/NewsDetails";
import PageTitle from "@/components/sections/PageTitle";
import NewLayout3 from "@/components/layout/NewLayout3"


const NewsDetails = () => {
    return (
        <>
            <NewLayout3>
                <PageTitle pageName="Blog Details" />

                <SingleNewsDetail />
            </NewLayout3>
        </>
    );
}

export default NewsDetails;
