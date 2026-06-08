// import React, { useEffect, useRef, useState } from "react";
// import Button from "./ui/Button";
import { Button } from "@heroui/react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Gears", href: "#gears" },
  { name: "About Us", href: "#about" },
  { name: "Reviews", href: "#reviews" },
];

const Navbar = () => {
  // const [isActive, setIsActive] = useState("Home");
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [isScrolled, setIsScrolled] = useState(false);
  // const menuRef = useRef(null);

  // useEffect(() => {
  //     const handleScroll = () => {

  //     }
  // })

  return (
    <nav className="w-full z-50 left-0 top-2 fixed">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 md:px-6">
        {/* Logo */}
        <div className="flex-1 flex justify-start transition-all duration-300 ease-in-out">
          <a
            href="#home"
            className="text-white font-semibold text-xl tracking-tight"
          >
            <h1 className="font-russo-one text-2xl font-bold">
              SoundSpace
              <span className="text-red-700">Studio</span>
            </h1>
          </a>
        </div>

        {/* navigation */}
        <div className="flex-1 flex items-center justify-center">
          <div className="flex flex-wrap items-center justify-center gap-x-2 md:gap-x-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white px-2 py-1 text-sm md:text-base transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer font-medium tracking-tight hover:text-orange-700"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
        {/* CTA */}
        <div className="flex-1 flex justify-end mx-2">
          <Button className="bg-transparent text-white transition-all duration-300 ease-smooth hover:scale-110 cursor-pointer hover:bg-orange-700 bordern border-red-500">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
