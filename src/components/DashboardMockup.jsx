const DashboardMockup = () => {
  return (
    <section className="bg-[#F8F8F9] py-32">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        
        {/* Left Text */}
        <div>
          <h2 className="text-4xl font-bold text-[#111439]">
            Embedded AI & Smart Systems
          </h2>

          <p className="mt-6 text-gray-600">
            Designing intelligent embedded systems, computer vision pipelines,
            and real-time monitoring dashboards for industrial and smart-city
            applications.
          </p>

          <ul className="mt-8 space-y-4 text-gray-700">
            <li>⚡ YOLOv26-based real-time detection</li>
            <li>📡 Jetson Nano & ESP32 / IoT integration</li>
            <li>📊 Live dashboard & analytics</li>
            <li>🧠 Edge AI optimization</li>
          </ul>
        </div>

        {/* Right Mockup */}
        <div className="relative">
          
          {/* Card */}
          <div className="
            bg-white rounded-3xl shadow-xl p-6
            border border-gray-200
          ">
            <h3 className="font-semibold text-[#111439]">
              Vehicle Speed Monitoring Traffic System
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              Real-time analytics Traffic Vehicle
            </p>

            {/* Image from public/assets */}
            <div className="mt-6 overflow-hidden rounded-xl bg-gray-100">
              <img 
                src="/assets/traffic-monitoring.png" 
                alt="Traffic Monitoring"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Stats */}
            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-lg font-bold text-[#111439]">25 km/h</p>
                <p className="text-xs text-gray-500">Avg Speed</p>
              </div>
              <div>
                <p className="text-lg font-bold text-[#111439]">130</p>
                <p className="text-xs text-gray-500">Vehicles</p>
              </div>
              <div>
                <p className="text-lg font-bold text-[#111439]">98%</p>
                <p className="text-xs text-gray-500">Accuracy</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default DashboardMockup
