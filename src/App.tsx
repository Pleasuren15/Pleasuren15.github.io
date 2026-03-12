import { useEffect, useRef, useState } from 'react'
import './App.css'
import LandingPage from './components/LandingPage'
import Navbar from './components/Navbar'
import Silk from './components/Silk'
import Footer from './components/Footer'
import AboutMe from './components/AboutMe'
import Experience from './components/Experience'
import Skills from './components/Skills'

const NAVBAR_HEIGHT = "4rem";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-11 h-11 rounded-full bg-red-500 text-white shadow-lg shadow-red-500/30 transition-all duration-300 hover:bg-red-400 hover:scale-110 hover:shadow-red-400/50"
      style={{
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transition: "opacity 0.3s ease, transform 0.3s ease",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </button>
  );
}

function Section({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="flex items-center justify-center w-full sm:px-8 lg:px-30"
      style={{
        paddingTop: "5rem",
        paddingBottom: "5rem",
        scrollMarginTop: NAVBAR_HEIGHT,
      }}
    >
      <div
        className="w-full transition-all duration-700 ease-out"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(48px)",
        }}
      >
        {children}
      </div>
    </div>
  );
}

function App() {
  return (
    <div
      className="app-root"
      style={{ "--navbar-height": NAVBAR_HEIGHT } as React.CSSProperties}
    >
      <div className="silk-bg">
        <Silk speed={4} scale={1} color="#011598ff" noiseIntensity={5} rotation={0} />
      </div>

      <div className="app-content">
        {/* Navbar + Landing */}
        <div
          style={{ height: "100vh" }}
          className="sm:px-8 lg:px-30"
        >
          <Navbar />
          <LandingPage />
        </div>

        <Section>
          <AboutMe />
        </Section>

        <Section>
          <Experience />
        </Section>

        <Section>
          <Skills />
        </Section>

        <Footer />
      </div>

      <ScrollToTop />
    </div>
  );
}

export default App
