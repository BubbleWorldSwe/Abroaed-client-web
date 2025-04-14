/* eslint-disable react/prop-types */
// import Flag from 'react-world-flags';

import Flag from "react-world-flags";
import { heroStyle } from "../../../comman/contexts/heroStyle";
import HeroTextComponent from "../../../styleComponents/heroText";


function DestinationHeroSection({ destinationDetails, img }) {
  return (
    <HeroTextComponent img={img}>
      <h1 className={heroStyle.header}>
        <Flag code={destinationDetails?.countryId?.code} style={{ display: 'inline-block', marginRight: '15px' }}
          className="w-16 md:w-24"
        />
        Study in {destinationDetails?.countryId?.name}
      </h1>
      <p className={heroStyle.text}>
        Experience Academic Excellence in the Land of Opportunities
      </p>
    </HeroTextComponent>
  );
}

export default DestinationHeroSection;
