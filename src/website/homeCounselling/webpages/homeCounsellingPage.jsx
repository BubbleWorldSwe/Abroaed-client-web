import dark from '../../../assets/dark.png';
import vectorleftNose from "../../../assets/vectorleftNose.png";
import vectoreLeftFlat from "../../../assets/vectoreLeftFlat.png";
import vectorDownNose from "../../../assets/vectorDownNose.png";
import Footer from '../../comman/sections/footerSection';
import Header from '../../comman/sections/headerSection';
import HomeCounsellingHeroSection from './sections/homeCounsellingHeroSection';
import HomeCounsellingHowItWork from './sections/homeCounsellingHowItWorkSection';
import HomeCounsellingCourseOffer from './sections/homeCounsellingCourseOfferSection';
import HomeCounsellingScholarshipSection from './sections/homeCounsellingScholarshipSection';
import HomeCounsellingBlogSectionSection from './sections/homeCounsellingBlogSectionSection';
import HomeCounsellingFaqSection from './sections/homeCounsellingFaqSection';
import HomeCounsellingAbroaedUpdateSection from './sections/homeCounsellingAbroaedUpdateSection';
import HomeCounsellingLeadFormSection from './sections/homeCounsellingLeadFormSection';


const NavigationItems = () => {
  return (
    <div className="text-white px-2  opacity-70 text-xl ">
      <p>
        Get personalized, one-on-one counseling with experienced consultants to help you navigate your study abroaed plans for free.
      </p>
      <div className="flex gap-2 mt-5 whitespace-nowrap">
        <button className="p-3 text-base mb-2 rounded-lg text-[#432205]  bg-[#FDDA24] " >Book Counselling Now</button>
      </div>
    </div>
  );
};

const HomeCounsellingPage = () => {
  return (
    <div className='font-rethink'>
      <Header />
      <HomeCounsellingHeroSection
        header="Start Your Journey From the Comfort of Home!"
        text={<NavigationItems />}
        img={dark}
      />
      <div className='relative'>
        <HomeCounsellingHowItWork />
        <div className="absolute bottom-20 left-0 z-0" >
          <img
            className="rounded-lg max-w-full "
            src={vectoreLeftFlat}
            alt="Counselling session"
          />
        </div>
      </div>

      <div className="relative">
        <HomeCounsellingCourseOffer />
        <div className="absolute top-0 -right-10 z-0">
          <img
            className="rounded-lg w-full h-full object-cover"
            src={vectorleftNose}
            alt="Counselling session"
          />
        </div>
      </div>
      <div className="relative">
        <HomeCounsellingScholarshipSection />
        <div className="absolute -top-60 left-0 z-0">
          <img
            className="rounded-lg w-full h-full object-cover"
            src={vectorDownNose}
            alt="Counselling session"
          />
        </div>
      </div>

      <HomeCounsellingBlogSectionSection />
      <HomeCounsellingFaqSection />
      <HomeCounsellingAbroaedUpdateSection />
      <HomeCounsellingLeadFormSection />
      <Footer />
    </div>
  )
}

export default HomeCounsellingPage;