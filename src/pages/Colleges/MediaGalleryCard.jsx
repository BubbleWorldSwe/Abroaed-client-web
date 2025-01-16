import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import dark from '../../assets/dark.png'
function MediaGalleryCard() {
  const mediaGallery = useSelector((state) =>
    state.collegeSections.sections.find(
      (section) => section.title === "Media Gallery"
    )
  );
  const swiperRef = useRef(null);

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
      setActiveIndex((prevIndex) =>
        prevIndex === testimonialData.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
      setActiveIndex((prevIndex) =>
        prevIndex === 0 ? testimonialData.length - 1 : prevIndex - 1
      );
    }
  };

  if (
    !mediaGallery ||
    !mediaGallery.content ||
    mediaGallery.content.images.length === 0
  ) {
    return (
     <div className="overflow-x-auto ">
               <div className="flex space-x-5" style={{ maxWidth: "60rem" }}>
                 {Array(5)
                   .fill(0)
                   .map((_, index) => (
                     <div
                       key={index}
                       className="w-96 relative flex-shrink-0"
                       style={{ flex: "0 0 auto" }} // Prevent images from shrinking
                     >
                       {/* Image */}
                       <img
                         className="w-full h-60 object-cover rounded-lg"
                         src={dark}
                         alt={`Profile cover ${index + 1}`}
                       />
                       {/* Overlay */}
                       <div className="absolute top-2 r-10">
     
                       </div>
                       {/* Button */}
                       <div className="absolute top-2 right-2">
                         <button
                           type="button"
                           className=" items-center justify-center w-10 h-10 font-medium   hover:opacity-60 group focus:outline-none dark:focus:ring-blue-800"
                         >
                           <svg class="text-white opacity-80 dark:text-gray-500 w-8 h-8 mb-3.5 mx-auto" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
     
                         </button>
                       </div>
                     </div>
                   ))}
               </div>
             </div>
    );
  }

  const { images } = mediaGallery.content;

  return (
    <div className="mb-4 relative rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Media Gallery
      </h2>
      <div className="border border-1 mb-4 border-gray-200 w-full"></div>

      <div className="px-4 h-full mx-auto max-w-screen-xl">
        {/* Title and Navigation Buttons */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex  space-x-2">
            {/* Navigation Buttons */}
            <button
              onClick={handlePrev}
              className="z-10 absolute left-2 top-1/2 -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-lg shadow-lg"
            >
              Prev
            </button>
            <button
              onClick={handleNext}
              className="z-10 absolute right-2 top-1/2 -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-l-lg shadow-lg"
            >
              Next
            </button>
          </div>
        </div>

        {/* Swiper Component */}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={3}
          pagination={{ clickable: true }}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="rounded-lg"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`Media ${index + 1}`}
                className="w-full h-64 object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default MediaGalleryCard;
