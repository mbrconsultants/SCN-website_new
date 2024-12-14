import Layout from "@/components/layout/Layout";
import NotaryPublic from "@/components/sections/notary-public";
import NewLayout3 from "@/components/layout/NewLayout3"
import PageTitle from "@/components/sections/PageTitle";


export default function Home6() {
 
  return (
    <>
      <NewLayout3>
        <PageTitle pageName="Notary Public" />

        <NotaryPublic />
      </NewLayout3>
    </>
  );
}
