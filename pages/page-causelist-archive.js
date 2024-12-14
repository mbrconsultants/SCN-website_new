import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import NewLayout3 from "@/components/layout/NewLayout3"
import CauselistArchive from "@/components/sections/CauselistArchive"

export default function PageCauselistArchive() {
  return (
    <>
    <NewLayout3 headerStyle={7} footerStyle={3}>
    <PageTitle pageName="Causelist" />

    <CauselistArchive />
    </NewLayout3>
    </>
  )
}