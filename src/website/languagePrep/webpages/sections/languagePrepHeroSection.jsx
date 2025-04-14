/* eslint-disable react/prop-types */
import languageHero from "../../../../assets/languageHero.png";
import { heroStyle } from "../../../comman/contexts/heroStyle";
import HeroTextComponent from "../../../styleComponents/heroText";

function LanguagePrepHero({ languagePrepsDetails }) {
  return (
    <div className="">
      <HeroTextComponent img={languageHero}>
        <h1 className={heroStyle.header}>
          {languagePrepsDetails?.productName}
        </h1>
        {/* <p className={heroStyle.text}>
          Experience Academic Excellence in the Land of Opportunities
        </p> */}
      </HeroTextComponent>

    </div>
  );
}

export default LanguagePrepHero;
