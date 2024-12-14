import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import NewLayout3 from "@/components/layout/NewLayout3"
import ScnRule from "@/components/sections/ScnRule"

export default function PageRules() {
  return (
    <>
    <NewLayout3 headerStyle={7} footerStyle={3}>
    <PageTitle pageName="Rules" />

    <ScnRule />
    </NewLayout3>
    </>
  )
}