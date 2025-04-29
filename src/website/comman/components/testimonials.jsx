import SectionMainHeader from "../../styleComponents/sectionMainHeader";
import TestimonialsCard from "./testimonialsCard";
import testimonial1 from "../../../assets/testimonial1.jpg"
import testimonial2 from "../../../assets/testimonial2.jpg"
import testimonial3 from "../../../assets/testimonial3.jpg"
import testimonial4 from "../../../assets/testimonial4.jpg"
import testimonial5 from "../../../assets/testimonial5.jpg"
import Slider from "react-slick";
import NextArrow from "./nextArrow";
import PrevArrow from "./prevArrow";
import { useState } from "react";
const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // const videos = ["Ez8F0nW6S-w", "4wSL3KHSAns", "S_xwQNHOuSI"];
  const testimonials = [
    {
      name: "Isabel Cynthia Ekka",
      university: "University For The Creative Arts",
      course: "Masters in Fashion Business and Management with Pre-Masters",
      country: "London, UK",
      testimonial:
        "The counsellors of ABROAED have been incredibly supportive and 24*7 available throughout the entire process. Their guidance, prompt responses, and personalized approach made my journey smooth and stress-free. I'm truly grateful for their dedication and expertise.",
      img: testimonial1
    },
    {
      name: "Apoorve Chauhan",
      university: "Queens university Belfast",
      course: "Msc Marketing",
      country: "UK",
      testimonial:
        "The process was smooth, with all departments involved working efficiently and also helped me in shortlisting the relevant course and university as per my preference, provided support in mock interviews and boosted my confidence. Whenever I had a doubt, they solved it with utmost patience and care and I am glad I went through the Counsellor of ABROAED.",
      img: testimonial2
    },
    {
      name: "Mayank Thakur",
      university: "Bournemouth university",
      course: "Msc Information technology",
      country: "UK",
      testimonial:
        "I would like to thank the counsellors of ABROAED for their never ending support and availability around the clock. They were always available to answer my questions, irrespective of the time and provided clear, personalized guidance every step of the way. Their dedication and expertise truly made my journey smooth and peaceful. I'm genuinely grateful for their constant support.",
      img: testimonial3
    },
    {
      name: " Vanshika Goel",
      university: "University of Galway",
      course: " Masters in International Management",
      country: "Ireland",
      testimonial:
        "I sincerely appreciate the support received from the  counsellors of ABROAED team their efforts have been instrumental to our success and they are also available 24*7. My time at the University of Galway was truly transformative. The diverse, inclusive environment and practical approach to learning helped me grow both personally and professionally.",
      img: testimonial4
    },
    {
      name: "Riya",
      university: "University of Liverpool",
      course: "Master in Management",
      country: " United Kingdom",
      testimonial:
        "A big thank you to the amazing counsellors of ABROAED team. They have been incredible in guiding me and are always available whenever I have any doubts or queries, even help in applying for jobs. Their expertise and contributions from across the globe have made a significant impact in achieving my goals.",
      img: testimonial5
    },
  ];
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <NextArrow right="right-0 md:right-4" />,
    prevArrow: <PrevArrow left="left-0 md:left-4" />,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    customPaging: i => (
      <div className={`rounded-full w-3 h-3 transition-all duration-300 
        ${i === currentSlide ? 'bg-yellow-primary w-4' : 'bg-gray-500 '}`}
      />
    ),
    appendDots: dots => (
      <div>
        <ul className="flex justify-center  mt-4">{dots}</ul>
      </div>
    ),
    responsive: [

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="  dark:bg-gray-900 mx-auto  max-w-screen-2xl relative">
      <div className="px-6 md:px-12 mb-10 relative z-10">
        <p className="font-semibold text-[#52525B] text-base dark:text-gray-400">
          Success Stories
        </p>
        <SectionMainHeader >
          Read Our Success Stories
        </SectionMainHeader>
      </div>
      <div className="md:px-8">
        <Slider {...settings} className="pb-4 flex  gap-10 ">
          {testimonials.map((data, i) => (
            <div key={i} className="px-4">
              <TestimonialsCard key={i} data={data} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
