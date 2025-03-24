/* eslint-disable react/prop-types */
import { useState } from "react";

const LeaguageOfExcellenceServicesOverviews = ({ setCountry, countriesName }) => {
    const [activeTab, setActiveTab] = useState('USA');
    const [title, setTitle] = useState(countriesName[0].title);

    const handleSelectTab = (country) => {
        setActiveTab(country.code);
        setCountry(country.code);
        setTitle(country.title)
    }
    return (
        <div className="relative z-10">
            <section className="dark:bg-gray-900 relative px-12 mx-auto">
                <div className=" mx-auto max-w-screen-2xl lg:grid lg:grid-cols-1 lg:py-20">
                    <p className="font-normal mb-4 text-gray-500 text-[18px]  dark:text-gray-400">
                        We at ABROAED help aspiring students get into top-tier universities across the UK, US, Australia, New Zealand, Canada, Asia, and Europe. We have a dedicated team to help students seek entrance into the renowned Ivy League schools in the USA. From admission support and mock interviews to VISA support and accommodation services in the destination country, we offer them all. Our League of Excellence program enable students to explore a range of educational opportunities, helping them join the elite groups of influential leaders and eminent scholars.
                    </p>
                    <div className="pt-20">
                        <h2 className="mb-8 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
                            Why is the League of Excellence a Big Deal?
                        </h2>
                        <p className="font-normal mb-4 text-gray-500 text-[18px]  dark:text-gray-400">
                            With our League of Excellence facility, you can take that big leap into Ivy League schools. Just imagine the great people who have walked out in those halls: founders of world-changing companies, breakthrough scientists, U.S. presidents, and even the first female vice president. Our dedicated mentors will prepare you thoroughly to get into these schools so that you can shape your career.
                        </p>
                        <p className="font-normal mb-2 text-gray-500 text-[18px]  dark:text-gray-400">
                            While you’re studying in Ivy League schools, you’ll be surrounded by some of the most brilliant minds out there. Your professors might be Nobel Prize winners, your classmates could be future CEOs, and the opportunities are copious, whether in the form of internships, research, or studying abroad. To top it all, there is a powerful alumni network.
                        </p>
                        <div className="py-10  font-medium flex gap-2 text-center justify-between flex-wrap">
                            {
                                countriesName.map((country, index) => (
                                    <div key={index}>
                                        <button
                                            className={`px-6 py-2 hover:bg-gray-primary hover:text-white rounded-full border-2 border-gray-600 transition-colors duration-200 
                                        ${activeTab === country.code
                                                    ? `bg-gray-primary text-white border-none`
                                                    : `bg-white text-gray-primary`
                                                }`}
                                            onClick={() => handleSelectTab(country)}
                                        >
                                            {country.name}
                                        </button>
                                    </div>
                                ))
                            }
                        </div>
                        <p className={`font-normal  text-[${"gray-primary"} text-[18px]  dark:text-gray-400`}>
                            {title}
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default LeaguageOfExcellenceServicesOverviews