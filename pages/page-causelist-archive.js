import Layout from "@/components/layout/Layout"
// import PageTitle from "@/components/sections/PageTitle"
import CauselistArchive from "@/components/sections/CauselistArchive"

export default function PageCauselistArchive() {
  return (
    <>
    <Layout headerStyle={7} footerStyle={3}>
    {/* <PageTitle pageName="Departments" /> */}

    <CauselistArchive />
    </Layout>
    </>
  )
}