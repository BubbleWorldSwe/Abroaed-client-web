import SectionMainHeader from "../../styleComponents/sectionMainHeader";
import TestimonialsCard from "./testimonialsCard";
import testimonial1 from "../../../assets/testimonial1.jpg"
import testimonial2 from "../../../assets/testimonial2.jpg"
import testimonial3 from "../../../assets/testimonial3.jpg"
const Testimonials = () => {
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
    }
  ];


  return (
    <section className="  dark:bg-gray-900 relative">
      <div className="  ">
        <div className=" max-w-screen-sm text-start mb-4 lg:mb-10 ">
          <p className="font-semibold text-[#52525B] text-base dark:text-gray-400">
            Success Stories
          </p>
          <SectionMainHeader >
            Read Our Success Stories
          </SectionMainHeader>
        </div>
        <div className="grid  gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((data, i) => (
            <TestimonialsCard key={i} data={data} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
