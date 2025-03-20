import essentialDeveloper from "../../../../assets/essentialDeveloper.png"
function AboutUsCtaSection() {
  return (
    <div>
      <section className="bg-white px-12 mx-auto py-10  antialiased dark:bg-gray-900 ">
        <div className="mx-auto  max-w-screen-2xl rounded-lg bg-yellow-50 px-4 ">
          <div className="mx-auto flex justify-between px-5 items-center">
            <div className="max-w-3xl">
              <h1 className="mb-3 text-[45px] font-bold   text-gray-900 dark:text-white md:text-4xl">
                Did Our story strike a chord?
              </h1>
              {/* <p className="p-0 text-lg">
              If so, Come work with us!
            </p> */}
              <p className="mb-6 text-black text-base font-medium dark:text-gray-400">
                If so, we’d love to have you onboard. Join a passionate team that values both expertise and dedication. Together, we can shape the future of students and open doors to new possibilities and experiences.

              </p>
              <a
                href="#"
                className="inline-flex w-1/2 items-center justify-center rounded-lg bg-primary-300 px-5 py-3 text-center text-base font-semibold text-black hover:bg-primary-500 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
              >
                Explore Oppurtunities
              </a>
            </div>
            <div >
              <img src={essentialDeveloper} alt="developer-pic" className="object-cover w-72" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUsCtaSection;
