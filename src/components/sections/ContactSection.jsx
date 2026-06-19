import { Button } from '@heroui/react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';
import { contactInfo } from '../../data/siteData';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const ContactSection = () => {
  return (
    <SectionWrapper id="contact">
      <SectionHeading 
        label="GET IN TOUCH" 
        title="Contact Us" 
        subtitle="Ready to book a session or have a question? Reach out to us using the form below or via WhatsApp."
      />
      
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="flex flex-col">
          <GlassCard className="flex-grow">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#b58709]/10 flex items-center justify-center shrink-0 border border-[#b58709]/20">
                  <MapPin className="text-[#b58709] size-5" />
                </div>
                <div>
                  <h4 className="text-xs text-white/40 font-poppins uppercase tracking-wider mb-1">Visit Us</h4>
                  <p className="text-sm text-white/80 font-poppins leading-relaxed">{contactInfo.address}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#b58709]/10 flex items-center justify-center shrink-0 border border-[#b58709]/20">
                  <Phone className="text-[#b58709] size-5" />
                </div>
                <div>
                  <h4 className="text-xs text-white/40 font-poppins uppercase tracking-wider mb-1">Call / WhatsApp</h4>
                  <a href={`https://wa.me/${contactInfo.whatsapp.replace('+', '')}`} target="_blank" rel="noopener noreferrer" className="text-sm text-white/80 font-poppins hover:text-[#b58709] transition-colors">
                    {contactInfo.whatsappDisplay}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#b58709]/10 flex items-center justify-center shrink-0 border border-[#b58709]/20">
                  <Mail className="text-[#b58709] size-5" />
                </div>
                <div>
                  <h4 className="text-xs text-white/40 font-poppins uppercase tracking-wider mb-1">Email Us</h4>
                  <a href={`mailto:${contactInfo.email}`} className="text-sm text-white/80 font-poppins hover:text-[#b58709] transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#b58709]/10 flex items-center justify-center shrink-0 border border-[#b58709]/20">
                  <Clock className="text-[#b58709] size-5" />
                </div>
                <div>
                  <h4 className="text-xs text-white/40 font-poppins uppercase tracking-wider mb-1">Opening Hours</h4>
                  <p className="text-sm text-white/80 font-poppins">{contactInfo.hours}</p>
                </div>
              </div>
            </div>
          </GlassCard>
          
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent h-48 mt-6 flex flex-col items-center justify-center gap-2">
            <MapPin className="text-white/30 size-8" />
            <span className="text-sm text-white/40 font-poppins tracking-wide">Interactive Map Area</span>
          </div>
        </div>
        
        <div>
          <GlassCard className="h-full">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-5 h-full flex flex-col">
              <div>
                <label htmlFor="name" className="text-xs text-white/50 font-poppins uppercase tracking-wider mb-2 block">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm font-poppins placeholder:text-white/30 focus:outline-none focus:border-[#b58709]/50 focus:ring-1 focus:ring-[#b58709]/50 transition-all duration-300"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="text-xs text-white/50 font-poppins uppercase tracking-wider mb-2 block">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="john@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm font-poppins placeholder:text-white/30 focus:outline-none focus:border-[#b58709]/50 focus:ring-1 focus:ring-[#b58709]/50 transition-all duration-300"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="text-xs text-white/50 font-poppins uppercase tracking-wider mb-2 block">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  placeholder="Booking inquiry"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm font-poppins placeholder:text-white/30 focus:outline-none focus:border-[#b58709]/50 focus:ring-1 focus:ring-[#b58709]/50 transition-all duration-300"
                />
              </div>
              
              <div className="flex-grow">
                <label htmlFor="message" className="text-xs text-white/50 font-poppins uppercase tracking-wider mb-2 block">Message</label>
                <textarea 
                  id="message" 
                  placeholder="Tell us about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm font-poppins placeholder:text-white/30 focus:outline-none focus:border-[#b58709]/50 focus:ring-1 focus:ring-[#b58709]/50 transition-all duration-300 min-h-[120px] h-[calc(100%-24px)] resize-none"
                ></textarea>
              </div>
              
              <Button 
                type="submit"
                className="w-full mt-6 bg-[#b58709]/80 hover:bg-[#b58709] text-white font-semibold py-6 text-sm tracking-wide border border-[#b58709]/50 cursor-pointer transition-all duration-300 hover:scale-[1.02] rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-[#b58709]/20"
              >
                <span>Send Message</span>
                <Send size={16} />
              </Button>
            </form>
          </GlassCard>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;

