import { Button } from '@heroui/react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';
import { pricingPlans } from '../../data/siteData';
import { Check, Sparkles } from 'lucide-react';

const PricingSection = () => {
  return (
    <SectionWrapper id="pricing">
      <SectionHeading 
        label="PRICING" 
        title="Studio Packages" 
        subtitle="Transparent pricing with no hidden fees. Choose the package that best fits your project's scope and budget."
      />
      
      <div className="grid md:grid-cols-3 gap-6 items-stretch">
        {pricingPlans.map((plan, index) => (
          <GlassCard 
            key={index} 
            className={`flex flex-col ${
              plan.popular 
                ? 'border-[#b58709]/50 bg-[#b58709]/5 relative mt-4 md:mt-0 md:-translate-y-4' 
                : ''
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#b58709] text-black text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1 shadow-lg shadow-[#b58709]/20">
                <Sparkles size={14} />
                <span>Most Popular</span>
              </div>
            )}
            
            <h3 className="text-lg font-semibold font-poppins text-white/80 mb-2">
              {plan.name}
            </h3>
            
            <div className="flex items-end gap-1 mb-2">
              <span className="text-lg text-white/50 font-poppins mb-1">Rp</span>
              <span className="font-unifraktur-cook text-4xl md:text-5xl text-white tracking-wider">
                {plan.price}
              </span>
              <span className="text-sm text-white/40 font-poppins mb-2 ml-1">
                {plan.period}
              </span>
            </div>
            
            <div className="h-px bg-white/10 my-6" />
            
            <ul className="space-y-4 flex-grow">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Check className="text-[#b58709] shrink-0 size-5 mt-0.5" />
                  <span className="text-sm text-white/70 font-poppins leading-relaxed">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
            
            <Button
              className={`mt-8 w-full h-auto py-3 text-sm font-semibold tracking-wide rounded-full transition-all duration-300 hover:scale-105 cursor-pointer ${
                plan.popular
                  ? 'bg-[#b58709] hover:bg-[#b58709]/90 text-black shadow-lg shadow-[#b58709]/20'
                  : 'text-white border border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur-sm'
              }`}
              variant={plan.popular ? "solid" : "outline"}
            >
              {plan.cta}
            </Button>
          </GlassCard>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default PricingSection;

