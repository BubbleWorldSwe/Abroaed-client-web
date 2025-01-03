import React from "react";

function FunFacts() {
  const items = [
    { icon: "💻", title: "Laptops & Computers", desc: "Top brands and accessories" },
    { icon: "📺", title: "TV", desc: "Smart and 4K TVs" },
    { icon: "📱", title: "Tablets", desc: "Portable and powerful tablets" },
    { icon: "🎵", title: "Audio", desc: "Headphones and speakers" },
    { icon: "📷", title: "Cameras", desc: "Capture your best moments" },
  ];

  return (
    <div>
      <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <div className="flex items-center justify-center text-center">
            <p className="text-3xl font-semibold text-gray-900 dark:text-white">
              Fun Facts
            </p>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-6">
            {/* Top Row: 3 Cards */}
            {items.slice(0, 3).map((item, idx) => (
              <div
                key={idx}
                className="flex items-center space-x-4 overflow-hidden rounded-lg bg-[#27272A] p-6 dark:border-gray-700 dark:bg-gray-800"
              >
                <div className="text-yellow-500 text-4xl">{item.icon}</div>
                <div className="flex flex-col text-white text-left">
                  <p className="text-lg font-semibold">{item.title}</p>
                  <p className="text-sm font-normal dark:text-gray-400">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}

            {/* Bottom Row: Centered 2 Cards */}
            <div className="col-span-3 flex justify-center gap-6">
              {items.slice(3).map((item, idx) => (
                <div
                  key={idx}
                  className="flex w-1/3 items-center space-x-4 overflow-hidden rounded-lg bg-[#27272A] p-6 dark:border-gray-700 dark:bg-gray-800 "
                >
                  {/* Icon */}
                  <div className="text-yellow-500 text-4xl">{item.icon}</div>
                  {/* Content */}
                  <div className="flex flex-col text-white text-left">
                    <p className="text-lg font-semibold">{item.title}</p>
                    <p className="text-sm font-normal dark:text-gray-400">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FunFacts;