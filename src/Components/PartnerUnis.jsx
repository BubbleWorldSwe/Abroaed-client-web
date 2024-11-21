import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonialData = [
  {
    id: 1,
    name: 'John Doe',
    role: 'Software Engineer',
    testimonial:
      'This platform has completely transformed how I approach study abroad consultations. Highly recommended!',
    img: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png'
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'University Counselor',
    testimonial:
      'A game-changer in application tracking. The ease of use and the detailed tracking features are unmatched.',
    img: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png'
  },
  {
    id: 3,
    name: 'Emily Johnson',
    role: 'Student',
    testimonial:
      'Thanks to this platform, I got admission to my dream university effortlessly. The document upload and visa assistance are excellent!',
    img: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png'
  },
  {
    id: 1,
    name: 'John Doe',
    role: 'Software Engineer',
    testimonial:
      'This platform has completely transformed how I approach study abroad consultations. Highly recommended!',
    img: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png'
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'University Counselor',
    testimonial:
      'A game-changer in application tracking. The ease of use and the detailed tracking features are unmatched.',
    img: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png'
  },
  {
    id: 3,
    name: 'Emily Johnson',
    role: 'Student',
    testimonial:
      'Thanks to this platform, I got admission to my dream university effortlessly. The document upload and visa assistance are excellent!',
    img: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png'
  }
];

function Testimonials() {
  const swiperRef = useRef(null);

  return (
    <section aria-label="Testimonials" className="py-8 bg-gray-100 dark:bg-gray-800">
      <div className="px-4 mx-auto max-w-screen-xl">
        {/* Title and Navigation Buttons */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">What People Say</h2>
          <div className="flex space-x-2">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none"
            >
              Prev
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none"
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
          {testimonialData.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <article className="p-6 max-w-sm bg-white rounded-lg shadow-md border border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                <div className="flex items-center mb-4">
                  <img
                    className="w-16 h-16 rounded-full mr-4"
                    src={testimonial.img}
                    alt={`${testimonial.name}'s avatar`}
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300">{testimonial.testimonial}</p>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonials;
