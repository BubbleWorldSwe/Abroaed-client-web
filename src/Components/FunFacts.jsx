import vectorRightFlat from "../assets/vectorRightFlat.png"
function FunFacts() {
  const items = [
    { icon: "💻", title: "Laptops & Computers", desc: "Top brands and accessories" },
    { icon: "📺", title: "TV", desc: "Smart and 4K TVs" },
    { icon: "📱", title: "Tablets", desc: "Portable and powerful tablets" },
    { icon: "🎵", title: "Audio", desc: "Headphones and speakers" },
    { icon: "📷", title: "Cameras", desc: "Capture your best moments" },
  ];

  const FunCards = ({ icon, title, desc }) => {

    return (
      <>
        <div
          className="flex md:w-[427px] sm:min-w-max bg-black relative z-10 items-center space-x-4 overflow-hidden rounded-lg p-4 dark:border-gray-700 dark:bg-gray-800"
        >
          <div
            className="absolute inset-0 bg-gradient-to-r from-transparent to-black/50  pointer-events-none"
            style={{
              left: "auto", // Ensure it starts from the right edge
              right: 0, // Anchor the gradient to the right
              width: "70%", // Adjust the width of the gradient area
              height: "100%", // Full height to cover the parent div
            }}
          ></div>
<div className="text-yellow-500 text-4xl">{icon}</div>
          <div className="flex flex-col gap-4 text-white text-left">
            <p className="text-lg font-semibold">{title}</p>
            <p className="text-sm font-normal dark:text-gray-400">
              {desc}
            </p>
          </div>
          <div className="absolute right-0">
            <img src={vectorRightFlat} />
          </div>
        </div>
      </>
    )
  }

  return (
    <div className="relative z-10">
      <section className=" py-8 antialiased dark:bg-gray-900 md:py-16">
        <div className="mx-auto max-w-screen-2xl px-4 2xl:px-0">
          <div className="flex items-center justify-center text-center">
            <p className="text-3xl font-semibold text-gray-900 dark:text-white">
              Fun Facts
            </p>
          </div>
        <div className="mt-6 space-y-6">
    <div className="flex flex-col md:flex-row  justify-center flex-wrap gap-5 ">
    {items.map((item, idx) => (
             <FunCards icon={item.icon} title={item.title} desc={item.desc} key={idx}  />
     ))}
  </div>
</div>

        </div>
      </section>
    </div>
  );
}

export default FunFacts;