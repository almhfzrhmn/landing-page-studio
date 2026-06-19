const SectionWrapper = ({ id, className = '', children, showDivider = true }) => {
  return (
    <section id={id} className={`relative w-full bg-black py-24 md:py-32 ${className}`}>
      <div className="mx-auto max-w-7xl px-5 md:px-6">
        {children}
      </div>
      {showDivider && (
        <div className="mx-auto max-w-7xl px-5 md:px-6 mt-24 md:mt-32">
          <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>
      )}
    </section>
  );
};

export default SectionWrapper;
