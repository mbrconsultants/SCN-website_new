import Layout from "@/components/layout/Layout";
import NewLayout3 from "@/components/layout/NewLayout3"
import PageTitle from "@/components/sections/PageTitle";
import PastChiefJusticesList from "@/components/sections/past-chief-justices";

export default function PastChiefJustices() {
  return (
    <>
      <NewLayout3>
        <PageTitle pageName="Past Chief Justices" />

        <PastChiefJusticesList />
      </NewLayout3>
    </>
  );
}
