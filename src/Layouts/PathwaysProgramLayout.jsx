import DestinationHero from "../pages/destinations/DestinationHero";
import DestinationInfo from "../pages/destinations/DestinationInfo";
import FAQsection from "../Components/FAQsection";
import Header from "../Components/Header";
import { HomeForm } from "../Components/AnimatedTabs";
import FunFacts from "../Components/FunFacts";
import UniCoursersCard from "../pages/destinations/UniCoursersCard";
import Footer from "../Components/Footer";
import AccomodationLeadForm from "../pages/accommodation/AccomodationLeadForm";
import AbroaedUpdatesCards from "../Components/AbroaedUpdatesCards";
import DestinationRouting from "../pages/destinations/DestinationRouting";
import vectorLeftFlat from "../assets/vectoreLeftFlat.png"
import AdmissionRequirement from "../pages/destinations/AdmissionRequirement";
import DestinationExpanses from "../pages/destinations/DestinationExpanses";
import vectorDownNose from "../assets/vectorDownNose.png"
import DestinationScholarship from "../pages/destinations/DestinationScholarship";
import ImmigrationDetails from "../pages/destinations/ImmigrationDetails";
import vectorRightNoseCurve from "../assets/vectorRightNoseCurve.png"
import WorkOpportunities from "../pages/destinations/WorkOpportunities";
import vectorBelow from "../assets/vectorBelow.png"
import StudentAccommodations from "../pages/destinations/StudentAccommodations";
import BlogsSection from "../Components/BlogsSection";
import vectorNoseRightToLeft from "../assets/vectorNoseRightToLeft.png"
import HomePageLeadForm from "../Components/HomePageLeadForm";
import { KpiMatrix } from "../Components/KpiMatrix";
import dark from "../assets/dark.png"
import PathwaysProgram from "../pages/pathwaysProgram/PathwaysProgram";
import vectorleftNose from "../assets/vectorleftNose.png"
import EligibilityCriteria from "../pages/pathwaysProgram/EligibilityCriteria";
import vectorLeftNoseSmall from "../assets/vectorLeftNoseSmall.png"


const PathwaysProgramLayout = () => {
  return (
    <div>
    <Header />
    <DestinationHero header={'Pathways Program Name'} text={'Batch Starts: Jan 1, 2025 | Abroad Intake: Aug’ 2025'}  img={dark}/>
    <KpiMatrix  title={""} header={"Key Benefits of Program"} subtitle={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "}/>
    <div className="relative ">
    <PathwaysProgram />
    <div className="absolute top-24 right-0 z-0">
      <img
        className="rounded-lg w-full h-full object-cover"
        src={vectorleftNose}
        alt="Counselling session"
      />
    </div>
    <EligibilityCriteria/>
    </div>
   
    <div className="relative">
    <AdmissionRequirement/>
<div className="absolute top-5 left-0 z-0">
      <img
        className="rounded-lg w-full h-full object-cover"
        src={vectorDownNose}
        alt="Counselling session"
        />
    </div>
    </div>
        <DestinationExpanses/>
        <div className="relative">
        <DestinationScholarship/>
               <div className="absolute bottom-10 right-0 z-0">
      <img
        className="rounded-lg w-full h-full object-cover"
        src={vectorLeftNoseSmall}
        alt="Counselling session"
        />
    </div>
        </div>
        <ImmigrationDetails/>
                <div className="relative">
        <WorkOpportunities/>
        <div className="absolute -top-96 left-40 z-0">
      <img
        className="rounded-lg w-full h-full object-cover"
        src={vectorBelow}
        alt="Counselling session"
        />
    </div>
        </div>
        <StudentAccommodations/>
        <BlogsSection />
          <FAQsection />
          <AbroaedUpdatesCards />
    <HomePageLeadForm />
    <Footer />
  </div>
  )
}

export default PathwaysProgramLayout;