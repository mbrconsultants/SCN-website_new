import Layout from "@/components/layout/Layout"
// import PageTitle from "@/components/sections/PageTitle"
import Departments from "@/components/sections/Departments"

export default function PageJudgements() {
  return (
    <>
    <Layout headerStyle={7} footerStyle={3}>
    {/* <PageTitle pageName="Departments" /> */}

    <Departments />
    </Layout>
    </>
  )
}