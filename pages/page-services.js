import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import ServiceGrid from "@/components/sections/innerpages/ServiceGrid"

export default function PageServiceGrid() {
  return (
    <>
    <Layout headerStyle={7} footerStyle={3}>
    <PageTitle pageName="Services" />

    <ServiceGrid />
    </Layout>
    </>
  )
}