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
              className={`px-4 sm:px-6 lg:px-8 py-2 sm:py-4 lg:w-68 font-semibold text-xs sm:text-sm lg:text-base text-nowrap border border-[#5B5B5B]/40 rounded shadow-[6px_0px_2px_rgba(0,0,0,0.15)] cursor-pointer ${
                activeTab === index
                  ? "bg-white text-black"
                  : "bg-white text-black "
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
