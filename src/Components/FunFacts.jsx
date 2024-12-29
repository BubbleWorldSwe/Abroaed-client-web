import React from "react";

function FunFacts() {
  return (
    <div>
      <section className="bg-black py-8 antialiased dark:bg-gray-900 md:py-16">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <div className="flex items-center justify-center text-center">
            <p className="text-3xl font-semibold text-white sm:text-2xl">
              Fun Facts
            </p>
          </div>

          <div className="mb-4 mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:mb-0 lg:grid-cols-4 xl:gap-8">
            {/* Example Card */}
            {[
              { icon: "💻", title: "Laptops & Computers", desc: "Top brands and accessories" },
              { icon: "📺", title: "TV", desc: "Smart and 4K TVs" },
              { icon: "📱", title: "Tablets", desc: "Portable and powerful tablets" },
              { icon: "🎵", title: "Audio", desc: "Headphones and speakers" },
              { icon: "💻", title: "Laptops & Computers", desc: "Top brands and accessories" },
              { icon: "📺", title: "TV", desc: "Smart and 4K TVs" },
              { icon: "📱", title: "Tablets", desc: "Portable and powerful tablets" },
              { icon: "🎵", title: "Audio", desc: "Headphones and speakers" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center space-x-4 overflow-hidden rounded-lg bg-[#27272A] p-6 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                {/* Icon */}
                <div className="text-yellow-500 text-4xl">{item.icon}</div>
                {/* Content */}
                <div className="flex flex-col text-white text-left">
                  <p className="text-lg font-semibold ">
                    {item.title}
                  </p>
                  <p className="text-sm font-normal  dark:text-gray-400">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <a
            href="#"
            title="See all categories"
            className="mt-4 block w-full rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:mt-0 lg:hidden"
          >
            See all categories
          </a>
        </div>
      </section>
    </div>
  );
}

export default FunFacts;