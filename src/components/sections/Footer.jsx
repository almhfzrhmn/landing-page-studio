import { socialLinks, footerLinks } from '../../data/siteData';
import { FacebookIcon } from '../icons/brandico-facebook';
import { InstagramIcon } from '../icons/brandico-instagram';

const iconMap = {
  InstagramIcon,
  // YouTube: Youtube,
  // Twitter,
  FacebookIcon
};

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="mx-auto max-w-7xl px-5 md:px-6">
        <div className="py-16 grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-8">
          
          <div className="col-span-2">
            <a href="#home" className="inline-block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-400 rounded-sm">
              <h1 className="font-unifraktur-cook text-2xl tracking-normal">
                SoundSpace
                <span className="text-red-700">Studio</span>
              </h1>
            </a>
            <p className="text-sm text-white/50 font-poppins mt-4 leading-relaxed max-w-xs">
              A modern production room for artists who want clean captures, warm detail, and gear that stays out of the creative flow.
            </p>
            
            <div className="mt-8 flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = iconMap[social.name];
                return (
                  <a 
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit our ${social.name}`}
                    className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/50 hover:text-[#b58709] hover:bg-[#b58709]/10 hover:border-[#b58709]/30 transition-all duration-300 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b58709]"
                  >
                    {Icon && <Icon size={18} />}
                  </a>
                );
              })}
            </div>
          </div>
          
          {footerLinks.map((column, index) => (
            <div key={index} className="col-span-1">
              <h4 className="font-poppins text-sm font-semibold text-white mb-6 uppercase tracking-wider">{column.title}</h4>
              <ul className="space-y-4">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href} 
                      className="text-sm text-white/50 font-poppins hover:text-white transition-all duration-300 block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50 rounded-sm w-fit"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
        </div>
        
        <div className="border-t border-white/10 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30 font-poppins text-center md:text-left">
            &copy; {new Date().getFullYear()} SoundSpace Studio. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-white/30 font-poppins hover:text-white/60 transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-white/30 font-poppins hover:text-white/60 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

