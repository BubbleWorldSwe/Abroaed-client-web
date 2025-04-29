
import financeHero from "../../../../assets/financeHero.png";
import { heroStyle } from "../../../comman/contexts/heroStyle";
import HeroTextComponent from "../../../styleComponents/heroText";

function FinanceHeroSection() {
  return (
    <HeroTextComponent img={financeHero}>
      <h1 className={heroStyle.header}>
        Smart Financial Planning for Your Study Abroad Success
      </h1>
      {/* <p className={heroStyle.text}>
                Access global elite education at top-tier universities with personalized guidance
            </p> */}
    </HeroTextComponent>
  );
}

export default FinanceHeroSection;
