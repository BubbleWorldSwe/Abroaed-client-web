
import pathwaysHome from "../../../../../assets/pathwaysHome.png";
import { heroStyle } from "../../../../comman/contexts/heroStyle";
import HeroTextComponent from "../../../../styleComponents/heroText";

function PathwaysHomeHero() {
    return (
        <HeroTextComponent img={pathwaysHome}>
            <h1 className={heroStyle.header}>
                Pathways Program                </h1>
            <p className={heroStyle.text}>
                Your Pathway to Academic Success and Global Opportunities
            </p>
        </HeroTextComponent>
    )
}

export default PathwaysHomeHero