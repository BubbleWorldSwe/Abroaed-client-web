
import pathwaysHome from "../../../../../assets/pathwaysHome.png";
import { heroStyle } from "../../../../comman/contexts/heroStyle";
import HeroTextComponent from "../../../../styleComponents/heroText";

function PathwaysHomeHero() {
    return (
        <HeroTextComponent img={pathwaysHome}>
            <h1 className={heroStyle.header}>
                Pathways Program
            </h1>
            <p className={heroStyle.text}>
                Start Locally, Graduate Globally
            </p>
        </HeroTextComponent>
    )
}

export default PathwaysHomeHero