import { Button } from '@heroui/react';
import { MessageCircle, CalendarCheck } from 'lucide-react';
import { contactInfo } from '../../data/siteData';

const CTASection = () => {
  return (
    <section id="cta" className="relative w-full py-24 md:py-32 overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(181,135,9,0.15),transparent_60%)] mix-blend-screen" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(185,28,28,0.1),transparent_50%)] mix-blend-screen" />
      
      <div className="relative z-10 mx-auto max-w-4xl px-5 md:px-6 text-center">
        <p className="text-xs font-semibold tracking-widest uppercase text-[#b58709] font-poppins mb-4">
          LET'S MAKE MAGIC
        </p>
        <h2 className="font-unifraktur-cook text-4xl md:text-5xl lg:text-6xl text-white mb-6">
          Ready to Create Your Next Hit?
        </h2>
        <p className="font-poppins text-base md:text-lg text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
          Book your session today and experience world-class acoustics, premium gear, and a team dedicated to bringing your sonic vision to life.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href={`https://wa.me/${contactInfo.whatsapp.replace('+', '')}`} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <Button className="w-full bg-[#b58709]/80 hover:bg-[#b58709] text-white font-semibold px-10 py-6 text-sm tracking-wide border border-[#b58709]/50 cursor-pointer transition-all duration-300 hover:scale-105 rounded-full shadow-lg shadow-[#b58709]/20 flex items-center gap-2 h-auto">
              <MessageCircle size={18} />
              <span>Chat on WhatsApp</span>
            </Button>
          </a>
          
          <a href="#contact" className="w-full sm:w-auto">
            <Button variant="outline" className="w-full text-white px-10 py-6 text-sm font-semibold tracking-wide border border-white/20 bg-white/5 cursor-pointer transition-all duration-300 hover:bg-white/10 hover:scale-105 rounded-full backdrop-blur-sm flex items-center gap-2 h-auto">
              <CalendarCheck size={18} />
              <span>Book a Session</span>
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

