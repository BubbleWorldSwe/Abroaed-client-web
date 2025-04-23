import essentialDeveloper from "../../../../assets/essentialDeveloper.png";
import PrimaryBodyText from "../../../styleComponents/primaryBodyText";
import SecondaryTitle from "../../../styleComponents/secondaryTitle";
function AboutUsCtaSection() {
  return (
    <div>
      <section className="bg-white">
        <div className=" rounded-lg bg-gray-100">
          <div className="mx-auto flex flex-col md:flex-row justify-between px-6 items-center">
            <div className="max-w-2xl flex flex-col gap-3 py-14">
              <SecondaryTitle>
                Did Our Story Strike a Chord?
              </SecondaryTitle >
              <PrimaryBodyText>
                If so, we’d love to have you onboard. Join a passionate team
                that values both expertise and dedication. Together, we can
                shape the future of students and open doors to new possibilities
                and experiences.
              </PrimaryBodyText>

              <a
                href="/careers"
                className="inline-flex mt-4 w-full md:w-1/3 items-center justify-center rounded-lg bg-yellow-primary hover:bg-gray-primary hover:text-white px-5 py-3 text-center text-base font-semibold text-black  focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
              >
                Explore Oppurtunities
              </a>
            </div>
            <div className="">
              <img
                src={essentialDeveloper}
                alt="developer-pic"
                className="object-cover w-96"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUsCtaSection;
