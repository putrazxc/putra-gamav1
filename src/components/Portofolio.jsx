const portfolioItems = [
  {
    title: "Smart Traffic Monitoring",
    desc: "Embedded AI system for vehicle detection, speed estimation, and traffic analysis.",
  },
  {
    title: "Industrial IoT Dashboard",
    desc: "Real-time monitoring dashboard with sensor integration and data visualization.",
  },
  {
    title: "Computer Vision System",
    desc: "YOLO-based computer vision for object detection and intelligent monitoring.",
  },
  {
    title: "Android App Based on UMKM Business",
    desc: "Flutter-based Android application designed to support UMKM business operations.",
    video: "/assets/proyek/UMKM.mp4",
    type: "mobile",
  },
];

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

        <div className="mt-16 grid md:grid-cols-4 gap-10">
          {portfolioItems.map((item, i) => (
            <div
              key={i}
              className="
                bg-[#F8F8F9]
                rounded-3xl
                p-6
                border border-gray-200
                hover:shadow-xl
                transition
                flex flex-col
              "
            >
              {/* ANDROID FULL FRAME */}
              {item.video && (
                <div className="mb-6 flex justify-center">
                  <div
                    className="
                      w-[220px]
                      h-[460px]
                      rounded-[32px]
                      border-4 border-gray-900
                      bg-black
                      overflow-hidden
                      shadow-2xl
                    "
                  >
                    <video
                      src={item.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              )}

              <h3 className="font-semibold text-[#111439] text-lg">
                {item.title}
              </h3>

              <p className="text-sm text-gray-500 mt-2">
                {item.desc}
              </p>

              {/* BADGE */}
              {item.type === "mobile" && (
                <span
                  className="
                    mt-4
                    inline-block
                    w-fit
                    text-xs
                    font-medium
                    px-3
                    py-1
                    rounded-full
                    bg-[#111439]
                    text-white
                  "
                >
                  Flutter • Android App
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portofolio;