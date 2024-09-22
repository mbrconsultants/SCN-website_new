import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import NewsDetails from "@/components/sections/innerpages/NewsDetails"
export default function pageNewsDetails() {
  return (
    <>
    <Layout headerStyle={7} footerStyle={3}>
    <PageTitle pageName="News Details" />
    <NewsDetails />
    </Layout>
    </>
  )
}