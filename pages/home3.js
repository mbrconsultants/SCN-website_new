import NewLayout3 from "@/components/layout/NewLayout3"
import NewHomeAbout3 from "@/components/sections/NewHomeAbout3"
import About1 from "@/components/sections/About1";
import NewHomeBanner3 from "@/components/sections/NewHomeBanner3"
import NewHomeFunfact3 from "@/components/sections/NewHomeFunfact3"
import Gallery4 from "@/components/sections/Gallery4"
import NewHomeNews3 from "@/components/sections/NewHomeNews3"
import NewHomeProcess3 from "@/components/sections/NewHomeProcess3"
import NewHomeProject3 from "@/components/sections/NewHomeProject3"
import NewHomeSecondSubscribe3 from "@/components/sections/NewHomeSecondSubscribe3"
import NewHomePricing3 from "@/components/sections/NewHomePricing3"
import NewHomeSubscribe3 from "@/components/sections/NewHomeSubscribe3"
import NewHomeTeam3 from "@/components/sections/NewHomeTeam3"
import Testimonial4 from "@/components/sections/Testimonial4"
export default function Home4() {

    return (
        <>
            <NewLayout3>
                <NewHomeBanner3 />
                {/* <NewHomeAbout3 /> */}
                <About1 />
                
                <NewHomeProcess3 />
                <NewHomeSubscribe3 />
                <NewHomePricing3 />
                <NewHomeProject3 />
                {/* <Services4 /> */}
                <NewHomeTeam3 />
                <NewHomeNews3 />
                <NewHomeSecondSubscribe3 />
                {/* <Testimonial4 /> */}
                <NewHomeFunfact3 />
                
            </NewLayout3>
        </>
    )
}