
import forexHero from "../../../../assets/forex.png";
import { heroStyle } from "../../../comman/contexts/heroStyle";
import HeroTextComponent from "../../../styleComponents/heroText";

function ForexHeroSection() {
  return (
    <HeroTextComponent img={forexHero}>
      <h1 className={heroStyle.header}>
        Built for Students, Trusted by Parents – Smarter Forex Services for Smarter Abroad Goals
      </h1>
      {/* <p className={heroStyle.text}>
                Access global elite education at top-tier universities with personalized guidance
            </p> */}
    </HeroTextComponent>
  );
}

export default ForexHeroSection;
