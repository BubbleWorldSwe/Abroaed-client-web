import PrimaryBodyText from "../../../styleComponents/primaryBodyText"
import SectionMainHeader from "../../../styleComponents/sectionMainHeader"

function AboutUsOurTeam() {
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
          <div className="grid grid-cols-1 gap-4 mt-8 lg:mt-12 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
            <div className="relative overflow-hidden rounded-lg group">
              <img className="object-cover w-full h-[320px] lg:h-auto scale-100 ease-in duration-300 group-hover:scale-125" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/team/member-1.png" alt="" />
              <div className="absolute inset-0 grid items-end justify-center p-4 bg-gradient-to-b from-transparent to-black/60">
                <div className="text-center">
                  <p className="text-xl font-bold text-white">
                    Robert Brown
                  </p>
                  <p className="text-base font-medium text-gray-300">
                    CEO & Co-Founder
                  </p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg group">
              <img className="object-cover w-full h-[320px] lg:h-auto scale-100 ease-in duration-300 group-hover:scale-125" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/team/member-1.png" alt="" />
              <div className="absolute inset-0 grid items-end justify-center p-4 bg-gradient-to-b from-transparent to-black/60">
                <div className="text-center">
                  <p className="text-xl font-bold text-white">
                    Robert Brown
                  </p>
                  <p className="text-base font-medium text-gray-300">
                    CEO & Co-Founder
                  </p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg group">
              <img className="object-cover w-full h-[320px] lg:h-auto scale-100 ease-in duration-300 group-hover:scale-125" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/team/member-2.png" alt="" />
              <div className="absolute inset-0 grid items-end justify-center p-4 bg-gradient-to-b from-transparent to-black/60">
                <div className="text-center">
                  <p className="text-xl font-bold text-white">
                    Leslie Livingston
                  </p>
                  <p className="text-base font-medium text-gray-300">
                    CTO & Co-Founder
                  </p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg group">
              <img className="object-cover w-full h-[320px] lg:h-auto scale-100 ease-in duration-300 group-hover:scale-125" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/team/member-3.png" alt="" />
              <div className="absolute inset-0 grid items-end justify-center p-4 bg-gradient-to-b from-transparent to-black/60">
                <div className="text-center">
                  <p className="text-xl font-bold text-white">
                    Joseph McFall
                  </p>
                  <p className="text-base font-medium text-gray-300">
                    Front-end Developer
                  </p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg group">
              <img className="object-cover w-full h-[320px] lg:h-auto scale-100 ease-in duration-300 group-hover:scale-125" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/team/member-4.png" alt="" />
              <div className="absolute inset-0 grid items-end justify-center p-4 bg-gradient-to-b from-transparent to-black/60">
                <div className="text-center">
                  <p className="text-xl font-bold text-white">
                    Helene Engels
                  </p>
                  <p className="text-base font-medium text-gray-300">
                    Front-end Developer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUsOurTeam