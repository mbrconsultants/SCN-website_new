import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import NewLayout3 from "@/components/layout/NewLayout3"
import ChamberSitting from "@/components/sections/ChamberSitting"

export default function PageChamberSitting() {
  return (
    <>
    <NewLayout3 headerStyle={7} footerStyle={3}>
    <PageTitle pageName="Chamber Sitting" />

    <ChamberSitting />
    </NewLayout3>
    </>
  )
}