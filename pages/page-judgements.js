import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import NewLayout3 from "@/components/layout/NewLayout3"
import Judgements from "@/components/sections/Judgements"

export default function PageJudgements() {
  return (
    <>
    <NewLayout3 headerStyle={7} footerStyle={3}>
    <PageTitle pageName="Judgments" />

    <Judgements />
    </NewLayout3>
    </>
  )
}