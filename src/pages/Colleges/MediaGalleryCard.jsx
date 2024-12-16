import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
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
      <div className="mb-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          Media Gallery
        </h2>
        <p className="text-gray-500 dark:text-gray-400">No images available</p>
        <button
          type="button"
          onClick={() => handleOpenAddModal("Media Gallery")}
          className="mt-4 py-2 px-3 text-xs font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Add Images
        </button>
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
