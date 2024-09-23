import Layout from "@/components/layout/Layout"
// import PageTitle from "@/components/sections/PageTitle"
import AllCauselist from "@/components/sections/AllCauselist"

export default function PageAllCauselist() {
  return (
    <>
    <Layout headerStyle={7} footerStyle={3}>
    {/* <PageTitle pageName="Departments" /> */}

    <AllCauselist />
    </Layout>
    </>
  )
}