import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const cardData = [
  {
    id: 1,
    img: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/office-laptops.png',
    authorImg: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png',
    authorName: 'Jese Leos',
    date: 'Aug 15, 2021',
    readTime: '16 min read',
    title: 'Our first office',
    description:
      'Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.'
  },
  {
    id: 2,
    img: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/google-hq.png',
    authorImg: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png',
    authorName: 'Roberta Casas',
    date: 'Aug 15, 2021',
    readTime: '16 min read',
    title: 'We partnered up with Google',
    description:
      'Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.'
  },
  {
    id: 3,
    img: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/office-laptops-2.png',
    authorImg: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png',
    authorName: 'Sofia McGuire',
    date: 'Aug 15, 2021',
    readTime: '16 min read',
    title: 'Our first project with React',
    description:
      'Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.'
  },
  {
    id: 1,
    img: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/office-laptops.png',
    authorImg: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png',
    authorName: 'Jese Leos',
    date: 'Aug 15, 2021',
    readTime: '16 min read',
    title: 'Our first office',
    description:
      'Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.'
  },
  {
    id: 2,
    img: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/google-hq.png',
    authorImg: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png',
    authorName: 'Roberta Casas',
    date: 'Aug 15, 2021',
    readTime: '16 min read',
    title: 'We partnered up with Google',
    description:
      'Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.'
  },
  {
    id: 3,
    img: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/office-laptops-2.png',
    authorImg: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png',
    authorName: 'Sofia McGuire',
    date: 'Aug 15, 2021',
    readTime: '16 min read',
    title: 'Our first project with React',
    description:
      'Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.'
  }
];

function PopularCityCards() {
  const swiperRef = useRef(null);

  return (
    <aside aria-label="Related articles" className="py-8 bg-white dark:bg-gray-900 lg:py-16 antialiased">
      <div className="px-4 mx-auto w-full max-w-screen-xl">
        {/* Title and Navigation Buttons */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Trending Cities</h2>
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
          {cardData.map((card) => (
            <SwiperSlide key={card.id}>
              <article className="p-4 max-w-sm bg-white rounded-lg shadow-md border border-gray-200 dark:border-gray-800 dark:bg-gray-800">
                <a href="#">
                  <img className="mb-5 rounded-lg" src={card.img} alt={card.title} />
                </a>
                <div className="flex items-center mb-3 space-x-2">
                  <img className="w-8 h-8 rounded-full" src={card.authorImg} alt={`${card.authorName} avatar`} />
                  <div className="font-medium dark:text-white">
                    <div>{card.authorName}</div>
                    <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                      {card.date} · {card.readTime}
                    </div>
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-900 lg:text-2xl dark:text-white">
                  <a href="#">{card.title}</a>
                </h3>
                <p className="mb-3 text-gray-500 dark:text-gray-400">{card.description}</p>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </aside>
  );
}

export default PopularCityCards;
