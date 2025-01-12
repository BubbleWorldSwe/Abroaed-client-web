import vectorLeftFlat from "../assets/vectoreLeftFlat.png";
import vector from "../assets/kpiVector.png";

const TeamMemberCard = ({ imgSrc, name, role, description, socialLinks }) => (
  <div className="w-full h-[20rem] relative bg-black rounded-lg overflow-hidden flex flex-col justify-between items-start p-6">
    {/* Vector positioned to the right side */}
    <img
      className="absolute right-0 top-0 h-full object-contain z-0"
      src={vector}
      alt="Decorative vector"
    />

    {/* Text content positioned above vector */}
    <h1
      className="text-5xl lg:text-5xl font-bold bg-clip-text text-transparent z-10"
      style={{
        backgroundImage: "linear-gradient(91.57deg, #FFFFFF 0%, rgba(255, 255, 255, 0.3) 100%)",
      }}
    >
      KPI Metric
    </h1>

    <p className="text-gray-100 lg:mb-2 sm:text-lg z-10 mt-2">Explore</p>
  </div>
);

export const KpiMatrix = () => {
  const teamMembers = [
    {
      imgSrc: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png",
      name: "Jese Leos",
      role: "CEO & Co-Founder",
      description: "Jese drives the technical strategy of the themesberg platform and brand.",
      socialLinks: [
        {
          href: "#",
          iconPath:
            "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
        },
      ],
    },
    {
      imgSrc: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png",
      name: "Bonnie Green",
      role: "CTO & Co-Founder",
      description: "Bonnie drives the technical strategy of the themesberg platform and brand.",
      socialLinks: [
        {
          href: "#",
          iconPath:
            "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27",
        },
      ],
    },
    {
      imgSrc: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png",
      name: "Bonnie Green",
      role: "CTO & Co-Founder",
      description: "Bonnie drives the technical strategy of the themesberg platform and brand.",
      socialLinks: [
        {
          href: "#",
          iconPath:
            "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27",
        },
      ],
    },
  ];

  return (
    <div>
      <section className="bg-white dark:bg-gray-900 relative">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-24 lg:px-6 relative z-10">
          <div className="max-w-screen-sm text-left mb-8 lg:mb-16">
            <p className="font-light text-gray-500 lg:mb-2 sm:text-xl dark:text-gray-400">
              Why Abroad?
            </p>
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              What sets us apart?
            </h2>
            <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
              Explore the whole collection of open-source web components and elements built with the utility classes from Tailwind.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 overflow-hidden">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={index} {...member} />
            ))}
          </div>

          <div className="mt-6 text-end">
            <button
              type="button"
              className="bg-inherit focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
            >
              Explore more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Left-side vector */}
        <div className="absolute top-20 left-0 z-0">
          <img
            className="rounded-lg w-full h-full object-cover"
            src={vectorLeftFlat}
            alt="Decorative vector"
          />
        </div>
      </section>
    </div>
  );
};