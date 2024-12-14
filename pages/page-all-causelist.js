import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import NewLayout3 from "@/components/layout/NewLayout3"
import AllCauselist from "@/components/sections/AllCauselist"

export default function PageAllCauselist() {
  return (
    <>
    <NewLayout3 headerStyle={7} footerStyle={3}>
    <PageTitle pageName="All Causelist" />

    <AllCauselist />
    </NewLayout3>
    </>
  )
}