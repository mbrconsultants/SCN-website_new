import Layout from "@/components/layout/Layout"
// import PageTitle from "@/components/sections/PageTitle"
import ChamberSitting from "@/components/sections/ChamberSitting"

export default function PageChamberSitting() {
  return (
    <>
    <Layout headerStyle={7} footerStyle={3}>
    {/* <PageTitle pageName="Departments" /> */}

    <ChamberSitting />
    </Layout>
    </>
  )
}