import SectionMainHeader from "../../../styleComponents/sectionMainHeader"
import FounderContentComponent from "../../components/founderContentComponent"
import gaganSirImg from "../../../../assets/gaganSirImg.png"
import molimaam from "../../../../assets/molimaam.png"


export const mentorsDetails = [
    {
        imgUrl: gaganSirImg,
        name: "Prof. Gaganjit Singh",
        role: "Executive President, IMM Business School",
        text: (
            <>
                <p className="mb-2">
                    Prof. Gaganjit Singh is a management aficionado with over 25 years of expertise in Education, Research, Strategy, Communication, and Project Management. As Executive President of IMM Business School, he has built global academic bridges and championed cross-cultural, future-ready education.
                </p>
                <p className="mb-2">
                    Guided by IMM’s 55+ year legacy of excellence, he continues to push boundaries in higher education. Thinking outside the box comes naturally to him, driven by the belief that “Ordinary is Insipid.” At ABROAED, his mentorship fuels our mission to build Global Intellectual Capital and create meaningful impact. Through the JJ Foundation, he continues to spread his philosophy to Educate, Enable, and Empower—guiding not just students, but a generation of changemakers.
                </p>

            </>
        ),
    },
    {
        imgFirst: false,
        imgUrl: molimaam,
        name: "Molijit Lal",
        role: "Registrar & Promoter, IMM Business School",
        text: (
            <div >
                <p className="mb-2">
                    At ABROAED, we are honored to be mentored by Molijit Lal, a respected academic leader and a key force behind the enduring excellence of IMM Business School. With a deep-rooted commitment to academic integrity and institutional growth, she has played a vital role in upholding and expanding IMM’s 55+ year legacy of delivering transformative education.
                </p>
                <p className="mb-2">
                    As Registrar and Promoter, her structured, student-centric approach continues to shape IMM into a globally respected institution. At ABROAED, her mentorship brings that same spirit of discipline, compassion, and purpose. She helps us stay anchored in values while pushing forward with a global vision—ensuring every student journey is guided with care, clarity, and confidence.
                </p>

            </div>
        ),
    },
];

const AboutUsOurMentors = () => {
    return (
        <section className=" dark:bg-gray-900 relative ">
            <div className=" relative z-10">
                <div className="flex flex-col  gap-4">
                    <SectionMainHeader>
                        Our Mentors at ABROAED
                    </SectionMainHeader>
                </div>
                <div className="pt-8 md:pt-10 flex flex-col gap-10 md:gap-24">
                    {mentorsDetails.map((item, index) => (
                        <FounderContentComponent key={index} {...item} idx={index} />
                    ))}
                </div>
            </div>
        </section >
    )
}

export default AboutUsOurMentors