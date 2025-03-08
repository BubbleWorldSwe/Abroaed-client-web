
import blobImage from "../../../../assets/Vector.png";

function CareerHeroSections() {
  return (
    <div className="pt-20 mt-10">
      <section className="relative bg-white  dark:bg-gray-900 ">
        {/* Background Image */}
        <div className="absolute top-0 left-[-100px] z-0">
          <img
            src={blobImage}
            alt="Background blog image"
            className="w-full opacity-100"
          />
        </div>
        <div className="relative z-10 py-8 px-4 mx-auto max-w-screen-2xl lg:px-12 sm:text-center lg:py-16 ">
          <h2 className="mb-4 text-[52px]  font-extrabold text-[#27272A] dark:text-white">
            Work At Abroaed
          </h2>
          <p className="font-bold text-2xl text-[#52525B]  md:px-20 lg:px-38 xl:px-48 dark:text-gray-400">
            Get a glimpse of what it’d be like working at Abroaed! We value both, work & fun!
          </p>
          <div className="gap-4 mt-8 sm:grid sm:grid-cols-4 sm:mt-12">
            <img
              className="col-span-2 mb-4 sm:mb-0 rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-1.png"
              alt="content gallery 1"
            />
            <img
              className="hidden col-span-1 sm:block rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-2.png"
              alt="content gallery 2"
            />
            <img
              className="hidden col-span-1 sm:block rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
              alt="content gallery 3"
            />
            <img
              className="hidden col-span-1 sm:block rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-4.png"
              alt="content gallery 4"
            />
            <img
              className="col-span-2 rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-5.png"
              alt="content gallery 5"
            />
            <img
              className="hidden col-span-1 sm:block rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-6.png"
              alt="content gallery 6"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default CareerHeroSections;