import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import RLinkLogo from "../assets/img/RLinkLogo.png";
import { useVideoContext } from "../context/useVideoContext";

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [showHeader, setShowHeader] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { videoEnded } = useVideoContext();
  const location = useLocation();
  const navigate = useNavigate();

  const isLandingPage = location.pathname === "/";

  const handleContactClick = (e) => {
    e.preventDefault();
    setMobileMenuOpen(false); // Close mobile menu on navigation
    console.log("Contact clicked, isLandingPage:", isLandingPage);

    if (isLandingPage) {
      const contactSection = document.getElementById("contact");
      console.log("Contact section found:", contactSection);

      if (contactSection) {
        setTimeout(() => {
          const headerHeight = 100;
          const elementPosition = contactSection.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.pageYOffset - headerHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }, 100);
      } else {
        console.error('Contact section with id="contact" not found');
      }
    } else {
      navigate("/", { state: { scrollToContact: true } });
    }
  };

  useEffect(() => {
    if (isLandingPage) {
      if (videoEnded) {
        const timer = setTimeout(() => {
          setShowHeader(true);
        }, 300);
        return () => clearTimeout(timer);
      } else {
        setShowHeader(false);
      }
    } else {
      setShowHeader(true);
    }
  }, [videoEnded, isLandingPage]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  if (isLandingPage && !videoEnded) {
    return null;
  }

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const navItems = [
    {
      key: "about",
      label: "会社について",
      links: [
        { label: "会社概要", href: "/company-profile" },
        { label: "ミッション", href: "/company-mission" },
      ],
    },
    {
      key: "services",
      label: "サービス",
      href: "/services",
      noDropdown: true,
    },
    {
      key: "contact",
      label: "お問い合わせ",
      href: "/contact",
      noDropdown: true,
    },
  ];

  return (
    <header
      className={`${
        isLandingPage ? "fixed top-0 left-0" : "relative"
      } w-full bg-white z-30`}
    >
      <style jsx="true">{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .group:hover svg {
          transform: rotate(180deg);
        }

        @keyframes flipIn {
          0% {
            opacity: 0;
            transform: rotateX(-90deg);
          }
          100% {
            opacity: 1;
            transform: rotateX(0);
          }
        }

        @keyframes slideInFromSide {
          0% {
            opacity: 0;
            transform: translateX(-30px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeScale {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideDown {
          0% {
            transform: translateY(-20px) scaleY(0.9);
            opacity: 0;
          }
          100% {
            transform: translateY(0) scaleY(1);
            opacity: 1;
          }
        }

        @keyframes slideUp {
          0% {
            transform: translateY(20px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .dropdown-1 {
          transition: opacity 0.4s ease-in-out, visibility 0.4s ease-in-out;
          background: white;
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2);
        }

        /* Desktop dropdown styles */
        @media (min-width: 1024px) {
          .group:hover .dropdown-1,
          .dropdown-1:hover {
            animation: slideDown 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)
              forwards;
          }

          .nav-item-gap-filler {
            position: absolute;
            bottom: -15px;
            left: 0;
            width: 100%;
            height: 15px;
            background: transparent;
            z-index: 40;
          }

          .group:hover .dropdown-1,
          .dropdown-1:hover {
            opacity: 1;
            visibility: visible;
          }
        }

        /* Mobile menu animations */
        @keyframes slideInDown {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .mobile-menu-enter {
          animation: slideInDown 0.3s ease-out;
        }

        /* Hamburger menu icon animation */
        .hamburger-line {
          transition: all 0.3s ease;
        }

        .hamburger-open .line1 {
          transform: rotate(45deg) translate(5px, 5px);
        }

        .hamburger-open .line2 {
          opacity: 0;
        }

        .hamburger-open .line3 {
          transform: rotate(-45deg) translate(7px, -6px);
        }
      `}</style>

      <div
        className={`flex items-center justify-between w-full bg-white relative z-50 transition-all duration-700 ease-out ${
          showHeader
            ? "opacity-100 transform translate-y-0"
            : "opacity-0 transform -translate-y-4"
        }`}
      >
        {/* Logo */}
        <div className="font-bold tracking-wide py-4 px-4 sm:px-6 md:px-8 flex text-2xl sm:text-3xl md:text-4xl">
          <Link to="/" className="text-black flex items-center">
            <div className="flex items-center">
              <img
                src={RLinkLogo}
                alt="R-Link Logo"
                className="h-10 sm:h-12 md:h-16"
              />
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-1">
          <nav className="flex items-center space-x-6 xl:space-x-12 2xl:space-x-20 text-base xl:text-lg 2xl:text-[24px] text-black py-4 px-4 xl:px-6 2xl:px-8 relative">
            {navItems.map((item) => (
              <div className="relative group" key={item.key}>
                {item.noDropdown ? (
                  item.key === "contact" ? (
                    <button
                      onClick={handleContactClick}
                      className="flex items-center hover:text-blue-600 whitespace-nowrap transition-colors"
                    >
                      {item.label}
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      className="flex items-center hover:text-blue-600 whitespace-nowrap transition-colors"
                    >
                      {item.label}
                    </Link>
                  )
                ) : (
                  <>
                    <button className="flex items-center hover:text-blue-600 relative group whitespace-nowrap transition-colors">
                      {item.label}
                      <span className="ml-1">
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className={`transition-transform duration-300 ease-in-out group-hover:rotate-180 ${
                            openDropdown === item.key ? "rotate-180" : ""
                          }`}
                        >
                          <path
                            d="M8.75003 2.08329L1.25003 2.08329C1.17409 2.08353 1.09966 2.10447 1.03474 2.14386C0.969827 2.18326 0.916884 2.23961 0.881611 2.30685C0.846339 2.3741 0.830074 2.44969 0.834567 2.52549C0.839059 2.60129 0.86414 2.67443 0.90711 2.73704L4.65711 8.15371C4.81253 8.37829 5.18669 8.37829 5.34253 8.15371L9.09253 2.73704C9.13593 2.67456 9.16139 2.60139 9.16612 2.52546C9.17086 2.44953 9.1547 2.37376 9.1194 2.30637C9.08409 2.23898 9.03099 2.18256 8.96587 2.14323C8.90075 2.1039 8.8261 2.08317 8.75003 2.08329Z"
                            fill="black"
                          />
                        </svg>
                      </span>
                      <div className="nav-item-gap-filler"></div>
                    </button>
                    <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-auto min-w-[175px] h-42 rounded-lg overflow-hidden shadow-lg opacity-0 invisible z-60 group-hover:visible hover:visible text-center text-nowrap dropdown-1">
                      <div className="px-4 py-5">
                        <div className="flex flex-col justify-center gap-6">
                          {item.links.map((link, idx) => (
                            <Link
                              key={idx}
                              to={link.href}
                              className="block py-2 px-3 text-black hover:text-blue-800 transition-all"
                              style={{
                                animation: `fadeIn 0.5s ease-out ${
                                  idx * 0.1 + 0.2
                                }s both`,
                                opacity: 0,
                              }}
                            >
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </nav>

          {/* Right Side - Recruitment Button */}
          <div>
            <Link
              to="/recruitment-business"
              className="w-24 xl:w-32 2xl:w-36 h-20 xl:h-24 2xl:h-24 flex text-base xl:text-lg 2xl:text-xl items-center justify-center text-white shadow whitespace-nowrap"
              style={{
                background: "linear-gradient(90deg, #1867D1 0%, #000000 100%)",
              }}
            >
              採用情報
            </Link>
          </div>
        </div>

        {/* Mobile Hamburger Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`lg:hidden p-4 text-black hover:text-blue-600 transition-colors hamburger ${
            mobileMenuOpen ? "hamburger-open" : ""
          }`}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className="hamburger-line line1 w-full h-0.5 bg-current block"></span>
            <span className="hamburger-line line2 w-full h-0.5 bg-current block"></span>
            <span className="hamburger-line line3 w-full h-0.5 bg-current block"></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed left-0 right-0 top-full bg-white z-40 mobile-menu-enter overflow-y-auto max-h-[calc(100vh-88px)] shadow-lg border-t border-gray-200">
          <nav className="flex flex-col p-6 space-y-4">
            {navItems.map((item) => (
              <div key={item.key} className="border-b border-gray-200 pb-4">
                {item.noDropdown ? (
                  item.key === "contact" ? (
                    <button
                      onClick={handleContactClick}
                      className="text-lg font-medium text-black hover:text-blue-600 w-full text-left transition-colors"
                    >
                      {item.label}
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      className="text-lg font-medium text-black hover:text-blue-600 block transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )
                ) : (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.key)}
                      className="flex items-center justify-between w-full text-lg font-medium text-black hover:text-blue-600 transition-colors"
                    >
                      {item.label}
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`transition-transform duration-300 ${
                          openDropdown === item.key ? "rotate-180" : ""
                        }`}
                      >
                        <path
                          d="M8.75003 2.08329L1.25003 2.08329C1.17409 2.08353 1.09966 2.10447 1.03474 2.14386C0.969827 2.18326 0.916884 2.23961 0.881611 2.30685C0.846339 2.3741 0.830074 2.44969 0.834567 2.52549C0.839059 2.60129 0.86414 2.67443 0.90711 2.73704L4.65711 8.15371C4.81253 8.37829 5.18669 8.37829 5.34253 8.15371L9.09253 2.73704C9.13593 2.67456 9.16139 2.60139 9.16612 2.52546C9.17086 2.44953 9.1547 2.37376 9.1194 2.30637C9.08409 2.23898 9.03099 2.18256 8.96587 2.14323C8.90075 2.1039 8.8261 2.08317 8.75003 2.08329Z"
                          fill="black"
                        />
                      </svg>
                    </button>
                    {openDropdown === item.key && (
                      <div className="mt-3 ml-4 space-y-3">
                        {item.links.map((link, idx) => (
                          <Link
                            key={idx}
                            to={link.href}
                            className="block py-2 text-base text-gray-700 hover:text-blue-600 transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}

            {/* Mobile Recruitment Button */}
            <Link
              to="/recruitment-business"
              className="mt-6 py-4 px-6 text-lg text-center text-white rounded-lg shadow-lg transition-transform hover:scale-105"
              style={{
                background: "linear-gradient(90deg, #1867D1 0%, #000000 100%)",
              }}
              onClick={() => setMobileMenuOpen(false)}
            >
              採用情報
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
