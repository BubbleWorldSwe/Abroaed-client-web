/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { useSelector } from "react-redux";
// import ExploreCourseNavItemModal from "../modals/exploreCourseNavItemModal";
import ExploreCollegesNavItemModal from "../modals/exploreCollegesNavItemModal";
import { getCollegesByDestinationId } from "../../../api/collegesApi";
import DestinationNavItemModal from "../modals/destinationNavItemModal";
import WhyAbroaedNavModal from "../modals/whyAbroaedNavModal";
import TestPrepNavModal from "../modals/testPrepNavModal";
import LanguageNavModal from "../modals/languageNavModal";

export const destinationMenuItems = [
  { name: "UK", flag: "🇬🇧", link: "/uk" },
  { name: "Ireland", flag: "🇮🇪", link: "/ireland" },
  { name: "Germany", flag: "🇩🇪", link: "/germany" },
  { name: "France", flag: "🇫🇷", link: "/france" },
  { name: "Italy", flag: "🇮🇹", link: "/italy" },
  { name: "Poland", flag: "🇵🇱", link: "/poland" },
  { name: "Australia", flag: "🇦🇺", link: "/australia" },
  { name: "USA", flag: "🇺🇸", link: "/usa" },
  { name: "Canada", flag: "🇨🇦", link: "/canada" },
  { name: "Dubai", flag: "🇦🇪", link: "/dubai" },
  { name: "Europe", flag: "🇪🇺", link: "/europe" },
  { name: "Netherlands", flag: "🇳🇱", link: "/netherlands" },
  { name: "Spain", flag: "🇪🇸", link: "/spain" },
  { name: "New Zealand", flag: "🇳🇿", link: "/newzealand" },
];

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

  // State lifted up from ExploreCollegesNavItemModal
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [states, setStates] = useState([]);
  const [colleges, setColleges] = useState([]);
  const [filteredColleges, setFilteredColleges] = useState([]);
  const [selectedState, setSelectedState] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

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
      if (response.status === 200) {
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

  return (
    <header
      className={`w-full fixed top-0 z-30 border-gray-400 transition-all duration-300 ${
        scrolling || isHeaderBgWhite
          ? "bg-white text-[#52525B] shadow-md"
          : "bg-black text-white bg-opacity-5"
      }`}
    >
      <nav>
        <div
          className={`py-3 text-center font-inter text-sm bg-yellow-300 text-black`}
        >
          Improve Your IELTS Writing with Our Free Tool 🔍
        </div>
        <nav className="flex items-center justify-between  md:justify-center   w-full px-12 py-4">
          <div className="flex  basis items-center">
            <h3 className="text-lg font-semibold sm:text-3xl md:text-4xl lg:text-lg">
              <a
                // target="_blank"
                href="/home"
                className={`font-cinzel tracking-[0.15em] text-2xl font-extrabold leading-[40px] ${
                  scrolling || isHeaderBgWhite ? "text-black" : "text-white"
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
                    className={`font-semibold text-sm px-1 relative transition-colors duration-300
                     ${
                       scrolling || isHeaderBgWhite
                         ? "text-[#52525B]"
                         : "text-white"
                     }
                     after:content-[''] after:absolute after:-top-7  after:left-0 after:w-full  after:h-[4.5rem] 
                     after:bg-white after:opacity-0 after:rounded-sm after:transition-opacity after:duration-300 
                     ${
                       activeDropdown === "exploreColleges"
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
                    className={`font-semibold text-sm px-1 relative transition-colors duration-300
    ${scrolling || isHeaderBgWhite ? "text-[#52525B]" : "text-white"}
    after:content-[''] after:absolute after:-top-7  after:left-0 after:w-full  after:h-[4.5rem] 
    after:bg-white after:opacity-0 after:rounded-sm after:transition-opacity after:duration-300 
    ${activeDropdown === "whyAbroad" ? "after:opacity-30" : ""}`}
                  >
                    Why Abroaed?
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
                    className={`font-semibold text-sm px-1 relative transition-colors duration-300
    ${scrolling || isHeaderBgWhite ? "text-[#52525B]" : "text-white"}
    after:content-[''] after:absolute after:-top-7  after:left-0 after:w-full  after:h-[4.5rem] 
    after:bg-white after:opacity-0 after:rounded-sm after:transition-opacity after:duration-300 
    ${activeDropdown === "abroaedPlus" ? "after:opacity-30" : ""}`}
                  >
                    Abroaed Plus
                  </a>
                </li>
                <li
                  onMouseEnter={() => handleMouseEnter("destinations")}
                  onMouseLeave={handleMouseLeave}
                  className="relative cursor-pointer"
                >
                  <a
                    className={`font-semibold text-sm px-1 relative transition-colors duration-300
                      ${
                        scrolling || isHeaderBgWhite
                          ? "text-[#52525B]"
                          : "text-white"
                      }
                      after:content-[''] after:absolute after:-top-7  after:left-0 after:w-full  after:h-[4.5rem] 
                      after:bg-white after:opacity-0 after:rounded-sm after:transition-opacity after:duration-300 
                      ${
                        activeDropdown === "destinations"
                          ? "after:opacity-30"
                          : ""
                      }`}
                  >
                    Destinations
                  </a>
                  {activeDropdown === "destinations" && (
                    <div className="relative">
                      <DestinationNavItemModal
                        menuItems={destinationMenuItems}
                        handleMouseEnter={handleMouseEnter}
                        handleMouseLeave={handleMouseLeave}
                      />
                    </div>
                  )}
                </li>
                <li
                  onMouseEnter={() => handleMouseEnter("testPrep")}
                  onMouseLeave={handleMouseLeave}
                  className="relative cursor-pointer"
                >
                  <a
                    className={`font-semibold text-sm px-1 relative transition-colors duration-300
                      ${
                        scrolling || isHeaderBgWhite
                          ? "text-[#52525B]"
                          : "text-white"
                      }
                      after:content-[''] after:absolute after:-top-7  after:left-0 after:w-full  after:h-[4.5rem] 
                      after:bg-white after:opacity-0 after:rounded-sm after:transition-opacity after:duration-300 
                      ${
                        activeDropdown === "testPrep" ? "after:opacity-30" : ""
                      }`}
                  >
                    Test Prep
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
                    className={`font-semibold text-sm px-1 relative transition-colors duration-300
                      ${
                        scrolling || isHeaderBgWhite
                          ? "text-[#52525B]"
                          : "text-white"
                      }
                      after:content-[''] after:absolute after:-top-7  after:left-0 after:w-full  after:h-[4.5rem] 
                      after:bg-white after:opacity-0 after:rounded-sm after:transition-opacity after:duration-300 
                      ${
                        activeDropdown === "languagePrep"
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
                    className={`font-semibold text-sm px-1 relative transition-colors duration-300
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
                    className={`font-semibold text-sm px-1 relative transition-colors duration-300
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
                    className={`font-semibold text-sm px-1 relative transition-colors duration-300
    ${scrolling || isHeaderBgWhite ? "text-[#52525B]" : "text-white"}
    after:content-[''] after:absolute after:-top-7  after:left-0 after:w-full  after:h-[4.5rem] 
    after:bg-white after:opacity-0 after:rounded-sm after:transition-opacity after:duration-300 
    ${activeDropdown === "leaguageOfExcellence" ? "after:opacity-30" : ""}`}
                  >
                    League of Excellence
                  </a>
                </li>
                <li>
                  <button className="px-3 py-2 bg-[#FDDA24] text-[#27272A] font-semibold rounded-lg">
                    Book Counselling Now
                  </button>
                </li>
              </ul>
            </div>
          </div>
          {/*    <div className="flex flex-grow-0 basis-[10%] justify-end">
            <a
              href="/admin/signin"
              className={`text-sm font-medium ${
                scrolling ? "text-black" : "text-white"
              } hover:underline`}
            >
              Login
            </a>
          </div> */}
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
