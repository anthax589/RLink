import React from "react";
import RLinkLogo from "../assets/img/RLinkFooterLogo.png";
const Footer = () => {
  const footerData = {
    about: {
      title: "会社について",
      links: ["会社概要", "会社沿革"],
    },
    services: {
      title: "サービス",
      links: [
        "人材紹介",
        "採用戦略アドバイザリー＆RPO",
        "HRプロダクト",
        "人材派遣・業務委託",
      ],
    },
    news: {
      title: "ニュース",
      links: ["お知らせ", "プレスリリース", "メディア掲載"],
    },
    recruit: {
      title: "ブログ",
      links: [],
    },
    support: {
      title: "お問い合わせ",
      links: [],
    },
  };

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto  py-12">
        {/* Logo */}
        <div className="mb-8 pl-27">
          <a href="/" className="text-white flex items-center ">
            <div className="flex items-center text-2xl font-bold">
              <img src={RLinkLogo} alt="R-Link Logo" className="h-16" />
              <span className="text-[#1867D1] pl-2">R</span>Link Partners
            </div>
          </a>
        </div>
        <div className="mb-8 pl-27 flex space-x-6">
          <a href="">
            <svg
              width="30"
              height="30"
              viewBox="0 0 41 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M36 0C37.1935 0 38.3381 0.477389 39.182 1.32715C40.0259 2.17691 40.5 3.32943 40.5 4.53117V36.2493C40.5 37.4511 40.0259 38.6036 39.182 39.4534C38.3381 40.3031 37.1935 40.7805 36 40.7805H4.5C3.30653 40.7805 2.16193 40.3031 1.31802 39.4534C0.474106 38.6036 0 37.4511 0 36.2493V4.53117C0 3.32943 0.474106 2.17691 1.31802 1.32715C2.16193 0.477389 3.30653 0 4.5 0H36ZM34.875 35.1165V23.109C34.875 21.1501 34.1022 19.2715 32.7266 17.8864C31.351 16.5013 29.4854 15.7231 27.54 15.7231C25.6275 15.7231 23.4 16.9013 22.32 18.6684V16.1536H16.0425V35.1165H22.32V23.9472C22.32 22.2027 23.715 20.7754 25.4475 20.7754C26.2829 20.7754 27.0841 21.1096 27.6749 21.7044C28.2656 22.2992 28.5975 23.106 28.5975 23.9472V35.1165H34.875ZM8.73 12.5966C9.73252 12.5966 10.694 12.1956 11.4029 11.4818C12.1118 10.768 12.51 9.79993 12.51 8.79046C12.51 6.68347 10.8225 4.96163 8.73 4.96163C7.72151 4.96163 6.75433 5.36502 6.04123 6.08307C5.32812 6.80111 4.9275 7.77499 4.9275 8.79046C4.9275 10.8975 6.6375 12.5966 8.73 12.5966ZM11.8575 35.1165V16.1536H5.625V35.1165H11.8575Z"
                fill="white"
              />
            </svg>
          </a>
          <a href="">
            <svg
              width="30"
              height="30"
              viewBox="0 0 41 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M28.1362 41.284V25.2968H33.4663L34.2637 19.067H28.1342V15.0893C28.1342 13.2852 28.6324 12.0549 31.2031 12.0549H34.479V6.48158C32.8926 6.30995 31.2979 6.22726 29.7024 6.23388C24.9792 6.23388 21.7464 9.13821 21.7464 14.47V19.067H16.4V25.2968H21.7444V41.284H2.2632C1.0127 41.284 0 40.2643 0 39.0051V2.27888C0 1.01971 1.0127 0 2.2632 0H38.7368C39.9873 0 41 1.01971 41 2.27888V39.0051C41 40.2643 39.9873 41.284 38.7368 41.284H28.1362Z"
                fill="white"
              />
            </svg>
          </a>
        </div>

        {/* Footer Links Grid */}
        <div className="flex justify-evenly md:grid-cols-4 lg:grid-cols-7   gap-8 mb-5">
          {/* 会社について */}
          <div>
            <h3 className="font-semibold mb-4">{footerData.about.title}</h3>
            <ul className="space-y-2">
              {footerData.about.links.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-sm text-blue-100 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* サービス */}
          <div>
            <h3 className="font-semibold mb-4">{footerData.services.title}</h3>
            <ul className="space-y-2 w-48 text-nowrap">
              {footerData.services.links.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-sm text-blue-100 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ニュース */}
          <div>
            <h3 className="font-semibold mb-4">{footerData.news.title}</h3>
            <ul className="space-y-2">
              {footerData.news.links.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-sm text-blue-100 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 採用情報 */}
          <div>
            <h3 className="font-semibold mb-4">{footerData.recruit.title}</h3>
            <ul className="space-y-2">
              {footerData.recruit.links.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-sm text-blue-100 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 採用情報 (Second column) */}
          <div>
            <h3 className="font-semibold mb-4">{footerData.support.title}</h3>
            <ul className="space-y-2">
              {footerData.support.links.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-sm text-blue-100 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="border-t border-white  w-full">
        <p className="text-center text-sm text-blue-100 py-10">
          Copyright © 2025 RLink All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
