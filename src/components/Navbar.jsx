import { useEffect, useState } from "react";
import { Button } from "@heroui/react";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Gallery", href: "#gallery" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed left-0 top-4 z-50 w-full px-4 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between md:px-5">
        <div className="flex items-center">
          <div className={`transition-all duration-500 ease-in-out ${isScrolled ? "opacity-0 -translate-y-10 pointer-events-none" : "opacity-100 translate-y-0"}`}>
          <a
            href="#home"
            className="group inline-flex items-center gap-3 rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-400"
          >
            <h1 className="font-unifraktur-cook text-lg tracking-normal md:text-xl">
              SoundSpace
              <span className="text-red-700">Studio</span>
            </h1>
          </a>
          </div>
        </div>

        <div className="items-center p-1 backdrop-blur-xl md:flex rounded-full">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-white/72 transition duration-300 hover:bg-white/12 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="hidden items-center justify-end md:flex">
          <Button
            className="bg-[#b58709]/50 text-white px-4 py-2 text-sm font-medium border border-white/10 backdrop-blur-2xl cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#b58709] tracking-wide hover:scale-105"
          >
            Book Session
          </Button>
        </div>

        <button
          type="button"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
          className="inline-flex size-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition duration-300 hover:bg-white/18 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400 md:hidden"
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
                className="rounded-full px-5 py-3 text-sm font-medium text-white/78 transition duration-300 hover:bg-white/12 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400"
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
