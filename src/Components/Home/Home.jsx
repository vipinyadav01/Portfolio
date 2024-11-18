import React from "react";
import { FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import TextChange from "../TextChange";
import Profile2 from "../../assets/bg.png";
const SocialLink = ({ icon: Icon, href, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-all duration-300 group flex items-center gap-2"
    aria-label={label}
  >
    <Icon size={20} className="text-gray-300 group-hover:text-white" />
  </a>
);

const Home = () => {
  const whatsappNumber = "+91 9918572513";
  const whatsappMessage = "Hello! I'm interested in contacting you.";
  const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/vipinyadav01",
      label: "GitHub Profile",
    },
    {
      icon: FaLinkedin,
      href: "https://linkedin.com/in/vipinyadav01",
      label: "LinkedIn Profile",
    },
    {
      icon: MdEmail,
      href: "mailto:vipinyadav9m@gmail.com?subject=Hello",
      label: "Email Me",
    },
    {
      icon: FaWhatsapp,
      href: whatsappLink,
      label: "WhatsApp Me",
    },
  ];

  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-20 px-4 md:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content Section */}
          <div className="space-y-8">
            {/* Hero Text */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                <TextChange />
              </h1>

              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Full-stack developer specializing in MERN stack. Passionate
                about creating innovative web solutions with expertise in
                JavaScript and modern web technologies.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#contact"
                className="px-8 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl"
              >
                <span>Contact Me</span>
              </a>

              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((link, index) => (
                  <SocialLink
                    key={index}
                    icon={link.icon}
                    href={link.href}
                    label={link.label}
                  />
                ))}
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-3 pt-6">
              {["MERN", "JavaScript", "React.js", "Node.js", "MongoDB"].map(
                (tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-gray-600 to-gray-700 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-gray-800 ring-1 ring-gray-700 rounded-lg overflow-hidden">
              <img
                src={Profile2}
                alt="Profile2"
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
