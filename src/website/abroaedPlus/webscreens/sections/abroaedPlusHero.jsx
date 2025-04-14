import leaguageHero from "../../../../assets/leaguageHero.png"
import { heroStyle } from "../../../comman/contexts/heroStyle"
import HeroTextComponent from "../../../styleComponents/heroText"


const AbroaedPlusHero = () => {
    return (
        <HeroTextComponent img={leaguageHero}>
            <h1 className={heroStyle.header}>
                ABROAED <sup>+</sup>
            </h1>
            <p className={heroStyle.text}>
                From home counselling to post-arrival support – We’re with you, even on the other side!
            </p>
        </HeroTextComponent>

    )
}

export default AbroaedPlusHero