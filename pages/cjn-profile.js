import React, { useState, useEffect } from "react";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import NewLayout3 from "@/components/layout/NewLayout3"
import About6 from "@/components/sections/About6";
import Profile from '@/components/sections/Profile';
import PageTitle from "@/components/sections/PageTitle";
import endpoint from "../utils/endpoint";


const CjnProfile = () => {

    const [data, setData] = useState([]);
    const [filePath, setFilePath] = useState();

    const getData = async () => {
        try {
            const res = await endpoint.get("/profile-cjn");


            const profileText = res.data.data.profile;

            // // Split the profile into parts using </p> as the delimiter
            // const profileParts = profileHtml.split(/<\/p>/i);

            // // Re-add the </p> tag to the first part and leave the rest for the second part
            // const firstPart = profileParts[0] + "</p>";
            // const secondPart = profileParts.slice(1).join("</p>");

            // Split the profile into an array of words
            const words = profileText.split(" ");

            // Determine where to split (e.g., split after 50 words)
            const splitIndex = 200;

            // Join the first and second parts back into strings
            const firstPart = words.slice(0, splitIndex).join(" ");
            const secondPart = words.slice(splitIndex).join(" ");


            setData(res.data.data);
            // setData({
            //     ...res.data.data,
            //     firstPart,
            //     secondPart,
            // });
            setFilePath(res.data.file_path);

        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <NewLayout3>
                <PageTitle pageName="Chief Justice of Nigeria" />
                {/* <PageTitle pageName={data.fullname} /> */}

                <Profile data={data} filePath={filePath} />

            </NewLayout3>
        </>
    );
}

export default CjnProfile;
