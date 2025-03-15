import ContactUsForm from "../../comman/components/contactUsForm";
import Footer from "../../comman/sections/footerSection"
import Header from "../../comman/sections/headerSection"
import FaqsHeader from "./sections/faqsHeader";

const FaqsPage = () => {
    return (
        <div className="font-rethink">
            <Header isHeaderBgWhite={true} />
            <FaqsHeader />
            <ContactUsForm />
            <Footer />
        </div>
    )
}

export default FaqsPage;