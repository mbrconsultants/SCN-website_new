import Layout from "@/components/layout/Layout";
import PageTitle from "@/components/sections/PageTitle";
import ManagementStaffs from "@/components/sections//management-staffs";

export default function Management() {
  return (
    <>
      <Layout>
        <PageTitle pageName="Management Staff" />

        <ManagementStaffs />
      </Layout>
    </>
  );
}
