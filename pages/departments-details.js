import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import DepartmentsDetails from "@/components/sections/innerpages/DepartmentsDetails"
export default function pageNewsDetails() {
  return (
    <>
    <Layout headerStyle={7} footerStyle={3}>
      <PageTitle pageName="Department Details" />
      <DepartmentsDetails />
    </Layout>
    </>
  )
}