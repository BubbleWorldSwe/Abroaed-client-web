import homeService1 from "../../../../assets/homeService1.png"
import homeService2 from "../../../../assets/homeService2.png"
import homeService3 from "../../../../assets/homeService3.png"
import homeService4 from "../../../../assets/homeService4.png"
import homeService5 from "../../../../assets/homeService5.png"
import homeService6 from "../../../../assets/homeService6.png"
import homeService7 from "../../../../assets/homeService7.png"
import homeService8 from "../../../../assets/homeService8.png"
import SectionMainHeader from "../../../styleComponents/sectionMainHeader";
import ServiceCardComponents from "../../../comman/components/serviceCardComponents"
import DotsComponent from "../../../comman/components/dotsComponent"
import { useState } from "react"

const serviceData = [
    {
        text1: "Home Consultation",
        text2:
            "Our home consultation brings expert advice to your doorstep. We assess your educational aspirations, preferred destinations, and potential career paths. This service ensures personalized guidance from experienced counselors in the comfort of your home. With a focus on clarity, we discuss program options, visa processes, and financial planning. This consultation provides families an opportunity to understand the study abroad process comprehensively. Our home consultation services cover throughout Delhi, but on request, we can also serve you in NCR-region and other states of India. We focus on answering your questions, explaining the process, and providing honest, practical advice to help you kick-start your journey.",
        imgUrl: homeService1,
    },
    {
        text1: "Comprehensive Research & Shortlisting",
        text2:
            "We make the highly complicated process of selecting the proper euniversity and course easier. Based on your educational background, the desired career outcome, and choice of country, our experts are going to analyze and research very thoroughly about any particular program to compare universities across the world in rank, courses available, fees and requirements to apply. That's how the personal approach could give you better insight into which choice is actually yours. Narrowing down your choices will lead us to help you focus on opportunities that best align with your aims toward the goal of a successful academic experience abroad.",
        imgUrl: homeService2,
    },
    {
        text1: "Customized Personal Guidance",
        text2:
            "We give you one-to-one guidance at every step in your study abroad journey. Our team takes time to understand the specific needs you have, from selecting a course to preparing your application. We can help you with drafting your statement of purpose, review your documents, and ensure you fulfill all requirements set by the university you've chosen. Additionally, we help you land the most suitable scholarship and offer support in interview preparations. This hands-on assistance ensures you’re fully prepared for every stage of the application process.",
        imgUrl: homeService3,
    },
    {
        text1: "Accommodation Support Services",
        text2:
            "Finding a place to call home while studying in a foreign land is a cumbersome task, however, help is at hand from our team. There is a wide range of choices available to you like hostel dorms, flats where you can house with a flatmate, or independently rented homes. Our team gives you advice on picking a place that works for your money situation where you want to be, and how you like to live. We walk you through the steps to book your place making sure you have all the papers and deals you need. With us backing you up, you can get a comfy and safe place to live, so you can pay attention to your classes without worrying about where you'll sleep at night.",
        imgUrl: homeService4,
    },
    {
        text1: "Exclusive Scholarship Guidance",
        text2:
            "We provide in-depth assistance in identifying and applying for scholarships that align with your academic qualifications and professional objectives. Our team thoroughly researches the relevant funding opportunities, including merit-based, need-based, and program-specific scholarships. We assist you in preparing your application, ensuring all documentation meets all criteria, from academic transcripts to recommendation letters. We also help students write well-argued personal statements and prepare their applications in line with scholarship requirements. Through our extensive information, we help enhance the chances of one being awarded the much-needed financial support to fund their education abroad.",
        imgUrl: homeService5,
    },
    {
        text1: "Global Pathway Course Options",
        text2:
            "We will support you by recommending an appropriate global pathway course to be your bridge to the degree program abroad. These courses are planned for students who need more preparation or improvement in language proficiency, academic abilities, or subject knowledge. With the help of our team, you will identify programs that best fit your background and career aspirations. We provide ample information in terms of course content, duration, and entry requirements to make an informed choice. With our help, you will ease your transition into the university and its academic program that you've chosen.",
        imgUrl: homeService6,
    },
    {
        text1: <>ABROAED<sup>+</sup></>,
        // text2:"The ABROAED Plus program is your all-inclusive study abroad companion, designed to simplify every step of your journey to global education. Recognizing that the study abroad process extends far beyond securing admission, this service offers comprehensive support—from researching the right country, university, and course to managing finances, securing loans, booking accommodation, and even arranging flight tickets and airport transfers. ABROAED Plus eliminates the stress of hidden costs, confusing paperwork, and overwhelming choices, saving you time, money, and effort. With features like personalized consultations, country-specific mentors, tailored SOPs/LORs, visa assistance, and priority offer letters, this program ensures a seamless transition to your dream university. ABROAED Plus is more than just a service; it’s a commitment to empowering you with the tools, guidance, and confidence needed to thrive in your academic and professional pursuits abroad.",
        text2: <>ABROAED<sup>+</sup>  program is your all-inclusive study abroad companion, designed to simplify every step of your journey to global education. Recognizing that the study abroad process extends far beyond securing admission, this service offers comprehensive support—from researching the right country, university, and course to managing finances, securing loans, booking accommodation, and even arranging flight tickets and airport transfers. <>ABROAED<sup>+</sup></> eliminates the stress of hidden costs, confusing paperwork, and overwhelming choices, saving you time, money, and effort. With features like personalized consultations, country-specific mentors, tailored SOPs/LORs, visa assistance, and priority offer letters, this program ensures a seamless transition to your dream university. <>ABROAED<sup>+</sup></> is more than just a service; it’s a commitment to empowering you with the tools, guidance, and confidence needed to thrive in your academic and professional pursuits abroad.</>

        ,
        imgUrl: homeService7,
    },
    {
        text1: "League of Excellence",
        text2:
            "For students aspiring to join the ranks of the world’s most prestigious institutions, the League of Excellence offers unparalleled, distinct assistance for admissions to Ivy League universities and other top-tier global institutions. This service is designed for high-achieving individuals who seek to elevate their academic and professional trajectories. Our experts provide personalized strategies, from crafting compelling application essays to preparing for rigorous interviews, ensuring you stand out in highly competitive admissions processes. With intimate knowledge of what best universities desire, we help you highlight your strengths, achievements, and potential. The League of Excellence is your doorway to making ambitious dreams a reality on the global stage.",
        imgUrl: homeService8,
    },
];

const ExploreOurServicesHomeCounselling = () => {
    const [countImg, setCountImg] = useState(0);

    const handleNextImage = () => {
        setCountImg((prev) => (prev + 1) % serviceData.length);
    };
    const handleDotClick = (index) => {
        if (index !== countImg) {
            setCountImg(index);
        }
    };
    const handlePrevImage = () => {
        setCountImg((prev) => (prev - 1 + serviceData.length) % serviceData.length);
    };



    return (
        <section className=" dark:bg-gray-900 flex flex-col space-y-4 w-full md:max-w-screen-2xl mx-auto  relative">
            <div className="px-4 md:px-12  max-w-screen-2xl relative z-10">
                <SectionMainHeader className="mb-6">
                    Explore Our Other Services
                </SectionMainHeader>
            </div>

            {/* service cards */}
            <ServiceCardComponents
                serviceData={serviceData}
                countImg={countImg}
                handleNextImage={handleNextImage}
                handlePrevImage={handlePrevImage}
            />
            {/* dots */}
            <DotsComponent
                serviceData={serviceData}
                handleDotClick={handleDotClick}
                countImg={countImg}
            />
        </section>
    )
}

export default ExploreOurServicesHomeCounselling