import Layout from "@/components/layout/Layout";
import PageSan from "@/components/sections/page-san";
import NewLayout3 from "@/components/layout/NewLayout3"
import PageTitle from "@/components/sections/PageTitle";

export default function Home6() {
 
  return (
    <>
      <NewLayout3>
        <PageTitle pageName="SAN Enquiry" />

        <PageSan />
      </NewLayout3>
    </>
  );
}
