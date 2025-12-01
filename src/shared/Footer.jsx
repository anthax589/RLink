import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import RLinkLogo from "../assets/img/RLinkFooterLogo.png";
import { useTranslations } from "../hooks/useTranslations";

const Footer = () => {
  const { t } = useTranslations();
  const location = useLocation();
  const navigate = useNavigate();
  const isLandingPage = location.pathname === "/";

  const handleContactClick = (e) => {
    e.preventDefault();

    if (isLandingPage) {
      const contactSection = document.getElementById("contact");

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
      }
    } else {
      navigate("/", { state: { scrollToContact: true } });
    }
  };
  const footerData = {
    about: {
      title: t("footer_about"),
      links: [
        { label: t("footer_company_profile"), path: "/company-profile" },
        { label: t("footer_company_history"), path: "/company-mission" },
      ],
    },
    services: {
      title: t("footer_services"),
      links: [
        { label: t("footer_recruitment"), path: "/recruitment-business" },
        {
          label: t("footer_recruitment_strategy"),
          path: "/recruitment-strategy",
        },
        { label: t("footer_hr_product"), path: "/hr-product-business" },
        { label: t("footer_staffing"), path: "/staffing" },
      ],
    },
    news: {
      title: t("footer_news"),
      links: [
        { label: t("footer_announcements"), path: "/news" },
        { label: t("footer_press_release"), path: "/press-release" },
        { label: t("footer_media"), path: "/media" },
      ],
    },
    recruit: {
      title: t("footer_blog"),
      links: [{ label: t("footer_blog"), path: "/blog" }],
    },
    support: {
      title: t("footer_contact"),
      links: [{ label: t("footer_contact"), path: "/contact" }],
    },
  };

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto py-8 md:py-10 lg:py-12 px-4 md:px-6 lg:px-8">
        {/* Logo */}
        <div className="mb-6 md:mb-8 lg:pl-48 justify-center lg:justify-start flex">
          <a href="/" className="text-white flex items-center">
            <div className="flex items-center text-xl md:text-2xl font-bold">
              <img
                src={RLinkLogo}
                alt="R-Link Logo"
                className="h-12 md:h-14 lg:h-16"
              />
              <span className="text-[#1867D1] pl-2">R</span>Link Partners
            </div>
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="mb-6 md:mb-8 lg:pl-48  justify-center lg:justify-start flex space-x-4 md:space-x-6">
          <a
            href="https://www.linkedin.com/company/rlink-partners"
            aria-label="LinkedIn"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 41 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 md:w-7 md:h-7 lg:w-[30px] lg:h-[30px]"
            >
              <path
                d="M36 0C37.1935 0 38.3381 0.477389 39.182 1.32715C40.0259 2.17691 40.5 3.32943 40.5 4.53117V36.2493C40.5 37.4511 40.0259 38.6036 39.182 39.4534C38.3381 40.3031 37.1935 40.7805 36 40.7805H4.5C3.30653 40.7805 2.16193 40.3031 1.31802 39.4534C0.474106 38.6036 0 37.4511 0 36.2493V4.53117C0 3.32943 0.474106 2.17691 1.31802 1.32715C2.16193 0.477389 3.30653 0 4.5 0H36ZM34.875 35.1165V23.109C34.875 21.1501 34.1022 19.2715 32.7266 17.8864C31.351 16.5013 29.4854 15.7231 27.54 15.7231C25.6275 15.7231 23.4 16.9013 22.32 18.6684V16.1536H16.0425V35.1165H22.32V23.9472C22.32 22.2027 23.715 20.7754 25.4475 20.7754C26.2829 20.7754 27.0841 21.1096 27.6749 21.7044C28.2656 22.2992 28.5975 23.106 28.5975 23.9472V35.1165H34.875ZM8.73 12.5966C9.73252 12.5966 10.694 12.1956 11.4029 11.4818C12.1118 10.768 12.51 9.79993 12.51 8.79046C12.51 6.68347 10.8225 4.96163 8.73 4.96163C7.72151 4.96163 6.75433 5.36502 6.04123 6.08307C5.32812 6.80111 4.9275 7.77499 4.9275 8.79046C4.9275 10.8975 6.6375 12.5966 8.73 12.5966ZM11.8575 35.1165V16.1536H5.625V35.1165H11.8575Z"
                fill="white"
              />
            </svg>
          </a>
        </div>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:flex lg:justify-evenly gap-6 md:gap-8 mb-5">
          {/* 会社について */}
          <div className="text-center lg:text-left">
            <h3 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">
              {footerData.about.title}
            </h3>
            <ul className="space-y-2">
              {footerData.about.links.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-xs md:text-sm text-blue-100 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* サービス */}
          <div className="text-center lg:text-left">
            <h3 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">
              {footerData.services.title}
            </h3>
            <ul className="space-y-2 lg:w-48 lg:text-nowrap">
              {footerData.services.links.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-xs md:text-sm text-blue-100 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* お問い合わせ */}
          <div className="text-center lg:text-left">
            <h3 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">
              {footerData.support.title}
            </h3>
            <ul className="space-y-2">
              {footerData.support.links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.path}
                    onClick={handleContactClick}
                    className="text-xs md:text-sm text-blue-100 hover:text-white transition-colors cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white w-full">
        <p className="text-center text-xs md:text-sm text-blue-100 py-6 md:py-8 lg:py-10 px-4">
          Copyright © 2021 RLink All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
