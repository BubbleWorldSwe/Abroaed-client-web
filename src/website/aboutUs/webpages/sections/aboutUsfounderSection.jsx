import SectionMainHeader from "../../../styleComponents/sectionMainHeader"
import aboutUs1 from "../../../../assets/aboutUs1.png";
import aboutUs2 from "../../../../assets/aboutUs2.png";
import FounderContentComponent from "../../components/founderContentComponent";

export const founderDetails = [
    {
        imgUrl: aboutUs1,
        name: "Tannay Jit Singh",
        role: 'Co-Founder | ABROAED | Founder | Kladio | Director | JJF Education  Pvt Ltd',
        text: (
            <>
                <p className="mb-2">
                    Tannay Jit Singh is a visionary leader and third-generation edu-preneur, deeply rooted in a legacy of educational excellence. As Co-Founder of ABROAED, he is reshaping the student experience with a personalized, seamless approach that sets new standards in the education industry.
                </p>
                <p className="mb-2">
                    Tannay’s journey is marked by hard work, innovation, and a strong family legacy. He is the grandson of Dr. Jagjit Singh, Founder and Chairman of IMM Business School, and the son of Prof. Gaganjit Singh, who continues the family mission through JJF Education Pvt Ltd.
                </p>
                <p className="mb-2">
                    Growing up in this environment, Tannay was immersed in the world of education and entrepreneurship, learning the values of leadership and impact from an early age. He has completed his degree in International Management at Brest Business School, France. Tannay combines his academic insights with real-world leadership experience.
                </p>
                <p className="mb-2">
                    His expertise is further strengthened by certifications in Leadership and Entrepreneurship from Harvard Business School and the International Business Management Institute. As the Founder of Kladio and Director at JJF Education Pvt Ltd, Tannay continues to drive the family legacy forward.
                </p>
                <p className="mb-2">
                    His leadership at ABROAED reflects his unwavering belief in education’s power to transform lives. By providing students with personalized guidance for their study abroad journeys, Tannay is setting a new benchmark for global education—one that is inclusive, student-centered, and transformative.
                </p>
                <p className="mb-2">
                    Through ABROAED, IMM and Kladio, Tannay is empowering the next generation of students to pursue their dreams without limitations, while crafting a future for education that is driven by meaningful change.
                </p>
            </>
        ),
    },
    {
        imgFirst: false,
        imgUrl: aboutUs2,
        name: "Farhan Farooqui",
        role: '',
        text: (
            <div >
                <p className="mb-2">
                    Farhan Farooqui is the dynamic Co-Founder & CEO of ABROAED, where he redefines the study abroad sector by bringing luxury-level personalization and precision to student guidance services. With over 14 years of leadership in the High-end retail and luxury segment—spanning renowned companies like Reliance Brands and Adidas—Farhan brings a unique perspective rooted in Hype culture, Elite customer service experience, and Operational Excellence.
                </p>
                <p className="mb-2">
                    My previous experience as an entrepreneur has shaped my approach to business—one that is driven by innovation, adaptability, and a deep understanding of client needs. I’ve built and scaled businesses from the ground up, developing a strong foundation in leadership, operations, and service excellence. This entrepreneurial journey now fuels ABROAED’s commitment to delivering luxury-level service in the study abroad space.
                </p>
                <p className="mb-2">
                    He holds a Bachelor's degree in French, German, and Linguistics, along with an MBA in Marketing and Retail — a powerful blend of Cultural Fluency and Business Strategy that has profoundly shaped his global perspective and leadership approach.
                </p>
                <p className="mb-2">
                    At ABROAED, Farhan pioneers a unique model of at-home counselling and end-to-end dedicated services, providing students and families with deeply personalized support that mirrors the exclusivity of the luxury retail segment. His vision is rooted in care, trust, and clarity—values he brought from the Luxury Retail world into a space where they were long overdue.
                </p>
                <p className="mb-2">
                    By blending the aspirational appeal of the Hype culture segment with luxury-level service standards and a relentless focus on student-first outcomes, Farhan sets a new benchmark, reshaping the very fabric of how study abroad should be delivered. His mission goes beyond securing admissions; it is about elevating aspirations, transforming journeys, and delivering a level of excellence that the industry has never seen before.
                </p>
            </div>
        ),
    },
];







const AboutUsFounderSection = () => {
    return (
        <section className="bg-white dark:bg-gray-900 relative ">
            <div className=" relative z-10">
                <div className="flex flex-col  gap-4">
                    <SectionMainHeader>
                        Our Founders
                    </SectionMainHeader>
                </div>
                <div className="pt-10 flex flex-col gap-6">
                    {founderDetails.map((item, index) => (
                        <FounderContentComponent key={index} {...item} idx={index} />
                    ))}
                </div>
            </div>
        </section >
    )
}

export default AboutUsFounderSection