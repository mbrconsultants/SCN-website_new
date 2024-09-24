import Layout from "@/components/layout/Layout"
// import PageTitle from "@/components/sections/PageTitle"
import WeeklyCauselist from "@/components/sections/WeeklyCauselist"

export default function PageWeeklyCauselist() {
  return (
    <>
    <Layout headerStyle={7} footerStyle={3}>
    {/* <PageTitle pageName="Departments" /> */}

    <WeeklyCauselist />
    </Layout>
    </>
  )
}