import Layout from "@/components/layout/Layout"
import About6 from "@/components/sections/About6"
import Banner6 from "@/components/sections/Banner6"
import CallToAction6 from "@/components/sections/CallToAction6"
import Funfact6 from "@/components/sections/Funfact6"
import News6 from "@/components/sections/News6"
import Pricing6 from "@/components/sections/Pricing6"
import Process6 from "@/components/sections/Process6"
import Project6 from "@/components/sections/Project6"
import Services6 from "@/components/sections/Services6"
import Team6 from "@/components/sections/Team6"
import Testimonial6 from "@/components/sections/Testimonial6"
export default function Home6() {

    return (
        <>
            <Layout headerStyle={6} footerStyle={6}>
                <Banner6 />
                <About6 />
                <Services6 />
                <CallToAction6 />
                <Project6 />
                <Pricing6 />
                <Team6 />
                <Process6 />
                <Funfact6 />
                <Testimonial6 />
                <News6 />
            </Layout>
        </>
    )
}