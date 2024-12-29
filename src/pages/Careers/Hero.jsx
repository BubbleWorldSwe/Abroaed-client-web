import React from "react";

function Hero() {
  return (
    <div>
      <section class="bg-yellow-300 dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:px-12 sm:text-center lg:py-16">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-black dark:text-white">
            Work At Abroaed
          </h2>
          <p class="font-light text-gray-800 sm:text-lg md:px-20 lg:px-38 xl:px-48 dark:text-gray-400">
            Veniam amet anim sint ipsum consectetur. Ut culpa Lorem Lorem dolor
            ipsum. Qui do officia ea nostrud anim consequat sunt. Aliquip cillum
            pariatur aliqua cupidatat eu. Velit pariatur eu ipsum culpa in ex
            minim tempor eu mollit mollit deserunt nisi. Eu qui voluptate irure
            dolore est adipisicing deserunt reprehenderit minim aute consectetur
            elit. Laboris consequat aliqua excepteur voluptate ex amet esse sint
            reprehenderit nulla fugiat anim excepteur.
          </p>
          <div class="gap-4 mt-8 sm:grid sm:grid-cols-4 sm:mt-12">
            <img
              class="col-span-2 mb-4 sm:mb-0 rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-1.png"
              alt="content gallery 1"
            />
            <img
              class="hidden col-span-1 sm:block rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-2.png"
              alt="content gallery 2"
            />
            <img
              class="hidden col-span-1 sm:block rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
              alt="content gallery 3"
            />
            <img
              class="hidden col-span-1 sm:block rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-4.png"
              alt="content gallery 4"
            />
            <img
              class="col-span-2 rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-5.png"
              alt="content gallery 5"
            />
            <img
              class="hidden col-span-1 sm:block rounded-lg"
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
