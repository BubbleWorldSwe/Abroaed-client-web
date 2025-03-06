import Header from "../../comman/sections/headerSection"
import LeaguageOfExcellenceHero from "./sections/leaguageOfExcellenceHero"
import LeaguageOfExcellenceServicesOverviews from "./sections/leaguageOfExcellenceServicesOverviews"

const LeaguageOfExcellencePage = () => {
    return (
        <div className="font-rethink">
            <Header />
            <LeaguageOfExcellenceHero />
            <LeaguageOfExcellenceServicesOverviews />
        </div>
    )
}

export default LeaguageOfExcellencePage