import React from "react";
import blobImage from "../../assets/Vector.png"; // Add your blob image here.

function Hero() {
  return (
    <div>
      <section className="relative bg-white dark:bg-gray-900 overflow-hidden">
        {/* Background Image */}
        <div className="absolute top-0 left-[-100px] z-0">
          <img
            src={blobImage}
            alt="Background blog image"
            className="w-full opacity-100"
          />
        </div>

        <div className="relative z-10 py-8 px-4 mx-auto max-w-screen-xl lg:px-12 sm:text-center lg:py-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-black dark:text-white">
            Work At Abroad
          </h2>
          <p className="font-light text-gray-800 sm:text-lg md:px-20 lg:px-38 xl:px-48 dark:text-gray-400">
            Veniam amet anim sint ipsum consectetur. Ut culpa Lorem Lorem dolor
            ipsum. Qui do officia ea nostrud anim consequat sunt. Aliquip cillum
            pariatur aliqua cupidatat eu. Velit pariatur eu ipsum culpa in ex
            minim tempor eu mollit mollit deserunt nisi. Eu qui voluptate irure
            dolore est adipisicing deserunt reprehenderit minim aute consectetur
            elit. Laboris consequat aliqua excepteur voluptate ex amet esse sint
            reprehenderit nulla fugiat anim excepteur.
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

export default Hero;