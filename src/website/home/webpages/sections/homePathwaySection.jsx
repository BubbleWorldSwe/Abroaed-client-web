import { useState } from "react";
import directHomeImg from "../../../../assets/directHomeImg.png";
import explorePathImg from "../../../../assets/explorePathImg.png";

const HomePathwaySection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [hoverOn, setHoverOn] = useState(null);
  const cardData = [
    {
      title: 'ABROAED',
      href: "/abroaedPlus",
      img: directHomeImg,
      content:
        (<>ABROAED<><sup>+</sup></> is your ultimate study abroad companion, offering end-to-end support to simplify your global education journey. From choosing the right country, university, and course to acing IELTS/PTE/TOEFL, securing loans, and managing finances, we’ve got you covered. Avoid hidden costs (up to ₹4 Lakh+), confusing paperwork, and stress. </>),
    },
    {
      title: "League of Excellence",
      href: "/leaguageOfExcellence",
      img: explorePathImg,
      content:
        "We at ABROAED help aspiring students get into top-tier universities across the UK, US, Australia, New Zealand, Canada, Asia, and Europe. We have a dedicated team to help students seek entrance into the renowned Ivy League schools in the USA. From admission support and mock interviews to VISA support and accommodation services in the destination country, we offer them all.",

    },
  ]


  return (
    <div className="">
      <section className="dark:bg-gray-900 relative ">
        <div className="   relative z-10">
          <div className="flex flex-col md:flex-row gap-9 h-[60rem]  md:h-[66vh] lg:h-[80vh]">
            {cardData?.map(({ title, href, img, content }) => (
              <div
                key={title}
                className={`relative flex-grow rounded-lg overflow-y-auto transition-all duration-300 ease-in-out ${hoverOn === title.toLowerCase() && isHovered ? "scale-[1.01] shadow-2xl" : ""
                  }`}
                onMouseEnter={() => {
                  setIsHovered(true);
                  setHoverOn(title.toLowerCase());
                }}
                onMouseLeave={() => setIsHovered(false)}
              >
                <a
                  href={href}
                >
                  <img src={img} alt={title} className="w-full h-full object-cover" />
                  <div
                    className="absolute inset-0 bg-black opacity-60"
                    style={{ mixBlendMode: "multiply" }}
                  ></div>
                  <div className="absolute bottom-2 overflow-auto md:bottom-14 md:left-4 px-4 mx-auto md:px-5">
                    <p className="text-gray-200 lg:mb-2 text-[12px] md:text-base">Explore</p>
                    <h1 className="mb-2 text-[24px] md:text-5xl tracking-tight font-medium text-white">
                      {title === "ABROAED" ? (<>{title}<sup>+</sup></>) : title}
                      {/* {title === "ABROAED" ? (<>{title}<sup>+</sup></>) : title} */}
                    </h1>
                    <div className="hidden md:block">
                      {hoverOn === title.toLowerCase() && isHovered && (
                        <div className="text-white  text-justify pb-6 text-[16px] md:text-base transition-opacity duration-300">
                          {content}
                        </div>
                      )}
                    </div>
                    <div className="block md:hidden">
                      <div className="text-white  text-justify pb-6 text-[16px] md:text-base transition-opacity duration-300">
                        {content}
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePathwaySection;
