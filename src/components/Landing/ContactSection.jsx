import React from "react";
import { useState } from "react";
function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phoneNumber: "",
    address: "",
    inquiryDetails: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // Basic validation
    if (
      !formData.name ||
      !formData.company ||
      !formData.email ||
      !formData.phoneNumber ||
      !formData.address
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    console.log("Form submitted:", formData);
    // Handle form submission here
    alert("Thank you for your inquiry! We will get back to you shortly.");

    // Reset form
    setFormData({
      name: "",
      company: "",
      email: "",
      phoneNumber: "",
      address: "",
      inquiryDetails: "",
    });
  };

  return (
    <div className="min-h-fit bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start mx-auto">
          {/* Left Side - Contact Information */}
          <div className="bg-white p-8 lg:p-12">
            <h1 className="text-4xl font-bold text-black mb-8">CONTACT US</h1>

            <p className="text-black text-lg 2xl:text-xl leading-relaxed mb-12">
              We'd love to hear from you. Whether you're a company seeking top
              executive talent or a professional exploring new career
              opportunities, RLink Partners is here to guide your next step.
            </p>

            {/* Contact Details */}
            <div className="space-y-8 text-xl">
              {/* Head Office */}
              <div className="flex flex-col items-start space-x-4">
                <div className="flex gap-2">
                  <div className="w-6 h-6 text-red-500 mt-1">📍</div>
                  <h3 className="text-2xl font-semibold text-black mb-2">
                    Head Office
                  </h3>
                </div>
                <div>
                  <p className="text-black">
                    Shirokane, Minato-ku, Tokyo, Japan
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex flex-col items-start space-x-4">
                <div className="flex  gap-2">
                  <div className="w-6 h-6 text-black ">📞</div>
                  <h3 className="text-2xl font-semibold text-black mb-2">
                    Phone
                  </h3>
                </div>
                <div></div>
                <p className="text-black">
                  +81 (insert company number if available)
                </p>
              </div>

              {/* Email */}
              <div className="flex flex-col items-start space-x-4">
                <div className="flex gap-2">
                  <div className="w-6 h-6 text-blue-500">📧</div>
                  <h3 className="text-2xl font-semibold text-black mb-2">
                    Email
                  </h3>
                </div>
                <p className="text-black text-xl">info@rlinkpartners.com</p>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-[#575757] p-8 lg:p-10">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-200 mb-8">
              Fill out our inquiry form on our website, and one of our
              consultants will get back to you shortly.
            </p>

            <div className="space-y-2">
              {/* Name and Company Row */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white font-medium mb-2">
                    Name<span className="text-white">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border text-black bg-white focus:border-black   outline-none  rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">
                    Company<span className="text-white">*</span>
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border text-black bg-white focus:border-black   outline-none  rounded-md"
                  />
                </div>
              </div>

              {/* Email and Phone Row */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white font-medium mb-2">
                    Email<span className="text-white">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border text-black bg-white focus:border-black   outline-none  rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">
                    Phone Number<span className="text-white">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border  text-black bg-white focus:border-black   outline-none  rounded-md"
                  />
                </div>
              </div>

              {/* Address */}
              <div>
                <label className="block text-white font-medium mb-2">
                  Address<span className="text-white">*</span>
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border  text-black bg-white focus:border-black   outline-none  rounded-md"
                />
              </div>

              {/* Inquiry Details */}
              <div>
                <label className="block text-white font-medium mb-2">
                  Inquiry Details
                </label>
                <textarea
                  name="inquiryDetails"
                  value={formData.inquiryDetails}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-4 py-3  focus:border-black focus:ring outline-none transition-colors resize-none rounded-md text-black bg-white"
                  placeholder="Please describe your inquiry in detail..."
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4 flex justify-center">
                <button
                  onClick={handleSubmit}
                  className=" w-40 bg-white text-black font-bold py-2 px-2 hover:bg-gray-100 transition-colors duration-200  btn outline-none"
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
}

export default ContactSection;
