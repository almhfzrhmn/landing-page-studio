const SectionHeading = ({ label, title, subtitle, align = 'center' }) => {
  const alignClass = align === 'center' ? 'text-center' : 'text-left';

  return (
    <div className={`mb-16 ${alignClass}`}>
      {label && (
        <p className="mb-3 font-poppins text-xs font-semibold tracking-widest uppercase text-[#b58709]">
          {label}
        </p>
      )}
      <h2 className="font-unifraktur-cook text-3xl md:text-4xl lg:text-5xl text-white">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 max-w-2xl font-poppins text-base text-white/60 leading-relaxed ${
            align === 'center' ? 'mx-auto' : ''
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
