import React, { useState } from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { to: "hero", label: "Home" },
    { to: "about", label: "About" },
    { to: "skills", label: "Skills" },
    { to: "work", label: "Work" },
    { to: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-800/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="text-xl font-bold text-[#32CD32]">
          Portfolio
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-200 items-center">
          {links.map((link) => (
            <li key={link.to}>
              <Link
                activeClass="text-[#32CD32] font-semibold"
                to={link.to}
                spy={true}
                smooth={true}
                offset={-70} // adjust for fixed navbar height
                duration={600}
                className="cursor-pointer hover:text-[#32CD32] transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-200"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M4 6h16M4 12h16M4 18h16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-gray-800/95 px-6 py-4">
          <ul className="flex text-gray-200 flex-col gap-3">
            {links.map((link) => (
              <li key={link.to}>
                <Link
                  activeClass="text-[#32CD32] font-semibold"
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={600}
                  onClick={() => setOpen(false)}
                  className="cursor-pointer border-amber-50 border-2 px-5 align-text-bottom rounded-xl py-1 hover:text-[#32CD32] transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
