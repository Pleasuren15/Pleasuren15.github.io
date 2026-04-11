import { useEffect, useRef, useState } from 'react'
import './App.css'
import LandingPage from './components/LandingPage'
import Navbar from './components/Navbar'
import Silk from './components/Silk'
import Footer from './components/Footer'
import AboutMe from './components/AboutMe'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Skills from './components/Skills'

const NAVBAR_HEIGHT = "4rem";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    setScrolling(true);
    const start = window.scrollY;
    const duration = Math.min(800, start * 0.4);
    const startTime = performance.now();

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 4);
      window.scrollTo(0, start * (1 - ease));
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setScrolling(false);
      }
    };

    requestAnimationFrame(step);
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Back to top"
      style={{
        position: "fixed",
        bottom: "2rem",
        right: "2rem",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "2.75rem",
        height: "2.75rem",
        borderRadius: "50%",
        background: scrolling ? "#ef4444cc" : "#ef4444",
        color: "white",
        border: "none",
        cursor: "pointer",
        boxShadow: "0 4px 16px rgba(239,68,68,0.35)",
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transform: visible ? "translateY(0) scale(1)" : "translateY(16px) scale(0.95)",
        transition: "opacity 0.3s ease, transform 0.3s ease, background 0.2s ease, box-shadow 0.2s ease",
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0) scale(1.1)";
        (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 6px 24px rgba(239,68,68,0.55)";
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0) scale(1)";
        (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 4px 16px rgba(239,68,68,0.35)";
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
        style={{
          transform: scrolling ? "translateY(-2px)" : "translateY(0)",
          transition: "transform 0.15s ease",
        }}
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
        paddingTop: "2.5rem",
        paddingBottom: "2.5rem",
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

        <div id="about">
          <Section>
            <AboutMe />
          </Section>
        </div>

        <div id="experience">
          <Section>
            <Experience />
          </Section>
        </div>

        <div id="education">
          <Section>
            <Education />
          </Section>
        </div>

        <div id="projects">
          <Section>
            <Projects />
          </Section>
        </div>

        <div id="skills">
          <Section>
            <Skills />
          </Section>
        </div>

        <Footer />
      </div>

      <ScrollToTop />
    </div>
  );
}

export default App
