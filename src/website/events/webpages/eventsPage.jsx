import EventsHeroSection from "./sections/eventsHeroSection";
import Footer from "../../comman/sections/footerSection";
import SectionComponent from "../../styleComponents/sectionComponent";
import Header from "../../comman/sections/headerSection";
import EventAboutSection from "./sections/eventAboutSection";
import { addLeadRequest } from "../../../redux/actions/leadsActions";
import { useDispatch } from "react-redux";
import { entity } from "../../../constants/values";

function EventsPage() {
  const dispatch = useDispatch();

  const handleAddLead = (data) => {
    console.log(data);
    dispatch(addLeadRequest(data));
  };

  return (
    <div className="font-rethink">
      <Header />
      <EventsHeroSection />
      <div className="grid grid-cols-1 gap-10 md:gap-16  ">
        <SectionComponent>
          <EventAboutSection
            onFormSubmit={handleAddLead}
            entity={entity.events}
            source={`Website`}
          />
        </SectionComponent>
        <Footer />
      </div>
    </div>
  );
}

export default EventsPage;
