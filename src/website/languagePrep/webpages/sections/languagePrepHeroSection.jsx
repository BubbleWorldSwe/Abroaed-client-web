/* eslint-disable react/prop-types */
import languageHero from "../../../../assets/languageHero.png";
import { IMAGE_BASE_URL } from "../../../../constants/baseUrl";
import { heroStyle } from "../../../comman/contexts/heroStyle";
import HeroTextComponent from "../../../styleComponents/heroText";

function LanguagePrepHero({ languagePrepsDetails }) {
  return (
    <HeroTextComponent
      img={
        `${IMAGE_BASE_URL}/${languagePrepsDetails?.imageUrl}` || languageHero
      }
    >
      <h1 className={heroStyle.header}>{languagePrepsDetails?.productName}</h1>
      <p className={heroStyle.text}>Master the Language, Embrace the Culture</p>
    </HeroTextComponent>
  );
}

export default LanguagePrepHero;
