import Footer from "../../comman/sections/footerSection"
import Header from "../../comman/sections/headerSection"
import ContactUs from "./sections/contactUs"

const ContactUsPage = () => {
    return (
        <div className="font-rethink">
            <Header isHeaderBgWhite={true} />
            <ContactUs />
            <Footer />
        </div>
    )
}

export default ContactUsPage