
// import Pricing from "../../../Components/Pricing";
// import PartnerUnis from "../../../Components/PartnerUnis";
// import TimelineSlider from "../../../Components/TimelineSlider";
// import cover from "../../../assets/cover.jpg";
import Header from "../../comman/sections/headerSection";
import Footer from "../../comman/sections/footerSection";
import OurPartners from "../../comman/sections/ourPartnersSection";
import HomeServicesSection from "./sections/homeServicesSection";
import HomeTestimonialsSection from "./sections/homeTestimonialsSection";
import HomeHeroSection from "./sections/homeHeroSection";
import HomeKpiMatrixSection from "./sections/homeKpiMatrixSection";
import HomePathwaySection from "./sections/homePathwaySection";
import HomePromoSection from "./sections/homePromoSection";
import HomeDownloadApp from "./sections/homeDownloadAppSection";
import HomeAbroaedUpdateSection from "./sections/homeAbroaedUpdateSection";
import HomeBlogsSection from "./sections/homeBlogsSection";
import HomeLeadForm from "./sections/homeLeadForm";

function HomeLayout() {
  return (
    <>
      <Header />
      <HomeHeroSection />
      <HomeKpiMatrixSection title={"Why Abroad?"} header={"What sets us apart?"} subtitle={"Explore the whole collection of open-source web components and elements built with the utility classes from Tailwind."} />
      <HomePathwaySection />
      <HomeServicesSection />
      <HomePromoSection />
      {/* <PartnerUnis /> */}
      {/* <TimelineSlider slides={slidesData} /> */}
      <OurPartners />
      <HomeTestimonialsSection />
      <HomeBlogsSection />
      <HomeDownloadApp />
      {/* <Pricing /> */}
      {/* <FAQsection /> */}
      <HomeAbroaedUpdateSection />
      <HomeLeadForm />
      <Footer />
    </>
  );
}

export default HomeLayout;
