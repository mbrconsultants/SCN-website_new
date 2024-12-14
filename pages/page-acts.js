import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import NewLayout3 from "@/components/layout/NewLayout3"
import ScnAct from "@/components/sections/ScnAct"

export default function PageActs() {
  return (
    <>
    <NewLayout3 headerStyle={7} footerStyle={3}>
    <PageTitle pageName="Acts" />

    <ScnAct />
    </NewLayout3>
    </>
  )
}