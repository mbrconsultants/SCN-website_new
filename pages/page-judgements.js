import Layout from "@/components/layout/Layout"
// import PageTitle from "@/components/sections/PageTitle"
import Judgements from "@/components/sections/Judgements"

export default function PageJudgements() {
  return (
    <>
    <Layout headerStyle={7} footerStyle={3}>
    {/* <PageTitle pageName="Departments" /> */}

    <Judgements />
    </Layout>
    </>
  )
}