import React from "react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function ServicesNav() {
  const navigate = useNavigate();
  const location = useLocation();

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
    return activeIndex !== -1 ? activeIndex : 0; // Default to first tab if no match
  };

  const [activeTab, setActiveTab] = useState(getActiveTab());

  // Handle tab click with navigation
  const handleTabClick = (index) => {
    setActiveTab(index);
    navigate(tabs[index].path);
  };

  return (
    <>
      <div className="relative -top-7 w-full flex justify-center z-20">
        <div className="flex justify-center items-end gap-8">
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
