import Layout from "@/components/layout/Layout";
import NewLayout3 from "@/components/layout/NewLayout3"
import PageTitle from "@/components/sections/PageTitle";
import ManagementStaffs from "@/components/sections//management-staffs";

export default function Management() {
  return (
    <>
      <NewLayout3>
        <PageTitle pageName="Management Staff" />

        <ManagementStaffs />
      </NewLayout3>
    </>
  );
}
