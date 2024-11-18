import React, { useState, useEffect } from "react";
import { RiMenu2Line, RiCloseLine } from "react-icons/ri";

const NavLink = ({ href, children }) => (
  <a
    href={href}
    className="relative group px-3 py-2 text-gray-300 hover:text-white transition-colors duration-300"
  >
    <span>{children}</span>
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-400 group-hover:w-full transition-all duration-300"></span>
  </a>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 ${
        scrolled
          ? "bg-gray-900/95 shadow-lg backdrop-blur-sm"
          : "bg-transparent"
      } transition-all duration-300 ${isMenuOpen ? "bg-gray-900" : ""}`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Name */}
          <a
            href="#"
            className="text-xl font-bold text-white hover:text-gray-200 transition-colors duration-300"
          >
            Vipin Yadav
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-300 hover:text-white transition-colors duration-300"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <RiCloseLine size={28} /> : <RiMenu2Line size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`${
            isMenuOpen
              ? "max-h-[calc(100vh-4rem)] opacity-100 visible"
              : "max-h-0 opacity-0 invisible"
          } md:hidden transition-all duration-300 overflow-hidden absolute left-0 right-0 top-full bg-gray-900/95 backdrop-blur-sm shadow-lg`}
        >
          <div className="py-4 space-y-2 px-4">
            {["Home", "About", "Experience", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                className="block px-4 py-3 text-gray-300 hover:bg-gray-800/50 rounded-lg transition-all duration-300 hover:text-white hover:translate-x-2"
                onClick={() => {
                  console.log(`Navigating to #${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`);
                  setIsMenuOpen(false);
                }}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Additional mobile menu footer */}
          <div className="mt-4 py-4 px-8 border-t border-gray-800">
            <p className="text-sm text-gray-400 text-center">
              © 2024 Vipin Yadav. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
