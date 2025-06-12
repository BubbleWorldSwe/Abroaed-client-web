import calender from "../../../../assets/calender.png";
import watch from "../../../../assets/watch.png";
import doller from "../../../../assets/doller.png";
import venue from "../../../../assets/venue.png";
import event1 from "../../../../assets/event1.png";
import event2 from "../../../../assets/event2.png";
import event3 from "../../../../assets/event3.png";
import event4 from "../../../../assets/event4.png";
import event5 from "../../../../assets/event5.png";
import event6 from "../../../../assets/event6.png";
import PrimaryBodyText from "../../../styleComponents/primaryBodyText";
import SectionMainHeader from "../../../styleComponents/sectionMainHeader";
import { BorderTextInputField } from "../../../../commons/components/inputFields/borderTextInputField";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const eventImages = [event1, event2, event3, event4, event5, event6];

const eventDetails = [
  {
    icon: calender,
    alt: "calendar",
    text: "Date: 9th March 2025",
  },
  {
    icon: watch,
    alt: "watch",
    text: "Time: 10:00 AM – 5:00 PM",
  },
  {
    icon: venue,
    alt: "venue",
    text: "Venue: Eros Hotel, Nehru Place, New Delhi",
  },
  {
    icon: doller,
    alt: "dollar",
    text: "Free Entry For Students",
  },
];

const EventAboutSection = ({ onFormSubmit, entity, source }) => {
  const { error, loading } = useSelector((state) => state.leads);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
  });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const initialX = isMobile ? -4 : -30;
  const initialX1 = isMobile ? 4 : 30;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, mobile } = formData;

    // Validate required fields
    if (!firstName || !lastName || !email || !mobile) {
      toast.error("Please fill out all fields.");
      return;
    }

    onFormSubmit({ user: formData, source, entity });
  };

  useEffect(() => {
    if (!error) {
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
      });
    }
  }, [loading, error]);

  return (
    <div className="py-12 bg-white text-gray-800 ">
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left Section - About Event */}
        <div className="md:col-span-2">
          <motion.div
            initial={{ opacity: 0, x: initialX1 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.5 }}
          >
            {/*  <SectionMainHeader className=" mb-4">About Event</SectionMainHeader> */}

            <SectionMainHeader className=" mb-4">
              Education Expo 2025
            </SectionMainHeader>

            <ul className="space-y-2 mb-6 text-gray-700">
              {eventDetails.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span>
                    <img src={item.icon} alt={item.alt} />
                  </span>
                  <PrimaryBodyText className="font-normal">
                    {item.text}
                  </PrimaryBodyText>
                </li>
              ))}
            </ul>
            <div className="space-y-4 ">
              <PrimaryBodyText className="font-normal">
                Held on 9th March 2025 at Eros Hotel, New Delhi, Education Expo
                2025 brought together top global universities, offering students
                access to postgraduate programs, on-the-spot scholarships, and
                personalized career counselling. The event welcomed hundreds of
                aspiring students and was marked by its vibrant atmosphere and
                insightful interactions.
              </PrimaryBodyText>

              <PrimaryBodyText className="font-normal">
                A major contributor to the expo’s success was ABROAED, a leading
                study abroad consultancy. From the beginning, ABROAED took
                charge of several key elements, from managing digital
                registration and data collection to running one of the day’s
                most engaging segments—the lucky draw, featuring exciting prizes
                like an Amazon Alexa and a Smart Watch.
              </PrimaryBodyText>

              <PrimaryBodyText className="font-normal">
                Beyond giveaways, ABROAED’s true impact was felt through its
                expert guidance on overseas education. Their team offered
                personalized advice on university selection, visa processes,
                scholarships, and post-admission support for countries like the
                USA, UK, Canada, and Australia.
              </PrimaryBodyText>

              <PrimaryBodyText className="font-normal">
                By combining business strategy with student-centric service,
                ABROAED not only increased booth engagement but built lasting
                connections. Their presence transformed the expo into more than
                just an event—it became a launchpad for students’ global
                education dreams.
              </PrimaryBodyText>
            </div>
          </motion.div>
        </div>

        {/* Right Section - Register Now */}
        <div className="space-y-4 ">
          <motion.div
            initial={{ opacity: 0, x: initialX }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <h2 className="text-2xl mb-2 font-semibold">
              Explore Opportunities Now
            </h2>
            <form className="  flex flex-col gap-2" onSubmit={handleSubmit}>
              <BorderTextInputField
                label="First Name"
                name="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter"
                required
              />
              <BorderTextInputField
                label="Last Name"
                name="lastName"
                type="text"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter"
                required
              />
              <BorderTextInputField
                label={"Email ID"}
                placeholder="Enter"
                name="email"
                type={"email"}
                value={formData.email}
                onChange={handleChange}
                required
              />
              <BorderTextInputField
                label={"Contact Number"}
                placeholder="Enter"
                name="mobile"
                type={"phone"}
                value={formData.mobile}
                onChange={handleChange}
                required
                maxLength={10}
              />
              <button
                type="submit"
                className="py-3 my-4 w-full px-10 text-base font-semibold text-center text-[#432205] rounded-lg bg-yellow-primary hover:bg-black hover:text-white focus:ring-4 focus:outline-none focus:ring-yellow-400 dark:bg-yellow-300 dark:hover:bg-yellow-400 dark:focus:ring-yellow-500"
              >
                Explore
              </button>
            </form>

            <div className="grid grid-cols-3 gap-2 mt-4">
              {eventImages.map((img, i) => (
                <div key={i} className="w-full h-20 rounded overflow-hidden">
                  <img
                    src={img}
                    alt={`Event ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default EventAboutSection;
