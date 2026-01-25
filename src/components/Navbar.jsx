import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        ${
          scrolled
            ? "bg-gray-900/90 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <a href="#home" className="flex-shrink-0">
            <h1 className="text-xl font-semibold text-white">
              Putra<span className="text-blue-300">Gama</span>
              <span className="text-white ml-2">Supriyadi</span>
            </h1>
          </a>

          {/* Menu Desktop */}
          <div className="hidden md:flex space-x-8">
            {["Home","Portofolio","Project","About","Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="
                  text-white/80
                  hover:text-white
                  transition
                  relative
                  after:content-['']
                  after:absolute
                  after:-bottom-1
                  after:left-0
                  after:h-[2px]
                  after:w-0
                  after:bg-white
                  hover:after:w-full
                  after:transition-all
                "
              >
                {item}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <a href="#contact">
              <button
                className="
                  px-4 py-2 rounded-full
                  bg-white/90 text-[#111439]
                  font-medium
                  hover:bg-white
                  transition
                "
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
