import homeCounsellingHero from "../../../assets/homeCounsellingHero.png";
// import vectorleftNose from "../../../assets/vectorleftNose.png";
import vectoreLeftFlat from "../../../assets/vectoreLeftFlat.png";
import vectorleftNose from "../../../assets/vectorleftNose.png";
import vectorLeftNoseSmall from "../../../assets/vectorLeftNoseSmall.png";
import Footer from "../../comman/sections/footerSection";
import Header from "../../comman/sections/headerSection";
import HomeCounsellingHeroSection from "./sections/homeCounsellingHeroSection";
import HomeCounsellingHowItWork from "./sections/homeCounsellingHowItWorkSection";
// import HomeCounsellingCourseOffer from './sections/homeCounsellingCourseOfferSection';
// import HomeCounsellingScholarshipSection from './sections/homeCounsellingScholarshipSection';
// import HomeCounsellingBlogSectionSection from './sections/homeCounsellingBlogSectionSection';
import HomeCounsellingFaqSection from "./sections/homeCounsellingFaqSection";
// import HomeCounsellingAbroaedUpdateSection from './sections/homeCounsellingAbroaedUpdateSection';
// import HomeCounsellingLeadFormSection from './sections/homeCounsellingLeadFormSection';
import WhyChooseOurHomeCounselling from "./sections/whyChooseOurHomeCounselling";
import BookCounsellingNow from "./sections/bookCounsellingNow";
import Testimonials from "../../comman/components/testimonials";
import ExploreOurServicesHomeCounselling from "./sections/exploreOurServicesHomeCounselling";
import Blogs from "../../comman/components/blogs";
import ContactUsForm from "../../comman/components/contactUsForm";
import { entity, source } from "../../../constants/values";
import { addLeadRequest } from "../../../redux/actions/leadsActions";
import { useDispatch, useSelector } from "react-redux";

const NavigationItems = () => {
  return (
    <div className="text-white  bg-opacity-70 text-xl ">
      <p>
        Get personalized, one-on-one counseling with experienced consultants to
        help you navigate your study abroaed plans for free.
      </p>
      <div className="flex gap-2 mt-5 whitespace-nowrap">
        <button className="px-4 py-3  text-base mb-2 font-semibold rounded-lg text-[#432205] hover:bg-[#EDFA29]  bg-[#FDDA24] ">
          Book Counselling Now
        </button>
      </div>
    </div>
  );
};

const HomeCounsellingPage = () => {
  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state?.leads);
  console.log(loading, "loading");

  const handleAddLead = (data) => {
    // setIsLoading(true);
    console.log("handleAddLead");
    console.log(data);

    dispatch(addLeadRequest(data));
    // setIsLoading(false);
  };

  return (
    <div className="font-rethink">
      <Header />
      <HomeCounsellingHeroSection
        header="Start Your Journey From the Comfort of Home!"
        text={<NavigationItems />}
        img={homeCounsellingHero}
      />
      <div className="relative">
        <HomeCounsellingHowItWork />
        <div className="absolute -bottom-28 left-0 z-0">
          <img
            className="rounded-lg max-w-full "
            src={vectoreLeftFlat}
            alt="Counselling session"
          />
        </div>
      </div>
      <WhyChooseOurHomeCounselling />
      <div className="relative">
        <BookCounsellingNow
          onFormSubmit={handleAddLead}
          source={source.homeCounselling}
          entity={entity.bookCounselling}
          loading={loading}
        />
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
      <ContactUsForm
        onFormSubmit={handleAddLead}
        source={source.homeCounselling}
        entity={entity.contactUs}
      />
      <Footer />
    </div>
  );
};

export default HomeCounsellingPage;
