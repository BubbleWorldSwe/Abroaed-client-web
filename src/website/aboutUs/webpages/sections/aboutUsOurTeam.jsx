import PrimaryBodyText from "../../../styleComponents/primaryBodyText"
import SectionMainHeader from "../../../styleComponents/sectionMainHeader"
import ishika from "../../../../assets/ishika.png"
import ravi from "../../../../assets/ravi.png"
import shubangi from "../../../../assets/shubangi.png"
import zeeshan from "../../../../assets/zeeshan.jpg"

function AboutUsOurTeam() {

  const team = [
    {
      name: "Zeeshan",
      designation: "Senior Manager - Global Partnerships",
      img: zeeshan
    },
    {
      name: "Ravi",
      designation: "Manager - University Admissions & Operations",
      img: ravi
    }, {
      name: "Shubhangi",
      designation: "Assistant Manager - Operations",
      img: shubangi
    },
    {
      name: "Ishika",
      designation: "Manager - Marketing",
      img: ishika
    },


  ];


  return (
    <div>
      <section className=" dark:bg-gray-900 antialiased ">
        <div className="">
          <div className=" flex flex-col gap-2">
            <SectionMainHeader
              className={""}
            >
              Our People Make Us Great
            </SectionMainHeader>
            <PrimaryBodyText
              className={"text-center"}
              style={{ text: 'text-center' }}

            >
              Interact with talented professionals, will be challenged to solve difficult problems and think in new and
              creative ways.
            </PrimaryBodyText>
          </div>
          <div className="grid grid-cols-1 gap-4 mt-8 lg:mt-12 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {team.map((member, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg group">
                <img
                  className="object-cover w-full h-[320px] lg:h-auto scale-100 ease-in duration-300 group-hover:scale-125"
                  src={member.img}
                  alt={member.name}
                />
                <div className="absolute inset-0 grid items-end justify-center p-4 bg-gradient-to-b from-transparent to-black/60">
                  <div className="text-center">
                    <p className="text-xl font-bold text-white">{member.name}</p>
                    <p className="text-base font-medium text-gray-300">{member.designation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUsOurTeam