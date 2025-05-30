
import EventsHeroSection from "./sections/eventsHeroSection";
import Footer from "../../comman/sections/footerSection";
import SectionComponent from "../../styleComponents/sectionComponent";
import Header from "../../comman/sections/headerSection";
import EventAboutSection from "./sections/eventAboutSection";

function EventsPage() {
  return (
    <div className="font-rethink">
      <Header />
      <EventsHeroSection />
      <div className="grid grid-cols-1 gap-10 md:gap-16  ">
        <SectionComponent>
          < EventAboutSection />
        </SectionComponent>
        <Footer />
      </div>
    </div>
  );
}

export default EventsPage;
