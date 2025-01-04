import cover from '../assets/cover.jpg'
import VectorleftNose from '../assets/vectorleftNose.png'


const PathwaySection = () => {
  return (
    <div>
      <section className="dark:bg-gray-900 relative  h-full">
        <div className="py-4 px-4 mx-auto max-w-screen-xl lg:py-4 lg:px-6 h-[600px] relative z-10 ">
          <div className="flex gap-4 h-full">
            {/* Left Child */}
            <div className="relative flex-grow basis-[50%] group hover:basis-[90%] transition-all duration-300 ease-in-out rounded-lg overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={cover}
                alt="Direct"
              />
              <div className="absolute bottom-3 left-10">
                <p className="text-gray-200 lg:mb-2 sm:text-xl">Explore</p>
                <h1 className="mb-4 text-5xl tracking-tight font-extrabold text-white dark:text-white">
                  Direct
                </h1>
                <div
                  className="bg-opacity-50 flex items-center justify-center text-white text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  Discover tailored solutions for your journey.
                </div>
              </div>
            </div>

            {/* Right Child */}
            <div className="relative flex-grow basis-[50%] group hover:basis-[90%] transition-all duration-300 ease-in-out rounded-lg overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={cover}
                alt="Pathways"
              />
              <div className="absolute bottom-3 left-10">
                <p className="text-gray-200 lg:mb-2 sm:text-xl">Explore</p>
                <h1 className="mb-2 text-5xl tracking-tight font-extrabold text-white dark:text-white">
                  Pathways
                </h1>
                <div
                  className="  bg-opacity-50 flex items-center justify-center text-white text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  Navigate through endless possibilities.

                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-96 right-0 z-0">
          <img
            className="rounded-lg w-full h-full object-cover"
            src={VectorleftNose}
            alt="Counselling session"
          />
        </div>
      </section>


    </div>
  )
}

export default PathwaySection;