import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Progress 0→1 mulai dari scroll 20px, selesai di 120px
  const progress = Math.min(Math.max((scrollY - 20) / 100, 0), 1);
  const isScrolled = scrollY > 20;

  const bgOpacity   = (progress * 0.45).toFixed(3);   // max 45% — tetap terlihat konten di bawah
  const blurAmount  = Math.round(progress * 16);       // 0 → 16px blur
  const borderOpacity = (progress * 0.12).toFixed(3);
  const shadowOpacity = (progress * 0.18).toFixed(3);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backdropFilter: isScrolled ? `blur(${blurAmount}px) saturate(160%)` : "none",
        WebkitBackdropFilter: isScrolled ? `blur(${blurAmount}px) saturate(160%)` : "none",
        background: isScrolled
          ? `linear-gradient(135deg, rgba(17,20,57,${bgOpacity}) 0%, rgba(30,60,120,${bgOpacity}) 100%)`
          : "transparent",
        borderBottom: `1px solid rgba(255,255,255,${borderOpacity})`,
        boxShadow: isScrolled ? `0 4px 32px rgba(0,0,0,${shadowOpacity})` : "none",
        transition: "box-shadow 0.4s ease, border-color 0.4s ease",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <a href="#home" className="flex-shrink-0">
            <h1
              className="text-xl font-semibold text-white"
              style={{ textShadow: "0 1px 6px rgba(0,0,0,0.5)" }}
            >
              Putra<span className="text-blue-300"> Gama</span>
              <span className="text-white ml-2">Supriyadi</span>
            </h1>
          </a>

          {/* Menu Desktop */}
          <div className="hidden md:flex space-x-8">
            {["Home", "Portofolio", "Project", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="
                  text-white font-medium
                  hover:text-blue-200
                  transition-colors duration-200
                  relative
                  after:content-['']
                  after:absolute
                  after:-bottom-1
                  after:left-0
                  after:h-[2px]
                  after:w-0
                  after:bg-blue-300
                  hover:after:w-full
                  after:transition-all after:duration-300
                "
                style={{ textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}
              >
                {item}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <a href="#contact">
              <button
                className="px-5 py-2 rounded-full font-semibold text-sm hover:scale-105"
                style={{
                  background: `rgba(255,255,255,${0.85 + progress * 0.15})`,
                  color: "#111439",
                  boxShadow: `0 2px 16px rgba(0,0,0,${0.1 + progress * 0.15})`,
                  transition: "background 0.3s ease, box-shadow 0.3s ease, transform 0.2s ease",
                }}
              >
                Contact Me
              </button>
            </a>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;