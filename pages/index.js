import Layout from "@/components/layout/Layout";
import About1 from "@/components/sections/About1";
import Banner6 from "@/components/sections/Banner6";
// import CallToAction6 from "@/components/sections/CallToAction6";
import Funfact6 from "@/components/sections/Funfact6";
import News6 from "@/components/sections/News6";
import Gallery4 from "@/components/sections/Gallery4";
// import Pricing6 from "@/components/sections/Pricing6";
import Process6 from "@/components/sections/Process6";
// import Project6 from "@/components/sections/Project6";
// import Services6 from "@/components/sections/Services6";
import Project2 from "@/components/sections/Project2"
import Services5 from "@/components/sections/Services5"
import Pricing3 from "@/components/sections/Pricing3"
import Team2 from "@/components/sections/Team2";
// import Testimonial6 from "@/components/sections/Testimonial6";
export default function Home6() {
  return (
    <>
      <Layout
       >
        <Banner6 />
        <About1 />
        <Services5 />
        {/* <CallToAction6 /> */}
        {/* <Project6 /> */}
        {/* <Pricing6 /> */}
        <Project2 />
        <Team2 />
        <Funfact6 />
        <Pricing3 />
        {/* <Process6 /> */}
        {/* <Testimonial6 /> */}
        <News6 />
        <Gallery4 />
      </Layout>
    </>
  );
}
