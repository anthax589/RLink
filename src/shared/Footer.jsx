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
    <footer className='bg-black text-white'>
      <div className="max-w-7xl mx-auto  py-12">
        {/* Logo */}
        <div className="mb-8 pl-14">
          <a href="/" className="text-white flex items-center ">
            <div className="flex items-center text-2xl font-bold">
              <img src={RLinkLogo} alt="R-Link Logo" className="h-10" />
              <span className="text-[#1867D1] pl-3">R</span>Link Partners
            </div>
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
