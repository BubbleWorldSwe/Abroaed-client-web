
import PrimaryBodyText from "../../../styleComponents/primaryBodyText";
import SecondaryTitle from "../../../styleComponents/secondaryTitle";
import SectionMainHeader from "../../../styleComponents/sectionMainHeader";
import CardComponent from "../../components/cardComponent";
import { careerData } from "../../data"

const CareerContentSection = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900 relative ">
        <div className="     relative z-10">
          <div className="flex flex-col items-center mb-2 md:mb-5">
            <SectionMainHeader>
              Life at ABROAED
            </SectionMainHeader>
            <SecondaryTitle
              className="text-center"
            >
              What It&apos;s Really Like Working Here
            </SecondaryTitle>
          </div>
          <PrimaryBodyText>
            If you’re someone who loves to take on challenges, learn new things, and be part of a team that feels like family, then ABROAED is the place for you.  ABROAED is the haven for those who wants a job that’s not just about the tasks but also about making a real impact, we’ve got your back.
          </PrimaryBodyText>
          <div className="mt-2 ">
            {careerData.map((item, index) => (
              <CardComponent key={index} {...item} />
            ))}
          </div>
        </div>
      </section>
    </div>)
}

export default CareerContentSection;