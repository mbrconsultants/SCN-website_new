

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Layout from "@/components/layout/Layout";
import SingleDepartmentsDetail from "@/components/sections/innerpages/DepartmentsDetails";
import PageTitle from "@/components/sections/PageTitle";
import endpoint from "../../utils/endpoint";


const DepartmentsDetails = () => {

    const [data, setData] = useState([]);
    const params = useParams();
    const id = params?.id;

    const getData = async () => {
        try {
            const res = await endpoint.get(`/departments/${id}`);
            console.log("single department", res.data.data);
            setData(res.data.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    // Utility function to remove HTML tags
    const stripHtmlTags = (html) => {
        return html ? html.replace(/<[^>]*>?/gm, '') : ""; // Use regex to remove HTML tags
    };

    return (
        <>
            <Layout>
                <PageTitle pageName={data.Title} />

                <SingleDepartmentsDetail data={data} stripHtmlTags={stripHtmlTags} />
            </Layout>
        </>
    );
}

export default DepartmentsDetails;
