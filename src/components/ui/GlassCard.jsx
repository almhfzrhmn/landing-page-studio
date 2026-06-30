import { cn } from '@/lib/utils';

const GlassCard = ({ className = '', children, hover = true, ...props }) => {
  return (
    <div
      className={cn(
        'rounded-2xl border border-white/10 bg-white/5 backdrop-blur-2xl p-6',
        hover && 'transition-all duration-300 hover:bg-white/10 hover:border-white/20',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default GlassCard;