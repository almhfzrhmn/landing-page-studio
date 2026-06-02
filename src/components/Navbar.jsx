import React, { useEffect, useRef, useState } from "react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Gears", href: "#gears" },
  { name: "About Us", href: "#about" },
  { name: "Reviews", href: "#reviews" },
];

const Navbar = () => {
  const [isActive, setIsActive] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);

  // useEffect(() => {
  //     const handleScroll = () => {

  //     }
  // })

  return (
    <nav className="w-full z-50 left-0 top-2 fixed">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="transition-all duration-300 ease-in-out">
          <a
            href="#home"
            className="text-white font-semibold text-xl tracking-tight"
          >
            <h1 className="text-2xl font-bold">
              Bising
              <span className="text-red-700">Studio</span>
            </h1>
          </a>
        </div>

        {/* navigation */}
        <div className="flex items-center md:flex relative">
          <div className="absolute inset-0 bg-orange-500/10 blur-2xl rounded-full">
          </div>
            <div className="bg-gray-500/10 rounded-full px-6 py-3 backdrop-blur-3xl border border-gray-500/50 shadow-2xl shadow-white/10 relative overflow-hidden">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white mx-4 transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer font-medium tracking-tight hover:text-green-900 relative z-10 text-sm"
                >
                  {item.name}
                </a>
              ))}
            </div>
        </div>
        {/* CTA */}
        <div className="mx-2">
          <button className="px-6 py-3 rounded-full bg-orange-500 text-white text-sm font-medium hover:scale-105 transition-all duration-300 cursor-pointer hover:bg-transparent">
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
