import Footer from "../../comman/sections/footerSection"
import Header from "../../comman/sections/headerSection"
import FaqContactUs from "./sections/faqContactUs";
import FaqsHeader from "./sections/faqsHeader";

const FaqsPage = () => {
    return (
        <div className="font-rethink">
            <Header isHeaderBgWhite={true} />
            <FaqsHeader />
            <FaqContactUs />
            <Footer />
        </div>
    )
}

export default FaqsPage;