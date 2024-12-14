import Layout from "@/components/layout/Layout";
import NewLayout3 from "@/components/layout/NewLayout3"
import Departments from "@/components/sections/Departments";
import PageTitle from "@/components/sections/PageTitle";

export default function Home6() {
 
  return (
    <>
      <NewLayout3>
        <PageTitle pageName="Departments" />

        <Departments />
      </NewLayout3>
    </>
  );
}
