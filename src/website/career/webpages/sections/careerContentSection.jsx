
import CardComponent from "../../../aboutUs/components/cardComponent";
import { careerData } from "../../data"

const CareerContentSection = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900 relative px-12 mx-auto">
        <div className=" px-4 mx-auto max-w-screen-2xl  lg:px-3 relative z-10">
          <div className="flex flex-col gap-6 ">
            <h2 className={`text-[45px] w-full text-gray-primary text-center leading-tight font-extrabold `}>
              Life at ABROAED:
              <br />
              What It&apos;s Really Like Working Here
            </h2>
            <p className={`text-gray-primary text-[18px]  dark:text-gray-400 font-medium`}>
              If you’re someone who loves to take on challenges, learn new things, and be part of a team that feels like family, then ABROAED is the place for you.  ABROAED is the haven for those who wants a job that’s not just about the tasks but also about making a real impact, we’ve got your back.            </p>
          </div>

          <div className="mt-2 px-10 mx-auto">
            {careerData.map((item, index) => (
              <CardComponent key={index} {...item} />
            ))}
          </div>
        </div>
      </section>
    </div>)
}

export default CareerContentSection;