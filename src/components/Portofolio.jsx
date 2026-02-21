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
  // Pisahkan dashboard dari item lainnya
  const dashboardItem = portfolioItems.find((item) => item.type === "dashboard");
  const otherItems = portfolioItems.filter((item) => item.type !== "dashboard");

  const renderCard = (item, i, fullWidth = false) => (
    <div
      key={i}
      className={`
        bg-[#F8F8F9]
        rounded-3xl
        p-6
        border border-gray-200
        hover:shadow-xl
        transition
        flex
        ${fullWidth && item.type === "dashboard" ? "flex-row gap-10 items-start" : "flex-col"}
      `}
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
        <div className={`${fullWidth ? "flex-1 min-w-0" : "mb-6"}`}>
          {/* Browser chrome bar */}
          <div className="rounded-t-xl bg-gray-200 border border-gray-300 border-b-0 px-3 py-2 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-400 inline-block" />
            <div className="ml-2 flex-1 bg-white rounded-md px-3 py-0.5 text-[10px] text-gray-400 border border-gray-300 truncate">
              pltu-monitor.local/dashboard
            </div>
          </div>
          {/* Screenshot */}
          <div className={`rounded-b-xl overflow-hidden border border-gray-300 border-t-0 shadow-lg`}>
            <img
              src={item.image}
              alt={item.title}
              className="w-full object-cover object-top"
              style={{ maxHeight: fullWidth ? "340px" : "200px" }}
            />
          </div>
        </div>
      )}

      {/* TEXT CONTENT */}
      <div className={`${fullWidth && item.type === "dashboard" ? "w-72 flex-shrink-0 flex flex-col justify-center" : ""}`}>
        <h3 className={`font-semibold text-[#111439] ${fullWidth ? "text-2xl" : "text-lg"}`}>
          {item.title}
        </h3>

        <p className={`text-gray-500 mt-2 ${fullWidth ? "text-base" : "text-sm"}`}>
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
    </div>
  );

  return (
    <section id="portofolio" className="bg-white py-32 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-[#111439]">Selected Portofolio</h2>

        <p className="mt-4 text-gray-600 max-w-2xl">
          A collection of embedded systems, AI-driven applications, and real-time monitoring
          solutions.
        </p>

        <div className="mt-16 flex flex-col gap-10">
          {/* Dashboard card — full width, horizontal layout */}
          {dashboardItem && renderCard(dashboardItem, "dashboard", true)}

          {/* Other cards — grid 3 kolom */}
          <div className="grid md:grid-cols-3 gap-10">
            {otherItems.map((item, i) => renderCard(item, i, false))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portofolio;