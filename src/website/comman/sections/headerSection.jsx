/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp, Home, Menu, X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import ExploreCollegesNavItemModal from "../modals/exploreCollegesNavItemModal";
import { getCollegesByDestinationId } from "../../../api/collegesApi";
import DestinationNavItemModal from "../modals/destinationNavItemModal";
import WhyAbroaedNavModal from "../modals/whyAbroaedNavModal";
import LanguageNavModalMobile from "../modals/languageNavModalMobile";
import { studentLogout } from "../../../redux/actions/authActions";
import { useNavigate } from "react-router-dom";
import LogoutModal from "../../../commons/modal/logoutModal";
import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import CombinedTestPrepModal from "../modals/combinedTestPrepModal";
import ServicesNavModal from "../modals/servicesNavModal";
// import SocialIconNavModal from "../modals/socialIconNavModal";
import BookCounsellingModal from "../modals/bookCounsellingModal";
import TestPrepNavMobileModal from "../modals/testPrepNavModalMobile";
import { useMediaQuery } from "react-responsive";
import ExploreCollegeModalPhone from "../modals/exploreCollegeModalPhone";
import CollegeListPhone from "../modals/collegeListPhone";
//import { destinationMenuItems } from "../../../constants/values";
import logoYellowWhite from "../../../assets/logoYellowWhite.png";
import MobileMenuComponent from "../components/mobileMenuComponent";

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
  const [isOpenHambarger, setIsOpenHambarger] = useState(false);
  const [expanded, setExpanded] = useState(null);
  const { studentToken, student } = useSelector((state) => state.auth);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOpenExploreCollegePhone, setIsOpenExploreCollegePhone] =
    useState(false);
  const [selectedDestModalPhone, setSelectedDestModalPhone] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(studentLogout(null));
    setIsModalOpen(false);
    navigate("/home");
  };
  const handleExploreCollegeModal = () => {
    setIsOpenExploreCollegePhone(true);
  };

  console.log(student?.firstName, student?.lastName);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > window.innerHeight * 0.2);
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
        const publishedColleges = response.data.result.filter(
          (item) => item.status === "publish"
        );

        setColleges(publishedColleges);
        setFilteredColleges(publishedColleges);

        const uniqueStates = [
          ...new Map(
            publishedColleges.map((college) => [
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

  const toggleSubMenu = (label) => {
    setExpanded((prev) => (prev === label ? null : label));
  };
  const isNotMobile = useMediaQuery({ minWidth: 768 });
  useEffect(() => {
    if (isNotMobile) {
      setIsOpenHambarger(false);
    }
  }, [isNotMobile]);

  const menuItems = [
    { key: "aboutUs", label: "About Us", component: WhyAbroaedNavModal },
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
      key: "leaguageOfExcellence",
      label: "League of Excellence",
      link: "/leaguageOfExcellence",
    },
    { key: "pathways", label: "Pathways", link: "/pathways" },
    {
      key: "testPrep",
      label: "Test Prep",
      component: CombinedTestPrepModal,
      data: {
        eltPreps: allTestPreps,
        languagePreps: allLanguagePreps,
      },
    },

    { key: "services", label: "Services", component: ServicesNavModal },
    {
      key: "destinations",
      label: "Destinations",
      component: DestinationNavItemModal,
    },

    // { key: "accomodation", label: "Accommodation", link: "/accomodation" },

    // { key: "finance", label: "Finance", link: "/finance" },

    // { key: "contactUs", label: "Contact Us", link: "/contactUs" },
  ];
  const mobileMenuItem = [
    {
      key: "home",
      label: (
        <div className="flex gap-2 justify-center items-center">
          <Home size={20} /> Home
        </div>
      ),
      link: "/",
    },
    {
      key: "aboutUs",
      label: "About Us",
      subItems: [
        { title: "Why ABROAED?", link: "/whyAbroaed" },
        { title: "Career", link: "/careers" },
        { title: "Contact Us", link: "/contactUs" },
      ],
    },
    {
      key: "abroaed-plus",
      label: (
        <span>
          ABROAED<sup>+</sup>
        </span>
      ),
      link: "/abroaedPlus",
    },
    {
      key: "league-excellence",
      label: "League of Excellence",
      link: "/leaguageOfExcellence",
    },
    {
      key: "pathways",
      label: "Pathways",
      link: "/pathways",
    },
    {
      key: "test-prep",
      label: "Test Prep",
      component: TestPrepNavMobileModal,
      data: allTestPreps,
    },
    {
      key: "language-prep",
      label: "Language Prep",
      component: LanguageNavModalMobile,
      data: allLanguagePreps,
    },
    {
      key: "services",
      label: "Services",
      subItems: [
        { title: "Forex", link: "/forex" },
        { title: "Finance", link: "/finance" },
        { title: "Accomodation", link: "/accomodation" },
        { title: "Home Counselling", link: "/homeCounselling" },
      ],
    },
    {
      key: "destinations",
      label: "Destinations",
      component: DestinationNavItemModal,
    },
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
      className={`w-full fixed top-0 z-30 border-gray-400 transition-all duration-300 ${
        scrolling || isHeaderBgWhite
          ? "bg-gray-primary text-white shadow-md"
          : "bg-gray-primary text-white bg-opacity-10"
      }`}
    >
      <nav className="flex items-center justify-between  md:justify-center   w-full px-2 md:px-12">
        <div className="flex  basis  items-center">
          <h3 className="text-lg hidden md:block font-semibold sm:text-3xl md:text-4xl lg:text-lg">
            <a
              href="/"
              className={`font-cinzel tracking-[0.25em] text-[22px] font-extrabold leading-[40px] text-white`}
            >
              ABROA<span style={{ color: "#fbba18" }}>ED</span>
            </a>
          </h3>
          <div className="md:hidden block w-6">
            <a href="/">
              <img src={logoYellowWhite} alt="logo" />
            </a>
          </div>
        </div>

        <div className="flex-grow basis-[90%] hidden md:flex justify-center ">
          <div className="flex items-center justify-center">
            <ul
              className={`flex items-center space-x-1 text-white   justify-center text-[12px] font-medium`}
            >
              {menuItems.map(
                ({ key, label, link, component: Component, data }) => (
                  <li
                    key={key}
                    onMouseEnter={() => handleMouseEnter(key)}
                    onMouseLeave={handleMouseLeave}
                    className="relative"
                  >
                    <div
                      className={`
    px-2 relative transition-colors duration-300 cursor-pointer
    after:content-[''] after:absolute after:-top-[70%] after:left-0 after:w-full after:h-[2.55rem]
    after:bg-white after:opacity-0 after:-z-10
    ${
      activeDropdown === key
        ? "after:opacity-100 font-semibold  text-gray-primary"
        : "font-semibold"
    }
  `}
                    >
                      <a href={link || "#"}>{label}</a>
                    </div>
                    {activeDropdown === key && Component && (
                      <div className="absolute top-full left-0 z-50">
                        <Component
                          {...(Array.isArray(data)
                            ? {
                                menuItems: data.map(({ productName, _id }) => ({
                                  title: productName,
                                  _id,
                                })),
                              }
                            : { ...data })}
                          handleMouseEnter={handleMouseEnter}
                          handleMouseLeave={handleMouseLeave}
                        />
                      </div>
                    )}
                  </li>
                )
              )}
              <li
                className="relative"
                onMouseEnter={() => handleMouseEnter("exploreColleges")}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  className={`
    px-2 relative transition-colors duration-300 cursor-pointer
    after:content-[''] after:absolute after:-top-[70%] after:left-0 after:w-full after:h-[2.55rem]
    after:bg-white after:opacity-0 after:-z-10
    ${
      activeDropdown === "exploreColleges"
        ? "after:opacity-100 font-semibold  text-gray-primary"
        : "font-semibold"
    }
  `}
                >
                  <a className="cursor-pointer">Explore Colleges</a>
                </div>

                {activeDropdown === "exploreColleges" && (
                  <div className="absolute top-full right-0 z-50">
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
            </ul>
          </div>
        </div>
        <div className="flex items-center gap-5">
          {/* <div className="flex flex-grow-0 basis-[10%] justify-end ">
              <div
                onMouseEnter={() => handleMouseEnter("login")}
                onMouseLeave={handleMouseLeave}
              >
                {studentToken ? (
                  <>
                    <button
                      // onClick={() => navigate("/signin")}
                      className={`px-4 py-1  whitespace-nowrap bg-[#FDDA24] hover:bg-[#508030]  text-[#27272A] hover:border-none font-medium text-sm rounded-lg`}
                    >
                      Hello, {`${student?.firstName} ${student?.lastName}`}
                    </button>
                    {activeDropdown === "login" && (
                      <div className="relative">
                        <ProfileModal
                          handleMouseEnter={handleMouseEnter}
                          handleMouseLeave={handleMouseLeave}
                          logout={() => setIsModalOpen(true)}
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
            </div> */}
          {/* <div className="flex   md:justify-end  space-x-3">
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
            </div> */}
          {/* explore colleges mobile view  */}
          <div>
            <button
              className="block md:hidden p-2 basis-[0%]"
              onClick={() => setIsOpenExploreCollegePhone(true)}
            >
              Explore Colleges
            </button>
            {/* destination list for mobile*/}
            <ExploreCollegeModalPhone
              isOpenExploreCollegePhone={isOpenExploreCollegePhone}
              setIsOpenExploreCollegePhone={setIsOpenExploreCollegePhone}
              allDestinations={allDestinations}
              handleDestinationClick={handleDestinationClick}
              setSelectedDestModalPhone={setSelectedDestModalPhone}
              selectedDestModalPhone={selectedDestModalPhone}
            />
            {/* college list  */}
            <CollegeListPhone
              selectedDestModalPhone={selectedDestModalPhone}
              setSelectedDestModalPhone={setSelectedDestModalPhone}
              setIsOpenExploreCollegePhone={setIsOpenExploreCollegePhone}
              selectedDestination={selectedDestination}
              filteredColleges={filteredColleges}
              handleStateClick={handleStateClick}
              isLoading={isLoading}
              states={states}
              selectedState={selectedState}
            />
          </div>

          <div
            // onMouseEnter={() => handleMouseEnter("login")}
            // onMouseLeave={handleMouseLeave}
            className="relative "
            // className="relative hidden md:block"
          >
            <button
              onClick={() => handleMouseEnter("bookMenu")}
              className={`px-4 py-1  whitespace-nowrap  bg-yellow-primary hover:bg-white font-semibold text-gray-primary hover:border-none text-sm rounded-lg`}
            >
              Book Now
            </button>
            {activeDropdown === "bookMenu" && (
              <div className="relative">
                <BookCounsellingModal
                  isOpen={activeDropdown === "bookMenu"}
                  onClose={handleMouseLeave}
                />
              </div>
            )}
          </div>

          {/* <div className="hidden md:block">
              <div
                onMouseEnter={() => handleMouseEnter("socialIcon")}
                onMouseLeave={handleMouseLeave}
                className={`relative cursor-pointer group 
                   ${activeDropdown === "socialIcon" ? "" : ""}`}

              >
                <p
                  className={`px-1 relative transition-colors duration-300  
                after:content-[''] after:absolute after:-top-7 after:left-0 after:w-full after:h-[3.5rem]
                after:bg-white after:opacity-0 after:rounded-sm after:transition-opacity after:duration-300
                ${activeDropdown === "socialIcon"
                      ? "after:opacity-100 after:-z-10 font-semibold text-gray-primary"
                      : ""
                    }
                    `}
                >
                  <Phone />
                </p>
              </div>
              {activeDropdown === "socialIcon" && (
                <div className="relative">
                  <SocialIconNavModal
                    handleMouseEnter={handleMouseEnter}
                   handleMouseLeave={handleMouseLeave}
                  />
                </div>
              )}

            </div> */}
        </div>

        {/* mobile menu */}
        <MobileMenuComponent
          setIsOpenHambarger={setIsOpenHambarger}
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
          toggleSubMenu={toggleSubMenu}
          mobileMenuItem={mobileMenuItem}
          expanded={expanded}
          isOpenHambarger={isOpenHambarger}
          activeDropdown={activeDropdown}
        />
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
