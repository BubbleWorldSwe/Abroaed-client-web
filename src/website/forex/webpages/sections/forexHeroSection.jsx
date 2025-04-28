
import financeHero from "../../../../assets/dark.png";
import { heroStyle } from "../../../comman/contexts/heroStyle";
import HeroTextComponent from "../../../styleComponents/heroText";

function ForexHeroSection() {
  return (
    <HeroTextComponent img={financeHero}>
      <h1 className={heroStyle.header}>
        Smart Financial Planning for Your Study ABROAED Success
      </h1>
      {/* <p className={heroStyle.text}>
                Access global elite education at top-tier universities with personalized guidance
            </p> */}
    </HeroTextComponent>
  );
}

export default ForexHeroSection;
