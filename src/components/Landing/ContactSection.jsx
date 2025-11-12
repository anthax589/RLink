import React from "react";
import { useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function ContactSection() {
  const [currentView, setCurrentView] = useState("default");
  const [hasAnimated, setHasAnimated] = useState(false);

  const [formData, setFormData] = useState({
    inquiryType: "",
    name: "",
    phoneNumber: "",
    email: "",
    position: "",
    companyName: "",
    file: null,
    inquiryDetails: "",
    agreeToPrivacy: false,
  });

  useEffect(() => {
    if (!hasAnimated) {
      Aos.init({
        duration: 1500,
        once: true,
        mirror: false,
        anchorPlacement: "top-bottom",
        disable: "phone",
        startEvent: "DOMContentLoaded",
        throttleDelay: 99,
        debounceDelay: 50,
      });

      setTimeout(() => {
        setHasAnimated(true);
      }, 2000);
    }
  }, [hasAnimated]);

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? checked : type === "file" ? files[0] : value,
    }));
  };

  const handleInquiryTypeSelect = (type) => {
    setFormData((prev) => ({
      ...prev,
      inquiryType: type,
    }));

    if (type === "サービスについて(個人)") {
      setCurrentView("aboutServices");
    } else {
      setCurrentView("default");
    }
  };

  const handleSubmit = () => {
    if (
      !formData.inquiryType ||
      !formData.name ||
      !formData.phoneNumber ||
      !formData.email ||
      !formData.agreeToPrivacy
    ) {
      alert("必須項目をすべて入力し、プライバシーポリシーに同意してください。");
      return;
    }

    console.log("Form submitted:", formData);
    alert(
      "お問い合わせありがとうございます！担当者より折り返しご連絡いたします。"
    );

    setFormData({
      inquiryType: "",
      name: "",
      phoneNumber: "",
      email: "",
      position: "",
      companyName: "",
      file: null,
      inquiryDetails: "",
      agreeToPrivacy: false,
    });
  };

  return (
    <div
      className="min-h-screen bg-transparent py-12 md:py-16 lg:py-20 px-4"
      id="contact"
      style={{ scrollMarginTop: "400px" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-0 items-start justify-center">
          {/* Left Side - Contact Information */}
          <div
            className="p-4 md:p-6 lg:py-9 lg:px-0"
            {...(!hasAnimated && {
              "data-aos": "fade-up",
              "data-aos-offset": "100",
              "data-aos-delay": "50",
              "data-aos-once": "true",
            })}
          >
            {/* Title and Description */}
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-6 md:mb-8">
              CONTACT US
            </h1>

            <p className="text-black text-base md:text-lg 2xl:text-xl leading-relaxed mb-8 md:mb-12">
              We'd love to hear from you. Whether you're a company seeking top
              executive talent or a professional exploring new career
              opportunities, RLink Partners is here to guide your next step.
            </p>

            {/* Contact Details */}
            <div className="space-y-6 md:space-y-8 text-lg md:text-xl">
              {/* Head Office */}
              <div className="flex flex-col items-start space-x-4">
                <div className="flex gap-2">
                  <div className="w-6 h-6 text-red-500 mt-1">📍</div>
                  <h3 className="text-xl md:text-2xl text-black mb-2">
                    Head Office
                  </h3>
                </div>
                <div>
                  <p className="text-black text-sm md:text-base">
                    本社所在地: 東京都港区白金5-5-9
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Conditional Form Content */}
          {currentView === "default" ? (
            // Default Contact Form
            <div
              className="bg-[#7F7F7F] p-6 md:p-8 lg:p-7 rounded"
              {...(!hasAnimated && {
                "data-aos": "fade-up",
                "data-aos-offset": "100",
                "data-aos-delay": "50",
              })}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Get in Touch
              </h2>
              <p className="text-gray-200 mb-6 md:mb-8 text-xs md:text-sm">
                Fill out our inquiry form on our website, and one of our
                consultants will get back to you shortly.
              </p>
              <div className="space-y-4 md:space-y-6">
                {/* Inquiry Type Selection Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 text-nowrap justify-center">
                  <button
                    onClick={() =>
                      handleInquiryTypeSelect("サービスについて(法人)")
                    }
                    className={`w-full py-2 text-xs md:text-sm rounded transition-colors ${
                      formData.inquiryType === "サービスについて(法人)"
                        ? "bg-white text-black"
                        : "bg-transparent text-white border border-white hover:bg-white hover:text-black"
                    }`}
                  >
                    ● サービスについて(法人)
                  </button>
                  <button
                    onClick={() =>
                      handleInquiryTypeSelect("サービスについて(個人)")
                    }
                    className={`w-full py-2 text-xs md:text-sm rounded transition-colors ${
                      formData.inquiryType === "サービスについて(個人)"
                        ? "bg-white text-black"
                        : "bg-transparent text-white border border-white hover:bg-white hover:text-black"
                    }`}
                  >
                    ● サービスについて(個人)
                  </button>
                </div>

                {/* Name Field */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <label className="text-white text-xs md:text-sm sm:min-w-[120px] flex-shrink-0">
                    お名前*
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="flex-1 px-4 py-2 text-sm md:text-base text-black bg-white outline-none rounded"
                  />
                </div>

                {/* Phone Number Field */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <label className="text-white text-xs md:text-sm sm:min-w-[120px] flex-shrink-0">
                    電話番号*
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="flex-1 px-4 py-2 text-sm md:text-base text-black bg-white outline-none rounded"
                  />
                </div>

                {/* Email Field */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <label className="text-white text-xs md:text-sm sm:min-w-[120px] flex-shrink-0">
                    メールアドレス*
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="flex-1 px-4 py-2 text-sm md:text-base text-black bg-white outline-none rounded"
                  />
                </div>

                {/* Position Field */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <label className="text-white text-xs md:text-sm sm:min-w-[120px] flex-shrink-0">
                    役職*
                  </label>
                  <input
                    type="text"
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    className="flex-1 px-4 py-2 text-sm md:text-base text-black bg-white outline-none rounded"
                  />
                </div>

                {/* Company Name Field */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <label className="text-white text-xs md:text-sm sm:min-w-[120px] flex-shrink-0">
                    企業名*
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className="flex-1 px-4 py-2 text-sm md:text-base text-black bg-white outline-none rounded"
                  />
                </div>

                {/* File Upload */}
                <div className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <label className="text-white text-xs md:text-sm sm:min-w-[120px] flex-shrink-0">
                      添付ファイル
                    </label>
                    <div className="flex flex-1 gap-2">
                      <label className="px-3 md:px-5 py-2 bg-white text-black text-xs md:text-sm cursor-pointer hover:bg-gray-100 rounded flex-shrink-0">
                        Choose File
                        <input
                          type="file"
                          name="file"
                          onChange={handleInputChange}
                          className="hidden rounded"
                        />
                      </label>
                      <div className="flex-1 px-4 py-2 bg-[#3a3a3a] text-gray-300 text-xs md:text-sm flex items-center rounded border border-white min-w-0">
                        <span className="truncate">
                          {formData.file ? formData.file.name : "Sample.docx"}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="hidden sm:block sm:min-w-[120px] flex-shrink-0"></div>
                    <p className="text-[8px] md:text-[9px] text-gray-300 leading-relaxed sm:ml-4">
                      *添付ファイルがある場合、添加してください。
                      <br />
                      *許容されるファイル形式：
                      <br />
                      *PDF・Word・Excel・PowerPoint、画像ファイルは10MBまで対応しております。
                    </p>
                  </div>
                </div>

                {/* Inquiry Details Textarea */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                  <label className="text-white text-xs md:text-sm sm:min-w-[120px] flex-shrink-0 sm:pt-2">
                    お問い合わせ内容
                  </label>
                  <textarea
                    name="inquiryDetails"
                    value={formData.inquiryDetails}
                    onChange={handleInputChange}
                    rows={2}
                    className="flex-1 px-4 py-3 text-sm md:text-base text-black bg-white outline-none resize-none rounded"
                  />
                </div>

                {/* Privacy Policy Box */}
                <div className="border border-white px-4 md:px-10 py-2 rounded">
                  <h3 className="text-white font-bold text-xs md:text-sm mb-3">
                    個人情報の取扱いについて
                  </h3>
                  <p className="text-[10px] md:text-xs text-gray-200 leading-relaxed">
                    ご記入いただいた個人情報は、お問い合わせへの対応のみに使用します。お問い合わせへの対応、お送りいただいた資料の確認を行います。
                    <br />
                    当社は保有する個人情報を適切に管理し、いかなる第三者にも提供いたしません。
                    <br />
                    ※詳細については「プライバシーポリシー」をご確認ください。
                  </p>
                </div>
                <div className="flex justify-center mt-2">
                  <label className="flex items-start gap-2 text-white cursor-pointer">
                    <input
                      type="checkbox"
                      name="agreeToPrivacy"
                      checked={formData.agreeToPrivacy}
                      onChange={handleInputChange}
                      className="w-4 h-4 mt-0.5"
                    />
                    <span className="text-[10px] md:text-xs">
                      個人情報の取扱方針について同意する*
                    </span>
                  </label>
                </div>
                {/* Submit Button */}
                <div className="flex justify-center pt-4">
                  <button
                    onClick={handleSubmit}
                    className="btn border-none w-40 md:w-48 bg-white text-black font-bold py-2 px-6 hover:bg-gray-100 transition-colors text-sm md:text-base"
                  >
                    SEND
                  </button>
                </div>
              </div>
            </div>
          ) : (
            // AboutOurServices Form
            <div className="bg-[#7F7F7F] p-6 md:p-8 lg:p-7 rounded">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Get in Touch
              </h2>
              <p className="text-gray-200 mb-6 md:mb-8 text-xs md:text-sm">
                Fill out our inquiry form on our website, and one of our
                consultants will get back to you shortly.
              </p>
              <div className="space-y-4 md:space-y-6">
                {/* Inquiry Type Selection Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 text-nowrap">
                  <button
                    onClick={() =>
                      handleInquiryTypeSelect("サービスについて(法人)")
                    }
                    className={`w-full py-2 text-xs md:text-sm rounded transition-colors ${
                      formData.inquiryType === "サービスについて(法人)"
                        ? "bg-white text-black"
                        : "bg-transparent text-white border border-white hover:bg-white hover:text-black"
                    }`}
                  >
                    ● サービスについて(法人)
                  </button>
                  <button
                    onClick={() =>
                      handleInquiryTypeSelect("サービスについて(個人)")
                    }
                    className={`w-full py-2 text-xs md:text-sm rounded transition-colors ${
                      formData.inquiryType === "サービスについて(個人)"
                        ? "bg-white text-black"
                        : "bg-transparent text-white border border-white hover:bg-white hover:text-black"
                    }`}
                  >
                    ● サービスについて(個人)
                  </button>
                </div>

                {/* Name Field */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <label className="text-white text-xs md:text-sm sm:min-w-[120px] flex-shrink-0">
                    お名前*
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="flex-1 px-4 py-2 text-sm md:text-base text-black bg-white outline-none rounded"
                  />
                </div>

                {/* Phone Number Field */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <label className="text-white text-xs md:text-sm sm:min-w-[120px] flex-shrink-0">
                    電話番号*
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="flex-1 px-4 py-2 text-sm md:text-base text-black bg-white outline-none rounded"
                  />
                </div>

                {/* Email Field */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <label className="text-white text-xs md:text-sm sm:min-w-[120px] flex-shrink-0">
                    メールアドレス*
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="flex-1 px-4 py-2 text-sm md:text-base text-black bg-white outline-none rounded"
                  />
                </div>

                {/* File Upload */}
                <div className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <label className="text-white text-xs md:text-sm sm:min-w-[120px] flex-shrink-0">
                      添付ファイル
                    </label>
                    <div className="flex flex-1 gap-2">
                      <label className="px-3 md:px-5 py-2 bg-white text-black text-xs md:text-sm cursor-pointer hover:bg-gray-100 rounded flex-shrink-0">
                        Choose File
                        <input
                          type="file"
                          name="file"
                          onChange={handleInputChange}
                          className="hidden rounded"
                        />
                      </label>
                      <div className="flex-1 px-4 py-2 bg-[#3a3a3a] text-gray-300 text-xs md:text-sm flex items-center rounded border border-white min-w-0">
                        <span className="truncate">
                          {formData.file ? formData.file.name : "Sample.docx"}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="hidden sm:block sm:min-w-[120px] flex-shrink-0"></div>
                    <p className="text-[8px] md:text-[9px] text-gray-300 leading-relaxed sm:ml-4">
                      *添付ファイルがある場合、添加してください。
                      <br />
                      *許容されるファイル形式：
                      <br />
                      *PDF・Word・Excel・PowerPoint、画像ファイルは10MBまで対応しております。
                    </p>
                  </div>
                </div>

                {/* Inquiry Details Textarea */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                  <label className="text-white text-xs md:text-sm sm:min-w-[120px] flex-shrink-0 sm:pt-2">
                    お問い合わせ内容
                  </label>
                  <textarea
                    name="inquiryDetails"
                    value={formData.inquiryDetails}
                    onChange={handleInputChange}
                    rows={2}
                    className="flex-1 px-4 py-3 text-sm md:text-base text-black bg-white outline-none resize-none rounded"
                  />
                </div>

                {/* Privacy Policy Box */}
                <div className="border border-white px-4 md:px-10 py-2 rounded">
                  <h3 className="text-white font-bold text-xs md:text-sm mb-3">
                    個人情報の取扱いについて
                  </h3>
                  <p className="text-[10px] md:text-xs text-gray-200 leading-relaxed">
                    ご記入いただいた個人情報は、お問い合わせへの対応のみに使用します。お問い合わせへの対応、お送りいただいた資料の確認を行います。
                    <br />
                    当社は保有する個人情報を適切に管理し、いかなる第三者にも提供いたしません。
                    <br />
                    ※詳細については「プライバシーポリシー」をご確認ください。
                  </p>
                </div>
                <div className="flex justify-center mt-2">
                  <label className="flex items-start gap-2 text-white cursor-pointer">
                    <input
                      type="checkbox"
                      name="agreeToPrivacy"
                      checked={formData.agreeToPrivacy}
                      onChange={handleInputChange}
                      className="w-4 h-4 mt-0.5"
                    />
                    <span className="text-[10px] md:text-xs">
                      個人情報の取扱方針について同意する*
                    </span>
                  </label>
                </div>
                {/* Submit Button */}
                <div className="flex justify-center pt-4">
                  <button
                    onClick={handleSubmit}
                    className="btn border-none w-40 md:w-48 bg-white text-black font-bold py-2 px-6 hover:bg-gray-100 transition-colors text-sm md:text-base"
                  >
                    SEND
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
