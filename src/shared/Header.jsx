import React, { useState } from "react";

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  // Add state for active animation style (1, 2, or 3)
  const [activeAnimation, setActiveAnimation] = useState(1);

  // Toggle dropdown function, can be used for mobile menu or other interactions
  const _toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  // Function to change the active animation
  const changeAnimation = (animationNumber) => {
    setActiveAnimation(animationNumber);
  };

  // Dropdown items config
  const navItems = [
    {
      key: "about",
      label: "会社について",
      links: [
        { label: "会社概要", href: "#" },
        { label: "ミッション", href: "#" },
      ],
    },
    {
      key: "services",
      label: "サービス",
      links: [
        { label: "開発", href: "#services" },
        { label: "デザイン", href: "#services" },
      ],
    },
    {
      key: "news",
      label: "ニュース",
      links: [
        { label: "最新情報", href: "#" },
        { label: "プレスリリース", href: "#" },
      ],
    },
    {
      key: "blog",
      label: "ブログ",
      links: [
        { label: "記事一覧", href: "#" },
        { label: "カテゴリ", href: "#" },
      ],
    },
    {
      key: "contact",
      label: "お問い合わせ",
      links: [
        { label: "サポート", href: "#" },
        { label: "営業窓口", href: "#" },
      ],
    },
  ];

  // Menu items for the circular buttons
  const circularMenuItems = [
    {
      number: "1",
      links: [
        { label: "Home", href: "#" },
        { label: "About Us", href: "#" },
        { label: "Services", href: "#" },
      ],
    },
    {
      number: "2",
      links: [
        { label: "Products", href: "#" },
        { label: "Solutions", href: "#" },
        { label: "Case Studies", href: "#" },
      ],
    },
    {
      number: "3",
      links: [
        { label: "Blog", href: "#" },
        { label: "News", href: "#" },
        { label: "Events", href: "#" },
      ],
    },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
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

        @keyframes expandFromCenter {
          0% {
            transform: translateY(-5px) scaleX(0.4);
            opacity: 0;
          }
          50% {
            transform: translateY(-5px) scaleX(1.05);
            opacity: 0.5;
          }
          100% {
            transform: translateY(0) scaleX(1);
            opacity: 1;
          }
        }

        @keyframes revealCurtain {
          0% {
            transform: scaleY(0);
            transform-origin: top;
            opacity: 0;
          }
          100% {
            transform: scaleY(1);
            transform-origin: top;
            opacity: 1;
          }
        }

        /* Background animations removed */

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

        /* ==== DROPDOWN 2 STYLES ==== */
        /* Full-width dropdown with curtain reveal animation */
        /* Used when activeAnimation === 2 */
        .dropdown-2 {
          transition: opacity 0.3s ease, visibility 0.4s ease;
          background: rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }

        .group:hover .dropdown-2,
        .dropdown-2:hover {
          animation: revealCurtain 0.5s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }

        /* ==== DROPDOWN 3 STYLES ==== */
        /* Full-width dropdown with slide up animation */
        /* Used when activeAnimation === 3 */
        .dropdown-3 {
          transition: opacity 0.5s ease-out, visibility 0.5s ease-out;
          background: white;
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2);
        }

        .group:hover .dropdown-3,
        .dropdown-3:hover {
          animation: slideUp 0.7s cubic-bezier(0.68, -0.6, 0.32, 1.6) forwards;
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

        .group:hover .dropdown-2,
        .dropdown-2:hover {
          opacity: 1;
          visibility: visible;
        }

        .group:hover .dropdown-3,
        .dropdown-3:hover {
          opacity: 1;
          visibility: visible;
        }
      `}</style>
      <div className="flex items-center text-[24px] justify-between w-full bg-white shadow relative z-50">
        {/* Logo */}
        <div className="font-bold tracking-wide py-4 px-8">
          <a href="#" className="text-black">
            LOGO
          </a>
        </div>

        {/* Circular menu buttons to switch between dropdown animation styles */}
        <div className="absolute left-1/6 transform -translate-x-1/2 flex gap-16">
          {circularMenuItems.map((item, index) => (
            <div key={index} className="relative">
              {/* 
                DROPDOWN STYLE CONTROL BUTTONS
                - Button 1: Controls dropdown style 1 (content-width)
                - Button 2: Controls dropdown style 2 (full-width with curtain effect)
                - Button 3: Controls dropdown style 3 (full-width with slide up)
              */}
              <button
                onClick={() => changeAnimation(index + 1)}
                className={`text-white rounded-full w-8 h-8 flex items-center justify-center transition-colors duration-300 ${
                  index === 0
                    ? "button-1"
                    : index === 1
                    ? "button-2"
                    : "button-3"
                } ${
                  activeAnimation === index + 1 ? "ring-2 ring-blue-400" : ""
                }`}
              >
                {item.number}
              </button>
              <div
                className={`absolute left-1/2 transform -translate-x-1/2 mt-2 w-[30vw] h-96 border rounded-none shadow-lg opacity-0 invisible z-50 ${
                  index === 0
                    ? "dropdown-1"
                    : index === 1
                    ? "dropdown-2"
                    : "dropdown-3"
                }`}
                style={{
                  borderColor:
                    index === 0
                      ? "rgba(51, 51, 51, 0.5)"
                      : index === 1
                      ? "rgba(68, 68, 68, 0.5)"
                      : "rgba(85, 85, 85, 0.5)",
                }}
              >
                <div className="container mx-auto px-8 py-4 flex justify-center items-center">
                  <div
                    className={`flex flex-wrap gap-8 justify-center ${
                      index === 0
                        ? "flex-row"
                        : index === 1
                        ? "flex-col"
                        : "grid grid-cols-3"
                    }`}
                  >
                    {item.links.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.href}
                        className={`flex justify-center mx-auto py-3 text-white font-medium px-6 text-center transition-all duration-200 ${
                          index === 0
                            ? "hover:bg-white/10 rounded-full hover:tracking-wider"
                            : index === 1
                            ? "hover:bg-white/5 border-b border-transparent hover:border-white hover:scale-105"
                            : "hover:bg-white/5 rounded-md hover:translate-y-[-5px]"
                        }`}
                        style={{
                          animation:
                            index === 0
                              ? `fadeIn 0.5s ease-out ${idx * 0.1 + 0.2}s both`
                              : index === 1
                              ? `fadeScale 0.4s ease-out ${
                                  idx * 0.1 + 0.5
                                }s both`
                              : `slideInFromSide 0.4s ease-out ${
                                  idx * 0.08 + 0.2
                                }s both`,
                          opacity: 0,
                          transformOrigin: index === 1 ? "top" : "center",
                        }}
                      >
                        {/* {link.label} */}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-1">
          {/* Navigation */}
          <nav className="flex items-center space-x-6 text-lg text-black py-4 px-8 relative">
            {navItems.map((item) => (
              <div className="relative group" key={item.key}>
                <button className="flex items-center hover:text-blue-600 relative">
                  {item.label}
                  <span className="ml-1">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={`transition-transform duration-200 ${
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

                {/* 
                  MAIN DROPDOWN CONTAINER
                  - Changes class based on activeAnimation state (1, 2, or 3)
                  - Each animation type has different positioning and styling
                */}
                <div
                  className={`${
                    activeAnimation === 1
                      ? "absolute left-1/2 transform -translate-x-1/2 mt-2 w-auto min-w-[175px] h-42 rounded-lg overflow-hidden shadow-lg opacity-0 invisible z-60 group-hover:visible hover:visible text-center text-nowrap dropdown-1"
                      : activeAnimation === 2
                      ? "fixed left-1/2 transform -translate-x-1/2 mt-2 w-full  overflow-hidden shadow-lg opacity-0 invisible z-60 group-hover:visible hover:visible dropdown-2"
                      : "absolute left-1/2 transform -translate-x-1/2 mt-2 min-w-[200px] rounded-lg overflow-visible shadow-lg opacity-0 invisible z-60 group-hover:visible hover:visible dropdown-3"
                  }`}
                >
                  {activeAnimation === 1 ? (
                    /* === DROPDOWN 1 CONTENT === */
                    <div className="px-4 py-5">
                      <div className="flex flex-col justify-center gap-6">
                        {item.links.map((link, idx) => (
                          <a
                            key={idx}
                            href={link.href}
                            className="block py-2 px-3 text-black hover:text-blue-800  transition-all"
                            style={{
                              animation: `fadeIn 0.5s ease-out ${
                                idx * 0.1 + 0.2
                              }s both`,
                              opacity: 0,
                            }}
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  ) : activeAnimation === 2 ? (
                    /* === DROPDOWN 2 CONTENT (Limited width) === */
                    <div className="px-28 py-6 bg-transparent text-black">
                      <div className="py-3">
                        <h2 className="text-xl font-bold mb-2 text-center">
                          {item.label}
                        </h2>
                      </div>
                      <hr className="mb-4 border-gray-300" />
                      <div className="flex flex-col gap-3">
                        {/* Simple column with just the navItem's links */}
                        <div>
                          {item.links.map((link, idx) => (
                            <a
                              key={idx}
                              href={link.href}
                              className="block py-2 px-4 text-black hover:text-blue-800  hover:bg-opacity-20 rounded transition-all font-medium"
                              style={{
                                animation: `fadeIn 0.5s ease-out ${
                                  idx * 0.1 + 0.2
                                }s both`,
                              }}
                            >
                              {link.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* === DROPDOWN 3 CONTENT - Based on the Reference Image === */
                    <div className="relative pt-0 px-0 pb-0 bg-white rounded-lg shadow-md border border-gray-200">
                      {/* Custom triangle - perfectly aligned with dropdown */}
                      <div className="flex flex-col bg-white pt-1">
                        {item.links.map((link, idx) => (
                          <a
                            key={idx}
                            href={link.href}
                            className="block py-3 px-4 text-black font-medium text-md  hover:text-blue-800 transition-all text-center "
                            style={{
                              animation: `slideInFromSide 0.4s ease-out ${
                                idx * 0.08 + 0.2
                              }s both`,
                              opacity: 0,
                            }}
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </nav>

          {/* Right Side */}
          <div className="">
            <button
              className="w-36 h-[94px] flex text-xl items-center  justify-center text-white shadow"
              style={{
                background: "linear-gradient(90deg, #1867D1 0%, #000000 100%)",
              }}
            >
              採用情報
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
