import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import Contact from "@/components/sections/innerpages/Contact"
import NewLayout3 from "@/components/layout/NewLayout3"

export default function Pagecontact() {
  return (
    <>
    <NewLayout3 headerStyle={1} footerStyle={1}>
    <PageTitle pageName="Contact" />
    <Contact />
    </NewLayout3>
    </>
  )
}