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
import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
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

  const { } = useSelector((state) => state.auth);

  // State lifted up from ExploreCollegesNavItemModal
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [states, setStates] = useState([]);
  const [colleges, setColleges] = useState([]);
  const [filteredColleges, setFilteredColleges] = useState([]);
  const [selectedState, setSelectedState] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { studentToken } = useSelector((state) => state.auth);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(studentLogout(null));
    navigate("/home");
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > window.innerHeight * 0.65);
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
              college.stateId._id,
              college.stateId,
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
      (college) => college.stateId._id === state._id
    );
    setFilteredColleges(filtered);
  }

  useEffect(() => {
    if (allDestinations?.length > 0 && !selectedDestination) {
      setSelectedDestination(allDestinations[0]);
      handleDestinationClick(allDestinations[0]);
    }
  }, [allDestinations]);
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
        ? "bg-white text-[#52525B] shadow-md"
        : "bg-black text-white bg-opacity-5"
        }`}
    >
      <nav>
        <div
          className={`py-3 flex gap-5 relative  justify-center items-center font-inter text-sm bg-gray-primary text-white`}
        >
          <p className="">GET IN TOUCH WITH US TODAY !</p>
          <div>
            <button
              onClick={() => navigate("/homeCounselling")}
              className={`px-4 py-1 text-sm bg-transparent text-white border-2 border-white hover:border-yellow-primary hover:bg-yellow-primary hover:text-gray-primary font-normal rounded-lg`}
            >
              Book Counselling Now
            </button>
          </div>
          <div className="flex absolute right-5  md:justify-end space-x-3 mt-2">
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
        <nav className="flex items-center justify-between  md:justify-center   w-full px-12 py-4">
          <div className="flex  basis items-center">
            <h3 className="text-lg font-semibold sm:text-3xl md:text-4xl lg:text-lg">
              <a
                // target="_blank"
                href="/home"
                className={`font-cinzel tracking-[0.15em] text-2xl font-extrabold leading-[40px] ${scrolling || isHeaderBgWhite ? "text-black" : "text-white"
                  }`}
              >
                ABROA<span style={{ color: "#fbba18" }}>ED</span>
              </a>
            </h3>
          </div>
          <div className="flex-grow basis-[90%]   hidden md:flex  justify-center">
            <div className="flex items-center justify-center ">
              <ul className="flex items-center space-x-3 justify-center text-sm font-medium">
                <li
                  onMouseEnter={() => handleMouseEnter("exploreColleges")}
                  onMouseLeave={handleMouseLeave}
                  className={`relative cursor-pointer group 
                   ${activeDropdown === "exploreColleges" ? "" : ""}`}
                >
                  <a
                    className={`font-semibold  px-1 relative transition-colors duration-300
                     ${scrolling || isHeaderBgWhite
                        ? "text-[#52525B]"
                        : "text-white"
                      }
                     after:content-[''] after:absolute after:-top-7  after:left-0 after:w-full  after:h-[4.5rem] 
                     after:bg-white after:opacity-0 after:rounded-sm after:transition-opacity after:duration-300 
                     ${activeDropdown === "exploreColleges"
                        ? "after:opacity-30"
                        : ""
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
                <li
                  onMouseEnter={() => handleMouseEnter("whyAbroad")}
                  onMouseLeave={handleMouseLeave}
                  className={`relative cursor-pointer group 
    ${activeDropdown === "whyAbroad" ? "" : ""}`}
                >
                  <a
                    className={`font-semibold  px-1 relative transition-colors duration-300
    ${scrolling || isHeaderBgWhite ? "text-[#52525B]" : "text-white"}
    after:content-[''] after:absolute after:-top-7  after:left-0 after:w-full  after:h-[4.5rem] 
    after:bg-white after:opacity-0 after:rounded-sm after:transition-opacity after:duration-300 
    ${activeDropdown === "whyAbroad" ? "after:opacity-30" : ""}`}
                  >
                    Why ABROAED?
                  </a>
                  {activeDropdown === "whyAbroad" && (
                    <div className="relative">
                      <WhyAbroaedNavModal
                        handleMouseEnter={handleMouseEnter}
                        handleMouseLeave={handleMouseLeave}
                      />
                    </div>
                  )}
                </li>

                <li
                  onMouseEnter={() => handleMouseEnter("abroaedPlus")}
                  onMouseLeave={handleMouseLeave}
                  className={`relative cursor-pointer group `}
                >
                  <a
                    href="/abroaedPlus"
                    className={`font-semibold  px-1 relative transition-colors duration-300
    ${scrolling || isHeaderBgWhite ? "text-[#52525B]" : "text-white"}
    after:content-[''] after:absolute after:-top-7  after:left-0 after:w-full  after:h-[4.5rem] 
    after:bg-white after:opacity-0 after:rounded-sm after:transition-opacity after:duration-300 
    ${activeDropdown === "abroaedPlus" ? "after:opacity-30" : ""}`}
                  >
                    ABROAED +
                  </a>
                </li>
                <li
                  onMouseEnter={() => handleMouseEnter("destinations")}
                  onMouseLeave={handleMouseLeave}
                  className="relative cursor-pointer"
                >
                  <a
                    className={`font-semibold  px-1 relative transition-colors duration-300
                      ${scrolling || isHeaderBgWhite
                        ? "text-[#52525B]"
                        : "text-white"
                      }
                      after:content-[''] after:absolute after:-top-7  after:left-0 after:w-full  after:h-[4.5rem] 
                      after:bg-white after:opacity-0 after:rounded-sm after:transition-opacity after:duration-300 
                      ${activeDropdown === "destinations"
                        ? "after:opacity-30"
                        : ""
                      }`}
                  >
                    Destinations
                  </a>
                  {activeDropdown === "destinations" && (
                    <div className="relative">
                      <DestinationNavItemModal
                        //  menuItems={destinationMenuItems}
                        handleMouseEnter={handleMouseEnter}
                        handleMouseLeave={handleMouseLeave}
                      />
                    </div>
                  )}
                </li>
                <li
                  onMouseEnter={() => handleMouseEnter("accomodation")}
                  onMouseLeave={handleMouseLeave}
                  className="relative cursor-pointer"
                >
                  <a
                    href="/accomodation"
                    className={`font-semibold  px-1 relative transition-colors duration-300
                      ${scrolling || isHeaderBgWhite
                        ? "text-[#52525B]"
                        : "text-white"
                      }
                      after:content-[''] after:absolute after:-top-7  after:left-0 after:w-full  after:h-[4.5rem] 
                      after:bg-white after:opacity-0 after:rounded-sm after:transition-opacity after:duration-300 
                      ${activeDropdown === "accomodation"
                        ? "after:opacity-30"
                        : ""
                      }`}
                  >
                    Accommodation
                  </a>
                </li>
                <li
                  onMouseEnter={() => handleMouseEnter("testPrep")}
                  onMouseLeave={handleMouseLeave}
                  className="relative cursor-pointer"
                >
                  <a
                    className={`font-semibold  px-1 relative transition-colors duration-300
                      ${scrolling || isHeaderBgWhite
                        ? "text-[#52525B]"
                        : "text-white"
                      }
                      after:content-[''] after:absolute after:-top-7  after:left-0 after:w-full  after:h-[4.5rem] 
                      after:bg-white after:opacity-0 after:rounded-sm after:transition-opacity after:duration-300 
                      ${activeDropdown === "testPrep" ? "after:opacity-30" : ""
                      }`}
                  >
                    ELT Prep
                  </a>
                  {activeDropdown === "testPrep" && (
                    <div className="relative">
                      <TestPrepNavModal
                        menuItems={allTestPreps.map((data) => ({
                          title: data?.productName,
                          _id: data._id,
                        }))}
                        handleMouseEnter={handleMouseEnter}
                        handleMouseLeave={handleMouseLeave}
                      />
                    </div>
                  )}
                </li>
                <li
                  onMouseEnter={() => handleMouseEnter("languagePrep")}
                  onMouseLeave={handleMouseLeave}
                  className="relative cursor-pointer"
                >
                  <a
                    className={`font-semibold  px-1 relative transition-colors duration-300
                      ${scrolling || isHeaderBgWhite
                        ? "text-[#52525B]"
                        : "text-white"
                      }
                      after:content-[''] after:absolute after:-top-7  after:left-0 after:w-full  after:h-[4.5rem] 
                      after:bg-white after:opacity-0 after:rounded-sm after:transition-opacity after:duration-300 
                      ${activeDropdown === "languagePrep"
                        ? "after:opacity-30"
                        : ""
                      }`}
                  >
                    Language Prep
                  </a>
                  {activeDropdown === "languagePrep" && (
                    <div className="relative">
                      <LanguageNavModal
                        menuItems={allLanguagePreps.map((data) => ({
                          title: data?.productName,
                          _id: data._id,
                        }))}
                        handleMouseEnter={handleMouseEnter}
                        handleMouseLeave={handleMouseLeave}
                      />
                    </div>
                  )}
                </li>

                <li
                  onMouseEnter={() => handleMouseEnter("finance")}
                  onMouseLeave={handleMouseLeave}
                  className={`relative cursor-pointer group `}
                >
                  <a
                    href="/finance"
                    className={`font-semibold  px-1 relative transition-colors duration-300
    ${scrolling || isHeaderBgWhite ? "text-[#52525B]" : "text-white"}
    after:content-[''] after:absolute after:-top-7  after:left-0 after:w-full  after:h-[4.5rem] 
    after:bg-white after:opacity-0 after:rounded-sm after:transition-opacity after:duration-300 
    ${activeDropdown === "finance" ? "after:opacity-30" : ""}`}
                  >
                    Finance
                  </a>
                </li>
                <li
                  onMouseEnter={() => handleMouseEnter("pathways")}
                  onMouseLeave={handleMouseLeave}
                  className={`relative cursor-pointer group `}
                >
                  <a
                    href="/pathways"
                    className={`font-semibold  px-1 relative transition-colors duration-300
    ${scrolling || isHeaderBgWhite ? "text-[#52525B]" : "text-white"}
    after:content-[''] after:absolute after:-top-7  after:left-0 after:w-full  after:h-[4.5rem] 
    after:bg-white after:opacity-0 after:rounded-sm after:transition-opacity after:duration-300 
    ${activeDropdown === "pathways" ? "after:opacity-30" : ""}`}
                  >
                    Pathways
                  </a>
                </li>

                <li
                  onMouseEnter={() => handleMouseEnter("leaguageOfExcellence")}
                  onMouseLeave={handleMouseLeave}
                  className={`relative cursor-pointer group `}
                >
                  <a
                    href="/leaguageOfExcellence"
                    className={`font-semibold  px-1 relative transition-colors duration-300
    ${scrolling || isHeaderBgWhite ? "text-[#52525B]" : "text-white"}
    after:content-[''] after:absolute after:-top-7  after:left-0 after:w-full  after:h-[4.5rem] 
    after:bg-white after:opacity-0 after:rounded-sm after:transition-opacity after:duration-300 
    ${activeDropdown === "leaguageOfExcellence" ? "after:opacity-30" : ""}`}
                  >
                    League of Excellence
                  </a>
                </li>
              </ul>
            </div>
          </div>
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
                    className={`px-4 py-2  bg-[#FDDA24] hover:bg-[#508030] font-semibold text-[#27272A] hover:border-none font-medium text-sm rounded-lg`}
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
                  className={`px-4 py-2  bg-[#FDDA24] hover:bg-[#508030] font-semibold text-[#27272A] hover:border-none font-medium text-sm rounded-lg`}
                >
                  Login
                </button>
              )}
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
    </header>
  );
}

export default Header;
