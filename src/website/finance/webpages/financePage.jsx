import FinanceHowItWorks from "./sections/financeHowItWorkSection";
import FinanceHeroSection from "./sections/financeHeroSection";
import vectorShoe from "../../../assets/vectorShoe.png"
import Header from "../../comman/sections/headerSection";
import Footer from "../../comman/sections/footerSection";
import OurPartners from "../../comman/sections/ourPartnersSection";
import FinanceBlogSection from "./sections/financeBlogSection";
import FinanceFaqSection from "./sections/financeFaqSection";
import FinanceLeadFromSection from "./sections/financeLeadFromSection";

function FinancePage() {
  return (
    <div className="font-rethink">
      <Header />
      <FinanceHeroSection />
      <FinanceHowItWorks />
      <OurPartners />
      <div className="relative ">
        <FinanceBlogSection />
        <div className="absolute -bottom-4 left-0 z-0">
          <img
            className="rounded-lg w-full h-full object-cover"
            src={vectorShoe}
            alt="Counselling session"
          />
        </div>
      </div>
      <FinanceFaqSection />
      <FinanceLeadFromSection />
      <Footer />
    </div>
  );
}

export default FinancePage;
