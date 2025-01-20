import dark from '../assets/dark.png'
import Header from '../Components/Header';
import DestinationHero from '../pages/destinations/DestinationHero';
// import HowItWorks from '../pages/Finance/HowItWorks';
// import vectorLeftFlat from "../assets/vectorLeftFlat.png"
import BlogsSection from '../Components/BlogsSection';
import FAQsection from '../Components/FAQsection';
import HomePageLeadForm from '../Components/HomePageLeadForm';
import Footer from '../Components/Footer';
import AbroaedUpdatesCards from '../Components/AbroaedUpdatesCards';


const NavigationItems = () => {
  return (
    <div className=  "text-white px-2  opacity-70 text-xl ">
      <p>
      Get personalized, one-on-one counseling with experienced consultants to help you navigate your study abroad plans for free.
      </p>
      <div className="flex gap-2 mt-10 whitespace-nowrap">
       <button className="px-3 py-2 mb-5 rounded-lg text-gray-500  bg-[#FDDA24] " >Book Counselling Now</button>
             </div>
      </div>
  );
};

const HomeCounsellingLayout = () => {
  return (
    <div>
    <Header />
    <DestinationHero
      header="Start Your Journey
      From the Comfort of Home!"
      text={<NavigationItems />}
      img={dark}
    />  
      {/* <div className='relative'>
   <HowItWorks />
            <div className="absolute bottom-20 left-0 z-0" >
        <img
          className="rounded-lg max-w-full "
          src={vectorLeftFlat}
          alt="Counselling session"
        />
      </div> 
           </div> */}

    {/* <div className="relative">
<CourseOffer/>
             <div className="absolute top-0 -right-10 z-0">
        <img
      className="rounded-lg w-full h-full object-cover"
      src={vectorleftNose}
      alt="Counselling session"
      />
      </div>
    </div> */}
         {/* <div className="relative">
      <DestinationScholarship />
      <div className="absolute -top-60 left-0 z-0">
        <img
      className="rounded-lg w-full h-full object-cover"
      src={vectorDownNose}
      alt="Counselling session"
      />
      </div>
    </div> */}
   
    <BlogsSection />
    <FAQsection />
    <AbroaedUpdatesCards />
    <HomePageLeadForm />
    <Footer />
  </div>
  )
}

export default HomeCounsellingLayout;