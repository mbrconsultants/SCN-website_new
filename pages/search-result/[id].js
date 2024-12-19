

import React from 'react';
import Layout from "@/components/layout/Layout";
import ShowAllSearchResult from "@/components/sections/innerpages/ShowAllSearchResult";
import PageTitle from "@/components/sections/PageTitle";
import NewLayout3 from "@/components/layout/NewLayout3"


const SearchResult = () => {
    return (
        <>
            <NewLayout3>
                <PageTitle pageName="Search Result" />

                <ShowAllSearchResult />
            </NewLayout3>

        </>
    );
}

export default SearchResult;
