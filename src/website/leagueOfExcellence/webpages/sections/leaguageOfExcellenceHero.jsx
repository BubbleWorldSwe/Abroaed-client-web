import leaguageHero from "../../../../assets/leaguageHero.png"
import { heroStyle } from "../../../comman/contexts/heroStyle"
import HeroTextComponent from "../../../styleComponents/heroText"

const LeaguageOfExcellenceHero = () => {
    return (
        <HeroTextComponent img={leaguageHero}>
            <h1 className={heroStyle.header}>
                League of Excellence
            </h1>
            <p className={heroStyle.text}>
                Access global elite education at top-tier universities with personalized guidance
            </p>
        </HeroTextComponent>
    )
}

export default LeaguageOfExcellenceHero