import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { Contact } from "@/sections/Contact";
import { Footer } from "./layout/Footer";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-10 overflow-hidden"
      >
        {Array.from({ length: 30 }, (_, i) => (
          <span
            key={i}
            className="page-bubble absolute rounded-full bg-primary"
            style={{
              left: `${(i * 37) % 100}%`,
              width: `${3 + (i % 3)}px`,
              height: `${3 + (i % 3)}px`,
              animationDuration: `${14 + ((i * 7) % 15)}s`,
              animationDelay: `-${(i * 3) % 20}s`,
            }}
          />
        ))}
      </div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
