import playStore from "../../../assets/gPlayStore.png";
import AppStore from "../../../assets/AppStore.png";
import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { useSelector } from "react-redux";
import Flag from "react-world-flags";
import AppStoreButton from "../components/appStoreButton";

const socialLinks = [
  {
    icon: <FaInstagram size={20} />,
    url: "https://www.instagram.com/abroaed/?igsh=MW9qenltenBzZDIxeg%3D%3D#",
  },
  // { icon: <FaFacebook size={20} />, url: "#" },
  {
    icon: <FaLinkedin size={20} />,
    url: "https://www.linkedin.com/company/abroaed/posts/?feedView=all",
  },
  {
    icon: <FaXTwitter size={20} />,
    url: "https://x.com/i/flow/login?redirect_after_login=%2Fabroaed",
  }, // X (formerly Twitter)
  // { icon: <FaYoutube size={20} />, url: "#" } // YouTube
];

const links = [
  {
    title: "Important Links",
    items: [
      { name: "Home", link: "/home" },
      { name: "Our Story", link: "/aboutus" },
      // { name: "Founder's Desk", link: "/founders-desk" },
      { name: "Blogs", link: "/blogs" },
      // { name: "Explore Colleges", link: "/" },
      // { name: "Destinations", link: "/destinations" }
    ],
  },
  {
    title: "Services",
    items: [
      { name: (<>ABROAED<sup>+</sup></>), link: "/abroaedPlus" },
      { name: "Accommodation", link: "/accomodation" },
      { name: "League of Excellence", link: "/leaguageOfExcellence" },
      // { name: "Test Prep", link: "/test-prep" },
      { name: "Finance", link: "/finance" },
    ],
  },
];

const offices = [
  {
    location: "",
    address: "B11, Block B, Qutab Institutional Area, New Delhi, Delhi 110016",
    phone1: " +91 73033 68820",
    phone2: " +91 73033 68819",
    email: "info@abroaed.com ",
  },
];

function Footer() {
  const { allDestinations } = useSelector((state) => state.destinations);
  const { allTestPreps } = useSelector((state) => state.testPreps);
  // const { allLanguagePreps } = useSelector((state) => state.languagePreps);
  return (
    <div>
      <footer className="bg-gray-primary text-white py-10">
        <div className="container mx-auto px-10 md:px-14 flex flex-col sm:flex-row gap-8 md:text-left">
          {/* Logo & Description */}
          <div className="w-full md:w-[40%] ">
            <h3 className="text-lg font-semibold sm:text-3xl md:text-4xl lg:text-lg">
              <a
                href="/home"
                className={`font-cinzel tracking-[0.15em] text-2xl font-extrabold leading-[40px] text-white`}
              >
                ABROA<span style={{ color: "#fbba18" }}>ED</span>
              </a>
              <p className="text-sm leading-5 tracking-normal">
                The World is Waiting
              </p>
            </h3>
            <p className="my-4 font-light text-sm">
              At ABROAED, we help students get admission to prestigious
              universities in the USA, UK, Canada, Australia, Europe, and Asia,
              including Ivy League schools. We offer personalized consultations
              and coaching (virtual/in-home), accommodation support, and
              financial assistance, fostering access to elite academic and
              leadership networks.
            </p>
            <h3 className="mt-4 font-semibold text-xl mb-5">Follow Us On</h3>
            <div className="flex justify-center md:justify-start space-x-3 mt-2">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="p-2 hover:bg-opacity-85 bg-white text-black rounded-full"
                  aria-label="Social Link"
                  target="_blank"
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <div className="flex gap-5 p-2 mt-5">
              <AppStoreButton />
            </div>
          </div>
          {/* Important Links & Services */}
          <div className="w-full md:w-[60%]   grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {links.map((section, index) => (
              <div key={index}>
                <h3
                  className={`font-semibold text-2xl mb-1 text-[#fbba18]`}
                >
                  {section.title}
                </h3>
                <ul className=" text-base font-medium  ">
                  {section.items.map((item, idx) => (
                    <li key={idx}>
                      <a href={item?.link} className="hover:underline text-sm">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact Information */}
            <div>
              <h3 className={`font-semibold text-2xl mb-1 text-[#fbba18]`}>
                Get in Touch
              </h3>
              <div className="text-sm space-y-3">
                {offices.map((office, index) => (
                  <div key={index}>
                    <h4 className="font-semibold text-lg">{office.location}</h4>
                    <p className="text-sm">{office.address}</p>
                    <p className="text-sm">📞 {office.phone1}</p>
                    <p className="text-sm">📞 {office.phone2}</p>
                    {office.email && <p>📧 {office.email}</p>}
                  </div>
                ))}
              </div>
            </div>
            {/* Destination */}
            <div>
              <h3 className={`font-semibold text-2xl mb-1 text-[#fbba18]`}>
                Destinations
              </h3>
              <ul>
                {allDestinations?.slice(0, 10).map((item, index) => (
                  <li
                    key={index}
                    className="flex text-sm items-center justify-between  font-normal    py-1 rounded-lg transition-all"
                  >
                    <a
                      href={`/destinations/${item._id}`}
                      className="cursor-pointer hover:underline"
                    >
                      <div className="flex items-center  gap-4">
                        <span className="">
                          <Flag
                            width={30}
                            code={item?.countryId?.code}
                            style={{}}
                          />
                        </span>

                        {item?.countryId?.name}
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-12">
              <ul >
                {allDestinations?.slice(10).map((item, index) => (
                  <li
                    key={index}
                    className="flex text-sm items-center justify-between  font-normal    py-1 rounded-lg transition-all"
                  >
                    <a
                      href={`/destinations/${item._id}`}
                      className="cursor-pointer hover:underline"
                    >
                      <div className="flex items-center  gap-4">
                        <span className="">
                          <Flag
                            width={30}
                            code={item?.countryId?.code}
                            style={{}}
                          />
                        </span>

                        {item?.countryId?.name}
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* testPrep */}
            <div>
              <h3 className={`font-semibold text-2xl mb-3 text-[#fbba18]`}>
                Test Prep
              </h3>
              <ul>
                {allTestPreps?.map((data, index) => (
                  <li
                    key={index}
                    className="flex text-sm items-center justify-between  font-normal    py-1 rounded-lg transition-all"
                  >
                    <a
                      href={`/testprep/${data?._id}`}
                      className="cursor-pointer hover:underline"
                    >
                      <div className="flex  text-white w-full justify-between items-center ">
                        {data?.productName}
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm">
          <p>
            {" "}
            © 2025-2026 <a className="hover:underline">ABROAED</a>. All Rights
          </p>
          <div className="mt-2">
            {["Privacy Policy", "Refund Policy", "Terms & Conditions"].map(
              (item, index) => (
                <span key={index}>
                  <a href="#" className="hover:underline">
                    {item}
                  </a>
                  {index < 2 && " | "}
                </span>
              )
            )}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
