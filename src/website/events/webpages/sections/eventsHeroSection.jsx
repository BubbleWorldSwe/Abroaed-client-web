import eventHero from "../../../../assets/eventHero.png";
import { heroStyle } from "../../../comman/contexts/heroStyle";
import HeroTextComponent from "../../../styleComponents/heroText";

function EventsHeroSection() {
  return (
    <HeroTextComponent img={eventHero}>
      <h1 className={heroStyle.header}>
        Education Expo 2025
      </h1>
      <p className={heroStyle.text}>
        Your Path to Higher Studies
      </p>
    </HeroTextComponent>
  );
}

export default EventsHeroSection;
