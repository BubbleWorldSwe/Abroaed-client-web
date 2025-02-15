
import PathwaysHomeHero from './sections/pathwaysHomeHeroSection'
import PathwayHomeProgramExplore from './sections/pathwaysHomeProgramExploreSection'
import vectorDownNose from '../../../../assets/vectorDownNose.png'
import vectorLeftNoseSmall from '../../../../assets/vectorLeftNoseSmall.png'
import vectorLeftFlat from "../../../../assets/vectoreLeftFlat.png"
import Header from '../../../comman/sections/headerSection'
import Footer from '../../../comman/sections/footerSection'
import OurPartners from '../../../comman/sections/ourPartnersSection'
import PathwaysHomeHowItWorkSection from './sections/pathwaysHomeHowItWorkSection'
import PathwaysHomeBlogSection from './sections/pathwaysHomeBlogSection'
import PathwaysHomeFaqSection from './sections/pathwaysHomeFaqSection'
import PathwaysHomeAbroaedUpdateSection from './sections/pathwaysHomeAbroaedUpdateSection'
import PathwaysHomeLeadForm from './sections/pathwaysHomeLeadFormSection'

function PathwaysHomePage() {
  return (
    <div className='font-rethink'>
      <Header />
      <PathwaysHomeHero />
      <div className='relative'>
        <PathwaysHomeHowItWorkSection />
        <div className="absolute bottom-20 left-0 z-0" >
          <img
            className="rounded-lg max-w-full "
            src={vectorLeftFlat}
            alt="Counselling session"
          />
        </div>
      </div>
      <OurPartners />
      <PathwayHomeProgramExplore />
      <div className='relative'>
        <PathwaysHomeBlogSection />
        <div className="absolute bottom-20 left-0 z-10" >
          <img
            className="rounded-lg max-w-full "
            src={vectorDownNose}
            alt="Counselling session"
          />
        </div>
      </div>
      <PathwaysHomeFaqSection />
      <div className='relative'>
        <PathwaysHomeAbroaedUpdateSection />
        <div className="absolute top-0 right-0 z-10" >
          <img
            className="rounded-lg max-w-full "
            src={vectorLeftNoseSmall}
            alt="Counselling session"
          />
        </div>
      </div>
      <PathwaysHomeLeadForm />
      <Footer />
    </div>
  )
}

export default PathwaysHomePage