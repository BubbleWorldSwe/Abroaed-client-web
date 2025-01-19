
import DestinationHero from "../pages/destinations/DestinationHero";
import DestinationInfo from "../pages/destinations/DestinationInfo";
import FAQsection from "../Components/FAQsection";
import Header from "../Components/Header";
import FunFacts from "../Components/FunFacts";
import UniCoursersCard from "../pages/destinations/UniCoursersCard";
import Footer from "../Components/Footer";
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
import destinationHeroImg from "../assets/destinationHeroImg.png"

function LayoutPageDestination() {
   const items = [
  { icon: "💻", title: "Laptops & Computers", desc: "Top brands and accessories" },
  { icon: "📺", title: "TV", desc: "Smart and 4K TVs" },
  { icon: "📱", title: "Tablets", desc: "Portable and powerful tablets" },
  { icon: "🎵", title: "Audio", desc: "Headphones and speakers" },
  { icon: "📷", title: "Cameras", desc: "Capture your best moments" },
];
 
  return (
    <div>
      <Header />
      <DestinationHero header={'Study in United Kingdom'} text={`Learn more about the exciting places where you can study`}  img={destinationHeroImg}/>
      <DestinationRouting />
      <DestinationInfo header={"Why Study in United Kingdom?"} text1={"lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tristique felis non odio accumsan laoreet. Integer cursus libero placerat ex volutpat posuere. Quisque non nisl ultricies, volutpat mauris sed, venenatis dui. Integer eget eleifend augue, ac consequat dui. Nam arcu libero, blandit vel ipsum sagittis, lacinia tincidunt quam. Donec volutpat sodales tincidunt. Praesent pharetra nisi placerat diam fringilla, ac fermentum erat commodo. Quisque semper arcu sit amet auctor consequat. Mauris diam urna, dignissim sed metus eu, congue porttitor nisi. Nulla facilisi."} />
      <div className="relative ">
      <FunFacts items={items}/>
<div className="absolute bottom-16 left-0 z-0">
        <img
          className="rounded-lg w-full h-full object-cover"
          src={vectorLeftFlat}
          alt="Counselling session"
        />
      </div>
      </div>
      <UniCoursersCard />
      <div className="relative">
      <AdmissionRequirement/>
<div className="absolute -bottom-44 left-0 z-0">
        <img
          className="rounded-lg w-full h-full object-cover"
          src={vectorDownNose}
          alt="Counselling session"
          />
      </div>
      </div>
          <DestinationExpanses/>
          <DestinationScholarship/>
          <div className="relative">
          <ImmigrationDetails/>
          <div className="absolute bottom-0 left-0 z-0">
        <img
          className="rounded-lg w-full h-full object-cover"
          src={vectorRightNoseCurve}
          alt="Counselling session"
          />
      </div>
          </div>
          <div className="relative">
          <WorkOpportunities/>
          <div className="absolute top-0 right-0 z-0">
        <img
          className="rounded-lg w-full h-full object-cover"
          src={vectorBelow}
          alt="Counselling session"
          />
      </div>
          </div>
          <StudentAccommodations/>
            <FAQsection />
          <div className="relative">
          <BlogsSection />
          <div className="absolute top-64 left-48 z-0">
        <img
          className="rounded-lg w-full h-full object-cover"
          src={vectorNoseRightToLeft}
          alt="Counselling session"
          />
      </div>
          </div>
      <AbroaedUpdatesCards />
      <HomePageLeadForm />
      <Footer />
    </div>
  );
}

export default LayoutPageDestination;
