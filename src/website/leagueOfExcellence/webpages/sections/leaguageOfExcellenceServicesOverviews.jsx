/* eslint-disable react/prop-types */
import { useState } from "react";
import PrimaryBodyText from "../../../typographies/primaryBodyText";
import SectionMainHeader from "../../../typographies/sectionMainHeader";

const LeaguageOfExcellenceServicesOverviews = ({
  setCountry,
  countriesName,
}) => {
  const [activeTab, setActiveTab] = useState("USA");
  const [title, setTitle] = useState(countriesName[0].title);

  const handleSelectTab = (country) => {
    setActiveTab(country.code);
    setCountry(country);
    setTitle(country.title);
  };
  return (
    <div className="relative z-10">
      <section className="dark:bg-gray-900 relative px-7 md:px-12 mx-auto">
        <div className=" mx-auto max-w-screen-2xl lg:grid lg:grid-cols-1 py-10 lg:py-20">
          <PrimaryBodyText className=" mb-1 md:mb-4">
            We at ABROAED help aspiring students get into top-tier universities
            across the UK, US, Australia, New Zealand, Canada, Asia, and Europe.
            We have a dedicated team to help students seek entrance into the
            renowned Ivy League schools in the USA. From admission support and
            mock interviews to VISA support and accommodation services in the
            destination country, we offer them all. Our League of Excellence
            program enable students to explore a range of educational
            opportunities, helping them join the elite groups of influential
            leaders and eminent scholars.
          </PrimaryBodyText>
          <div className="pt-5 md:pt-20">
            <SectionMainHeader className=" mb-3 md:mb-8 ">
              Why is the League of Excellence a Big Deal?
            </SectionMainHeader>
            <PrimaryBodyText className=" mb-4">
              With our League of Excellence facility, you can take that big leap
              into Ivy League schools. Just imagine the great people who have
              walked out in those halls: founders of world-changing companies,
              breakthrough scientists, U.S. presidents, and even the first
              female vice president. Our dedicated mentors will prepare you
              thoroughly to get into these schools so that you can shape your
              career.
            </PrimaryBodyText>
            <PrimaryBodyText className="mb-2">
              While you’re studying in Ivy League schools, you’ll be surrounded
              by some of the most brilliant minds out there. Your professors
              might be Nobel Prize winners, your classmates could be future
              CEOs, and the opportunities are copious, whether in the form of
              internships, research, or studying abroad. To top it all, there is
              a powerful alumni network.
            </PrimaryBodyText>
            <div className="py-5 md:py-10  font-medium flex gap-2 text-center md:justify-between flex-wrap">
              {countriesName.map((country, index) => (
                <div key={index}>
                  <button
                    className={`px-2 py-1 text-[12px] md:text-[16px] md:px-6 md:py-2 hover:bg-gray-primary hover:text-white rounded-full border-2 border-gray-600 transition-colors duration-200 
                                        ${activeTab === country.code
                        ? `bg-gray-primary text-white border-gray-primary`
                        : `bg-white text-gray-primary`
                      }`}
                    onClick={() => handleSelectTab(country)}
                  >
                    {country.name}
                  </button>
                </div>
              ))}
            </div>
            <PrimaryBodyText className="mb-2">
              {title}
            </PrimaryBodyText>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LeaguageOfExcellenceServicesOverviews;
