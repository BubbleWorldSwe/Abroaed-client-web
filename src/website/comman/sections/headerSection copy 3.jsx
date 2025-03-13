/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp, Menu } from "lucide-react";
import { useSelector } from "react-redux";
// import ExploreCourseNavItemModal from "../modals/exploreCourseNavItemModal";
import ExploreCollegesNavItemModal from "../modals/exploreCollegesNavItemModal";
import { getCollegesByDestinationId } from "../../../api/collegesApi";
import DestinationNavItemModal from "../modals/destinationNavItemModal";
import WhyAbroaedNavModal from "../modals/whyAbroaedNavModal";


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

const DropdownMenu = ({
  title,
  items,
  urlPrefix,
  stateKey,
  toggleDropdown,
  isOpen,
  scrolling,
  isHeaderBgWhite,
}) => {
  return (
    <li>
      <button
        onClick={() => toggleDropdown(stateKey)}
        className={`font-semibold text-sm flex items-center gap-1 ${scrolling || isHeaderBgWhite ? "text-[#52525B]" : "text-white"
          }`}
      >
        {title} {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>
      {isOpen && (
        <div className="absolute left-1/2 transform -translate-x-1/2 top-full w-[70%] text-black bg-white border shadow-md">
          <ul>
            {items?.map((data, i) => {
              console.log(data);
              return (
                <li key={i}>
                  <a
                    href={data._id ? `/${urlPrefix}/${data._id}` : data.href}
                    className="block px-4 py-2 hover:bg-gray-100"
                  //target="_blank"
                  >
                    {data?.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </li>
  );
};

function Header({ isHeaderBgWhite = false }) {
  const [scrolling, setScrolling] = useState(false);
  const [dropdowns, setDropdowns] = useState({
    whyAbroad: false,
    exploreCourses: false,
    exploreColleges: false,
    testPrep: false,
    languagePrep: false,
    destinations: false,
  });

  const [activeDropdown, setActiveDropdown] = useState(null);

  // Open dropdown
  const handleMouseEnter = (key) => {
    setActiveDropdown(key);
  };

  // Close dropdown when leaving both nav link & modal
  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };
  const toggleDropdown = (key) => {
    setDropdowns((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
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

  // const toggleDropdown = (key) => {
  //   setDropdowns((prev) => {
  //     const newDropdowns = Object.keys(prev).reduce((acc, curr) => {
  //       acc[curr] = curr === key ? !prev[curr] : false;
  //       return acc;
  //     }, {});
  //     return newDropdowns;
  //   });
  // };

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
      className={`w-full fixed top-0 z-30 border-gray-400 transition-all duration-300 ${scrolling || isHeaderBgWhite
        ? "bg-white text-[#52525B] shadow-md"
        : "bg-black text-white bg-opacity-0"
        }`}
    >
      <nav>
        <div
          className={`py-3 text-center font-inter text-sm bg-yellow-300 text-black`}
        >
          Improve Your IELTS Writing with Our Free Tool 🔍
        </div>
        <nav className="flex items-center justify-between  md:justify-center  w-full px-12 py-4">
          <div className="flex flex-grow-0 basis-[10%] items-center">
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
          <div className="flex-grow basis-[80%] hidden md:flex  justify-center">
            <div className="flex items-center justify-center ">
              <ul className="flex items-center space-x-5 justify-center text-sm font-medium">

                <li
                  onMouseEnter={() => handleMouseEnter("exploreColleges")}
                  onMouseLeave={() => setTimeout(handleMouseLeave, 200)}
                  className={`relative cursor-pointer group 
    ${activeDropdown === "exploreColleges" ? "" : ""}`}
                >
                  <a
                    className={`font-semibold text-sm px-1 relative transition-colors duration-300
    ${scrolling || isHeaderBgWhite ? "text-[#52525B]" : "text-white"}
    after:content-[''] after:absolute after:-top-7  after:left-0 after:w-full  after:h-[4.5rem] 
    after:bg-white after:opacity-0 after:rounded-sm after:transition-opacity after:duration-300 
    ${activeDropdown === "exploreColleges" ? "after:opacity-30" : ""}`}
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

                {/* <li>
                  <button
                    onClick={() => toggleDropdown("exploreColleges")}
                    className={`font-semibold flex gap-1 text-sm ${scrolling || isHeaderBgWhite
                      ? "text-[#52525B]"
                      : "text-white"
                      }`}                  >
                    Explore Colleges{" "}
                    {dropdowns.exploreColleges ? (
                      <ChevronUp size={22} />
                    ) : (
                      <ChevronDown size={22} />
                    )}
                  </button>

                  {dropdowns.exploreColleges && (
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
                  )}
                </li> */}
                {/* <li>
                  <a
                    href="/home"
                    className={`font-medium ${
                      scrolling ? "text-black" : "text-white"
                    }`}
                  >
                    Home
                  </a>
                </li> */}
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


                {/* <DropdownMenu
                  title="Why Abroaed?"
                  items={[
                    { title: "About Us", href: "/aboutus" },
                    { title: "Career", href: "/careers" },
                  ]}
                  stateKey="whyAbroad"
                  toggleDropdown={toggleDropdown}
                  isOpen={dropdowns.whyAbroad}
                  scrolling={scrolling}
                  isHeaderBgWhite={isHeaderBgWhite}
                /> */}
                <li>
                  <a
                    href="/abroaedPlus"
                    className={`font-semibold text-sm ${scrolling || isHeaderBgWhite
                      ? "text-[#52525B]"
                      : "text-white"
                      }`}
                  >
                    Abroaed Plus
                  </a>
                </li>
                {/* <DropdownMenu
                  title="Destinations"
                  items={allDestinations.map((data) => ({
                    title: `${data?.countryId?.emoji} ${data?.countryId?.name}`,
                    _id: data._id,
                  }))}
                  urlPrefix="destinations"
                  stateKey="destinations"
                  toggleDropdown={toggleDropdown}
                  isOpen={dropdowns.destinations}
                  scrolling={scrolling}
                  isHeaderBgWhite={isHeaderBgWhite}
                /> */}
                <li
                  onMouseEnter={() => handleMouseEnter("destinations")}
                  onMouseLeave={() => setTimeout(handleMouseLeave, 200)}
                  className="relative cursor-pointer"
                >
                  <a
                    className={`font-semibold text-sm px-1 relative transition-colors duration-300
                      ${scrolling || isHeaderBgWhite ? "text-[#52525B]" : "text-white"}
                      after:content-[''] after:absolute after:-top-7  after:left-0 after:w-full  after:h-[4.5rem] 
                      after:bg-white after:opacity-0 after:rounded-sm after:transition-opacity after:duration-300 
                      ${activeDropdown === "destinations" ? "after:opacity-30" : ""}`}
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
                <DropdownMenu
                  title="Test Prep"
                  items={allTestPreps.map((data) => ({
                    title: data?.productName,
                    _id: data._id,
                  }))}
                  urlPrefix="testprep"
                  stateKey="testPrep"
                  toggleDropdown={toggleDropdown}
                  isOpen={dropdowns.testPrep}
                  scrolling={scrolling}
                  isHeaderBgWhite={isHeaderBgWhite}
                />
                <DropdownMenu
                  title="Language Prep"
                  items={allLanguagePreps.map((data) => ({
                    title: data?.productName,
                    _id: data._id,
                  }))}
                  urlPrefix="languageprep"
                  stateKey="languagePrep"
                  toggleDropdown={toggleDropdown}
                  isOpen={dropdowns.languagePrep}
                  scrolling={scrolling}
                  isHeaderBgWhite={isHeaderBgWhite}
                />
                <li>
                  <a
                    href="/finance"
                    className={`font-semibold text-sm ${scrolling || isHeaderBgWhite
                      ? "text-[#52525B]"
                      : "text-white"
                      }`}
                  >
                    Finance
                  </a>
                </li>
                <li>
                  <a
                    href="/pathways"
                    className={`font-semibold text-sm ${scrolling || isHeaderBgWhite
                      ? "text-[#52525B]"
                      : "text-white"
                      }`}
                  >
                    Pathways
                  </a>
                </li>
                <li>
                  <a
                    href="/leaguageOfExcellence"
                    className={`font-semibold text-sm ${scrolling || isHeaderBgWhite
                      ? "text-[#52525B]"
                      : "text-white"
                      }`}
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
            className="md:hidden p-2"
          // onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu size={24} className={`${scrolling ? "text-black" : "text-white"}`} />
          </button>
        </nav>
      </nav>
    </header>
  );
}

export default Header;
