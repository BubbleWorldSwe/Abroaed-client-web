import Header from '../Components/Header'
import Footer from '../Components/Footer'
import PathwaysHero from '../pages/Pathways/PathwaysHero'
import HowItWorks from '../pages/Finance/HowItWorks'
import OurPartners from '../Components/OurPartners'
import FAQsection from '../Components/FAQsection'
import AbroadUpdatesCards from '../Components/AbroaedUpdatesCards'
import AccomodationLeadForm from '../pages/accommodation/AccomodationLeadForm'
import BlogsSection from '../Components/BlogsSection'
import PathwayProgramExplore from '../pages/Pathways/PathwayProgramExplore'
import vectorDownNose from '../assets/vectorDownNose.png'
import vectorLeftNoseSmall from '../assets/vectorLeftNoseSmall.png'
import vectorLeftFlat from "../assets/vectoreLeftFlat.png"
function PathwaysHomeLayout() {
    return (
        <div>
            <Header />
            <PathwaysHero />
            <div className='relative'>
   <HowItWorks />
            <div className="absolute bottom-20 left-0 z-0" >
        <img
          className="rounded-lg max-w-full "
          src={vectorLeftFlat}
          alt="Counselling session"
        />
      </div> 
           </div>
            <OurPartners />
            <PathwayProgramExplore/>
           <div className='relative'>
            <BlogsSection />
 <div className="absolute bottom-20 left-0 z-10" >
        <img
          className="rounded-lg max-w-full "
          src={vectorDownNose}
          alt="Counselling session"
        />
      </div> 
           </div>
            <FAQsection />
            <div className='relative'>
            <AbroadUpdatesCards />
            <div className="absolute top-0 right-0 z-10" >
        <img
          className="rounded-lg max-w-full "
          src={vectorLeftNoseSmall}
          alt="Counselling session"
        />
      </div>
            </div>
            <AccomodationLeadForm />
            <Footer />
        </div>
    )
}

export default PathwaysHomeLayout