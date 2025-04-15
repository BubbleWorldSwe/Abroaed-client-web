import SectionMainHeader from "../../../styleComponents/sectionMainHeader"
import CardComponent from "../../components/cardComponent"
// import { founderDetails } from "../../data"
import aboutUs1 from "../../../../assets/aboutUs1.png";
import aboutUs2 from "../../../../assets/aboutUs2.png";

export const founderDetails = [
    {
        imgFirst: true,
        imgUrl: aboutUs1,
        heading: "Meet Tannay Jit Singh",
        text: (
            <div className="flex flex-col gap-4">
                <p>
                    Tannay Jit Singh, Co-Founder of ABROAED, is a third-generation edu-preneur inspired by his grandfather, Dr. Jagjit Singh—Founder of IMM Business School—and his father, Prof. Gaganjit Singh. Raised in an environment rooted in education, he was always surrounded by values of leadership, vision, and lifelong learning.
                </p>
                <p>
                    He earned his degree in International Management from Brest Business School, France, and enhanced his business acumen through leadership and entrepreneurship programs at Harvard Business School and IBMI, gaining global exposure and strong strategic insight.
                </p>
                <p>
                    As the Founder of Kladio and Director at JJF Education Pvt Ltd, Tannay combines innovation, empathy, and experience to reshape student journeys. With ABROAED, he aims to make global education more accessible, inclusive, and personalized. He believes in empowering students to pursue international opportunities not just with guidance—but with a roadmap built on trust, clarity, and long-term success.
                </p>
            </div>
        ),
    },
    {
        imgFirst: false,
        imgUrl: aboutUs2,
        heading: "Meet Farhan Farooqui",
        text: (
            <div className="flex flex-col gap-4">
                <p>
                    Farhan Farooqui, Co-Founder & CEO of ABROAED, brings over 14 years of leadership experience from renowned brands like Reliance and Adidas. His background in luxury retail allows him to merge premium service with streamlined operations, creating a student experience rooted in quality and efficiency.
                </p>
                <p>
                    With academic credentials in French, German, Linguistics, and an MBA in Marketing and Retail, Farhan blends cultural fluency and strategic vision. His unique skill set helps him lead with empathy while driving innovation across student services and international admissions.
                </p>
                <p>
                    At ABROAED, Farhan has introduced a home-based, high-touch counselling model that emphasizes clarity, care, and personalization. His mission is to guide students through every step of the global education process, ensuring they feel supported and understood. By combining heart and strategy, Farhan is building an ecosystem where students can dream bigger and reach farther with confidence, purpose, and personalized support at every turn.
                </p>
            </div>
        ),
    },
];






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
                        <CardComponent key={index} {...item} idx={index} />
                    ))}
                </div>
            </div>
        </section >
    )
}

export default AboutUsFounderSection