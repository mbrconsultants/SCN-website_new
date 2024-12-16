import React from "react";
import Layout from "@/components/layout/Layout";
import GalleryDetail from "@/components/sections/innerpages/Gallery";
import NewLayout3 from "@/components/layout/NewLayout3"
import PageTitle from "@/components/sections/PageTitle";

const GalleryDetails = () => {
    return (
        <>
            <NewLayout3>
                <PageTitle pageName="Gallery Details" />

                <GalleryDetail />
            </NewLayout3>
        </>
    );
};

export default GalleryDetails;
