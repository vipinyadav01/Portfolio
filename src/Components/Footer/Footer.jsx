import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const ContactLink = ({ icon: Icon, text, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 p-3 hover:bg-gray-700 rounded-lg transition-all duration-300 group"
  >
    <span className="bg-gray-700 p-2 rounded-lg group-hover:bg-gray-600 transition-colors">
      <Icon size={24} className="text-gray-300" />
    </span>
    <span className="text-gray-300 group-hover:text-white transition-colors">
      {text}
    </span>
  </a>
);

const Footer = () => {
  const contactLinks = [
    {
      icon: MdOutlineEmail,
      text: "vipinyadav9m@gmail.com",
      href: "mailto:vipinyadav9m@gmail.com",
    },
    {
      icon: CiLinkedin,
      text: "linkedin.com/vipinyadav01",
      href: "https://linkedin.com/in/vipinyadav01",
    },
    {
      icon: FaGithub,
      text: "github.com/vipinyadav01",
      href: "https://github.com/vipinyadav01",
    },
  ];

  return (
    <footer id="contact" className="bg-gray-800">
      <div className="w-60 h-1 bg-gradient-to-r from-gray-600 to-gray-400 mx-auto rounded-full"></div>
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Section - Heading */}
          <div className="text-center md:text-left space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Let's Connect
            </h2>
            <p className="text-xl text-gray-400">Feel free to reach out!</p>
            <div className="h-1 w-20 bg-gray-600 mx-auto md:mx-0 mt-4"></div>
          </div>

          {/* Right Section - Contact Links */}
          <div className="bg-gray-800 rounded-xl p-6 space-y-4">
            {contactLinks.map((link, index) => (
              <ContactLink
                key={index}
                icon={link.icon}
                text={link.text}
                href={link.href}
              />
            ))}
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Vipin Yadav. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
