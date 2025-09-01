import React from "react";

const Footer = ({footerBgColor}) => {
  const footerData = {
    about: {
      title: "会社について",
      links: ["会社概要", "会社沿革", "トップメッセージ", "経営陣紹介"],
    },
    services: {
      title: "サービス",
      links: ["リクルート", "MyTalent", "Mytrend", "RXO"],
    },
    news: {
      title: "ニュース",
      links: ["お知らせ", "プレスリリース", "メディア掲載"],
    },
    recruit: {
      title: "採用情報",
      links: ["採用サイト"],
    },
    support: {
      title: "採用情報",
      links: ["採用サイト"],
    },
    blog: {
      title: "ブログ",
      links: [],
    },
    contact: {
      title: "お問い合わせ",
      links: [],
    },
  };

  return (
    <footer className={`${footerBgColor} text-white`}>
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Logo */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold">LOGO</h2>
        </div>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 mb-5">
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
            <ul className="space-y-2">
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

          {/* ブログ */}
          <div>
            <h3 className="font-semibold mb-4">{footerData.blog.title}</h3>
          </div>

          {/* お問い合わせ */}
          <div>
            <h3 className="font-semibold mb-4">{footerData.contact.title}</h3>
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
