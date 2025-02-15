import vectorLeftFlat from "../../../assets/vectoreLeftFlat.png"
import vectorleftNose from "../../../assets/vectorleftNose.png"
import vectorDownNose from "../../../assets/vectorDownNose.png"
import vectorLeftNoseSmall from '../../../assets/vectorLeftNoseSmall.png'
import Header from "../../comman/sections/headerSection";
import Footer from "../../comman/sections/footerSection";
import { items } from "../data";
import dark from "../../../assets/dark.png";
import locationIcon from "../../../assets/locationIcon.png";
import worldIcon from "../../../assets/worldIcon.png";
import CollegeHeroSection from "./sections/collegeHeroSection";
import CollegeInfoSection from "./sections/collegeInfoSection";
import CollegeFunFactSection from "./sections/collegeFunFactSection";
import CollegeUniversitySection from "./sections/collegeUniversitySection";
import CollegeCourseOfferSection from "./sections/collegeCourseOfferSection";
import CollegeScholarshipSection from "./sections/collegeScholarshipSection";
import CollegeStudentAccommodation from "./sections/collegeStudentAccommodation";
import CollegeFaqSection from "./sections/collegeFaqSection";
import CollegeBlogSection from "./sections/collegeBlogSection";
import CollegeAbroaedUpdateSection from "./sections/collegeAbroaedUpdateSection";
import CollegeLeadFormSection from "./sections/collegeLeadFormSection";

const NavigationItems = () => {
  return (
    <div className="text-white px-2 mt-8 opacity-70 text-xl flex justify-between">
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

function CollegePage() {
  return (
    <div className="font-rethink">
      <Header />
      <CollegeHeroSection
        header="Charles Darwin University"
        text={<NavigationItems />}
        img={dark}
      />
      <CollegeInfoSection header={"Why Study in United Kingdom?"} text1={"lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tristique felis non odio accumsan laoreet. Integer cursus libero placerat ex volutpat posuere. Quisque non nisl ultricies, volutpat mauris sed, venenatis dui. Integer eget eleifend augue, ac consequat dui. Nam arcu libero, blandit vel ipsum sagittis, lacinia tincidunt quam. Donec volutpat sodales tincidunt. Praesent pharetra nisi placerat diam fringilla, ac fermentum erat commodo. Quisque semper arcu sit amet auctor consequat. Mauris diam urna, dignissim sed metus eu, congue porttitor nisi. Nulla facilisi."} />
      <div className="relative ">
        <CollegeFunFactSection items={items} />
        <div className="absolute bottom-16 left-0 z-0">
          <img
            className="rounded-lg w-full h-full object-cover"
            src={vectorLeftFlat}
            alt="Counselling session"
          />
        </div>
      </div>
      <CollegeUniversitySection />
      <div className="relative">
        <CollegeCourseOfferSection />
        <div className="absolute top-0 -right-10 z-0">
          <img
            className="rounded-lg w-full h-full object-cover"
            src={vectorleftNose}
            alt="Counselling session"
          />
        </div>
      </div>
      <div className="relative">
        <CollegeScholarshipSection />
        <div className="absolute -top-60 left-0 z-0">
          <img
            className="rounded-lg w-full h-full object-cover"
            src={vectorDownNose}
            alt="Counselling session"
          />
        </div>
      </div>
      <div className="relative">
        <CollegeStudentAccommodation />
        <div className="absolute top-0 right-0 z-0">
          <img
            className="rounded-lg w-full h-full object-cover"
            src={vectorLeftNoseSmall}
            alt="Counselling session"
          />
        </div>
      </div>
      <CollegeFaqSection />
      <CollegeBlogSection />
      <CollegeAbroaedUpdateSection />
      <CollegeLeadFormSection />
      <Footer />
    </div>
  );
}

export default CollegePage;
