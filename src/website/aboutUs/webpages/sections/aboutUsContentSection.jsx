
import PrimaryBodyText from "../../../styleComponents/primaryBodyText";
import SectionMainHeader from "../../../styleComponents/sectionMainHeader";
import CardComponent from "../../components/cardComponent";
import aboutUs1 from "../../../../assets/aboutUs1.png";
import aboutUs2 from "../../../../assets/aboutUs2.png";
import aboutUs3 from "../../../../assets/aboutUs3.png";
import { motion } from "framer-motion";


export const aboutUs = [
  {
    imgFirst: true,
    imgUrl: aboutUs1,
    heading: "Consultation Right At Your Doorstep",
    text: (
      <div className="flex flex-col gap-2">
        <p>
          At ABROAED, our mission is deeply rooted in the understanding that every student’s journey is unique—shaped by their background, dreams, and personal ambitions. We believe that meaningful guidance should not be limited by geography or access. That’s why we provide personalized home and virtual counselling services across PAN India, ensuring that expert support is always within reach—no matter where you are. For us, counselling goes beyond just offering information.         </p>
        <p>
          It’s about building a connection, creating a safe space where students feel heard, valued, and understood. We know that making a decision to study abroad is not just academic—it’s emotional, aspirational, and often life-defining. Our experienced professionals are more than just advisors. They are mentors, companions, and motivators who walk beside you, offering personalized insights and unwavering support at every step of the way.        </p>
        <p>
          From shortlisting universities and countries, to assisting with application processes, scholarships, and even visa guidance—our consultations are designed to simplify the complex journey and help students make informed, confident decisions. With ABROAED, you’re not just choosing a service—you’re choosing a partner who is just as invested in your global dreams as you are. We’re here to guide, uplift, and empower you—no matter where your journey begins.        </p>
      </div>
    ),
  },
  {
    imgFirst: false,
    imgUrl: aboutUs2,
    heading: "Learning and Development",
    text: (
      <div className="flex flex-col gap-2">
        <p>
          At ABROAED, we believe that growth is a continuous journey—not a final destination. Our learning and development culture is the foundation of everything we do. We understand that to serve students better, our own team must grow, adapt, and innovate constantly. That’s why we foster an environment that supports curiosity, learning, and leadership across all levels of the organization. From the very first day, every team member is welcomed through a comprehensive onboarding process that lays the groundwork for confidence and success.        </p>
        <p>
          We invest in people by offering a wide range of training opportunities—from communication and time management to advanced counselling techniques and technology-driven tools. These aren’t just one-time sessions, but continuous opportunities to grow both personally and professionally. We also provide leadership development programs, certifications, and international exposure opportunities that empower our people to become the best version of themselves.        </p>
        <p>
          But more importantly, we don’t just focus on the ‘professional’—we care about the person. Our wellness initiatives, mental health support, and work-life balance programs ensure that our people feel fulfilled, healthy, and happy. At ABROAED, we’re not just shaping future students—we’re also nurturing the future leaders of education.
        </p>
      </div>
    ),
  },
  {
    imgFirst: true,
    imgUrl: aboutUs3,
    heading: "50+ Study Destinations We Cover",
    text: (
      <div className="flex flex-col gap-2">
        <p>
          We at ABROAED are proud to offer expert guidance for students who aspire to study abroad in over 50 destinations across the globe. Our vast and growing network connects students with top universities and academic institutions in countries like the United States, United Kingdom, Canada, Australia, Germany, New Zealand, Singapore, Ireland, France, and many more. Each destination brings its own unique advantages—whether it's world-class academics, multicultural experiences, strong industry linkages, or vibrant student life.
        </p>
        <p>
          Choosing the right country and course can feel overwhelming, but that’s where we step in. Our experienced counsellors analyze every aspect of your goals—academic background, financial situation, personal interests, and career vision—to recommend study options that are tailor-made for you. We don’t believe in one-size-fits-all; instead, we help you find your best-fit destination and institution that aligns perfectly with your aspirations.
        </p>
        <p>
          From course selection and applications to financial planning, visa support, and pre-departure briefings—we walk you through the entire journey. Our aim is to make studying abroad not just a possibility but a smooth and memorable experience. No matter where you want to go, ABROAED is here to help you reach further, dream bigger, and study smarter.
        </p>
      </div>
    ),
  }
];

function AboutUsContentSection() {
  return (
    <div>
      <section className=" dark:bg-gray-900 relative ">
        <div className=" relative z-10">

          <div className="flex flex-col gap-12 pt-10">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.5 }}
              >
                <SectionMainHeader>
                  Our Story
                </SectionMainHeader>
                <PrimaryBodyText
                  className="font-semibold"
                >
                  At ABROAED, education is not just a destination — it’s a transformation.
                  Founded in 2025, we started with a simple yet powerful belief: that every student deserves not just a pathway to international education, but a guiding force to navigate it.

                  Much like the timeless North Star that once guided explorers through uncharted territories, Abroaed stands as a beacon of clarity, trust, and direction.
                  We are more than counselors — we are mentors, companions, and a structured force that propels students from uncertainty to purpose, from aspiration to achievement.

                  With every journey we guide, our mission remains the same: to empower futures, one student at a time.
                </PrimaryBodyText>
              </motion.div>
            </div>
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.5 }}
              >
                <SectionMainHeader>
                  Our Vision
                </SectionMainHeader>
                <PrimaryBodyText
                  className="font-semibold">
                  To be the trusted North Star for students worldwide — illuminating paths, unlocking potential, and empowering global futures through mentorship, clarity, and unwavering support
                </PrimaryBodyText>
              </motion.div>
            </div>
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.5 }}
              >
                <SectionMainHeader>
                  Our Mission
                </SectionMainHeader>
                <PrimaryBodyText
                  className="font-semibold"
                >
                  At ABROAED, our mission is to guide, empower, and transform students' journeys through personalized mentorship and structured pathways. We are committed to being a constant source of clarity, support, and momentum, helping every student move from aspiration to achievement — with purpose, confidence, and a global vision.              </PrimaryBodyText>
              </motion.div>
            </div>
          </div>

          <div className=" pt-10 ">
            {aboutUs.map((item, index) => (
              <CardComponent key={index} {...item} idx={index} />
            ))}
          </div>
        </div>
      </section >
    </div >
  );
}

export default AboutUsContentSection;
