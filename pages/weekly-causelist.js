import Layout from "@/components/layout/Layout";
import PageTitle from "@/components/sections/PageTitle"
import NewLayout3 from "@/components/layout/NewLayout3"
import WeeklyCauseList from "@/components/sections/WeeklyCauselist"

const Weeklycauselist = () => {
  
  return (
    <>
      <NewLayout3>
        <PageTitle pageName="Weekly Causelist" />
        <WeeklyCauseList />
      </NewLayout3>
    </>
  );
}

export default Weeklycauselist;
