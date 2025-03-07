import dark from '../../../assets/dark.png';
// import vectorleftNose from "../../../assets/vectorleftNose.png";
import vectoreLeftFlat from "../../../assets/vectoreLeftFlat.png";
import vectorleftNose from "../../../assets/vectorleftNose.png";
import vectorLeftNoseSmall from "../../../assets/vectorLeftNoseSmall.png";
import Footer from '../../comman/sections/footerSection';
import Header from '../../comman/sections/headerSection';
import HomeCounsellingHeroSection from './sections/homeCounsellingHeroSection';
import HomeCounsellingHowItWork from './sections/homeCounsellingHowItWorkSection';
// import HomeCounsellingCourseOffer from './sections/homeCounsellingCourseOfferSection';
// import HomeCounsellingScholarshipSection from './sections/homeCounsellingScholarshipSection';
// import HomeCounsellingBlogSectionSection from './sections/homeCounsellingBlogSectionSection';
import HomeCounsellingFaqSection from './sections/homeCounsellingFaqSection';
// import HomeCounsellingAbroaedUpdateSection from './sections/homeCounsellingAbroaedUpdateSection';
// import HomeCounsellingLeadFormSection from './sections/homeCounsellingLeadFormSection';
import WhyChooseOurHomeCounselling from './sections/whyChooseOurHomeCounselling';
import BookCounsellingNow from './sections/bookCounsellingNow';
import Testimonials from '../../comman/components/testimonials';
import ExploreOurServicesHomeCounselling from './sections/exploreOurServicesHomeCounselling';
import Blogs from '../../comman/components/blogs';
import ContactUsForm from '../../comman/components/contactUsForm';


const NavigationItems = () => {
  return (
    <div className="text-white  opacity-70 text-xl ">
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
        <div className="absolute -bottom-28 left-0 z-0" >
          <img
            className="rounded-lg max-w-full "
            src={vectoreLeftFlat}
            alt="Counselling session"
          />
        </div>
      </div>
      <WhyChooseOurHomeCounselling />
      <div className="relative">
        <BookCounsellingNow />
        <div className="absolute top-48 right-0 -z-10">
          <img
            className="rounded-lg w-full h-full object-cover"
            src={vectorleftNose}
            alt="Counselling session"
          />
        </div>
      </div>
      <Testimonials />


      <ExploreOurServicesHomeCounselling />
      <HomeCounsellingFaqSection />
      <div className="relative">
        <Blogs />
        <div className="absolute -top-10 right-0 -z-10">
          <img
            className="rounded-lg w-full h-full object-cover"
            src={vectorLeftNoseSmall}
            alt="Counselling session"
          />
        </div>
      </div>
      <ContactUsForm />
      <Footer />
    </div>
  )
}

export default HomeCounsellingPage;