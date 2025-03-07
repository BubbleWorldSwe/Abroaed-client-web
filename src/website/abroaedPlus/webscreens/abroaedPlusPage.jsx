import ContactUsForm from "../../comman/components/contactUsForm"
import Testimonials from "../../comman/components/testimonials"
import Footer from "../../comman/sections/footerSection"
import Header from "../../comman/sections/headerSection"
import AbroaedPlusContent from "./sections/abroaedPlusContent"
import AbroaedPlusHero from "./sections/abroaedPlusHero"
import AbroaedPlusHowItWork from "./sections/abroaedPlusHowItWork"
import AbroaedPlusWhyChoose from "./sections/abroaedPlusWhyChoose"
import vectorDownNose from "../../../assets/vectorDownNose.png"
import vectoreLeftFlat from "../../../assets/vectoreLeftFlat.png"
import vectorleftNose from "../../../assets/vectorleftNose.png"
import AbroaedPlusFaq from "./sections/abroaedPlusFaq"

const AbroaedPlusPage = () => {
    return (
        <div className="font-rethink">
            <Header />
            <AbroaedPlusHero />
            <AbroaedPlusContent />
            <div className="relative">
                <AbroaedPlusWhyChoose />
                <div className="absolute top-0 left-0 -z-10">
                    <img
                        className="rounded-lg w-full h-full object-cover"
                        src={vectoreLeftFlat}
                        alt="Counselling session"
                    />
                </div>
            </div>
            <div className="relative">
                <AbroaedPlusHowItWork />
                <div className="absolute -bottom-16 right-0 -z-10">
                    <img
                        className="rounded-lg w-full h-full object-cover"
                        src={vectorleftNose}
                        alt="Counselling session"
                    />
                </div>
            </div>
            <Testimonials />
            <div className="relative">
                <AbroaedPlusFaq />
                <div className="absolute top-32 left-0 -z-10">
                    <img
                        className="rounded-lg w-full h-full object-cover"
                        src={vectorDownNose}
                        alt="Counselling session"
                    />
                </div>
            </div>
            <ContactUsForm />
            <Footer />
        </div>
    )
}

export default AbroaedPlusPage