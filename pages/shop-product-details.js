import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import ShopDetails from "@/components/sections/innerpages/ShopDetails"

export default function PageShopDetails() {
  return (
    <>
    <Layout headerStyle={7} footerStyle={3}>
    <PageTitle pageName="Shop Details" />

    <ShopDetails />
    </Layout>
    </>
  )
}