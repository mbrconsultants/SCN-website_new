import Layout from "@/components/layout/Layout";
import Enrolment from "@/components/sections/enrolment";
import NewLayout3 from "@/components/layout/NewLayout3"
import PageTitle from "@/components/sections/PageTitle";


export default function Home6() {

    return (
        <>
            <NewLayout3>
                <PageTitle pageName="SCN Enrollment" />

                <Enrolment />
            </NewLayout3>
        </>
    );
}
