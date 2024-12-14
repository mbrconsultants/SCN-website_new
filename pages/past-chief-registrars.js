import Layout from "@/components/layout/Layout";
import NewLayout3 from "@/components/layout/NewLayout3"
import PastChiefRegistrars from "@/components/sections/past-chief-registrars";
import PageTitle from "@/components/sections/PageTitle";

export default function PastRegistrars() {
  return (
    <>
      <NewLayout3>
        <PageTitle pageName="Past Chief Registars" />

        <PastChiefRegistrars />

   
      </NewLayout3>
    </>
  );
}
