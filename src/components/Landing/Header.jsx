import React, { useState } from "react";

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
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
        { label: "開発", href: "#" },
        { label: "デザイン", href: "#" },
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

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="flex items-center justify-between w-full bg-white shadow relative">
        {/* Logo */}
        <div className="font-bold text-2xl tracking-wide py-4 px-8">
          <a href="#" className="text-black">
            LOGO
          </a>
        </div>
        <div className="flex gap-1">
          {/* Navigation */}
          <nav className="flex items-center space-x-6 text-lg text-black py-4 px-8 relative">
            {navItems.map((item) => (
              <div className="relative" key={item.key}>
                <button
                  onClick={() => toggleDropdown(item.key)}
                  className="flex items-center hover:text-blue-600"
                >
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
                </button>

                {openDropdown === item.key && (
                  <div className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg">
                    {item.links.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Side */}
          <div className="h-16">
            <button
              className="w-40 h-full flex text-xl items-center justify-center text-white shadow"
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
