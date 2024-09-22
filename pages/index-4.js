import Layout from "@/components/layout/Layout"
import About4 from "@/components/sections/About4"
import Banner4 from "@/components/sections/Banner4"
import Funfact4 from "@/components/sections/Funfact4"
import Gallery4 from "@/components/sections/Gallery4"
import News4 from "@/components/sections/News4"
import Process4 from "@/components/sections/Process4"
import Services4 from "@/components/sections/Services4"
import Subscribe4 from "@/components/sections/Subscribe4"
import Team4 from "@/components/sections/Team4"
import Testimonial4 from "@/components/sections/Testimonial4"
export default function Home4() {

    return (
        <>
            <Layout headerStyle={4} footerStyle={4}>
                <Banner4 />
                <About4 />
                <Services4 />
                <Subscribe4 />
                <Team4 />
                <Process4 />
                <Testimonial4 />
                <Funfact4 />
                <News4 />
                <Gallery4 />
            </Layout>
        </>
    )
}