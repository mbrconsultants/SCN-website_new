import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import TeamDetails from "@/components/sections/innerpages/TeamDetails"

export default function PageTeamDetails() {
  return (
    <>
    <Layout headerStyle={7} footerStyle={3}>
    <PageTitle pageName="Team Details" />

    <TeamDetails />
    </Layout>
    </>
  )
}