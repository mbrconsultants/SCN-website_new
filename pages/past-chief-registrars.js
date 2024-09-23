import Layout from "@/components/layout/Layout";
import PageTitle from "@/components/sections/PageTitle";
import Funfact3 from "@/components/sections/Funfact3";
import PastChiefRegistrars from "@/components/sections/past-chief-registrars";

export default function PastRegistrars() {
  return (
    <>
      <Layout>
        {/* <PageTitle pageName="Past Chief Registars" /> */}

        <PastChiefRegistrars />

        <Funfact3 />
      </Layout>
    </>
  );
}
