import Layout from "@/components/layout/Layout";
import NewLayout3 from "@/components/layout/NewLayout3"
import PageTitle from "@/components/sections/PageTitle";
import Jurisdiction from "@/components/sections/Jurisdiction";
import About3 from "@/components/sections/About3";
import Funfact3 from "@/components/sections/Funfact3";

export default function Home6() {
  return (
    <>
      <NewLayout3>
        <PageTitle pageName="Court Jurisdiction" />

        <Jurisdiction />
        {/* <About3 /> */}

        {/* <Funfact3 /> */}
      </NewLayout3>
    </>
  );
}
