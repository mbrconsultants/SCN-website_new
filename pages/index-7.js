import Layout from "@/components/layout/Layout"
import About7 from "@/components/sections/About7"
import Banner7 from "@/components/sections/Banner7"
import CallToAction7 from "@/components/sections/CallToAction7"
import Funfact7 from "@/components/sections/Funfact7"
import News7 from "@/components/sections/News7"
import Process7 from "@/components/sections/Process7"
import Project7 from "@/components/sections/Project7"
import Services7 from "@/components/sections/Services7"
import Team7 from "@/components/sections/Team7"
import Testimonial7 from "@/components/sections/Testimonial7"
export default function Home7() {

    return (
        <>
            <Layout headerStyle={7} footerStyle={7}>
                <Banner7 />
                <About7 />
                <Services7 />
                <CallToAction7 />
                <Project7 />
                <Team7 />
                <Process7 />
                <Testimonial7 />
                <Funfact7 />
                <News7 />
            </Layout>
        </>
    )
}