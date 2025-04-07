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
        "Our Direct Programs are designed to make your study abroad experience simple and stress-free. We guide you through each step of the application process to top universities, ensuring everything goes smoothly. With expert guidance, personalized assistance, and partnerships with prestigious international institutions, we ensure you land in the right program suited to your career goals. Experience the world-class education you deserve with ease and confidence, all under the professional guidance of ABROAED.",
    },
    {
      title: "Pathways",
      href: "/pathways",
      img: explorePathImg,
      content:
        "Our Pathways Programs provide an opportunity to study a part of your degree in India and complete it overseas at top international universities. With the guidance of our visa overseas consultant, this flexible study approach makes your transition easy and cost-effective, allowing you to gain the benefits of both local and global education. It provides you with a strong foundation and enhances your career prospects on the global stage. With ABROAED, you’ll never lose sight of the right track.",
    },
  ]


  return (
    <div className="">
      <section className="dark:bg-gray-900 relative ">
        <div className="   relative z-10">
          <div className="flex flex-col md:flex-row gap-9  md:h-[66vh] lg:h-[70vh]">
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
                <a href={href}>
                  <img src={img} alt={title} className="w-full h-full object-cover" />
                  <div
                    className="absolute inset-0 bg-black opacity-50"
                    style={{ mixBlendMode: "multiply" }}
                  ></div>
                  <div className="absolute bottom-3 left-5 px-5">
                    <p className="text-gray-200 lg:mb-2 text-[12px] md:text-base">Explore</p>
                    <h1 className="mb-2 text-[24px] md:text-5xl tracking-tight font-extrabold text-white">
                      {title === "ABROAED" ? (<>{title}<sup>+</sup></>) : title}
                      {/* {title === "ABROAED" ? (<>{title}<sup>+</sup></>) : title} */}
                    </h1>
                    {hoverOn === title.toLowerCase() && isHovered && (
                      <div className="text-white text-justify pb-6 text-[12px] md:text-base transition-opacity duration-300">
                        {content}
                      </div>
                    )}
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
