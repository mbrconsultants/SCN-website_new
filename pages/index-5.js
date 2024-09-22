import Layout from "@/components/layout/Layout"
import About5 from "@/components/sections/About5"
import Banner5 from "@/components/sections/Banner5"
import Funfact5 from "@/components/sections/Funfact5"
import News5 from "@/components/sections/News5"
import Process5 from "@/components/sections/Process5"
import Project5 from "@/components/sections/Project5"
import Services5 from "@/components/sections/Services5"
import Subscribe5 from "@/components/sections/Subscribe5"
import Team5 from "@/components/sections/Team5"
import Testimonial5 from "@/components/sections/Testimonial5"
export default function Home5() {

    return (
        <>
            <Layout headerStyle={5} footerStyle={5}>
                <Banner5 />
                <About5 />
                <Services5 />
                <Subscribe5 />
                <Project5 />
                <Team5 />
                <Process5 />
                <Testimonial5 />
                <Funfact5 />
                <News5 />
            </Layout>
        </>
    )
}