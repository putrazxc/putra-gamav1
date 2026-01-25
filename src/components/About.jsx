const About = () => {
  return (
    <section
      id="about"
      className="bg-[#F8F8F9] py-32 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        
        {/* Text */}
        <div>
          <h2 className="text-4xl font-bold text-[#111439]">
            About Me
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed">
            I am an Electrical Engineering graduate with a strong focus on
            embedded systems, IoT, and AI-powered applications. My work
            combines computer vision, machine learning, and real-time systems
            to solve real-world engineering problems.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            I have hands-on experience developing intelligent monitoring
            systems using YOLO-based computer vision for vehicle detection,
            speed estimation, and traffic analysis, integrated with web
            dashboards, databases, and physical display devices. I also have
            practical exposure to industrial electrical and instrumentation
            systems, including maintenance, sensor calibration, and system
            monitoring.
          </p>

          <ul className="mt-8 space-y-3 text-gray-700">
            <li>⚙️ Embedded Systems & Firmware Development</li>
            <li>🧠 Computer Vision, Machine Learning & Edge AI</li>
            <li>📡 IoT Systems, Sensors & Microcontrollers</li>
            <li>📊 Real-time Monitoring, Data Logging & Dashboards</li>
          </ul>
        </div>

        {/* Card */}
        <div className="
          bg-white
          rounded-3xl
          p-8
          border border-gray-200
          shadow-lg
        ">
          <h3 className="font-semibold text-[#111439]">
            Core Expertise
          </h3>

          <p className="mt-4 text-sm text-gray-500 leading-relaxed">
            Python · C/C++ · Computer Vision (YOLO) · Embedded Linux · ESP32 ·
            Industrial Instrumentation · REST API · WebSocket ·
            Real-time Web Dashboard
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
