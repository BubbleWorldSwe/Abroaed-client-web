
function AboutUsCtaSection() {
  return (
    <div>
      <section className="bg-white px-12 mx-auto py-8 antialiased dark:bg-gray-900 md:py-16">
        <div className="mx-auto grid max-w-screen-2xl rounded-lg bg-yellow-50 p-4 dark:bg-gray-800 md:p-8 lg:grid-cols-12 lg:gap-8 lg:p-16 xl:gap-16">
          <div className="me-auto flex flex-col gap-3 place-self-center lg:col-span-7">
            <h1 className="mb-3 text-2xl font-semibold leading-tight tracking-tight text-gray-900 dark:text-white md:text-4xl">
              Did Our story strike a chord?
            </h1>
            {/* <p className="p-0 text-lg">
              If so, Come work with us!
            </p> */}
            <p className="mb-6 text-black dark:text-gray-400">
              If so, we’d love to have you onboard. Join a passionate team that values both expertise and dedication. Together, we can shape the future of students and open doors to new possibilities and experiences.

            </p>
            <a
              href="#"
              className="inline-flex w-1/2 items-center justify-center rounded-lg bg-primary-300 px-5 py-3 text-center text-base font-medium text-black hover:bg-primary-500 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Explore Oppurtunities
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUsCtaSection;
