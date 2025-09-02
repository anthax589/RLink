// Assets
import executiveImg from "../../assets/services_assets/executive_img.svg";
import rpoImg from "../../assets/services_assets/rpo_img.svg";
import referenceImg from "../../assets/services_assets/reference_img.svg";

const services = [
  {
    img: executiveImg,
    title: "Executive Search",
    subtitle: "",
    description:
      "We connect organizations with high-caliber leaders who can make a lasting impact. From CxOs to senior specialists, our executive search service ensures every placement is aligned with your business goals and long-term growth.",
  },
  {
    img: rpoImg,
    title: "RPO",
    subtitle: "(Recruitment Process Outsourcing)",
    description:
      "Our tailored RPO solutions redefine recruitment efficiency. Acting as an extension of your HR team, we leverage data-driven strategies and streamlined processes to deliver faster, smarter, and more cost-effective hiring.",
  },
  {
    img: referenceImg,
    title: "REFERENCE CHECK APP",
    subtitle: "(SNAPPCHECK)",
    description:
      "Revolutionizing reference checks with automation and AI, SnappCheck accelerates candidate validation while ensuring accuracy and reliability. With actionable insights at your fingertips, you can make confident hiring decisions faster than ever.",
  },
];

const ServiceCard = ({ img, title, subtitle, description, isLast }) => (
  <div
    className="grid grid-cols-2 py-25  max-w-7xl mx-auto"
    style={
      !isLast
        ? {
            borderBottom: "2px solid",
            borderImage:
              "linear-gradient(275deg, rgba(24,103,209,1) 0%, rgba(0,0,0,1) 89%) 1",
            borderImageSlice: 1,
          }
        : {}
    }
  >
    <div className="relative">
      <img src={img} alt={title} className="w-full h-96" />
    </div>
    <div
      className="flex flex-col justify-center relative"
      style={
        title === "RPO"
          ? {
              position: "relative",
            }
          : {}
      }
    >
      <h3
        className="text-[60px] xl:text-5xl font-bold mb-10"
        style={{ fontFamily: "Lato-Bold" }}
      >
        {title}
        {subtitle && <span className="block text-[40px]">{subtitle}</span>}
      </h3>
      <p className="text-[24px] mb-10" style={{ fontFamily: "Lato-Regular" }}>
        {description}
      </p>
      <div className="flex justify-center">
        <button
          className="w-[20vw] h-[10vh] flex justify-center items-center gap-2 text-[32px] mt-5 px-6 py-3 border-2 border-black bg-[#F4F2F2] text-black rounded-[5px]
    transition-all duration-300 ease-in-out hover:scale-105 hover:bg-black hover:text-white mb-4"
        >
          VIEW MORE
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-all duration-300 ease-in-out group-hover:translate-x-1"
          >
            <path
              d="M17 16V7H8V5H19V16H17ZM12 21V12H3V10H14V21H12Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
      {title === "RPO" && (
        <div
          className="absolute bottom-0 left-0 right-[-100vw]"
          style={{
            height: "2px",
            backgroundImage:
              "linear-gradient(275deg, rgba(24,103,209,1) 0%, rgba(0,0,0,1) 89%)",
          }}
        ></div>
      )}
    </div>
  </div>
);

const OurServicesSection = () => (
  <section className="relative bg-cover  lg: py-14 bg-white text-black">
    <div className="w-full flex flex-col items-center">
      <h2
        className="mb-5 text-[36px] font-bold"
        style={{ fontFamily: "Lato-Regular" }}
      >
        Our Services
      </h2>
      <p className="mb-5 text-[36px]" style={{ fontFamily: "Lato-Regular" }}>
        Transforming Talent Acquisition through Expertise, Technology, and AI
      </p>
      <div
        className="w-[157px]  mt-5"
        style={{
          height: "2px",
          backgroundImage:
            "linear-gradient(275deg,rgba(24, 103, 209, 1) 0%, rgba(0, 0, 0, 1) 89%)",
        }}
      />
    </div>

    {services.map((service, i) => (
      <ServiceCard
        key={i}
        {...service}
        isLast={i === services.length - 1} // ✅ pass condition here
      />
    ))}
  </section>
);

export default OurServicesSection;
