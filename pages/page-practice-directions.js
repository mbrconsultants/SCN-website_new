import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import NewLayout3 from "@/components/layout/NewLayout3"
import PracticeDirection from "@/components/sections/PracticeDirection"

export default function PagePracticeDirections() {
  return (
    <>
    <NewLayout3 headerStyle={7} footerStyle={3}>
    <PageTitle pageName="Direction" />

    <PracticeDirection />
    </NewLayout3>
    </>
  )
}