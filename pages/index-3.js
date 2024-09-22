import Layout from "@/components/layout/Layout"
import About3T2 from "@/components/sections/About3T2"
import About3 from "@/components/sections/About3"
import Banner3 from "@/components/sections/Banner3"
import CallToAction3 from "@/components/sections/CallToAction3"
import Funfact3 from "@/components/sections/Funfact3"
import News3 from "@/components/sections/News3"
import Pricing3 from "@/components/sections/Pricing3"
import Process3 from "@/components/sections/Process3"
import Project3 from "@/components/sections/Project3"
import Services3 from "@/components/sections/Services3"
import Team3 from "@/components/sections/Team3"
import Testimonial3 from "@/components/sections/Testimonial3"
export default function Home3() {

    return (
        <>
            <Layout headerStyle={3} footerStyle={3}>
                <Banner3 />
                <About3 />
                <Services3 />
                <About3T2 />
                <CallToAction3 />
                <Project3 />
                <Team3 />
                <Process3 />
                <Testimonial3 />
                <Funfact3 />
                <Pricing3 />
                <News3 />
            </Layout>
        </>
    )
}