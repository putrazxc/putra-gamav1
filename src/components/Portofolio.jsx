const Portofolio = () => {
  return (
    <section
      id="portofolio"
      className="bg-white py-32 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-[#111439]">
          Selected Portofolio
        </h2>

        <p className="mt-4 text-gray-600 max-w-2xl">
          A collection of embedded systems, AI-driven applications,
          and real-time monitoring solutions.
        </p>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {[
            "Smart Traffic Monitoring",
            "Industrial IoT Dashboard",
            "Computer Vision System"
          ].map((title, i) => (
            <div
              key={i}
              className="
                bg-[#F8F8F9]
                rounded-3xl
                p-6
                border border-gray-200
                hover:shadow-xl
                transition
              "
            >
              <h3 className="font-semibold text-[#111439]">
                {title}
              </h3>
              <p className="text-sm text-gray-500 mt-2">
                Embedded AI, real-time analytics, and system integration.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portofolio
