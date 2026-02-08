export default function BrandsGrid() {
  const brands = [
    { name: "XCMG", logo: "/images/logo-xcmg.png" },
    { name: "Weichai", logo: "/images/logo-weichai.png" },
    { name: "Toshiba", logo: "/images/logo-toshiba.png" },
    { name: "Senninger", logo: "/images/logo-senninger.png" },
    { name: "T-L Irrigation", logo: "/images/logo-tl.png" },
    { name: "Nelson", logo: "/images/logo-nelson-new.png" },
    { name: "Komet", logo: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663043532643/WXkaChnoEKaLRgRC.jpg" },
    { name: "Cornell", logo: "/images/logo-cornell.png" },
    { name: "R&M", logo: "/images/logo-rm.png" },
  ];

  return (
    <section className="py-16 md:py-20 bg-zinc-50 border-y border-zinc-200">
      <div className="container">
        <p className="text-center text-zinc-500 font-bold uppercase tracking-widest text-xs mb-12">
          Marcas reconocidas a nivel mundial
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12 items-center">
          {brands.map((brand, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center h-24 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="max-w-full max-h-full object-contain px-4"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
