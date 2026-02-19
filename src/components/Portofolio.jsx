const portfolioItems = [
  {
    title: "Smart Traffic Monitoring",
    desc: "Embedded AI system for vehicle detection, speed estimation, and traffic analysis.",
  },
  {
    title: "Industrial IoT Dashboard",
    desc: "Real-time monitoring dashboard with sensor integration and data visualization.",
    image: "/assets/monitoring.png",
    type: "dashboard",
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

              {/* DASHBOARD BROWSER MOCKUP */}
              {item.type === "dashboard" && item.image && (
                <div className="mb-6">
                  {/* Browser chrome bar */}
                  <div className="rounded-t-xl bg-gray-200 border border-gray-300 border-b-0 px-3 py-2 flex items-center gap-2">
                    {/* Traffic lights */}
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400 inline-block" />
                    {/* Fake URL bar */}
                    <div className="ml-2 flex-1 bg-white rounded-md px-3 py-0.5 text-[10px] text-gray-400 border border-gray-300 truncate">
                      pltu-monitor.local/dashboard
                    </div>
                  </div>
                  {/* Screenshot */}
                  <div className="rounded-b-xl overflow-hidden border border-gray-300 border-t-0 shadow-lg">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full object-cover object-top"
                      style={{ maxHeight: "200px" }}
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

              {/* BADGE - mobile */}
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

              {/* BADGE - dashboard */}
              {item.type === "dashboard" && (
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
                  HTML • CSS • JavaScript
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