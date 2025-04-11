
import PrimaryBodyText from "../../../typographies/primaryBodyText";
import SectionMainHeader from "../../../typographies/sectionMainHeader";
import CardComponent from "../../components/cardComponent";
import { aboutUs } from "../../data";

function AboutUsContentSection() {

  return (
    <div>
      <section className="bg-white dark:bg-gray-900 relative ">
        <div className=" relative z-10">
          <div className="flex flex-col gap-4 pt-10">
            <SectionMainHeader>
              Our Story
            </SectionMainHeader>
            <PrimaryBodyText
              className="font-semibold"
            >
              ABROAED, established in 2025 under the prestigious 55-year legacy of IMM Business School, provides personalized guidance through your study overseas process in Delhi NCR. Our philosophy revolves around empowering students to unlock their full potential. Our focus is on holistic support and a promise of growth for every student.
            </PrimaryBodyText>

          </div>
          <div className="  ">
            {aboutUs.map((item, index) => (
              <CardComponent key={index} {...item} />
            ))}
          </div>
        </div>
      </section >
    </div >
  );
}

export default AboutUsContentSection;
