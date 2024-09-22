import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import About6 from "@/components/sections/About6"
import About3 from "@/components/sections/About3"
import Testimonial3 from "@/components/sections/Testimonial3"
import Funfact3 from "@/components/sections/Funfact3"
import Process6 from "@/components/sections/Process6"

export default function PageAbout() {
  return (
    <>
    <Layout headerStyle={7} footerStyle={3}>
    <PageTitle pageName="About Us" />

    <About6 />
    <About3 />
    <Testimonial3 />
    <Funfact3 />
    </Layout>
    </>
  )
}