import Layout from "@/components/layout/Layout";
import About2 from "@/components/sections/About2";
import About2T2 from "@/components/sections/About2T2";
import Banner2 from "@/components/sections/Banner2";
import CallToAction2 from "@/components/sections/CallToAction2";
import Funfact2 from "@/components/sections/Funfact2";
import News2 from "@/components/sections/News2";
import Pricing2 from "@/components/sections/Pricing2";
import Project2 from "@/components/sections/Project2";
import Services2 from "@/components/sections/Services2";
import Team2 from "@/components/sections/Team2";
import Testimonial2 from "@/components/sections/Testimonial2";
export default function Home2() {
  return (
    <>
      <Layout
        headerStyle={2}
        footerStyle={2}>
        <Banner2 />
        <About2 />
        <Services2 />
        <About2T2 />
        <Project2 />
        <CallToAction2 />
        <Pricing2 />
        <Team2 />
        <Testimonial2 />
        <Funfact2 />
        <News2 />
      </Layout>
    </>
  );
}
