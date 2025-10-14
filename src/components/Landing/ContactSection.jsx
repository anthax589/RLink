import React from "react";
import { useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function ContactSection() {
  const [currentView, setCurrentView] = useState("default"); // Track which form to show

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
    Aos.init({ duration: 1500 });
  }, []);
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

    // Switch to AboutOurServices view when clicking サービスについて(個人)
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
    <div className="min-h-screen bg-white py-20 px-4" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2  items-start justify-center">
          {/* Left Side - Contact Information */}
          <div
            className="p-8 lg:py-9 lg:px-0"
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="50"
            data-aos-once="true"
          >
            {/* Title and Description */}
            <h1 className="text-4xl font-bold text-black mb-8">CONTACT US</h1>

            <p className="text-black text-lg 2xl:text-xl leading-relaxed mb-12">
              We’d love to hear from you. Whether you’re a <br /> company
              seeking top executive talent or a <br /> professional exploring
              new career opportunities, <br />
              RLink Partners is here to guide your next step.
            </p>

            {/* Contact Details */}
            <div className="space-y-8 text-xl">
              {/* Head Office */}
              <div className="flex flex-col items-start space-x-4">
                <div className="flex gap-2">
                  <div className="w-6 h-6 text-red-500 mt-1">📍</div>
                  <h3 className="text-2xl  text-black mb-2">Head Office</h3>
                </div>
                <div>
                  <p className="text-black">本社所在地: 東京都港区白金5-5-9</p>
                </div>
              </div>
              {/* Email */}
              <div className="flex flex-col items-start space-x-4">
                <div className="flex gap-2">
                  <div className="w-6 h-6 text-blue-500">📧</div>
                  <h3 className="text-2xl font-semibold text-black mb-2">
                    Email
                  </h3>
                </div>
                <p className="text-black text-xl">
                  mfujisawa@rlinkpartners.com <br />
                  cmella@rlinkpartners.com <br />
                  ykojima@rlinkpartners.com
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Conditional Form Content */}
          {currentView === "default" ? (
            // Default Contact Form
            <div
              className="bg-[#7F7F7F] p-8 lg:p-7 lg:w-fit lg:relative right-8"
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-delay="50"
              data-aos-once="true"
            >
              <h2 className="text-3xl font-bold text-white mb-3">
                Get in Touch
              </h2>
              <p className="text-gray-200 mb-8 text-sm">
                Fill out our inquiry form on our website, and one of our
                consultants will get back to you shortly.
              </p>
              <div className="space-y-6">
                {/* Inquiry Type Selection Buttons */}
                <div className="flex gap-3 text-nowrap">
                  <button
                    onClick={() =>
                      handleInquiryTypeSelect("サービスについて(法人)")
                    }
                    className={`px-4 py-2 text-sm rounded transition-colors ${
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
                    className={`px-4 py-2 text-sm rounded transition-colors ${
                      formData.inquiryType === "サービスについて(個人)"
                        ? "bg-white text-black"
                        : "bg-transparent text-white border border-white hover:bg-white hover:text-black"
                    }`}
                  >
                    ● サービスについて(個人)
                  </button>
                  <button
                    onClick={() =>
                      handleInquiryTypeSelect("サービスについて(法人)2")
                    }
                    className={`px-4 py-2 text-sm rounded transition-colors ${
                      formData.inquiryType === "サービスについて(法人)2"
                        ? "bg-white text-black"
                        : "bg-transparent text-white border border-white hover:bg-white hover:text-black"
                    }`}
                  >
                    ● サービスについて(法人)
                  </button>
                </div>

                {/* Name Field */}
                <div className="flex items-center gap-4">
                  <label className="text-white text-sm min-w-[120px] flex-shrink-0">
                    お名前*
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="flex-1 px-4 py-2 text-black bg-white outline-none rounded"
                  />
                </div>

                {/* Phone Number Field */}
                <div className="flex items-center gap-4">
                  <label className="text-white text-sm min-w-[120px] flex-shrink-0">
                    電話番号*
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="flex-1 px-4 py-2 text-black bg-white outline-none rounded"
                  />
                </div>

                {/* Email Field */}
                <div className="flex items-center gap-4">
                  <label className="text-white text-sm min-w-[120px] flex-shrink-0">
                    メールアドレス*
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="flex-1 px-4 py-2 text-black bg-white outline-none rounded"
                  />
                </div>

                {/* Position Field */}
                <div className="flex items-center gap-4">
                  <label className="text-white text-sm min-w-[120px] flex-shrink-0">
                    役職*
                  </label>
                  <input
                    type="text"
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    className="flex-1 px-4 py-2 text-black bg-white outline-none rounded"
                  />
                </div>

                {/* Company Name Field */}
                <div className="flex items-center gap-4">
                  <label className="text-white text-sm min-w-[120px] flex-shrink-0">
                    企業名*
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className="flex-1 px-4 py-2 text-black bg-white outline-none rounded"
                  />
                </div>

                {/* File Upload */}
                <div className="space-y-2">
                  <div className="flex items-center gap-4">
                    <label className="text-white text-sm min-w-[120px] flex-shrink-0">
                      添付ファイル
                    </label>
                    <div className="flex flex-1 gap-2">
                      <label className="px-5 py-2 bg-white text-black text-sm cursor-pointer hover:bg-gray-100 rounded flex-shrink-0">
                        Choose File
                        <input
                          type="file"
                          name="file"
                          onChange={handleInputChange}
                          className="hidden rounded"
                        />
                      </label>
                      <div className="flex-1 px-4 py-2 bg-[#3a3a3a] text-gray-300 text-sm flex items-center rounded border border-white min-w-0">
                        <span className="truncate">
                          {formData.file ? formData.file.name : "Sample.docx"}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="min-w-[120px] flex-shrink-0"></div>
                    <p className="text-[9px] text-gray-300 leading-relaxed ml-4">
                      *添付ファイルがある場合、添加してください。
                      <br />
                      *許容されるファイル形式：
                      <br />
                      *PDF・Word・Excel・PowerPoint、画像ファイルは10MBまで対応しております。
                    </p>
                  </div>
                </div>

                {/* Inquiry Details Textarea */}
                <div className="flex gap-4">
                  <label className="text-white text-sm min-w-[120px] flex-shrink-0 pt-2">
                    お問い合わせ内容
                  </label>
                  <textarea
                    name="inquiryDetails"
                    value={formData.inquiryDetails}
                    onChange={handleInputChange}
                    rows={2}
                    className="flex-1 px-4 py-3 text-black bg-white outline-none resize-none rounded"
                  />
                </div>

                {/* Privacy Policy Box */}
                <div className="border border-white px-10 py-2 rounded">
                  <h3 className="text-white font-bold text-sm mb-3">
                    個人情報の取扱いについて
                  </h3>
                  <p className="text-xs text-gray-200 leading-relaxed ">
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
                    <span className="text-xs">
                      個人情報の取扱方針について同意する*
                    </span>
                  </label>
                </div>
                {/* Submit Button */}
                <div className="flex justify-center pt-4">
                  <button
                    onClick={handleSubmit}
                    className="btn border-none w-48 bg-white text-black font-bold py-2 px-6 hover:bg-gray-100 transition-colors"
                  >
                    SEND
                  </button>
                </div>
              </div>
            </div>
          ) : (
            // AboutOurServices Form - Show when サービスについて(個人) is selected
            <div className="bg-[#7F7F7F] p-8 lg:p-7 lg:w-2xl rounded">
              <h2 className="text-3xl font-bold text-white mb-3">
                Get in Touch
              </h2>
              <p className="text-gray-200 mb-8 text-sm">
                Fill out our inquiry form on our website, and one of our
                consultants will get back to you shortly.
              </p>
              <div className="space-y-6">
                {/* Inquiry Type Selection Buttons */}
                <div className="flex gap-3 text-nowrap">
                  <button
                    onClick={() =>
                      handleInquiryTypeSelect("サービスについて(法人)")
                    }
                    className={`px-4 py-2 text-sm rounded transition-colors ${
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
                    className={`px-4 py-2 text-sm rounded transition-colors ${
                      formData.inquiryType === "サービスについて(個人)"
                        ? "bg-white text-black"
                        : "bg-transparent text-white border border-white hover:bg-white hover:text-black"
                    }`}
                  >
                    ● サービスについて(個人)
                  </button>
                  <button
                    onClick={() =>
                      handleInquiryTypeSelect("コンサルタントについて(法人)")
                    }
                    className={`px-4 py-2 text-sm rounded transition-colors ${
                      formData.inquiryType === "コンサルタントについて(法人)"
                        ? "bg-white text-black"
                        : "bg-transparent text-white border border-white hover:bg-white hover:text-black"
                    }`}
                  >
                    ●サービスについて(法人)
                  </button>
                </div>

                {/* Name Field */}
                <div className="flex items-center justify-center gap-10">
                  <label className="block text-white text-sm mb-2 w-40">
                    お名前*
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 text-black bg-white outline-none rounded"
                  />
                </div>

                {/* Phone Number Field */}
                <div className="flex items-center justify-center gap-10">
                  <label className="block text-white text-sm mb-2 w-40">
                    電話番号*
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 text-black bg-white outline-none rounded"
                  />
                </div>

                {/* Email Field */}
                <div className="flex items-center justify-center gap-10">
                  <label className="block text-white text-sm mb-2 w-40">
                    メールアドレス*
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 text-black bg-white outline-none rounded"
                  />
                </div>

                {/* File Upload */}
                <div className="">
                  <div className="flex gap-2">
                    <label className="block text-white text-sm mb-2 w-37">
                      添付ファイル
                    </label>
                    <label className="px-5 py-2 bg-white text-black text-sm cursor-pointer hover:bg-gray-100 inline-block rounded">
                      Choose File
                      <input
                        type="file"
                        name="file"
                        onChange={handleInputChange}
                        className="hidden rounded"
                      />
                    </label>
                    <div className="flex-1 px-4 py-2 bg-[#3a3a3a] text-gray-300 text-sm flex items-center rounded border border-white ">
                      {formData.file ? formData.file.name : "Sample.docx"}
                    </div>
                  </div>
                  <p className="text-[9px] text-gray-300 mt-2 leading-relaxed flex justify-end ml-auto">
                    *添付ファイルがある場合、添加してください。
                    <br />
                    *許容されるファイル形式：
                    <br />
                    *PDF・Word・Excel・PowerPoint、画像ファイルは10MBまで対応しております。
                  </p>
                </div>

                {/* Inquiry Details Textarea */}
                <div className="flex items-center justify-center gap-10">
                  <label className="block text-white text-sm mb-2 w-40 self-start">
                    お問い合わせ内容
                  </label>
                  <textarea
                    name="inquiryDetails"
                    value={formData.inquiryDetails}
                    onChange={handleInputChange}
                    rows={2}
                    className="w-full px-4 py-3 text-black bg-white outline-none resize-none rounded"
                  />
                </div>

                {/* Privacy Policy Box */}
                <div className="border border-white px-10 py-2 rounded">
                  <h3 className="text-white font-bold text-sm mb-3">
                    個人情報の取扱いについて
                  </h3>
                  <p className="text-xs text-gray-200 leading-relaxed ">
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
                    <span className="text-xs">
                      個人情報の取扱方針について同意する*
                    </span>
                  </label>
                </div>
                {/* Submit Button */}
                <div className="flex justify-center pt-4">
                  <button
                    onClick={handleSubmit}
                    className="btn border-none w-48 bg-white text-black font-bold py-2 px-6 hover:bg-gray-100 transition-colors"
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

const AboutOurServices = () => {
  const [formData, setFormData] = useState({
    inquiryType: "",
    name: "",
    phoneNumber: "",
    email: "",
    file: null,
    inquiryDetails: "",
    agreeToPrivacy: false,
  });
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
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
      file: null,
      inquiryDetails: "",
      agreeToPrivacy: false,
    });
  };
  return (
    <div className="min-h-screen bg-[#7F7F7F] py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start mx-auto">
          {/* Left Side - Contact Information */}
          <div
            className="p-8 lg:p-9"
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="50"
            data-aos-once="true"
          >
            {/* Title and Description */}
            <h1 className="text-4xl font-bold text-black mb-8">CONTACT US</h1>

            <p className="text-black text-lg 2xl:text-xl leading-relaxed mb-12">
              We’d love to hear from you. Whether you’re a <br /> company
              seeking top executive talent or a <br /> professional exploring
              new career opportunities, <br />
              RLink Partners is here to guide your next step.
            </p>

            {/* Contact Details */}
            <div className="space-y-8 text-xl">
              {/* Head Office */}
              <div className="flex flex-col items-start space-x-4">
                <div className="flex gap-2">
                  <div className="w-6 h-6 text-red-500 mt-1">📍</div>
                  <h3 className="text-2xl  text-black mb-2">Head Office</h3>
                </div>
                <div>
                  <p className="text-black">本社所在地: 東京都港区白金5-5-9</p>
                </div>
              </div>
              {/* Email */}
              <div className="flex flex-col items-start space-x-4">
                <div className="flex gap-2">
                  <div className="w-6 h-6 text-blue-500">📧</div>
                  <h3 className="text-2xl font-semibold text-black mb-2">
                    Email
                  </h3>
                </div>
                <p className="text-black text-xl">
                  mfujisawa@rlinkpartners.com <br />
                  cmella@rlinkpartners.com <br />
                  ykojima@rlinkpartners.com
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div
            className="bg-gradient-to-b from-[#777777] to-[#111111] p-8 lg:p-7 lg:w-2xl rounded"
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="50"
            data-aos-once="true"
          >
            <h2 className="text-3xl font-bold text-white mb-3">Get in Touch</h2>
            <p className="text-gray-200 mb-8 text-sm">
              Fill out our inquiry form on our website, and one of our
              consultants will get back to you shortly.
            </p>
            <div className="space-y-6">
              {/* Inquiry Type Selection Buttons */}
              <div className="flex gap-3 text-nowrap">
                <button
                  onClick={() =>
                    handleInquiryTypeSelect("サービスについて(法人)")
                  }
                  className={`px-4 py-2 text-sm rounded transition-colors ${
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
                  className={`px-4 py-2 text-sm rounded transition-colors ${
                    formData.inquiryType === "サービスについて(個人)"
                      ? "bg-white text-black"
                      : "bg-transparent text-white border border-white hover:bg-white hover:text-black"
                  }`}
                >
                  ● サービスについて(個人)
                </button>
                <button
                  onClick={() =>
                    handleInquiryTypeSelect("サービスについて(法人)2")
                  }
                  className={`px-4 py-2 text-sm rounded transition-colors ${
                    formData.inquiryType === "サービスについて(法人)2"
                      ? "bg-white text-black"
                      : "bg-transparent text-white border border-white hover:bg-white hover:text-black"
                  }`}
                >
                  ● サービスについて(法人)
                </button>
              </div>

              {/* Name Field */}
              <div className="flex items-center justify-center gap-10">
                <label className="block text-white text-sm mb-2 w-40">
                  お名前*
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 text-black bg-white outline-none rounded"
                />
              </div>

              {/* Phone Number Field */}
              <div className="flex items-center justify-center gap-10">
                <label className="block text-white text-sm mb-2 w-40">
                  電話番号*
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 text-black bg-white outline-none rounded"
                />
              </div>

              {/* Email Field */}
              <div className="flex items-center justify-center gap-10">
                <label className="block text-white text-sm mb-2 w-40">
                  メールアドレス*
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 text-black bg-white outline-none rounded"
                />
              </div>

              {/* File Upload */}
              <div className="">
                <div className="flex gap-2">
                  <label className="block text-white text-sm mb-2 w-37">
                    添付ファイル
                  </label>
                  <label className="px-5 py-2 bg-white text-black text-sm cursor-pointer hover:bg-gray-100 inline-block rounded">
                    Choose File
                    <input
                      type="file"
                      name="file"
                      onChange={handleInputChange}
                      className="hidden rounded"
                    />
                  </label>
                  <div className="flex-1 px-4 py-2 bg-[#3a3a3a] text-gray-300 text-sm flex items-center rounded border border-white ">
                    {formData.file ? formData.file.name : "Sample.docx"}
                  </div>
                </div>
                <p className="text-[9px] text-gray-300 mt-2 leading-relaxed flex justify-end ml-auto">
                  *添付ファイルがある場合、添加してください。
                  <br />
                  *許容されるファイル形式：
                  <br />
                  *PDF・Word・Excel・PowerPoint、画像ファイルは10MBまで対応しております。
                </p>
              </div>

              {/* Inquiry Details Textarea */}
              <div className="flex items-center justify-center gap-10">
                <label className="block text-white text-sm mb-2 w-40 self-start">
                  お問い合わせ内容
                </label>
                <textarea
                  name="inquiryDetails"
                  value={formData.inquiryDetails}
                  onChange={handleInputChange}
                  rows={2}
                  className="w-full px-4 py-3 text-black bg-white outline-none resize-none rounded"
                />
              </div>

              {/* Privacy Policy Box */}
              <div className="border border-white px-10 py-2 rounded">
                <h3 className="text-white font-bold text-sm mb-3">
                  個人情報の取扱いについて
                </h3>
                <p className="text-xs text-gray-200 leading-relaxed ">
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
                  <span className="text-xs">
                    個人情報の取扱方針について同意する*
                  </span>
                </label>
              </div>
              {/* Submit Button */}
              <div className="flex justify-center pt-4">
                <button
                  onClick={handleSubmit}
                  className="btn border-none w-48 bg-white text-black font-bold py-2 px-6 hover:bg-gray-100 transition-colors"
                >
                  SEND
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactSection;
