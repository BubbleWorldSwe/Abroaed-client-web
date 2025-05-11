
import PrimaryBodyText from "../../../styleComponents/primaryBodyText";
import SecondaryTitle from "../../../styleComponents/secondaryTitle";
import SectionMainHeader from "../../../styleComponents/sectionMainHeader";
import CardComponent from "../../components/cardComponent";
import wwUsContent1 from "../../../../assets/wwUsContent1.png";
import wwUsContent2 from "../../../../assets/wwUsContent2.png";
import { motion } from "framer-motion";

export const careerData = [
  {
    imgFirst: true,
    imgUrl: wwUsContent1,
    heading: "What Makes ABROAED Feel Like Home?",
    text: (
      <div className="flex flex-col gap-4">
        <p>
          At ABROAED, we build a "Home Away from Home" for our employees by infusing a strong culture of support, collaboration, and professional growth into our daily operations. This is achieved through heterogeneous team-building initiatives, regular check-ins, and clear communication channels that encourage open dialogue. Employees are paired with mentors to guide them through challenges and foster development in their roles. Cross-function collaboration and a team-centric way of solving issues that allow for joint knowledge sharing underlie our methods of problem-solving.
        </p>
        <p>
          We create continuous, solution-focused, constructive feedback that gives each employee lessons from every incident. By fostering a culture of inclusivity and empathy, we ensure that everyone feels a sense of belonging and can thrive in their professional journey. Our efforts are centered around building long-lasting relationships that go beyond just work; they create a shared sense of purpose and camaraderie.
        </p>
      </div>
    ),
  },
  {
    imgFirst: false,
    imgUrl: wwUsContent2,
    heading: "A Strong Focus on Personal Development",
    text: (
      <div className="flex flex-col gap-4">
        <p>
          We don't think growth should ever come to an end, and our senior guides have a track record of 500+ successful counselling sessions and they believe they have a long way to go. Here, growth doesn't have an end; it's a journey and one that we undertake together, side by side. Our philosophy is simple and profound: we invest in individuals because they are the heartbeat of our achievement. We invest in the growth of our people, with opportunities for leadership, skill development, and growth. After all, when the individuals behind the work grow, the work flourishes.
        </p>
        <p>
          Personal development at ABROAED is not limited to formal training sessions; it extends to the challenges and experiences that come with everyday tasks, fostering a culture where employees continually push their limits. Through collaborative workshops, continuous learning, and exposure to a variety of projects, we equip our team with the tools they need to excel both professionally and personally.
        </p>
      </div>
    ),
  },
];


const CareerContentSection = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900 relative ">
        <div className="     relative z-10">
          <div className="flex flex-col  mb-2 md:mb-5">
            <SectionMainHeader>
              Life at ABROAED
            </SectionMainHeader>
            <SecondaryTitle
              className=""
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