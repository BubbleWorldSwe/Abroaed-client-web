import Header from '../Components/Header'
import Footer from '../Components/Footer'
import PathwaysHero from '../pages/Pathways/PathwaysHero'
import HowItWorks from '../pages/Finance/HowItWorks'
import OurPartners from '../Components/OurPartners'
import FAQsection from '../Components/FAQsection'
import AbroadUpdatesCards from '../Components/AbroaedUpdatesCards'
import AccomodationLeadForm from '../pages/accomodation/AccomodationLeadForm'

function PathwaysHomeLayout() {
    return (
        <div>
            <Header />
            <PathwaysHero/>
            <HowItWorks/>
            <OurPartners/>
            <FAQsection/>
            <AbroadUpdatesCards/>
            <AccomodationLeadForm/>
            <Footer />
        </div>
    )
}

export default PathwaysHomeLayout