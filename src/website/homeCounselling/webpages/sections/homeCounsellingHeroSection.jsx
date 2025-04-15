/* eslint-disable react/prop-types */

import { heroStyle } from "../../../comman/contexts/heroStyle"
import HeroTextComponent from "../../../styleComponents/heroText"

const HomeCounsellingHeroSection = ({ img }) => {
    return (
        <HeroTextComponent img={img}>
            <h1 className={heroStyle.header}>
                Start Your Journey From the Comfort of Home!
            </h1>
            <p className={heroStyle.text}>
                Get personalized, one-on-one counselling with experienced consultants to
                help you navigate your study ABROAED plans for free.

            </p>
        </HeroTextComponent>
    )
}

export default HomeCounsellingHeroSection