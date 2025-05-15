import aboutUs from "../../../../assets/aboutUs.png";
import { heroStyle } from "../../../comman/contexts/heroStyle";
import HeroTextComponent from "../../../styleComponents/heroText";

function AboutUsHeroSection() {
  return (
    <HeroTextComponent img={aboutUs}>

      <p className={heroStyle.text}>
        Study ABROAD with ABROAED
      </p>
      <h1 className={heroStyle.header}>
        Your trusted compass to opportunities abroad
      </h1>

    </HeroTextComponent>
  );
}

export default AboutUsHeroSection;
