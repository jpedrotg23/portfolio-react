import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Process from "./components/Process";

function App() {
  return (
    <>
      <Navbar />

      <Hero />

      <main>
        <About />
        <Technologies />
        <Services />
        <Projects />
        <Process />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;