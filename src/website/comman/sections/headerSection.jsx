/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

import ExploreCollegesNavItemModal from "../modals/exploreCollegesNavItemModal";
import { getCollegesByDestinationId } from "../../../api/collegesApi";
import DestinationNavItemModal from "../modals/destinationNavItemModal";
import WhyAbroaedNavModal from "../modals/whyAbroaedNavModal";
import TestPrepNavModal from "../modals/testPrepNavModal";
import LanguageNavModal from "../modals/languageNavModal";
import { studentLogout } from "../../../redux/actions/authActions";
import { useNavigate } from "react-router-dom";
import ProfileModal from "../modals/profileModal";
import LogoutModal from "../../../commons/modal/logoutModal";
import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import CombinedTestPrepModal from "../modals/combinedTestPrepModal";
//import { destinationMenuItems } from "../../../constants/values";

function Header({ isHeaderBgWhite = false }) {
  const [scrolling, setScrolling] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Open dropdown
  const handleMouseEnter = (key) => {
    setActiveDropdown(key);
  };

  // Close dropdown when leaving both nav link & modal
  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const { allDestinations } = useSelector((state) => state.destinations);
  const { allTestPreps } = useSelector((state) => state.testPreps);
  const { allLanguagePreps } = useSelector((state) => state.languagePreps);

  // console.log(allDestinations);

  // const { } = useSelector((state) => state.auth);

  // State lifted up from ExploreCollegesNavItemModal
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [states, setStates] = useState([]);
  const [colleges, setColleges] = useState([]);
  const [filteredColleges, setFilteredColleges] = useState([]);
  const [selectedState, setSelectedState] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { studentToken, student } = useSelector((state) => state.auth);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(studentLogout(null));
    setIsModalOpen(false);
    navigate("/home");
  };

  console.log(student?.firstName, student?.lastName);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > window.innerHeight * 0.4);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  async function handleDestinationClick(destination) {
    setSelectedDestination(destination);
    setSelectedState(null); // Reset state selection
    setIsLoading(true);
    try {
      const response = await getCollegesByDestinationId(destination._id);
      if (response?.status === 200) {
        setColleges(response.data.result);
        setFilteredColleges(response.data.result); // Show all initially
        const uniqueStates = [
          ...new Map(
            response.data.result.map((college) => [
              college?.stateId?._id,
              college?.stateId,
            ])
          ).values(),
        ];
        setStates(uniqueStates);
      } else {
        setStates([]);
        setColleges([]);
        setFilteredColleges([]);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  function handleStateClick(state) {
    setSelectedState(state);
    const filtered = colleges.filter(
      (college) => college?.stateId?._id === state?._id
    );
    setFilteredColleges(filtered);
  }

  useEffect(() => {
    if (allDestinations?.length > 0 && !selectedDestination) {
      setSelectedDestination(allDestinations[0]);
      handleDestinationClick(allDestinations[0]);
    }
  }, [allDestinations]);

  const menuItems = [
    { key: "whyAbroad", label: "Why ABROAED?", component: WhyAbroaedNavModal },
    {
      key: "abroaedPlus",
      label: (
        <>
          ABROAED<sup>+</sup>
        </>
      ),
      link: "/abroaedPlus",
    },
    {
      key: "destinations",
      label: "Destinations",
      component: DestinationNavItemModal,
    },
    { key: "accomodation", label: "Accommodation", link: "/accomodation" },
    {
      key: "testPrep",
      label: "Test Prep",
      component: CombinedTestPrepModal,
      data: {
        eltPreps: allTestPreps,
        languagePreps: allLanguagePreps,
      },
    },
    { key: "finance", label: "Finance", link: "/finance" },
    { key: "pathways", label: "Pathways", link: "/pathways" },
    {
      key: "leaguageOfExcellence",
      label: "League of Excellence",
      link: "/leaguageOfExcellence",
    },
    { key: "contactUs", label: "Contact Us", link: "/contactUs" },
  ];

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
  return (
    <header
      className={`w-full fixed top-0 z-30 border-gray-400 transition-all duration-300 ${scrolling || isHeaderBgWhite
        ? "bg-gray-primary  shadow-md"
        : "bg-gray-primary text-white bg-opacity-10"
        }`}
    >
      <nav>
        <nav className="flex items-center justify-between  md:justify-center   w-full px-12">
          <div className="flex  basis items-center">
            <h3 className="text-lg font-semibold sm:text-3xl md:text-4xl lg:text-lg">
              <a
                // target="_blank"
                href="/home"
                className={`font-cinzel tracking-[0.15em] text-[22px] font-extrabold leading-[40px] text-white`}
              >
                ABROA<span style={{ color: "#fbba18" }}>ED</span>
              </a>
            </h3>
          </div>
          <div className="flex-grow basis-[90%] hidden md:flex justify-center ">
            <div className="flex items-center justify-center">
              <ul
                className={`flex items-center space-x-3 text-white   justify-center text-[12px] font-medium`}
              >
                <li
                  onMouseEnter={() => handleMouseEnter("exploreColleges")}
                  onMouseLeave={handleMouseLeave}
                  className={`relative cursor-pointer group 
                   ${activeDropdown === "exploreColleges" ? "" : ""}`}
                >
                  <a
                    className={`px-1 relative transition-colors duration-300
                after:content-[''] after:absolute after:-top-7 after:left-0 after:w-full after:h-[3.5rem]
                after:bg-white after:opacity-0 after:rounded-sm after:transition-opacity after:duration-300
                ${activeDropdown === "exploreColleges"
                        ? "after:opacity-100 after:-z-10 font-semibold text-gray-primary"
                        : "font-semibold"
                      }`}
                  >
                    Explore Colleges
                  </a>
                  {activeDropdown === "exploreColleges" && (
                    <div className="relative">
                      <ExploreCollegesNavItemModal
                        allDestinations={allDestinations}
                        selectedDestination={selectedDestination}
                        selectedState={selectedState}
                        states={states}
                        colleges={colleges}
                        filteredColleges={filteredColleges}
                        isLoading={isLoading}
                        handleDestinationClick={handleDestinationClick}
                        handleStateClick={handleStateClick}
                      />
                    </div>
                  )}
                </li>
                {menuItems.map(
                  ({ key, label, link, component: Component, data }) => (
                    <li
                      key={key}
                      onMouseEnter={() => handleMouseEnter(key)}
                      onMouseLeave={handleMouseLeave}
                      className="relative cursor-pointer group"
                    >
                      <a
                        href={link || "#"}
                        className={`px-1 relative transition-colors duration-300
                after:content-[''] after:absolute after:-top-7 after:left-0 after:w-full after:h-[3.5rem]
                after:bg-white after:opacity-0 after:rounded-sm after:transition-opacity after:duration-300
                ${activeDropdown === key
                            ? "after:opacity-100 after:-z-10 font-semibold text-gray-primary"
                            : "font-semibold"
                          }`}
                      >
                        {label}
                      </a>
                      {activeDropdown === key && Component && (
                        <div className="relative">
                          <Component
                            {...(data && Array.isArray(data)
                              ? { menuItems: data.map(({ productName, _id }) => ({ title: productName, _id })) }
                              : { ...data })}
                            handleMouseEnter={handleMouseEnter}
                            handleMouseLeave={handleMouseLeave}
                          />
                        </div>
                      )}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex flex-grow-0 basis-[10%] justify-end ">
              <div
                onMouseEnter={() => handleMouseEnter("login")}
                onMouseLeave={handleMouseLeave}
              // className={ }
              >
                {studentToken ? (
                  <>
                    <button
                      // onClick={() => navigate("/signin")}
                      className={`px-4 py-1  bg-[#FDDA24] hover:bg-[#508030]  text-[#27272A] hover:border-none font-medium text-sm rounded-lg`}
                    >
                      Hello, User
                    </button>
                    {activeDropdown === "login" && (
                      <div className="relative">
                        <ProfileModal
                          handleMouseEnter={handleMouseEnter}
                          handleMouseLeave={handleMouseLeave}
                          logout={handleSignOut}
                        />
                      </div>
                    )}
                  </>
                ) : (
                  <button
                    onClick={() => navigate("/signin")}
                    className={`px-4 py-1  bg-[#FDDA24] hover:bg-white font-semibold text-[#27272A] hover:border-none text-sm rounded-lg`}
                  >
                    Login
                  </button>
                )}
              </div>
            </div>
            <div className="flex   md:justify-end  space-x-3">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className=" text-white hover:text-gray-300 rounded-full"
                  aria-label="Social Link"
                  target="_blank"
                >
                  {link.icon}
                </a>
              ))}
            </div>

          </div>
          <button
            className="md:hidden p-2 basis-[0%]"
          // onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu
              size={24}
              className={`${scrolling ? "text-black" : "text-white"}`}
            />
          </button>
        </nav>

      </nav>

      <LogoutModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        heading="Logout!"
        onLogout={handleSignOut}
      />
    </header>
  );
}

export default Header;
