
// import TestPrepContent from "../../../pages/TestPrep/TestPrepOverviewContent";
import TestPrepHero from "./sections/testPrepHeroSection";
// import TestPrepForm from "../../../pages/TestPrep/TestPrepForm";
import TextPrepAbout from "./sections/testPrepAboutSection";
import TestPrepBatchDetaileSection from "./sections/testPrepBatchDetailSection";
import vectorLeftFlat from "../../../assets/vectoreLeftFlat.png"
import vectorleftNose from "../../../assets/vectorleftNose.png"
import vectorDownNose from "../../../assets/vectorDownNose.png"
import vectorLeftNoseSmall from "../../../assets/vectorLeftNoseSmall.png"
import Header from "../../comman/sections/headerSection";
import Footer from "../../comman/sections/footerSection";
import TestPrepWorkSection from "./sections/testPrepWorkSection";
import TextPrepFaqSection from "./sections/textPrepFaqSection";
import TestPrepBlogSection from "./sections/testPrepBlogSection";
import TestPrepAbroaedUpdateSection from "./sections/testPrepAbroaedUpdateSection";
import TestPrepLeadFormSection from "./sections/testPrepLeadFormSection";


function TestPrepLayout() {
  return (
    <div className="font-rethink">
      <Header />
      <TestPrepHero />
      <div className='relative '>
        <TextPrepAbout />
        <div className="absolute bottom-20 left-0 z-0" >
          <img
            className="rounded-lg max-w-full "
            src={vectorLeftFlat}
            alt="Counselling session"
          />
        </div>
      </div>
      <div className='relative '>
        <TestPrepWorkSection />
        <div className="absolute bottom-0 right-0 z-0" >
          <img
            className="rounded-lg max-w-full "
            src={vectorleftNose}
            alt="Counselling session"
          />
        </div>
      </div>
      <TestPrepBatchDetaileSection />
      <div className='relative '>
        <TextPrepFaqSection />
        <div className="absolute -top-10 left-0 z-0" >
          <img
            className="rounded-lg max-w-full "
            src={vectorDownNose}
            alt="Counselling session"
          />
        </div>
      </div>
      <TestPrepBlogSection />
      <div className='relative '>
        <TestPrepAbroaedUpdateSection />
        <div className="absolute -top-20 right-0 z-0" >
          <img
            className="rounded-lg max-w-full "
            src={vectorLeftNoseSmall}
            alt="Counselling session"
          />
        </div>
      </div>
      {/* <LucideContactRound/> */}
      <TestPrepLeadFormSection />
      <Footer />
    </div>
  );
}

export default TestPrepLayout;
