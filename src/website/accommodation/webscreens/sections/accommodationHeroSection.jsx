import accommodation from "../../../../assets/accommodation.jpg";
import { heroStyle } from "../../../comman/contexts/heroStyle";
import HeroTextComponent from "../../../styleComponents/heroText";

function AccommodationHeroSection() {
  return (
    <HeroTextComponent img={accommodation}>
      <h1 className={heroStyle.header}>
        Accomodations
      </h1>
      <p className={heroStyle.text}>
        With ABROAED, scouting the perfect accommodation abroad has never been easier
      </p>
    </HeroTextComponent>
  );
}

export default AccommodationHeroSection;
