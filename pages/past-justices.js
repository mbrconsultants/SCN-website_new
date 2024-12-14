import Layout from "@/components/layout/Layout";
import NewLayout3 from "@/components/layout/NewLayout3"
import PageTitle from "@/components/sections/PageTitle";
import PastJusticesList from "@/components/sections/past-justices";

export default function PastChiefJustices() {
  return (
    <>
      <NewLayout3>
        <PageTitle pageName="Past Justices" />

        <PastJusticesList />
      </NewLayout3>
    </>
  );
}
