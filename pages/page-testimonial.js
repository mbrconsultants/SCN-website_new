import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import Testimonial from "@/components/sections/innerpages/Testimonial"

export default function PageTestimonial() {
  return (
    <>
    <Layout headerStyle={7} footerStyle={3}>
    <PageTitle pageName="Testimonial" />

    <Testimonial />
    </Layout>
    </>
  )
}