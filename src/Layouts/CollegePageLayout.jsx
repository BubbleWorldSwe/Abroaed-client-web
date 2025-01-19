import BlogsSection from "../Components/BlogsSection";
import FAQsection from "../Components/FAQsection";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import HomePageLeadForm from "../Components/HomePageLeadForm";
import { KpiMatrix } from "../Components/KpiMatrix";
import AdmissionRequirement from "../pages/destinations/AdmissionRequirement";
import DestinationExpanses from "../pages/destinations/DestinationExpanses";
import DestinationHero from "../pages/destinations/DestinationHero";
import DestinationScholarship from "../pages/destinations/DestinationScholarship";
import ImmigrationDetails from "../pages/destinations/ImmigrationDetails";
import StudentAccommodations from "../pages/destinations/StudentAccommodations";
import WorkOpportunities from "../pages/destinations/WorkOpportunities";
import EligibilityCriteria from "../pages/pathwaysProgram/EligibilityCriteria";
import PathwaysProgram from "../pages/pathwaysProgram/PathwaysProgram";
import dark from "../assets/dark.png"
import locationIcon from '../assets/locationIcon.png'
import worldIcon from "../assets/worldIcon.png"
import DestinationInfo from "../pages/destinations/DestinationInfo";
import FunFacts from "../Components/FunFacts"; 
import vectorLeftFlat from "../assets/vectoreLeftFlat.png"
import UniversityPlace from "../pages/CollegeWeb/universityPlace";
import CourseOffer from "../pages/CollegeWeb/CourseOffer";
import vectorleftNose from "../assets/vectorleftNose.png"
import vectorDownNose from "../assets/vectorDownNose.png"
import vectorBelow from '../assets/vectorBelow.png'
import vectorLeftNoseSmall from '../assets/vectorLeftNoseSmall.png'
 import AbroaedUpdatesCards from "../Components/AbroaedUpdatesCards";
//  import AbroaedUpdatesCards from "../Components/";

const NavigationItems = () => {
  return (
    <div className=  "text-white px-2 mt-10 opacity-70 text-xl flex justify-between">
      <p>
        Private
      </p>
      <div className="flex gap-2 whitespace-nowrap">
        <img src={locationIcon} alt="pic-location " />
        <p className="text-white">Melbourne, Australia</p>
      </div>
      <div className="flex gap-2 whitespace-nowrap">
        <img src={worldIcon} alt="pic-location" />
        <p className="text-white">www.website.com</p>

        <div>

        </div>

      </div>
    </div>
  );
};
const items = [
  {  title: "Laptops & Computers", desc: "Top brands and accessories" },
  {  title: "TV", desc: "Smart and 4K TVs" },
  {  title: "Tablets", desc: "Portable and powerful tablets" },
  {  title: "Audio", desc: "Headphones and speakers" },
  {  title: "Cameras", desc: "Capture your best moments" },
  {  title: "Cameras", desc: "Capture your best moments" },
];


function CollegePageLayout() {
  return (
    <div>
      <Header />
      <DestinationHero
        header="Charles Darwin University"
        text={<NavigationItems />}
        img={dark}
      />  
        <DestinationInfo header={"Why Study in United Kingdom?"} text1={"lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tristique felis non odio accumsan laoreet. Integer cursus libero placerat ex volutpat posuere. Quisque non nisl ultricies, volutpat mauris sed, venenatis dui. Integer eget eleifend augue, ac consequat dui. Nam arcu libero, blandit vel ipsum sagittis, lacinia tincidunt quam. Donec volutpat sodales tincidunt. Praesent pharetra nisi placerat diam fringilla, ac fermentum erat commodo. Quisque semper arcu sit amet auctor consequat. Mauris diam urna, dignissim sed metus eu, congue porttitor nisi. Nulla facilisi."} />
        <div className="relative ">
      <FunFacts  items={items}/>
<div className="absolute bottom-16 left-0 z-0">
        <img
          className="rounded-lg w-full h-full object-cover"
          src={vectorLeftFlat}
          alt="Counselling session"
        />
      </div>
      </div>
<UniversityPlace/>
      <div className="relative">
<CourseOffer/>
               <div className="absolute top-0 -right-10 z-0">
          <img
        className="rounded-lg w-full h-full object-cover"
        src={vectorleftNose}
        alt="Counselling session"
        />
        </div>
      </div>
           <div className="relative">
        <DestinationScholarship />
        <div className="absolute -top-60 left-0 z-0">
          <img
        className="rounded-lg w-full h-full object-cover"
        src={vectorDownNose}
        alt="Counselling session"
        />
        </div>
      </div>
      <div className="relative">
      <StudentAccommodations />
              <div className="absolute top-0 right-0 z-0">
          <img
        className="rounded-lg w-full h-full object-cover"
        src={vectorLeftNoseSmall}
        alt="Counselling session"
        />
        </div>
      </div>
      <FAQsection />
      <BlogsSection />
      <AbroaedUpdatesCards />
      <HomePageLeadForm />
      <Footer />
    </div>
  );
}

export default CollegePageLayout;
