import accommodation from "../../../../assets/accommodation.jpg";
import { IMAGES } from "../../../../constants/images";
import { heroStyle } from "../../../comman/contexts/heroStyle";
import HeroTextComponent from "../../../styleComponents/heroText";

function CollegeListHeroSection() {
  return (
    <HeroTextComponent img={IMAGES.noCollege}>
      <h1 className={heroStyle.header}>Colleges</h1>
      <p className={heroStyle.text}>
        Explore top-rated colleges across the globe, compare programs, tuition,
        and application timelines — all in one place.
      </p>
    </HeroTextComponent>
  );
}

export default CollegeListHeroSection;
