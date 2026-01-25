import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import DashboardMockup from "./components/DashboardMockup"
import Portofolio from "./components/Portofolio"
import About from "./components/About"
import Contact from "./components/Contact"

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <DashboardMockup />
        <Portofolio />
        <About />
        <Contact />
      </main>
    </>
  )
}

export default App
