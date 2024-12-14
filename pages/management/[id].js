import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Layout from "@/components/layout/Layout";
import SingleManagementProfile from "@/components/sections/managementProfile";
import NewLayout3 from "@/components/layout/NewLayout3"
import PageTitle from "@/components/sections/PageTitle";
import endpoint from "../../utils/endpoint";

const JusticeProfile = () => {


    const [data, setData] = useState({});
    const [filePath, setFilePath] = useState();

    const params = useParams();
    const id = params?.id;

    const getData = async () => {
        try {
            const res = await endpoint.get(`/management-staff/${id}`);
            const profileText = res.data.data.profile;

            // Split the profile into an array of words
            const words = profileText.split(" ");

            // Determine where to split (e.g., split after 50 words)
            const splitIndex = 150;

            // Join the first and second parts back into strings
            const firstPart = words.slice(0, splitIndex).join(" ");
            const secondPart = words.slice(splitIndex).join(" ");


            // setData(res.data.data);
            setData({
                ...res.data.data,
                firstPart,
                secondPart,
            });
            // setData(res.data.data);
            setFilePath(res.data.file_path);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    console.log("Adams 1", data);
    return (
        <>
            <NewLayout3>
                <PageTitle pageName={data.fullname} />
                {/* <PageTitle pageName="Management Staff" /> */}
                <SingleManagementProfile data={data} filePath={filePath} />
            </NewLayout3>
        </>
    );
};

export default JusticeProfile;
