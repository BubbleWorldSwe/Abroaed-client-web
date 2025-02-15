import vectorLeftFlat from "../../../assets/vectoreLeftFlat.png"
import Header from "../../comman/sections/headerSection";
import Footer from "../../comman/sections/footerSection";
import { items } from "../data";
import dark from "../../../assets/dark.png";
import IvyLeaguesHeroSection from "./sections/ivyLeaguesHeroSection";
import IvyLeaguesInfoSection from "./sections/ivyLeaguesInfoSection";
import IvyLeaguesUniversitySection from "./sections/ivyLeaguesUniversitySection";
import vectorleftNose from "../../../assets/vectorleftNose.png"
import IvyLeaguesRoutingSection from "./sections/ivyLeaguesRoutingSection";
import IvyLeagueAdmissionRequirementSection from "./sections/ivyLeaguesAdmissionRequirementSection";
import IvyLeaguesEligibilityCriteria from "./sections/ivyLeaguesEligibilityCriteria";
import IvyLeaguesExpensesSection from "./sections/ivyLeaguesExpensesSection";
import vectorDownNose from "../../../assets/vectorDownNose.png"
import IvyLeaguesScholarshipSection from "./sections/IvyLeaguesScholarshipSection";
import IvyLeaguesImmigrationDetailSection from "./sections/ivyLeaguesImmigrationDetailSection";
import vectorLeftNoseSmall from "../../../assets/vectorLeftNoseSmall.png"
import IvyLeaguesWorkOpportunitiesSection from "./sections/ivyLeaguesWorkOpportunitiesSection";
import vectorFoot from "../../../assets/vectorFoot.png"
import IvyLeaguesStudentAccommodationSection from "./sections/ivyLeaguesStudentAccommodation";
import IvyLeaguesFaqSection from "./sections/ivyLeaguesFaqSection";
import IvyLeaguesBlogSection from "./sections/ivyLeaguesBlogSection";
import IvyLeaguesAbroaedUpdateSection from "./sections/IvyLeaguesAbroaedUpdateSection";
import vectorNoseRightToLeft from "../../../assets/vectorNoseRightToLeft.png"
import IvyLeaguesLeadFormSection from "./sections/ivyLeaguesLeadFormSection";

const NavigationItems = () => {
  return (
    <div className="text-white px-2 mt-5 opacity-70 text-xl flex justify-between">
      <p>
        One Liner
      </p>
    </div>
  );
};

function IvyLeaguesPage() {
  return (
    <div className="font-rethink">
      <Header />
      <IvyLeaguesHeroSection
        header="Ivy Leagues"
        text={<NavigationItems />}
        img={dark}
      />
      <IvyLeaguesRoutingSection />
      <IvyLeaguesInfoSection />
      <div className="relative ">
        <IvyLeaguesUniversitySection items={items} />
        <div className="absolute -top-56 left-0 z-0">
          <img
            className="rounded-lg w-full h-full object-cover"
            src={vectorLeftFlat}
            alt="Counselling session"
          />
        </div>
      </div>
      <div className="relative">
        <IvyLeagueAdmissionRequirementSection />
        <div className="absolute bottom-28 right-0 z-0">
          <img
            className="rounded-lg w-full h-full object-cover"
            src={vectorleftNose}
            alt="Counselling session"
          />
        </div>
      </div>
      <IvyLeaguesEligibilityCriteria />
      <div className="relative">
        <IvyLeaguesExpensesSection />
        <div className="absolute top-20 left-0 z-0">
          <img
            className="rounded-lg w-full h-full object-cover"
            src={vectorDownNose}
            alt="Counselling session"
          />
        </div>
      </div>
      <div className="relative">
        <IvyLeaguesScholarshipSection />
        <div className="absolute bottom-0 right-0 z-0">
          <img
            className="rounded-lg w-full h-full object-cover"
            src={vectorLeftNoseSmall}
            alt="Counselling session"
          />
        </div>
      </div>
      <IvyLeaguesImmigrationDetailSection />
      <div className="relative">
        <IvyLeaguesWorkOpportunitiesSection />
        <div className="absolute bottom-10 left-40 z-0">
          <img
            className="rounded-lg w-full h-full object-cover"
            src={vectorFoot}
            alt="Counselling session"
          />
        </div>
      </div>

      <IvyLeaguesStudentAccommodationSection />
      <IvyLeaguesFaqSection />
      <IvyLeaguesBlogSection />
      <div className="relative">
        <IvyLeaguesAbroaedUpdateSection />
        <div className="absolute bottom-32 left-40 z-0">
          <img
            className="rounded-lg w-full h-full object-cover"
            src={vectorNoseRightToLeft}
            alt="Counselling session"
          />
        </div>
      </div>
      <IvyLeaguesLeadFormSection />
      <Footer />
    </div>
  );
}

export default IvyLeaguesPage;
