const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden scroll-mt-20"
    >
      {/* Gradient Background */}
      <div className="
        absolute inset-0
        bg-gradient-to-br
        from-[#7c3aed]
        via-[#6366f1]
        to-[#22d3ee]
      " />

      {/* Curve White Bottom */}
      <div className="
        absolute bottom-0 left-0 right-0
        h-40 bg-[#F8F8F9]
        rounded-t-[100px]
      " />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 pt-40 pb-56">
        <h1 className="text-5xl md:text-6xl font-bold text-white max-w-3xl leading-tight">
          Designing smart <br />
          system with data and <span className="text-blue-200">connected devices</span>
        </h1>

        <p className="mt-6 text-white/80 max-w-xl">
          Build scalable, secure, and modern technology solutions
          with professional engineering and innovation mindset.
        </p>

        <div className="mt-10 flex gap-4">
          {/* Download CV */}
          <a
            href="https://drive.google.com/file/d/1ulyG-vX8mGfAt61JwukGveJJFpEDBZRr/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="
              px-6 py-3 rounded-full
              bg-[#111439] text-white
              font-medium
              hover:bg-[#0c0f2e] transition
            ">
              Download CV
            </button>
          </a>

          {/* Contact */}
          <a href="#contact">
            <button className="
              px-6 py-3 rounded-full
              bg-white/90 text-[#111439]
              font-medium
              hover:bg-white transition
            ">
              Contact Me
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;