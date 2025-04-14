/* eslint-disable react/prop-types */

import { heroStyle } from "../../../comman/contexts/heroStyle"
import HeroTextComponent from "../../../styleComponents/heroText"

const HomeCounsellingHeroSection = ({ img, header, text }) => {
    return (
        <HeroTextComponent img={img}>
            <h1 className={heroStyle.header}>
                {header}
            </h1>
            <p className={heroStyle.text}>
                {text}
            </p>
        </HeroTextComponent>
    )
}

export default HomeCounsellingHeroSection