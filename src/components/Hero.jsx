import { motion, animate, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";

/* ─── Hook: nilai berubah random tiap interval ─── */
const useRandomValue = (min, max, interval, decimals = 0) => {
  const [value, setValue] = useState(() =>
    parseFloat((Math.random() * (max - min) + min).toFixed(decimals))
  );
  const [prev, setPrev] = useState(null);

  useEffect(() => {
    const tick = () => {
      setValue((old) => {
        setPrev(old);
        // perubahan halus: ±15% dari range
        const delta = (Math.random() - 0.5) * (max - min) * 0.3;
        const next = Math.min(max, Math.max(min, old + delta));
        return parseFloat(next.toFixed(decimals));
      });
    };
    // Jitter antar update agar tidak sinkron
    const jitter = interval + Math.random() * (interval * 0.4);
    const id = setInterval(tick, jitter);
    return () => clearInterval(id);
  }, [min, max, interval, decimals]);

  return { value, prev };
};

/* ─── Hook: bar chart array bergerak ─── */
const useRandomBars = (count, interval) => {
  const [bars, setBars] = useState(() =>
    Array.from({ length: count }, () => Math.floor(Math.random() * 60 + 25))
  );
  useEffect(() => {
    const id = setInterval(() => {
      setBars((old) =>
        old.map((v) => {
          const delta = (Math.random() - 0.5) * 25;
          return Math.min(95, Math.max(15, Math.round(v + delta)));
        })
      );
    }, interval);
    return () => clearInterval(id);
  }, [count, interval]);
  return bars;
};

/* ─── Animated counter number ─── */
const AnimatedNumber = ({ value, decimals = 0, className = "" }) => {
  const [display, setDisplay] = useState(value);
  const rafRef = useRef(null);

  useEffect(() => {
    const start = display;
    const end = value;
    const duration = 800;
    const startTime = performance.now();

    const step = (now) => {
      const t = Math.min((now - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - t, 3); // easeOutCubic
      const current = start + (end - start) * ease;
      setDisplay(parseFloat(current.toFixed(decimals)));
      if (t < 1) rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [value]);

  return <span className={className}>{display}</span>;
};

/* ─── Radar Pulse ─── */
const RadarPulse = () => (
  <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full opacity-30">
    {[35, 65, 95].map((r, i) => (
      <motion.circle
        key={r}
        cx="100" cy="100" r={r}
        fill="none" stroke="#6366f1" strokeWidth="0.8"
        animate={{ opacity: [0.8, 0, 0.8], scale: [1, 1.12, 1] }}
        transition={{ duration: 3, repeat: Infinity, delay: i * 0.8 }}
        style={{ transformOrigin: "100px 100px" }}
      />
    ))}
    <motion.line
      x1="100" y1="100" x2="100" y2="5"
      stroke="#6366f1" strokeWidth="1.2"
      animate={{ rotate: 360 }}
      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      style={{ transformOrigin: "100px 100px" }}
    />
    <motion.path
      d="M100 100 L100 5 A95 95 0 0 1 160 160 Z"
      fill="url(#sweep)" opacity={0.12}
      animate={{ rotate: 360 }}
      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      style={{ transformOrigin: "100px 100px" }}
    />
    <defs>
      <radialGradient id="sweep" cx="50%" cy="50%">
        <stop offset="0%" stopColor="#6366f1" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
      </radialGradient>
    </defs>
  </svg>
);

/* ─── Live Sine Wave (bergerak terus) ─── */
const LiveWave = ({ speed }) => {
  const [phase, setPhase] = useState(0);
  useEffect(() => {
    let frame;
    const tick = () => {
      setPhase((p) => p + 0.06);
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  const amplitude = 6 + ((speed - 30) / 20) * 6; // amplitude naik saat speed tinggi
  const points = Array.from({ length: 13 }, (_, i) => {
    const x = (i / 12) * 120;
    const y = 15 + Math.sin(i * 0.9 + phase) * amplitude;
    return `${x},${y}`;
  }).join(" ");

  return (
    <svg viewBox="0 0 120 30" className="w-full h-7">
      <polyline
        points={points}
        fill="none"
        stroke="#6366f1"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

/* ─── Bar Chart (live) ─── */
const LiveBarChart = ({ bars }) => {
  const colors = ["#6366f1","#818cf8","#6366f1","#4f46e5","#818cf8","#4338ca","#6366f1"];
  return (
    <div className="flex items-end gap-1 h-10">
      {bars.map((h, i) => (
        <motion.div
          key={i}
          className="flex-1 rounded-sm"
          style={{ backgroundColor: colors[i] }}
          animate={{ height: `${h}%` }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
};

const Hero = () => {
  // Live data hooks
  const speed = useRandomValue(30, 50, 2200, 1);
  const prevSpeed = speed.prev;
  const isSpeedUp = speed.value >= (speed.prev ?? speed.value);

  const bars = useRandomBars(7, 2800);

  const cpu  = useRandomValue(30, 88, 2500);
  const ram  = useRandomValue(30, 75, 3100);
  const net  = useRandomValue(45, 95, 1900);

  const systemStats = [
    { label: "CPU", data: cpu,  color: "from-indigo-400 to-blue-400" },
    { label: "RAM", data: ram,  color: "from-purple-400 to-indigo-400" },
    { label: "NET", data: net,  color: "from-sky-400 to-cyan-400" },
  ];

  return (
    <section id="home" className="relative overflow-hidden scroll-mt-20">

      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#7c3aed] via-[#6366f1] to-[#22d3ee]" />

      {/* Noise grain */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "150px",
        }}
      />

      {/* Curve White Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-[#F8F8F9] rounded-t-[100px]" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-56 flex flex-col lg:flex-row items-center justify-between gap-16">

        {/* LEFT TEXT */}
        <motion.div
          className="max-w-2xl text-center lg:text-left"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Designing smart <br />
            system with data and{" "}
            <span className="text-blue-200">connected devices</span>
          </h1>
          <p className="mt-6 text-white/80">
            Build scalable, secure, and modern technology solutions
            with professional engineering and innovation mindset.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="https://drive.google.com/file/d/1ulyG-vX8mGfAt61JwukGveJJFpEDBZRr/view?usp=sharing"
              target="_blank" rel="noopener noreferrer"
            >
              <button className="px-6 py-3 rounded-full bg-[#111439] text-white font-medium hover:bg-[#0c0f2e] transition">
                Download CV
              </button>
            </a>
            <a href="#contact">
              <button className="px-6 py-3 rounded-full bg-white/90 text-[#111439] font-medium hover:bg-white transition">
                Contact Me
              </button>
            </a>
          </div>
        </motion.div>

        {/* ══ RIGHT VISUAL ══ */}
        <motion.div
          className="relative w-[320px] sm:w-[460px] lg:w-[520px] h-[380px] sm:h-[460px] mt-10"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          {/* Ambient glow */}
          <motion.div
            animate={{ scale: [1, 1.08, 1], opacity: [0.2, 0.35, 0.2] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute inset-0 rounded-full bg-white/30 blur-3xl"
          />

          {/* ══ MAIN PANEL ══ */}
          <div
            className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl"
            style={{
              background: "rgba(255,255,255,0.82)",
              backdropFilter: "blur(24px) saturate(180%)",
              WebkitBackdropFilter: "blur(24px) saturate(180%)",
              border: "1px solid rgba(255,255,255,0.9)",
              boxShadow: "0 8px 48px rgba(99,102,241,0.18), 0 1px 0 rgba(255,255,255,0.8) inset",
            }}
          >
            {/* macOS top bar */}
            <div
              className="flex items-center gap-2 px-5 py-3"
              style={{ borderBottom: "1px solid rgba(0,0,0,0.06)", background: "rgba(255,255,255,0.6)" }}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-red-400 shadow-sm" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 shadow-sm" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-400 shadow-sm" />
              <span className="ml-3 text-[10px] text-gray-400 font-medium tracking-widest uppercase">
                IoT Command Center
              </span>
              <div className="ml-auto flex items-center gap-1.5">
                <motion.span
                  className="w-1.5 h-1.5 rounded-full bg-green-500"
                  animate={{ opacity: [1, 0.2, 1] }}
                  transition={{ duration: 1.2, repeat: Infinity }}
                />
                <span className="text-[9px] text-green-600 font-semibold">LIVE</span>
              </div>
            </div>

            {/* Body grid */}
            <div className="p-4 grid grid-cols-2 gap-3 h-[calc(100%-44px)]">

              {/* Cell 1: Radar (static sensor count) */}
              <div
                className="relative rounded-2xl overflow-hidden flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #f5f3ff, #ede9fe)", border: "1px solid rgba(99,102,241,0.15)" }}
              >
                <RadarPulse />
                <div className="relative z-10 text-center">
                  <p className="text-[9px] font-semibold text-indigo-400 uppercase tracking-widest mb-1">Sensor Grid</p>
                  <p className="text-xl font-bold text-indigo-600">
                    24<span className="text-xs text-indigo-300">/24</span>
                  </p>
                  <p className="text-[9px] text-gray-400 mt-0.5">nodes online</p>
                </div>
              </div>

              {/* Cell 2: Vehicle Speed — LIVE */}
              <div
                className="rounded-2xl flex flex-col justify-between p-3"
                style={{ background: "linear-gradient(135deg, #f0f9ff, #e0f2fe)", border: "1px solid rgba(14,165,233,0.15)" }}
              >
                <p className="text-[9px] font-semibold text-sky-500 uppercase tracking-widest">Vehicle Speed</p>
                <div>
                  <p className="text-2xl font-bold text-gray-800 tabular-nums">
                    <AnimatedNumber value={speed.value} decimals={1} />
                    <span className="text-sm font-normal text-gray-400"> km/h</span>
                  </p>
                  <LiveWave speed={speed.value} />
                </div>
                <motion.p
                  key={isSpeedUp ? "up" : "down"}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`text-[9px] font-semibold ${isSpeedUp ? "text-green-500" : "text-red-400"}`}
                >
                  {isSpeedUp ? "↑" : "↓"} {Math.abs(speed.value - (speed.prev ?? speed.value)).toFixed(1)} km/h
                </motion.p>
              </div>

              {/* Cell 3: Traffic Flow — LIVE bars */}
              <div
                className="rounded-2xl flex flex-col justify-between p-3"
                style={{ background: "linear-gradient(135deg, #faf5ff, #f3e8ff)", border: "1px solid rgba(168,85,247,0.15)" }}
              >
                <div className="flex justify-between items-start">
                  <p className="text-[9px] font-semibold text-purple-500 uppercase tracking-widest">Traffic Flow</p>
                  <motion.span
                    key={bars[3]}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-[9px] text-purple-400 font-mono font-semibold"
                  >
                    {bars[3]} v/h
                  </motion.span>
                </div>
                <LiveBarChart bars={bars} />
                <p className="text-[9px] text-gray-400">vehicles / hour</p>
              </div>

              {/* Cell 4: System — LIVE */}
              <div
                className="rounded-2xl flex flex-col gap-2 p-3"
                style={{ background: "linear-gradient(135deg, #f0fdf4, #dcfce7)", border: "1px solid rgba(34,197,94,0.15)" }}
              >
                <p className="text-[9px] font-semibold text-green-600 uppercase tracking-widest">System</p>
                {systemStats.map(({ label, data, color }) => (
                  <div key={label}>
                    <div className="flex justify-between mb-0.5">
                      <span className="text-[9px] text-gray-500 font-medium">{label}</span>
                      <motion.span
                        key={data.value}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-[9px] text-gray-700 font-semibold tabular-nums"
                      >
                        <AnimatedNumber value={data.value} />%
                      </motion.span>
                    </div>
                    <div className="h-1.5 rounded-full bg-gray-100">
                      <motion.div
                        className={`h-1.5 rounded-full bg-gradient-to-r ${color}`}
                        animate={{ width: `${data.value}%` }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* ══ FLOATING CARDS ══ */}

          {/* AI Computer Vision — atas panel */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-12 right-6 flex items-center gap-2 px-4 py-2.5 rounded-2xl shadow-xl"
            style={{
              background: "linear-gradient(135deg, rgba(99,102,241,0.95), rgba(124,58,237,0.95))",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.3)",
              zIndex: 10,
            }}
          >
            <span className="text-lg">🤖</span>
            <div>
              <p className="text-[11px] font-bold text-white leading-none">AI Computer Vision</p>
              <p className="text-[9px] text-white/70 mt-0.5">YOLO v26 active</p>
            </div>
          </motion.div>

          {/* IoT Device — kanan tengah */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute -right-10 top-1/3 flex items-center gap-2 px-4 py-2.5 rounded-2xl shadow-xl"
            style={{
              background: "linear-gradient(135deg, rgba(6,182,212,0.95), rgba(14,116,144,0.95))",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.3)",
              zIndex: 10,
            }}
          >
            <span className="text-lg">📡</span>
            <div>
              <p className="text-[11px] font-bold text-white leading-none">IoT Device</p>
              <p className="text-[9px] text-white/70 mt-0.5">24 connected</p>
            </div>
          </motion.div>

          {/* Real-Time Data — bawah panel */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-10 left-8 flex items-center gap-2 px-4 py-2.5 rounded-2xl shadow-xl"
            style={{
              background: "linear-gradient(135deg, rgba(16,185,129,0.95), rgba(5,150,105,0.95))",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.3)",
              zIndex: 10,
            }}
          >
            <span className="text-lg">⚡</span>
            <div>
              <p className="text-[11px] font-bold text-white leading-none">Real-Time Data</p>
              <motion.p
                key={Math.round(net.value)}
                initial={{ opacity: 0, y: 3 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[9px] text-white/70 mt-0.5"
              >
                {Math.round(8 + (net.value / 95) * 20)}ms latency
              </motion.p>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;