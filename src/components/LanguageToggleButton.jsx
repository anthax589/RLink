import React, { useState, useRef, useEffect } from "react";
import i18n from "../i18n";

const LanguageToggleButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState(i18n.language || "ja");
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleLanguageChange = (lng) => {
      setCurrent(lng);
    };
    i18n.on("languageChanged", handleLanguageChange);
    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
    setCurrent(lng);
    setIsOpen(false);
  };

  const languages = [
    { code: "ja", label: "日本語", flag: "🇯🇵" },
    { code: "en", label: "English", flag: "🇺🇸" },
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-14 h-14 bg-[#2C2C2C] rounded-lg hover:bg-[#3C3C3C] transition-colors duration-200"
        aria-label="Select language"
      >
        <svg
          width="23"
          height="23"
          viewBox="0 0 23 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.5 0C5.175 0 0 5.175 0 11.5C0 17.825 5.175 23 11.5 23C17.825 23 23 17.825 23 11.5C23 5.175 17.825 0 11.5 0ZM18.975 7.61875C19.55 7.61875 19.9812 8.05 20.5562 8.05C20.125 8.625 18.2563 8.625 17.6812 7.90625C18.1125 7.7625 18.4 7.61875 18.975 7.61875ZM1.4375 11.5C1.4375 10.925 1.4375 10.35 1.58125 9.63125C1.725 9.63125 1.86875 9.775 2.0125 9.775C2.0125 9.775 2.15625 9.91875 2.15625 10.0625C2.15625 10.4937 2.5875 10.7812 2.875 10.7812C4.025 10.925 4.45625 11.9312 5.4625 12.2188C5.75 12.3625 5.60625 12.65 5.4625 12.9375C4.6 14.0875 5.31875 14.95 6.0375 15.6687C6.75625 16.2437 6.75625 16.8188 6.9 17.6812C6.9 18.6875 7.04375 19.8375 7.475 20.8438C3.88125 19.1187 1.4375 15.6688 1.4375 11.5ZM11.5 21.5625C10.4937 21.5625 9.34375 21.4188 8.48125 21.1313C8.3375 20.8438 8.3375 20.5563 8.48125 20.2688C9.05625 19.1188 9.63125 18.1125 10.35 17.1062C10.6375 16.8187 10.925 16.5312 10.925 16.1C10.925 15.8125 11.0688 15.3813 11.2125 15.0938C11.6438 14.375 11.5 13.9438 10.925 13.8C9.775 13.5125 9.2 12.5062 8.3375 12.075C7.475 11.6438 6.6125 11.3562 5.89375 11.7875C5.60625 11.9312 5.175 12.075 5.175 11.6438C5.175 11.0688 4.45625 10.6375 4.6 10.0625C4.45625 10.0625 4.3125 10.0625 4.16875 10.2063C4.025 10.35 3.88125 10.4937 3.59375 10.35C3.30625 10.0625 3.45 9.775 3.45 9.4875C3.59375 9.2 3.7375 9.05625 4.025 8.9125C4.6 8.76875 5.175 8.76875 5.4625 9.4875C5.89375 8.19375 6.75625 7.475 7.61875 6.9C7.61875 6.9 8.76875 5.89375 8.9125 5.89375C9.05625 5.89375 9.2 6.18125 9.4875 6.325C9.775 6.325 9.91875 6.325 9.91875 6.0375C10.0625 5.31875 9.63125 4.45625 9.05625 4.3125C9.05625 4.16875 9.2 4.16875 9.2 4.16875C9.63125 4.025 10.2063 3.7375 10.0625 3.30625C10.0625 2.73125 9.4875 2.44375 8.9125 2.44375C8.625 2.44375 8.3375 2.44375 8.05 2.5875C7.475 2.875 6.75625 3.1625 5.89375 3.1625C7.475 2.0125 9.4875 1.4375 11.5 1.4375H12.65C11.7875 1.58125 10.925 1.86875 10.35 2.15625C11.2125 2.3 11.3562 2.73125 11.0687 3.45C10.925 3.7375 11.0687 4.025 11.3562 4.16875C11.6438 4.3125 11.9312 4.3125 12.075 4.025C12.3625 3.59375 12.9375 3.45 13.3688 3.30625C13.9438 3.1625 14.375 2.875 14.8063 2.3C14.8063 2.15625 14.95 2.15625 15.0938 2.0125C15.9563 2.3 16.8188 2.875 17.6812 3.45C17.5375 3.45 17.5375 3.59375 17.3938 3.59375C17.1063 3.88125 16.675 4.025 17.1062 4.6C17.25 4.8875 17.1062 5.03125 16.9625 5.175C16.675 5.31875 16.5312 5.175 16.3875 5.03125C16.2437 4.8875 16.2437 4.6 15.8125 4.6C15.6687 4.8875 15.2375 5.03125 15.2375 5.4625C15.9563 5.4625 15.8125 6.0375 15.9563 6.46875C15.0938 6.6125 14.8063 7.04375 15.2375 7.7625C15.3813 8.05 15.0938 8.19375 14.95 8.3375C14.375 9.2 13.8 9.775 13.8 10.7812C13.8 11.7875 14.5188 12.7938 15.6687 12.65C16.9625 12.5063 16.9625 12.5063 17.3938 13.6562C17.3938 13.8 17.5375 13.9438 17.5375 14.0875C17.6812 14.375 17.825 14.6625 17.6812 14.95C17.25 16.1 17.825 16.9625 18.2563 17.825C18.4 18.1125 18.5438 18.2563 18.6875 18.4C16.8188 20.4125 14.375 21.5625 11.5 21.5625Z"
            fill="white"
          />
        </svg>
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-100 transition-colors ${
                current === lang.code
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-700"
              }`}
            >
              <span className="text-xl">{lang.flag}</span>
              <span className="font-medium">{lang.label}</span>
              {current === lang.code && (
                <svg
                  className="ml-auto w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageToggleButton;
