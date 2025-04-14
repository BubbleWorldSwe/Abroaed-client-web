import SectionMainHeader from "../../../styleComponents/sectionMainHeader"
import CardComponent from "../../components/cardComponent"
import { founderDetails } from "../../data"

const AboutUsFounderSection = () => {
    return (
        <section className="bg-white dark:bg-gray-900 relative ">
            <div className=" relative z-10">
                <div className="flex flex-col justify-center items-center gap-4">
                    <SectionMainHeader>
                        Our Founders
                    </SectionMainHeader>
                </div>
                <div className="pt-10">
                    {founderDetails.map((item, index) => (
                        <CardComponent key={index} {...item} />
                    ))}
                </div>
            </div>
        </section >
    )
}

export default AboutUsFounderSection