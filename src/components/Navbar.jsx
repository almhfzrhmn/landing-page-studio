import { useState } from "react";
import { Button } from "@heroui/react";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Gears", href: "#gears" },
  { name: "About Us", href: "#about" },
  { name: "Reviews", href: "#reviews" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed left-0 top-4 z-50 w-full px-4 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full px-4 py-3 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl md:px-5">
        <div className="flex items-center">
          <a
            href="#home"
            className="group inline-flex items-center gap-3 rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-400"
          >
            <span className="flex size-10 items-center justify-center rounded-full font-russo-one text-sm shadow-inner shadow-white/10 transition duration-300 group-hover:border-red-400/50">
              SS
            </span>
            <h1 className="font-russo-one text-lg tracking-normal md:text-xl">
              SoundSpace
              <span className="text-red-700">Studio</span>
            </h1>
          </a>
        </div>

        <div className="items-center p-1 backdrop-blur-xl md:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-white/72 transition duration-300 hover:bg-white/12 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="hidden items-center justify-end md:flex">
          <Button

            className="bg-transparent border border-red-600/50 backdrop-blur-2xl transition-all duration-200 ease-in-out hover:bg-red-700/50 cursor-pointer"
          >
            Book Session
          </Button>
        </div>

        <button
          type="button"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
          className="inline-flex size-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition duration-300 hover:bg-white/18 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400 md:hidden"
        >
          {isMenuOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="mx-auto mt-3 max-w-7xl rounded-full border border-white/15 bg-black/55 p-2 shadow-[0_24px_80px_rgba(0,0,0,0.38)] backdrop-blur-2xl md:hidden">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-full px-5 py-3 text-sm font-medium text-white/78 transition duration-300 hover:bg-white/12 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400"
              >
                {item.name}
              </a>
            ))}
            <Button className="mt-1 h-11 rounded-full border border-red-400/40 bg-red-500/20 text-sm font-semibold text-white">
              Book Session
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
