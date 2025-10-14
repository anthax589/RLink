import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import RLinkLogo from "../assets/img/RLinkLogo.png";
import { useVideoContext } from "../context/useVideoContext";

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [showHeader, setShowHeader] = useState(false);
  const { videoEnded } = useVideoContext();
  const location = useLocation();
  const navigate = useNavigate();

  // Check if we're on the landing page
  const isLandingPage = location.pathname === "/";

  // Handle contact navigation
  const handleContactClick = (e) => {
    e.preventDefault();
    console.log("Contact clicked, isLandingPage:", isLandingPage); // Debug log

    if (isLandingPage) {
      // Scroll to contact section on landing page
      const contactSection = document.getElementById("contact");
      console.log("Contact section found:", contactSection); // Debug log

      if (contactSection) {
        // Add a small delay to ensure page is ready
        setTimeout(() => {
          // Calculate header height for offset
          const headerHeight = 100; // Approximate header height
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
      // Navigate to contact page on other pages
      navigate("/contact");
    }
  };

  // Handle smooth header appearance
  useEffect(() => {
    if (isLandingPage) {
      // On landing page: hide header until video ends
      if (videoEnded) {
        // Small delay to ensure smooth transition
        const timer = setTimeout(() => {
          setShowHeader(true);
        }, 300);
        return () => clearTimeout(timer);
      } else {
        setShowHeader(false);
      }
    } else {
      // On other pages: always show header immediately
      setShowHeader(true);
    }
  }, [videoEnded, isLandingPage]);

  // Don't render header until video animation is finished (only on landing page)
  if (isLandingPage && !videoEnded) {
    return null;
  }

  // Toggle dropdown function, can be used for mobile menu or other interactions
  const _toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  // Dropdown items config
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
      key: "news",
      label: "ニュース",
      links: [
        { label: "最新情報", href: "/news" },
        { label: "プレスリリース", href: "/press" },
      ],
    },
    {
      key: "blog",
      label: "ブログ",
      links: [
        { label: "記事一覧", href: "/blog" },
        { label: "カテゴリ", href: "/blog/categories" },
      ],
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
      } w-full bg-white z-50`}
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

        /* Add arrow animation styles */
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

        /* Button colors - hover removed */
        .button-1,
        .button-2,
        .button-3 {
          background-color: #000000;
        }

        /* Dropdown animations */
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

        /* ==== DROPDOWN 1 STYLES ==== */
        /* Content-width dropdown with slide down animation */
        /* Used when activeAnimation === 1 */
        .dropdown-1 {
          transition: opacity 0.4s ease-in-out, visibility 0.4s ease-in-out;
          background: white;
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2);
        }

        /* Main navigation hover behavior */
        .group:hover .dropdown-1,
        .dropdown-1:hover {
          animation: slideDown 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)
            forwards;
        }

        /* Gap filler to prevent accidental hover-out */
        .nav-item-gap-filler {
          position: absolute;
          bottom: -15px; /* Extends below the nav item */
          left: 0;
          width: 100%;
          height: 15px; /* Creates an invisible bridge to the dropdown */
          background: transparent;
          z-index: 40;
        }

        /* Additional hover behaviors for dropdowns */
        .group:hover .dropdown-1,
        .dropdown-1:hover {
          opacity: 1;
          visibility: visible;
        }
      `}</style>
      <div
        className={`flex items-center text-[24px] justify-between w-full bg-white relative z-50 transition-all duration-700 ease-out ${
          showHeader
            ? "opacity-100 transform translate-y-0"
            : "opacity-0 transform -translate-y-4"
        }`}
      >
        {/* Logo */}
        <div className="font-bold tracking-wide py-4 px-8 flex text-4xl">
          <Link to="/" className="text-black flex items-center">
            <div className="flex items-center">
              <img src={RLinkLogo} alt="R-Link Logo" className="h-16" />
              <span className="text-[#1867D1] pl-3 ">R</span>Link Partners
            </div>
          </Link>
        </div>
        <div className="flex gap-1">
          {/* Navigation */}
          <nav className="flex items-center space-x-10 text-lg text-black py-4 px-8 relative">
            {navItems.map((item) => (
              <div className="relative group" key={item.key}>
                {item.noDropdown ? (
                  // Special handling for contact item
                  item.key === "contact" ? (
                    <button
                      onClick={handleContactClick}
                      className="flex items-center hover:text-blue-600"
                    >
                      {item.label}
                    </button>
                  ) : (
                    // Direct link for other items without dropdown (like Services)
                    <Link
                      to={item.href}
                      className="flex items-center hover:text-blue-600"
                    >
                      {item.label}
                    </Link>
                  )
                ) : (
                  // Dropdown menu for other items
                  <>
                    <button className="flex items-center hover:text-blue-600 relative group">
                      {item.label}
                      <span className="ml-1">
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className={`transition-transform duration-300 ease-in-out group-hover:rotate-2 ${
                            openDropdown === item.key ? "rotate-2" : ""
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
                    <div
                      className={
                        "absolute left-1/2 transform -translate-x-1/2 mt-2 w-auto min-w-[175px] h-42 rounded-lg overflow-hidden shadow-lg opacity-0 invisible z-60 group-hover:visible hover:visible text-center text-nowrap dropdown-1"
                      }
                    >
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

          {/* Right Side */}
          <div className="">
            <Link
              to="/recruitment-business"
              className="w-36 h-24 flex text-xl items-center justify-center text-white shadow"
              style={{
                background: "linear-gradient(90deg, #1867D1 0%, #000000 100%)",
              }}
            >
              採用情報
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
