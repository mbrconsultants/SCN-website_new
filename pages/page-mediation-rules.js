import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import NewLayout3 from "@/components/layout/NewLayout3"
import MediationRule from "@/components/sections/MediationRule"

export default function PageMediationRules() {
  return (
    <>
    <NewLayout3 headerStyle={7} footerStyle={3}>
    <PageTitle pageName="Mediation" />
    <MediationRule />
    </NewLayout3>
    </>
  )
}