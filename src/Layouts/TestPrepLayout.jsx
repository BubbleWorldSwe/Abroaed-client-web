
import Header from "../Components/Header";
import TestPrepContent from "../pages/TestPrep/TestPrepOverviewContent";
import TestPrepHero from "../pages/TestPrep/TestPrepHero";
import TestPrepForm from "../pages/TestPrep/TestPrepForm";
import Footer from "../Components/Footer";
import AboutTest from "../pages/TestPrep/AboutTest";
import HowItWorks from "../pages/Finance/HowItWorks";
import AbroaedUpdatesCards from "../Components/AbroaedUpdatesCards";
import BatchDetailCard from "../pages/TestPrep/BatchDetailCard";
import vectorLeftFlat from "../assets/vectoreLeftFlat.png"
import vectorleftNose from "../assets/vectorleftNose.png"
import vectorDownNose from "../assets/vectorDownNose.png"
import vectorLeftNoseSmall from "../assets/vectorLeftNoseSmall.png"
import FAQsection from "../Components/FAQsection";
import BlogsSection from "../Components/BlogsSection";
import HomePageLeadForm from "../Components/HomePageLeadForm";


function TestPrepLayout() {
  return (
    <div>
      <Header />
      <TestPrepHero />
      <div className='relative '>
        <AboutTest />
        <div className="absolute bottom-20 left-0 z-0" >
          <img
            className="rounded-lg max-w-full "
            src={vectorLeftFlat}
            alt="Counselling session"
          />
        </div>
      </div>
      <div className='relative '>
        <HowItWorks />
        <div className="absolute bottom-0 right-0 z-0" >
          <img
            className="rounded-lg max-w-full "
            src={vectorleftNose}
            alt="Counselling session"
          />
        </div>
      </div>
      <BatchDetailCard />
      <div className='relative '>
        <FAQsection />
        <div className="absolute -top-10 left-0 z-0" >
          <img
            className="rounded-lg max-w-full "
            src={vectorDownNose}
            alt="Counselling session"
          />
        </div>
      </div>
      <BlogsSection />
      <div className='relative '>
        <AbroaedUpdatesCards />
        <div className="absolute -top-20 right-0 z-0" >
          <img
            className="rounded-lg max-w-full "
            src={vectorLeftNoseSmall}
            alt="Counselling session"
          />
        </div>
      </div>
      {/* <LucideContactRound/> */}
      <HomePageLeadForm />
<Footer />
    </div>
  );
}

export default TestPrepLayout;
