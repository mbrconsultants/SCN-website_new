import { useEffect, useState } from "react"; // Import useEffect and useState
import Layout from "@/components/layout/Layout";
import About2 from "@/components/sections/About2";
import About2T2 from "@/components/sections/About2T2";
import Banner6 from "@/components/sections/Banner6";
import CallToAction2 from "@/components/sections/CallToAction2";
import Funfact2 from "@/components/sections/Funfact2";
import News2 from "@/components/sections/News2";
import Pricing2 from "@/components/sections/Pricing2";
import Project2 from "@/components/sections/Project2";
import Services2 from "@/components/sections/Services2";
import Team2 from "@/components/sections/Team2";
import Testimonial2 from "@/components/sections/Testimonial2";
import Modal from "@/components/sections/welcomeModal"; // Import the modal
import ManagementStaffs from "@/components/sections/management-staffs2";
import Justices2 from "@/components/sections/justices2";
import HomePageNews2 from "@/components/sections/HomePageNews2";
import CJN from "@/components/sections/home2CJN";
import ChamberSitting from "@/components/sections/ChamberSitting";
import Pricing3 from "@/components/sections/Pricing3";
import Services5 from "@/components/sections/Services5";

export default function Home2() {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  useEffect(() => {
    setIsModalOpen(true); // Open the modal when the component mounts
  }, []);

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <>
      <Layout
        headerStyle={2}
        footerStyle={2}>
        {" "}
        {/* Add the modal here */}
        <Banner6 show={1} />
        {/* <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        /> */}
        <CJN />
        <Justices2 />
        <ManagementStaffs />
        <Services5 />
        {/* <ChamberSitting /> */}
        <Pricing3 />
        <HomePageNews2 />
      </Layout>
    </>
  );
}
