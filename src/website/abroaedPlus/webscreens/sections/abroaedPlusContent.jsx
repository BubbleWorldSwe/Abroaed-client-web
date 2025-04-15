import PrimaryBodyText from "../../../styleComponents/primaryBodyText"
import SectionMainHeader from "../../../styleComponents/sectionMainHeader"

const AbroaedPlusContent = () => {
    return (
        <div className="relative z-10">
            <section className="dark:bg-gray-900 relative pt-14">
                <div className=" ">
                    <SectionMainHeader
                        className={'mb-4'}
                    >
                        About Abroaed<sup>+</sup>
                    </SectionMainHeader>
                    <PrimaryBodyText
                        text=""
                        className={`font-semibold`}
                    >
                        ABROAED<sup>+</sup> is your ultimate study abroad companion, offering end-to-end support to simplify your global education journey. From choosing the right country, university, and course to acing IELTS/PTE/TOEFL, securing loans, and managing finances, we’ve got you covered. Avoid hidden costs (up to ₹4 Lakh+), confusing paperwork, and stress. With expert guidance, personalized plans, and a supportive student community, ABROAED<sup>+</sup> ensures your journey is smooth, saving you time, money, and effort. Your dream university awaits!
                    </PrimaryBodyText>
                </div>
            </section>
        </div>
    )
}

export default AbroaedPlusContent