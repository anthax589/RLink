import React from "react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function ServicesNav() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const tabs = [
    {
      name: "人材紹介事業",
      path: "/recruitment-business",
    },
    {
      name: "採用戦略アドバイザリー事業",
      path: "/recruitment-strategy",
    },
    {
      name: "HRプロダクト事業",
      path: "/hr-product-business",
    },
    {
      name: "人材派遣/契約・業務委託事業",
      path: "/staffing",
    },
  ];

  // Determine active tab based on current location
  const getActiveTab = () => {
    const currentPath = location.pathname;
    const activeIndex = tabs.findIndex((tab) => tab.path === currentPath);
    return activeIndex !== -1 ? activeIndex : 0;
  };

  const [activeTab, setActiveTab] = useState(getActiveTab());

  // Handle tab click with navigation
  const handleTabClick = (index) => {
    setActiveTab(index);
    navigate(tabs[index].path);
    setIsOpen(false); // Close menu after selection on mobile
  };

  return (
    <>
      <div className="relative -top-4 md:-top-6 lg:-top-7 w-full flex justify-center z-20 px-4 md:px-6 lg:px-8">
        {/* Mobile: Floating Toggle Button */}
        <div className="lg:hidden w-full max-w-md">
          {/* Active Tab Button - Always Visible */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full px-4 py-3 font-semibold text-xs sm:text-sm border border-[#1867D1]/80 rounded shadow-lg bg-white text-black flex items-center justify-between"
          >
            <span>{tabs[activeTab].name}</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
            >
              <path
                d="M14 4.66669L8 10.6667L2 4.66669"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Dropdown Menu - Toggleable */}
          {isOpen && (
            <div className="absolute left-4 right-4 mt-2 bg-white border border-[#5B5B5B]/40 rounded shadow-xl overflow-hidden z-30 max-w-md mx-auto">
              <div className="flex flex-col">
                {tabs.map((tab, index) => (
                  <button
                    key={index}
                    onClick={() => handleTabClick(index)}
                    className={`w-full px-4 py-3 font-semibold text-xs sm:text-sm text-left border-b border-[#5B5B5B]/20 last:border-b-0 cursor-pointer transition-all duration-200 ${
                      activeTab === index
                        ? "bg-[#1867D1]/10 text-[#1867D1]"
                        : "bg-white text-black hover:bg-gray-50 hover:text-[#1867D1]"
                    }`}
                  >
                    {tab.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Desktop: Horizontal Tabs */}
        <div className="hidden lg:flex justify-center items-end gap-8">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => handleTabClick(index)}
              className={`px-4 sm:px-6 lg:px-8 py-2 sm:py-4 lg:w-68 font-semibold text-xs sm:text-sm lg:text-base text-nowrap border border-[#5B5B5B]/40 rounded shadow-[6px_0px_2px_rgba(0,0,0,0.15)] cursor-pointer transition-all duration-300 ease-out hover:shadow-[8px_2px_8px_rgba(0,0,0,0.25)] hover:-translate-y-1 hover:scale-105 hover:border-[#1867D1]/60 hover:bg-gradient-to-r hover:from-white hover:to-gray-50 ${
                activeTab === index
                  ? "bg-white text-black shadow-[8px_2px_8px_rgba(0,0,0,0.25)] border-[#1867D1]/80"
                  : "bg-white text-black hover:text-[#1867D1]"
              }`}
              style={{
                marginLeft: index > 0 ? "-1px" : "0",
                position: "relative",
              }}
            >
              {tab.name}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default ServicesNav;
