import Footer from "../../comman/sections/footerSection"
import Header from "../../comman/sections/headerSection"
import SectionComponent from "../../styleComponents/sectionComponent"
import ContactUs from "./sections/contactUs"

const ContactUsPage = () => {
    return (
        <div className="font-rethink">
            <Header isHeaderBgWhite={true} />
            <SectionComponent >
                <ContactUs />
            </SectionComponent>
            <Footer />
        </div>
    )
}

export default ContactUsPage