import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import ProjectDetails from "@/components/sections/innerpages/ProjectDetails"
export default function pageProjectDetails() {
  return (
    <>
    <Layout headerStyle={7} footerStyle={3}>
    <PageTitle pageName="Project Details" />
    <ProjectDetails />
    </Layout>
    </>
  )
}